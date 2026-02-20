(function () {
  if (window.__SHOPIFY_CHATBOT_LOADED__) return;
  window.__SHOPIFY_CHATBOT_LOADED__ = true;

  const CHATBOT_URL = "https://charming-shop-flow.lovable.app";

  const button = document.createElement("div");
  button.innerHTML = "💬 Chat";
  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: "#000",
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "50px",
    cursor: "pointer",
    zIndex: "999999",
    fontFamily: "Arial",
  });

  const container = document.createElement("div");
  Object.assign(container.style, {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "380px",
    height: "600px",
    background: "#fff",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
    display: "none",
    overflow: "hidden",
    zIndex: "999999",
  });

  const iframe = document.createElement("iframe");
  iframe.src = CHATBOT_URL;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";

  container.appendChild(iframe);

  button.onclick = () => {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
  };

  document.body.appendChild(button);
  document.body.appendChild(container);
})();