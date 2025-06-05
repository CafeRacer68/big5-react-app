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
