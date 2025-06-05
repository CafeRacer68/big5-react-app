// src/components/UrgentHelp.js
export default function UrgentHelp() {
  return (
    <div style={{ padding: "20px" }}>
      <h2>Get Urgent Help</h2>
      <p>If you're in crisis or need immediate support, please contact:</p>

      <ul>
        <li>
          <strong>Lifeline:</strong> <a href="tel:131114">13 11 14</a>
        </li>
        <li>
          <strong>Suicide Callback Service:</strong>{" "}
          <a href="tel:1300659467">1300 659 467</a>
        </li>
        <li>
          <strong>Beyond Blue:</strong>{" "}
          <a href="tel:1300224636">1300 22 4636</a>
        </li>
        <li>
          <strong>Emergency:</strong> <a href="tel:000">000</a>
        </li>
        <li>
          <a
            href="https://www.mindspot.org.au/gethelp"
            target="_blank"
            rel="noopener noreferrer"
          >
            MindSpot Crisis Page
          </a>
        </li>
      </ul>
    </div>
  );
}
