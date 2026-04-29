function hamdastCommunication(obj) {
  var appKey = obj.app_key;
  var event = obj.event;
  var data = obj.data;
  var promise = obj.promise || false;

  var message = {
    hamdast: {
      app_key: appKey,
      host: window.location.origin,
      event: event,
      data: data,
    },
  };

  if (promise) {
    return hamdastPostMessagePromise(message);
  }
  window.parent.postMessage(message, "*");
}

var hamdastAutoResizeIntervalId = null;
var hamdastAutoResizeObserver = null;
var HAMDAST_SESSION_TOKEN_RESPONSE_EVENT = "HAMDAST_SDK_SESSION_TOKEN_RESPONSE";

function hamdastSendHeight() {
  try {
    var height =
      (document.documentElement && document.documentElement.scrollHeight) ||
      (document.body && document.body.scrollHeight) ||
      window.innerHeight;

    hamdastCommunication({
      app_key: window.hamdast && window.hamdast.app_key,
      event: "HAMDAST_FRAME_RESIZE",
      data: {
        height: height,
      },
    });
  } catch (e) {}
}

function hamdastStartAutoResize(options) {
  options = options || {};
  var interval = typeof options.interval === "number" ? options.interval : 300;

  hamdastStopAutoResize();

  if (typeof window !== "undefined" && window.ResizeObserver) {
    hamdastAutoResizeObserver = new ResizeObserver(function () {
      hamdastSendHeight();
    });
    hamdastAutoResizeObserver.observe(
      document.documentElement || document.body,
    );
  } else {
    hamdastAutoResizeIntervalId = window.setInterval(function () {
      hamdastSendHeight();
    }, interval);
  }

  window.addEventListener("load", hamdastSendHeight);
  window.addEventListener("resize", hamdastSendHeight);
  window.addEventListener("orientationchange", hamdastSendHeight);
}

function hamdastStopAutoResize() {
  if (hamdastAutoResizeIntervalId) {
    window.clearInterval(hamdastAutoResizeIntervalId);
    hamdastAutoResizeIntervalId = null;
  }
  if (hamdastAutoResizeObserver) {
    try {
      hamdastAutoResizeObserver.disconnect();
    } catch (e) {}
    hamdastAutoResizeObserver = null;
  }
  window.removeEventListener("load", hamdastSendHeight);
  window.removeEventListener("resize", hamdastSendHeight);
  window.removeEventListener("orientationchange", hamdastSendHeight);
}

function hamdastPostMessagePromise(message) {
  var hash_id = Date.now();

  window.parent.postMessage(
    {
      hamdast: {
        app_key: message.hamdast.app_key,
        host: message.hamdast.host,
        event: message.hamdast.event,
        data: message.hamdast.data,
        hash_id: hash_id,
      },
    },
    "*",
  );

  return new Promise(function (resolve, reject) {
    window.addEventListener("message", function (e) {
      if (e.data && e.data.hamdast && e.data.hamdast.hash_id === hash_id) {
        resolve(e.data.hamdast.data);
      }
    });
    setTimeout(
      function () {
        reject();
      },
      60 * 60 * 1000,
    );
  });
}

function hamdastGenerateHashId() {
  return Date.now().toString(36) + "_" + Math.random().toString(36).slice(2);
}

function hamdastNormalizeScopes(scopeInput) {
  if (Array.isArray(scopeInput)) {
    return scopeInput
      .map(function (scope) {
        return String(scope).trim();
      })
      .filter(Boolean);
  }

  if (typeof scopeInput === "string") {
    return scopeInput
      .split(" ")
      .map(function (scope) {
        return scope.trim();
      })
      .filter(Boolean);
  }

  return [];
}

function hamdastExtractSessionToken(payload) {
  if (typeof payload === "string") return payload;
  if (payload && typeof payload.session_token === "string") {
    return payload.session_token;
  }
  if (
    payload &&
    payload.data &&
    typeof payload.data.session_token === "string"
  ) {
    return payload.data.session_token;
  }
  return "";
}

