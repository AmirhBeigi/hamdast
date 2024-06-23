(function () {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdn.jsdelivr.net/npm/rrweb@latest/dist/rrweb-all.min.js";
  head.appendChild(script);
})();

function portalCommunication({ clientKey, event, data }) {
  const message = JSON.stringify({
    clientKey,
    event,
    data,
  });
  window.parent.postMessage(message, "*");
}

window.hamdast = {
  initialize(clientKey) {
    window.hamdast.clientKey = clientKey;
    portalCommunication({ clientKey, event: "INITIALIZE" });
    window.hamdast?.replay?.record();
  },
  clientKey: null,
  replay: {
    record() {
      rrweb.record({
        emit(event) {
          window.hamdast?.replay?.events?.push?.(event);
        },
        packFn: rrweb.pack,
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
      portalCommunication({
        clientKey: window.hamdast.clientKey,
        event: "REPLAY_SAVE",
        data: { events: window.hamdast?.replay?.events },
      });
    },
    events: [],
  },
};
