import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config (I suggest using env variables, but if you're using hardcoded for testing, that's fine)
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

// Commenting out Firebase messaging temporarily
// export const messaging = getMessaging(app);

// Request notification permission (currently disabled for testing)
export const requestNotificationPermission = async () => {
  // Commented out the messaging code temporarily
  // try {
  //   const permission = await Notification.requestPermission();
  //   if (permission === "granted") {
  //     const token = await getToken(messaging, {
  //       vapidKey: process.env.REACT_APP_FIREBASE_VAPID_KEY,
  //     });
  //     if (token) {
  //       console.log("📲 Notification token:", token);
  //     } else {
  //       console.warn("🔕 No token received");
  //     }
  //   } else {
  //     console.warn("🔕 Notification permission not granted");
  //   }
  // } catch (err) {
  //   console.error("⚠️ Failed to get notification token:", err);
  // }

  console.log("Notification permissions are disabled for now.");
};

// Commenting out foreground push message handling
// onMessage(messaging, (payload) => {
//   console.log("📩 Message received in foreground:", payload);
// });
