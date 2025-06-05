import React from "react";
import Big5Accordion from "./Big5Accordion"; // 👈 Make sure this import exists

const Resources = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <section style={{ marginBottom: 30 }}>
        <Big5Accordion />
      </section>
    </div>
  );
};

export default Resources;
