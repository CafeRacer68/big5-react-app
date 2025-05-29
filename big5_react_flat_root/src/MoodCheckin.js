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
    setMoodSubmitted(false);
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
    <div className="mood-checkin-container">
      <h3>How are you feeling today?</h3>
      <div className="emoji-row">
        {moodEmojis.map((emoji, index) => (
          <div
            key={index}
            className="emoji-button"
            onClick={() => handleMoodChange(emoji)}
            style={{
              border: mood === emoji ? "2px solid #003366" : "2px solid #ccc",
              backgroundColor: mood === emoji ? "#e6f0ff" : "white",
            }}
          >
            {emoji}
          </div>
        ))}
      </div>
      <button onClick={handleSubmit} disabled={!mood}>
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
