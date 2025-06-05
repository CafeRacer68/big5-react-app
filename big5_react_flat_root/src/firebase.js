import { initializeApp } from "firebase/app";
import {
  getAuth,
  setPersistence,
  browserLocalPersistence,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "",
  authDomain: "big-5-app.firebaseapp.com",
  projectId: "big-5-app",
  storageBucket: "big-5-app.firebasestorage.app",
  messagingSenderId: "635963022624",
  appId: "1:635963022624:web:c24c6a2a5d061e4916cb45",
  measurementId: "G-F3B0MF3Y8J",
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const auth = getAuth(app);
const db = getFirestore(app);
const messaging = getMessaging(app);

// ✅ Set login persistence
setPersistence(auth, browserLocalPersistence).catch((error) => {
  console.error("🔥 Auth persistence error:", error);
});

// 🔔 Ask for browser permission and get token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();

    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BLeYJaDcYvM3nwT90f5FxAudjrj2hc5gFlItMW0i78h-AVLEyZNg0bZswetJb1pqCdGCvgpCI6HN7D4-SGXQQLE",
      });

      if (token) {
        console.log("📲 FCM token:", token);
      } else {
        console.warn("🔕 No registration token available");
      }
    } else {
      console.warn("🔕 Notification permission not granted");
    }
  } catch (err) {
    console.error("❌ Failed to get notification permission or token:", err);
  }
};

// 🟢 Foreground message listener
onMessage(messaging, (payload) => {
  console.log("📩 Foreground message received:", payload);
});

export { app, auth, db, messaging };
