import React, { useState, useEffect } from "react";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";

const db = getFirestore();
const auth = getAuth();

const Journal = () => {
  const [entry, setEntry] = useState("");
  const [journalEntries, setJournalEntries] = useState([]);
  const [entrySubmitted, setEntrySubmitted] = useState(false);

  const user = auth.currentUser;

  const handleEntryChange = (e) => {
    setEntry(e.target.value);
  };

  const handleSubmit = async () => {
    if (!user || !entry) return;

    try {
      await addDoc(collection(db, "journalEntries"), {
        userId: user.uid,
        entry: entry,
        date: new Date().toISOString(),
      });
      setEntrySubmitted(true);
      setEntry("");
      fetchJournalEntries();
    } catch (e) {
      console.error("Error adding journal entry: ", e);
    }
  };

  const fetchJournalEntries = async () => {
    if (!user) return;

    const q = query(
      collection(db, "journalEntries"),
      where("userId", "==", user.uid),
    );

    try {
      const querySnapshot = await getDocs(q);
      const entries = querySnapshot.docs.map((doc) => doc.data());
      setJournalEntries(entries);
    } catch (e) {
      console.error("Error fetching journal entries: ", e);
    }
  };

  useEffect(() => {
    fetchJournalEntries();
  }, [user]);

  return (
    <div>
      <h3>Your Journal</h3>

      <textarea
        value={entry}
        onChange={handleEntryChange}
        placeholder="Write your journal entry here..."
        style={{ width: "100%", height: "100px", marginBottom: "10px" }}
      />

      <button
        onClick={handleSubmit}
        disabled={!entry}
        style={{
          padding: "10px 20px",
          backgroundColor: "#003366",
          color: "white",
          border: "none",
          borderRadius: "5px",
        }}
      >
        Submit Entry
      </button>

      {entrySubmitted && (
        <p style={{ color: "green" }}>Entry submitted successfully!</p>
      )}

      <div style={{ marginTop: "20px" }}>
        <h4>Previous Entries:</h4>
        {journalEntries.length === 0 ? (
          <p>No entries yet. Start writing!</p>
        ) : (
          journalEntries.map((entry, index) => (
            <div key={index} style={{ marginBottom: "15px" }}>
              <p>
                <strong>{new Date(entry.date).toLocaleString()}</strong>
              </p>
              <p>{entry.entry}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default Journal;
