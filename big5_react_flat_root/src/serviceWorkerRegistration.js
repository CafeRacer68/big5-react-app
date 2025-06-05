export function register(config) {
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      const swUrl = `${process.env.PUBLIC_URL}/firebase-messaging-sw.js`;

      navigator.serviceWorker
        .register(swUrl)
        .then((registration) => {
          console.log("✅ Service worker registered:", registration);

          if (config && config.onUpdate) {
            config.onUpdate(registration);
          }
        })
        .catch((error) => {
          console.error("❌ Service worker registration failed:", error);
        });
    });
  }
}
