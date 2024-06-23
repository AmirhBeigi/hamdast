(function () {
  var head = document.getElementsByTagName("head")[0];
  var script = document.createElement("script");
  script.async = true;
  script.src =
    "https://cdn.jsdelivr.net/npm/@rrweb/record@latest/dist/record.umd.min.cjs";
  head.appendChild(script);
  var packScript = document.createElement("script");
  packScript.async = true;
  packScript.src =
    "https://cdn.jsdelivr.net/npm/@rrweb/packer@2.0.0-alpha.15/dist/pack.umd.min.cjs";
  head.appendChild(packScript);
})();

function portalCommunication({ clientKey, event }) {
  const message = JSON.stringify({
    clientKey,
    event,
  });
  window.parent.postMessage(message, "*");
}

window.hamdast = {
  initialize(clientKey) {
    portalCommunication({ clientKey, event: "INITIALIZE" });
    window.hamdast?.replay?.record();
  },
  replay: {
    record() {
      rrweb.record({
        emit(event) {
          window.hamdast?.replay?.events?.push?.(event);
        },
        packFn: pack,
        sampling: {
          input: "last",
          scroll: 150,
          media: 800,
        },
      });

      // save events every 10 seconds
      setInterval(windiw.hamdast?.replay?.save, 10 * 1000);
    },
    save() {
      function save() {
        const body = JSON.stringify({ events: window.hamdast?.replay?.events });
        console.log("save");
      }
    },
    events: [],
  },
};
