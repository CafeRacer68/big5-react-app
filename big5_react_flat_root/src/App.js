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
// import Journal from "./Journal"; // Removed for now
import NavBar from "./components/NavBar";
import Resources from "./components/Resources";
import UrgentHelp from "./components/UrgentHelp";
import MoodHistoryChart from "./components/MoodHistoryChart";
import Login from "./Login";
import Big5Accordion from "./components/Big5Accordion"; // ✅ NEW IMPORT

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
          alt="Big 5 App Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <h1>Welcome back to the Big 5, {userName} 👋</h1>

      {/* Intro text */}
      <p style={{ marginTop: 10 }}>
        The Big 5 App will help you do more of the things that are good for your
        mental health.
      </p>

      {/* How does it work section */}
      <div style={{ margin: "30px 0" }}>
        <h2>How Does It Work?</h2>
        <p>
          It’s simple. Each weekday we will send you a single ‘nudge’.
          <br />
          Each nudge is about one of the Big 5 actions.
          <br />
          We know that people who do more of the Big 5 start to feel better
          within a week.
          <br />
          We hope this will help you.
        </p>
      </div>

      <DailyMessage />
      <MoodCheckin />

      {/* Big 5 Quiz section */}
      <div style={{ margin: "40px 0 20px" }}>
        <h2>Big 5 Quiz</h2>
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
          Big 5 Checklist
        </button>
      </div>

      {/* Big 5 Accordion with Videos */}
      <Big5Accordion />

      <MoodHistoryChart />
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
