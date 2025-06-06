import React from "react";

const Checklist = () => {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h2 style={{ color: "#003366" }}>The Big 5 Checklist</h2>
      <p>
        Complete the Big 5 checklist below without leaving the app. It’s quick,
        easy, and helps you focus on the areas that matter most.
      </p>
      <div
        style={{
          marginTop: 20,
          border: "2px solid #003366",
          borderRadius: "8px",
          overflow: "hidden",
        }}
      >
        <iframe
          src="https://app.mindspot.org.au/v3/big5?website=true"
          title="Big 5 Checklist"
          width="100%"
          height="800"
          style={{ border: "none" }}
        />
      </div>
    </div>
  );
};

export default Checklist;
