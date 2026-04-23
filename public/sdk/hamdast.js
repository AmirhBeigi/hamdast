function hamdastCommunication(obj) {
  var clientKey = obj.clientKey;
  var event = obj.event;
  var data = obj.data;
  var promise = obj.promise || false;

  var message = {
    hamdast: {
      clientKey: clientKey,
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
      clientKey: window.hamdast && window.hamdast.clientKey,
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
        clientKey: message.hamdast.clientKey,
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

function hamdastGetSessionTokenViaHiddenIframe(options) {
  var appId = options.appId;
  var scope = options.scope || [];
  var timeout = options.timeout || 30000;
  var hashId = hamdastGenerateHashId();
  var iframe = document.createElement("iframe");
  var query = new URLSearchParams();

  query.set("app_id", appId);
  query.set("hash_id", hashId);
  query.set("response_event", HAMDAST_SESSION_TOKEN_RESPONSE_EVENT);
  if (scope.length) {
    query.set("scope", scope.join(","));
  }

  iframe.setAttribute(
    "style",
    "position:absolute;width:0;height:0;border:0;opacity:0;pointer-events:none;",
  );
  iframe.setAttribute("aria-hidden", "true");
  iframe.src =
    "https://hamdast.paziresh24.com/session-token.html?" + query.toString();

  return new Promise(function (resolve, reject) {
    var done = false;
    var timeoutId;

    function cleanup() {
      window.removeEventListener("message", onMessage);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      if (iframe && iframe.parentNode) {
        iframe.parentNode.removeChild(iframe);
      }
    }

    function finalize(callback) {
      if (done) return;
      done = true;
      cleanup();
      callback();
    }

    function onMessage(event) {
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

    window.addEventListener("message", onMessage);
    timeoutId = setTimeout(function () {
      finalize(function () {
        reject(new Error("getSessionToken timed out."));
      });
    }, timeout);

    if (document.body && document.body.firstChild) {
      document.body.insertBefore(iframe, document.body.firstChild);
    } else if (document.body) {
      document.body.appendChild(iframe);
    } else {
      document.documentElement.appendChild(iframe);
    }
  });
}

window.hamdast = {
  initialize: function (options) {
    options = options || {};
    var clientKey = options.clientKey || "";
    window.hamdast.clientKey = clientKey;
    hamdastCommunication({ clientKey: clientKey, event: "HAMDAST_INITIALIZE" });
  },
  clientKey: null,
  getState: function (state) {
    return hamdastCommunication({
      clientKey: window.hamdast.clientKey,
      promise: true,
      event: "HAMDAST_GET_STATE",
      data: {
        state: state,
      },
    });
  },
  getSessionToken: function (options) {
    options = options || {};
    var timeout = typeof options.timeout === "number" ? options.timeout : 30000;
    var scope = hamdastNormalizeScopes(options.scope);

    if (window.self !== window.top) {
      return hamdastCommunication({
        clientKey: window.hamdast.clientKey,
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

    var appId = String(options.appId || window.hamdast.clientKey || "").trim();
    if (!appId) {
      return Promise.reject(
        new Error("app_id is required to create session token."),
      );
    }

    return hamdastGetSessionTokenViaHiddenIframe({
      appId: appId,
      scope: scope,
      timeout: timeout,
    });
  },
  openLink: function (obj) {
    var url = obj.url;
    if (window.self !== window.top) {
      return hamdastCommunication({
        clientKey: window.hamdast.clientKey,
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
        clientKey: window.hamdast.clientKey,
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
        clientKey: window.hamdast.clientKey,
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
        clientKey: window.hamdast.clientKey,
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
        clientKey: window.hamdast.clientKey,
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
  widget: {
    addToProfile: function () {
      return hamdastCommunication({
        clientKey: window.hamdast.clientKey,
        event: "HAMDAST_WIDGET_ADD_TO_PROFILE",
        promise: true,
      });
    },
    removeFromProfile: function () {
      return hamdastCommunication({
        clientKey: window.hamdast.clientKey,
        event: "HAMDAST_WIDGET_REMOVE_FROM_PROFILE",
        promise: true,
      });
    },
    refreshPorifle: function () {
      return hamdastCommunication({
        clientKey: window.hamdast.clientKey,
        event: "HAMDAST_WIDGET_REFRESH_PROFILE",
        promise: false,
      });
    },
  },
};
hamdastStartAutoResize();
