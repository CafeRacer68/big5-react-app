import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from "firebase-admin/firestore";
import serviceAccount from "../../serviceAccountKey.json" assert { type: "json" };

const app = initializeApp({
  credential: cert(serviceAccount),
});

const db = getFirestore(app);

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
  {
    day: 11,
    message:
      "What activity do you find satisfying and meaningful? Even if it’s as simple as a chore, make time for it today. Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 12,
    message:
      "Be your own number one supporter. Nurture and encourage yourself, always. Keep your thoughts balanced.",
    category: "Healthy Thinking",
  },
  {
    day: 13,
    message:
      "Reach out to a friend today and ask them about their day. Be a listening ear and support them. Caring and sharing makes you stronger. Connections matter.",
    category: "Social Connections",
  },
  {
    day: 14,
    message:
      "We are what we eat. So, add an extra piece of fruit and veg to your meals today and tomorrow, and feel your health improve! Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 15,
    message:
      "What is something you want to achieve in the next 12 months? Break it down into simple steps and add them to your diary. We all need goals.",
    category: "Goals and Plans",
  },
  {
    day: 16,
    message:
      "Let’s get active a couple of times this week! Get up and move around for at least 10 minutes – even if it’s just a walk around the block. Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 17,
    message:
      "Do you have a favourite hobby? Or want to try out a new one? Let’s do it today! Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 18,
    message:
      "Is there someone you’ve been missing? Call or text that person today and reconnect with them. Connections matter.",
    category: "Social Connections",
  },
  {
    day: 19,
    message:
      "When you find yourself dwelling on the past, focus on your future. Replace self-defeating thinking with self-encouragement. Keep your thoughts balanced.",
    category: "Healthy Thinking",
  },
  {
    day: 20,
    message:
      "Planning our weekly schedules can help reduce daily overwhelm. Map out your week so you can get things done and have time to relax. We all need goals.",
    category: "Goals and Plans",
  },
  {
    day: 21,
    message:
      "Step outside and notice something beautiful. Whether it’s the sky, a tree, or a bird—enjoy it. Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 22,
    message:
      "What are you looking forward to doing tomorrow? Plan three small things you will look forward to. We all need goals.",
    category: "Goals and Plans",
  },
  {
    day: 23,
    message:
      "Give yourself permission to take a quick break. Even a short break can recharge your mind and body. Rest is productive too. Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 24,
    message:
      "Who would love to hear from you? Send a quick message, make a call, or share a kind word. Connections matter.",
    category: "Social Connections",
  },
  {
    day: 25,
    message:
      "What have you done well today? Remember to acknowledge that you are doing the best you can. Keep your thoughts healthy.",
    category: "Healthy Thinking",
  },
  {
    day: 26,
    message:
      "What’s your jam – your favourite band – your favourite singer? Give yourself 5 mins to enjoy your music. Your daily actions matter.",
    category: "Meaningful Activities",
  },
  {
    day: 27,
    message:
      "Did you get out of bed? Finish a task? Drink enough water? That counts. Acknowledge it. We all need goals.",
    category: "Goals and Plans",
  },
  {
    day: 28,
    message:
      "If you are feeling stiff and tense, get up and gently stretch. If it helps, set a reminder to do it again in 2 hrs. Routines matter.",
    category: "Healthy Routines",
  },
  {
    day: 29,
    message:
      "Book yourself a few minutes with a friend in the next couple of days to talk. It will help you both unwind. Connections matter.",
    category: "Social Connections",
  },
  {
    day: 30,
    message:
      "Even when things are tough, you will keep perspective – you have coped with lots of difficult situations. Keep your thoughts healthy.",
    category: "Healthy Thinking",
  },
];

const uploadNudges = async () => {
  const batch = db.batch();
  const collectionRef = db.collection("dailyNudges");

  for (const nudge of dailyNudges) {
    const docRef = collectionRef.doc(`day${nudge.day}`);
    batch.set(docRef, nudge);
  }

  await batch.commit();
  console.log("✅ All daily nudges uploaded successfully!");
};

uploadNudges();
