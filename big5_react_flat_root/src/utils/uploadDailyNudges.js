// src/utils/uploadDailyNudges.js

import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

const dailyNudges = [
  {
    day: 1,
    message:
      "What brings you joy? Do at least one thing today that makes you feel good! Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 2,
    message:
      "What brings you joy? Do at least one thing today that makes you feel good! Your daily actions matter.",
    category: "Goals and Plans",
  },
  {
    day: 3,
    message:
      "Healthy habits start with a good routine. Plan out your day so you can get things done, but also have time for what makes you feel good. Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 4,
    message:
      "Everyone gets busy. Take a few minutes today to text or call that person you have been missing. Connections matter.",
    category: "Social Connections",
  },
  {
    day: 5,
    message:
      "Instead of being self-critical, congratulate yourself on your efforts - no matter how small. Keep your thoughts healthy.",
    category: "Healthy Thinking",
  },
  {
    day: 6,
    message:
      "Is there something you want to get done this week? Pop a time in the diary and make it happen! We all need goals.",
    category: "Goals and Plans",
  },
  {
    day: 7,
    message:
      "Let yourself laugh every day. Find a joke or a funny meme and have a giggle. Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 8,
    message:
      "It’s time to go easy on yourself. No one is perfect – so don’t expect yourself to be. Keep your thoughts healthy.",
    category: "Healthy Thinking",
  },
  {
    day: 9,
    message:
      "Sleep helps keep us healthy – physically and mentally. Try and go to bed early at least twice this week. Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 10,
    message:
      "Unwind and de-stress today by calling a friend or relative to chat about how your day went. Connections matter.",
    category: "Social Connections",
  },
  // ... (Include the rest of days 11–30 exactly the same way)
];

export const uploadDailyNudges = async () => {
  const nudgesCollection = collection(db, "dailyNudges");

  for (const nudge of dailyNudges) {
    try {
      await setDoc(doc(nudgesCollection, `day${nudge.day}`), nudge);
      console.log(`✅ Uploaded nudge for day ${nudge.day}`);
    } catch (err) {
      console.error(`❌ Failed to upload nudge for day ${nudge.day}`, err);
    }
  }
};

// To use it once from e.g. App.js or a test file:
// import { uploadDailyNudges } from "./utils/uploadDailyNudges";
// useEffect(() => { uploadDailyNudges(); }, []);
