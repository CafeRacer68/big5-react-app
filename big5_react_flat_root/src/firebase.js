import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCbA3GXi_UmXxXrTmm0pUQPYxClidFLZQ0",
  authDomain: "big-5-app.firebaseapp.com",
  projectId: "big-5-app",
  storageBucket: "big-5-app.firebasestorage.app",
  messagingSenderId: "635963022624",
  appId: "1:635963022624:web:c24c6a2a5d061e4916cb45",
  measurementId: "G-F3B0MF3Y8J",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const messaging = getMessaging(app);

// Request browser notification permission and log FCM token
export const requestNotificationPermission = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const token = await getToken(messaging, {
        vapidKey:
          "BLeYJaDcYvM3nwT90f5FxAudjrj2hc5gFlItMW0i78h-AVLEyZNg0bZswetJb1pqCdGCvgpCI6HN7D4-SGXQQLE",
      });
      if (token) {
        console.log("📲 Notification token:", token);
      } else {
        console.warn("🔕 No token received");
      }
    } else {
      console.warn("🔕 Notification permission not granted");
    }
  } catch (err) {
    console.error("⚠️ Failed to get notification token:", err);
  }
};

// Foreground push message handler
onMessage(messaging, (payload) => {
  console.log("📩 Message received in foreground:", payload);
});
