import React, { useState } from "react";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const MoodCheckin = () => {
  const [mood, setMood] = useState("");
  const [moodSubmitted, setMoodSubmitted] = useState(false);

  const user = auth.currentUser;

  const moodEmojis = ["😞", "🙁", "😐", "🙂", "😄"];

  const handleMoodChange = (selectedMood) => {
    setMood(selectedMood);
    setMoodSubmitted(false); // Clear success message
  };

  const handleSubmit = async () => {
    if (!user || !mood) return;

    try {
      await addDoc(collection(db, "moodEntries"), {
        userId: user.uid,
        mood: mood,
        timestamp: new Date().toISOString(),
      });

      setMoodSubmitted(true);
      setMood("");
    } catch (e) {
      console.error("Error adding mood entry: ", e);
    }
  };

  return (
    <div>
      <h3>How are you feeling today?</h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginBottom: "10px",
        }}
      >
        {moodEmojis.map((emoji, index) => (
          <div
            key={index}
            style={{
              fontSize: "2rem",
              cursor: "pointer",
              padding: "10px",
              border: mood === emoji ? "2px solid #003366" : "1px solid #ccc",
              borderRadius: "5px",
              backgroundColor: mood === emoji ? "#e6f0ff" : "transparent",
            }}
            onClick={() => handleMoodChange(emoji)}
          >
            {emoji}
          </div>
        ))}
      </div>
      <button
        onClick={handleSubmit}
        disabled={!mood}
        style={{
          padding: "10px 20px",
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit Mood
      </button>

      {moodSubmitted && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Mood submitted successfully!
        </p>
      )}
    </div>
  );
};

export default MoodCheckin;
