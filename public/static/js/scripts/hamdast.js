(function () {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.async = true;
  script.id = "rrweb-hamdast-script";
  script.src =
    "https://hamdast.paziresh24.com/static/js/scripts/rrweb-all.min.js";
  head.appendChild(script);
})();

function hamdastCommunication({ clientKey, event, data, promise = false }) {
  const message = {
    hamdast: {
      clientKey,
      host: window.location.origin,
      event,
      data,
    },
  };
  if (promise) {
    return postMessagePromise(message);
  }
  window.parent.postMessage(message, "*");
}

const postMessagePromise = (message) => {
  const hash_id = Date.now();

  window.parent.postMessage(
    {
      hamdast: {
        ...message.hamdast,
        hash_id,
      },
    },
    "*"
  );

  return new Promise((resolve, reject) => {
    window.addEventListener("message", function (e) {
      if (e.data?.hamdast?.hash_id === hash_id) {
        resolve(e.data?.hamdast?.data);
      }
    });
    setTimeout(() => {
      reject();
    }, 30000);
  });
};

window.hamdast = {
  initialize({ clientKey }) {
    window.hamdast.clientKey = clientKey;
    hamdastCommunication({ clientKey, event: "HAMDAST_INITIALIZE" });
    // document
    //   .getElementById("rrweb-hamdast-script")
    //   .addEventListener("load", (event) => {
    if (typeof window?.rrweb !== "undefined") {
      window.hamdast?.replay?.record();
    }
    // });
  },
  clientKey: null,
  getState(state) {
    return hamdastCommunication({
      clientKey: window.hamdast.clientKey,
      promise: true,
      event: "HAMDAST_GET_STATE",
      data: {
        state,
      },
    });
  },
  replay: {
    record() {
      rrweb.record({
        emit(event) {
          window.hamdast?.replay?.events?.push?.(event);
        },
        sampling: {
          input: "last",
          scroll: 150,
          media: 800,
        },
      });

      // save events every 10 seconds
      setInterval(window.hamdast?.replay?.save, 10 * 1000);
    },
    save() {
      hamdastCommunication({
        clientKey: window.hamdast.clientKey,
        event: "HAMDAST_REPLAY_SAVE",
        data: { events: window.hamdast?.replay?.events },
      });
    },
    events: [],
  },
};
