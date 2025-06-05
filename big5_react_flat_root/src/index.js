import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

// Render app
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);

// Register the service worker for Firebase Messaging
serviceWorkerRegistration.register({
  onUpdate: (registration) => {
    console.log("New content is available:", registration);
  },
});
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/firebase-messaging-sw.js")
      .then((registration) => {
        console.log("✅ Service Worker registered:", registration);
      })
      .catch((err) => {
        console.error("❌ Service Worker registration failed:", err);
      });
  });
}
