import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebase";

export default function DailyNudge() {
  const [nudges, setNudges] = useState([]);
  const [todayNudge, setTodayNudge] = useState(null);
  const [yesterdayNudge, setYesterdayNudge] = useState(null);

  useEffect(() => {
    const fetchNudges = async () => {
      try {
        const snapshot = await getDocs(collection(db, "dailyNudges"));
        const data = snapshot.docs
          .map((doc) => doc.data())
          .sort((a, b) => a.day - b.day); // Ensure sorting by day

        setNudges(data);

        const now = new Date();
        const effectiveDate = new Date(now);

        // Roll back to previous day if before 11am
        if (now.getHours() < 11) {
          effectiveDate.setDate(effectiveDate.getDate() - 1);
        }

        const dayOfWeek = effectiveDate.getDay(); // 0 = Sunday, 1 = Monday, ...
        if (dayOfWeek === 0 || dayOfWeek === 6) {
          // No nudges on weekends
          console.log("Weekend – no nudge today.");
          return;
        }

        const startDate = new Date("2024-06-03");
        const totalDays = Math.floor(
          (effectiveDate - startDate) / (1000 * 60 * 60 * 24),
        );

        const weekdaysPassed =
          Math.floor(totalDays / 7) * 5 + [1, 2, 3, 4, 5].indexOf(dayOfWeek);

        const todayIndex = weekdaysPassed % data.length;
        const yesterdayIndex = (todayIndex - 1 + data.length) % data.length;

        setTodayNudge(data[todayIndex]);
        setYesterdayNudge(data[yesterdayIndex]);
      } catch (error) {
        console.error("❌ Failed to fetch nudges:", error);
      }
    };

    fetchNudges();
  }, []);

  if (!todayNudge || !yesterdayNudge) return null;

  return (
    <div style={{ background: "#f4f4f4", padding: 20, marginTop: 20 }}>
      <h3>Today’s Daily Nudge</h3>
      <p>
        <strong>{todayNudge.message}</strong>
      </p>

      <h4 style={{ marginTop: "20px" }}>Yesterday’s Nudge</h4>
      <p>{yesterdayNudge.message}</p>
    </div>
  );
}
