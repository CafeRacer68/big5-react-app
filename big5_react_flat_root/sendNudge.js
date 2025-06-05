// sendNudge.js

const admin = require("firebase-admin");

// Load your service account key
const serviceAccount = require("./big5-service-account.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const deviceToken = "PASTE_YOUR_REAL_TOKEN_HERE";

const message = {
  token: deviceToken,
  notification: {
    title: "Today’s Daily Nudge",
    body: "Take one small action today that brings you joy. You’ve got this.",
  },
  webpush: {
    notification: {
      icon: "https://big-5-app.vercel.app/big5applogo.svg",
      click_action: "https://big-5-app.vercel.app",
    },
  },
};

admin
  .messaging()
  .send(message)
  .then((response) => {
    console.log("✅ Successfully sent message:", response);
  })
  .catch((error) => {
    console.error("❌ Error sending message:", error);
  });
