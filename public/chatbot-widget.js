(function () {
  if (window.__SHOPIFY_CHATBOT_LOADED__) return;
  window.__SHOPIFY_CHATBOT_LOADED__ = true;

  // ---------- CONFIG ----------
  const CHATBOT_URL = "https://charming-shop-flow.lovable.app"; // ✅ your existing chatbot
  const BUTTON_TEXT = "Chat";
  const BRAND_COLOR = "#000000";
  // ----------------------------

  // Floating button
  const button = document.createElement("div");
  button.innerHTML = `💬 ${BUTTON_TEXT}`;
  Object.assign(button.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    background: BRAND_COLOR,
    color: "#fff",
    padding: "12px 16px",
    borderRadius: "50px",
    cursor: "pointer",
    zIndex: "999999",
    fontFamily: "Arial, sans-serif",
    fontSize: "14px",
    boxShadow: "0 6px 20px rgba(0,0,0,0.25)",
  });

  // Chat container
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
    overflow: "hidden",
    display: "none",
    zIndex: "999999",
  });

  // Iframe
  const iframe = document.createElement("iframe");
  iframe.src = CHATBOT_URL;
  iframe.style.width = "100%";
  iframe.style.height = "100%";
  iframe.style.border = "none";
  iframe.allow = "clipboard-write";

  container.appendChild(iframe);

  // Toggle logic
  button.onclick = () => {
    container.style.display =
      container.style.display === "none" ? "block" : "none";
  };

  document.body.appendChild(button);
  document.body.appendChild(container);
})();
