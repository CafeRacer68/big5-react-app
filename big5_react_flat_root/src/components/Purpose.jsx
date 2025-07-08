import React, { useEffect, useState } from "react";
import { getFirestore, doc, getDoc } from "firebase/firestore";
import { app } from "../firebase";

const PurposePage = () => {
  const [content, setContent] = useState("");
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContent = async () => {
      const db = getFirestore(app);
      const docRef = doc(db, "content_pages", "purpose");
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        setTitle(docSnap.data().title);
        setContent(docSnap.data().content);
      } else {
        setContent("<p>No content found.</p>");
      }
      setLoading(false);
    };

    fetchContent();
  }, []);

  if (loading) return <p>Loading About Page...</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PurposePage;
