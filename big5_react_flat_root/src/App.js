import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { auth, requestNotificationPermission } from "./firebase";
import MoodCheckin from "./MoodCheckin";
import DailyMessage from "./DailyMessage";
// import Journal from "./Journal";
import NavBar from "./components/NavBar";
import Resources from "./components/Resources";
import UrgentHelp from "./components/UrgentHelp";
// import MoodHistoryChart from "./components/MoodHistoryChart"; // 🔁 Temporarily removed
import Login from "./Login";
import Big5Accordion from "./components/Big5Accordion";

function Home() {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const user = auth.currentUser;

    if (!user) {
      navigate("/login");
    } else {
      const name =
        user.displayName?.split(" ")[0] ||
        user.email?.split("@")[0] ||
        "legend";
      setUserName(name);
    }
  }, [navigate]);

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/big5applogo.svg"
          alt="The Big 5 App Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <h1>Welcome back to The Big 5, {userName}</h1>

      {/* Updated intro text */}
      <p style={{ marginTop: 10 }}>
        The Big 5 are five groups of actions that are strongly linked to good
        mental health.
        <br />
        The Big 5 App is designed to help you to do more of the Big 5, so that
        you can be the best version of yourself.
      </p>

      {/* Updated How it Works section */}
      <div style={{ margin: "30px 0" }}>
        <h2>How Does It Work?</h2>
        <p>
          It’s simple. Each weekday we will send you a simple notification.
          <br />
          Each notification will ‘nudge’ you to do one of The Big 5.
          <br />
          We will send nudges for 6 weeks, at which time you can choose to
          receive the nudges for another 6 weeks.
        </p>
      </div>

      {/* Re-labeled DailyMessage section */}
      <div style={{ marginBottom: "30px" }}>
        <h2>Today’s Daily Big 5 Nudge</h2>
        <DailyMessage />
      </div>

      <MoodCheckin />

      {/* Big 5 Quiz section */}
      <div style={{ margin: "40px 0 20px" }}>
        <h2>The Big 5 Checklist</h2>
        <p>
          To check your own Big 5 scores, click below. This is quick and easy
          and will give you feedback about things you might want to consider.
        </p>
        <button
          onClick={() =>
            window.open(
              "https://app.mindspot.org.au/v3/big5?website=true",
              "_blank",
            )
          }
          style={{
            padding: "10px 20px",
            backgroundColor: "#003366",
            color: "white",
            border: "none",
            borderRadius: "5px",
            marginTop: "10px",
          }}
        >
          The Big 5 Checklist
        </button>
      </div>

      {/* Big 5 Accordion with Videos */}
      <Big5Accordion />

      {/* Temporarily removed mood history */}
      {/* <MoodHistoryChart /> */}
    </div>
  );
}

function App() {
  useEffect(() => {
    requestNotificationPermission();
  }, []);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Home />} />
        <Route path="/resources" element={<Resources />} />
        <Route path="/urgent-help" element={<UrgentHelp />} />
      </Routes>
    </Router>
  );
}

export default App;
