import React from "react";
import { big5Messages } from "./messages";

export default function DailyMessage() {
  const today = new Date();
  const day = today.getDay(); // 0 = Sun, 1 = Mon, ..., 6 = Sat
  const hour = today.getHours();

  // Log the current day and hour
  console.log("Current day (0=Sunday, 6=Saturday):", day);
  console.log("Current hour:", hour);

  // Skip weekends and only show at/after 11am
  if (day === 0 || day === 6 || hour < 11) {
    console.log("Message not shown because it's the weekend or before 11am.");
    return null;
  }

  // Determine which weekday this is in the 30-message cycle
  const startDate = new Date("2024-06-03"); // Set your start date
  const daysSinceStart = Math.floor(
    (today - startDate) / (1000 * 60 * 60 * 24),
  );

  // Log the days since start
  console.log("Days since start date:", daysSinceStart);

  const weekdayCount =
    Math.floor(daysSinceStart / 7) * 5 + [1, 2, 3, 4, 5].indexOf(day);

  // Log the weekday count calculation
  console.log("Calculated weekday count:", weekdayCount);

  const messageIndex = weekdayCount % big5Messages.length;

  // Log the message index
  console.log("Message index in cycle:", messageIndex);

  const message = big5Messages[messageIndex];

  return (
    <div style={{ background: "#f4f4f4", padding: 20, marginTop: 20 }}>
      <h3>🌟 Daily Big 5 Tip</h3>
      <p>{message}</p>
    </div>
  );
}
