import React from "react";
import { big5Messages } from "./messages";

export default function DailyMessage() {
  const now = new Date();
  const effectiveDate = new Date(now);

  // If it's before 11AM, roll back to the previous day
  if (now.getHours() < 11) {
    effectiveDate.setDate(now.getDate() - 1);
  }

  const day = effectiveDate.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat

  // Skip weekends entirely
  if (day === 0 || day === 6) {
    console.log("Weekend – no message shown.");
    return null;
  }

  const startDate = new Date("2024-06-03");
  const daysSinceStart = Math.floor(
    (effectiveDate - startDate) / (1000 * 60 * 60 * 24),
  );

  const weekdayCount =
    Math.floor(daysSinceStart / 7) * 5 + [1, 2, 3, 4, 5].indexOf(day);
  const todayIndex = weekdayCount % big5Messages.length;
  const yesterdayIndex =
    (todayIndex - 1 + big5Messages.length) % big5Messages.length;

  const todayMessage = big5Messages[todayIndex];
  const yesterdayMessage = big5Messages[yesterdayIndex];

  return (
    <div style={{ background: "#f4f4f4", padding: 20, marginTop: 20 }}>
      <h3>Today’s Daily Nudge</h3>
      <p>{todayMessage}</p>

      <h4 style={{ marginTop: "20px" }}>Yesterday’s Nudge</h4>
      <p>{yesterdayMessage}</p>
    </div>
  );
}