function hamdastGetSessionTokenViaPopup(options) {
  var appId = options.appId;
  var scope = options.scope || [];
  var hashId = hamdastGenerateHashId();
  var query = new URLSearchParams();
  var popup;
  var popupUrl;
  var popupOrigin;

  query.set("app_id", appId);
  query.set("hash_id", hashId);
  query.set("response_event", HAMDAST_SESSION_TOKEN_RESPONSE_EVENT);
  query.set("origin", window.location.origin);
  if (scope.length) {
    query.set("scope", scope.join(","));
  }

  popupUrl =
    "https://hamdast.paziresh24.com/session-token.html?" + query.toString();
  popupOrigin = new URL(popupUrl).origin;

  return new Promise(function (resolve, reject) {
    var done = false;
    var popupCloseIntervalId;
    var allowedOrigins = [popupOrigin, window.location.origin];

    function cleanup() {
      window.removeEventListener("message", onMessage);
      if (popupCloseIntervalId) {
        clearInterval(popupCloseIntervalId);
      }
      if (popup && !popup.closed) {
        popup.close();
      }
    }

    function finalize(callback) {
      if (done) return;
      done = true;
      cleanup();
      callback();
    }

    function onMessage(event) {
      if (allowedOrigins.indexOf(event.origin) === -1) return;
      var data = event && event.data && event.data.hamdast;
      if (!data) return;
      if (data.event !== HAMDAST_SESSION_TOKEN_RESPONSE_EVENT) return;
      if (String(data.hash_id || "") !== hashId) return;

      var token = hamdastExtractSessionToken(data.data);
      if (!token) {
        finalize(function () {
          reject(
            new Error(
              (data.data && data.data.error) ||
                "Invalid session token response.",
            ),
          );
        });
        return;
      }

      finalize(function () {
        resolve(token);
      });
    }

    popup = window.open(
      popupUrl,
      "hamdast_session_token_popup",
      "popup=yes,width=520,height=700,menubar=no,toolbar=no,location=no,status=no,resizable=yes,scrollbars=yes",
    );

    if (!popup) {
      return finalize(function () {
        reject(new Error("Popup blocked while creating session token."));
      });
    }

    window.addEventListener("message", onMessage);
    popupCloseIntervalId = setInterval(function () {
      if (popup && popup.closed) {
        finalize(function () {
          reject(new Error("USER_CLOSED_POPUP"));
        });
      }
    }, 300);
  });
}

window.hamdast = {
  initialize: function (options) {
    options = options || {};
    var appKey = options.app_key || options.clientKey || "";
    window.hamdast.app_key = appKey;
    hamdastCommunication({ app_key: appKey, event: "HAMDAST_INITIALIZE" });
  },
  app_key: null,
  getState: function (state) {
    return hamdastCommunication({
      app_key: window.hamdast.app_key,
      promise: true,
      event: "HAMDAST_GET_STATE",
      data: {
        state: state,
      },
    });
  },
  getSessionToken: function (options) {
    options = options || {};
    var scope = hamdastNormalizeScopes(options.scope);

    if (window.self !== window.top) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        promise: true,
        event: "HAMDAST_GET_SESSION_TOKEN",
        data: {
          scope: scope,
        },
      }).then(function (payload) {
        var token = hamdastExtractSessionToken(payload);
        if (!token) {
          throw new Error("Invalid session token response.");
        }
        return token;
      });
    }

    var appId = String(options.appId || window.hamdast.app_key || "").trim();
    if (!appId) {
      return Promise.reject(
        new Error("app_id is required to create session token."),
      );
    }

    return hamdastGetSessionTokenViaPopup({
      appId: appId,
      scope: scope,
    });
  },
  openLink: function (obj) {
    var url = obj.url;
    if (window.self !== window.top) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_OPEN_LINK",
        data: {
          url: url,
        },
      });
    }
    return location.assign(url);
  },
  redirect: {
    dispatch: function (obj) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_OPEN_LINK",
        data: {
          path: obj?.path,
          newContext: obj?.newContext,
        },
      });
    },
  },
  flow: {
    dispatch: function (flowKey, options = {}) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_FLOW",
        data: {
          flow_key: flowKey,
          options: options,
        },
      });
    },
  },
  payment: {
    pay: function (obj) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_PAYMENT_PAY",
        data: {
          product_key: obj.product_key,
          payload: obj.payload,
          receipt_id: obj.receipt_id,
        },
        promise: true,
      });
    },
    subscribe: function (obj) {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_PAYMENT_SUBSCRIBE",
        data: {
          plan_key: obj?.plan_key,
          payload: obj?.payload,
          receipt_id: obj?.receipt_id,
        },
        promise: true,
      });
    },
  },
  invite: function () {
    return hamdastCommunication({
      app_key: window.hamdast.app_key,
      event: "HAMDAST_INVITE",
      promise: true,
    });
  },
  widget: {
    addToProfile: function () {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_WIDGET_ADD_TO_PROFILE",
        promise: true,
      });
    },
    removeFromProfile: function () {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_WIDGET_REMOVE_FROM_PROFILE",
        promise: true,
      });
    },
    refreshPorifle: function () {
      return hamdastCommunication({
        app_key: window.hamdast.app_key,
        event: "HAMDAST_WIDGET_REFRESH_PROFILE",
        promise: false,
      });
    },
  },
};
hamdastStartAutoResize();
