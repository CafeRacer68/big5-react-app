import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";

// Map emojis to numeric mood scores
const emojiToScore = {
  "😞": 1,
  "🙁": 2,
  "😐": 3,
  "🙂": 4,
  "😄": 5,
};

// Y-axis labels
const moodLabels = {
  1: "Very Sad",
  2: "Sad",
  3: "Neutral",
  4: "Happy",
  5: "Very Happy",
};

export default function MoodHistoryChart() {
  const [data, setData] = useState([]);
  const auth = getAuth();
  const user = auth.currentUser;

  useEffect(() => {
    console.log("📊 MoodHistoryChart mounted");

    const fetchMoods = async () => {
      if (!user) {
        console.warn("🔐 No user logged in");
        return;
      }

      try {
        const moodQuery = query(
          collection(db, "moodEntries"),
          where("userId", "==", user.uid),
        );

        const snapshot = await getDocs(moodQuery);
        const entries = snapshot.docs.map((doc) => doc.data());

        console.log("🗂️ Fetched mood entries:", entries);

        const moodMap = {};

        entries.forEach((entry) => {
          const date = new Date(entry.timestamp).toLocaleDateString("en-AU", {
            day: "2-digit",
            month: "short",
          });

          const score = emojiToScore[entry.mood] || 0;

          if (!moodMap[date]) {
            moodMap[date] = { total: 0, count: 0 };
          }

          moodMap[date].total += score;
          moodMap[date].count += 1;
        });

        const chartData = Object.keys(moodMap).map((date) => ({
          date,
          mood: parseFloat(
            (moodMap[date].total / moodMap[date].count).toFixed(2),
          ),
        }));

        chartData.sort((a, b) => new Date(a.date) - new Date(b.date));

        console.log("📈 Mood chart data:", chartData);

        setData(chartData);
      } catch (error) {
        console.error("❌ Error fetching mood data:", error);
      }
    };

    fetchMoods();
  }, [user]);

  return (
    <div style={{ marginTop: "40px" }}>
      <h3>Your Weekly Mood</h3>
      {data.length === 0 ? (
        <p style={{ color: "#888" }}>No mood data to display yet.</p>
      ) : (
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis
              domain={[1, 5]}
              ticks={[1, 2, 3, 4, 5]}
              tickFormatter={(tick) => moodLabels[tick]}
            />
            <Tooltip
              formatter={(value) => moodLabels[Math.round(value)] || value}
            />
            <Line
              type="monotone"
              dataKey="mood"
              stroke="#003366"
              strokeWidth={3}
              dot={{ r: 5, fill: "#ffc107" }}
              activeDot={{ r: 7 }}
            />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
}
