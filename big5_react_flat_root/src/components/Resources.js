import React from "react";

const Resources = () => {
  return (
    <div style={{ padding: 20, maxWidth: 800, margin: "0 auto" }}>
      <h2 style={{ color: "#003366" }}>Resources & Support</h2>

      <section style={{ marginBottom: 30 }}>
        <h3>Self-Guided Programs</h3>
        <ul>
          <li>
            <a
              href="https://www.mindspot.org.au/treatments/wellbeing-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Wellbeing Course
            </a>
          </li>
          <li>
            <a
              href="https://www.mindspot.org.au/treatments/indigenous-wellbeing-course/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Indigenous Wellbeing Course
            </a>
          </li>
          <li>
            <a
              href="https://www.mindspot.org.au/treatment/what-we-offer/"
              target="_blank"
              rel="noopener noreferrer"
            >
              All Treatments
            </a>
          </li>
        </ul>
      </section>

      <section style={{ marginBottom: 30 }}>
        <h3>Help & Support</h3>
        <ul>
          <li>
            <a
              href="https://www.lifeline.org.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Lifeline (24/7 Crisis Support)
            </a>
          </li>
          <li>
            <a
              href="https://www.beyondblue.org.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Beyond Blue
            </a>
          </li>
        </ul>
      </section>
    </div>
  );
};

export default Resources;
