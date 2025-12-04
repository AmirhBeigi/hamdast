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
    "*"
  );

  return new Promise(function (resolve, reject) {
    window.addEventListener("message", function (e) {
      if (e.data && e.data.hamdast && e.data.hamdast.hash_id === hash_id) {
        resolve(e.data.hamdast.data);
      }
    });
    setTimeout(function () {
      reject();
    }, 60 * 60 * 1000);
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
  },
};

if (window.self !== window.top) {
  (function (c, l, a, r, i, t, y) {
    c[a] =
      c[a] ||
      function () {
        (c[a].q = c[a].q || []).push(arguments);
      };
    t = l.createElement(r);
    t.async = 1;
    t.src = "https://www.clarity.ms/tag/" + i;

    t.onload = function () {
      if (typeof window.clarity === "function") {
        window.clarity("upgrade", "hamdast-app");
      }
    };

    y = l.getElementsByTagName(r)[0];
    if (!document.querySelector('script[src*="clarity.ms"]')) {
      y.parentNode.insertBefore(t, y);
    }
  })(window, document, "clarity", "script", "4zn9fqioi8");
}
