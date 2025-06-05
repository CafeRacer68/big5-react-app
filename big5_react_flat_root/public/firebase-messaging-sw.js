importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-app-compat.js",
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.11.0/firebase-messaging-compat.js",
);

firebase.initializeApp({
  apiKey: "AIzaSyCbA3GXi_UmXxXrTmm0pUQPYxClidFLZQ0",
  authDomain: "big-5-app.firebaseapp.com",
  projectId: "big-5-app",
  storageBucket: "big-5-app.firebasestorage.app",
  messagingSenderId: "635963022624",
  appId: "1:635963022624:web:c24c6a2a5d061e4916cb45",
  measurementId: "G-F3B0MF3Y8J",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log("📨 Received background message: ", payload);
  self.registration.showNotification(payload.notification.title, {
    body: payload.notification.body,
    icon: "/big5applogo.svg", // ✅ updated icon path
  });
});
