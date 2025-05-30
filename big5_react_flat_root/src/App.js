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
      <h1>Welcome back to th Big 5, {userName} 👋</h1>
      <MoodCheckin />
      <DailyMessage />

      {/* Big 5 Accordion */}
      <div style={{ marginTop: "30px" }}>
        <h2>🖐️ The Big 5 for Mental Health</h2>
        {[
          {
            title: "1. Meaningful Activities",
            content: `These are actions which give us a sense of accomplishment, joy or satisfaction.

They are things we love to do – but we do these less when we feel stressed or down.

Reflect on what you really love to do, but have stopped doing?
Think about the things you can start to do again – but keep your expectations realistic.
Schedule simple things that make you relax, smile and laugh (e.g. listen to music, read, watch a movie).`,
          },
          {
            title: "2. Healthy Thinking",
            content: `Healthy thinking is about treating ourselves (and others) with respect.

Check your self-talk – are you being self-critical?
Check your expectations – are they unrealistic?
Give yourself a break – allow yourself to be less than perfect.`,
          },
          {
            title: "3. Goals and Plans",
            content: `Having a goal keeps us motivated and gives us something to look forward to.

Review your plans – what are you looking forward to?
Set 3 simple goals for tomorrow that you’ll achieve, then celebrate those wins.`,
          },
          {
            title: "4. Healthy Routines",
            content: `Routines like going to sleep and waking up at the same time set us up for the day.

Think about when you last felt grounded – what habits helped?
Make small changes to routines and celebrate the improvements.`,
          },
          {
            title: "5. Staying Connected",
            content: `We are social beings and need regular connection.

Make time to connect with someone you care about, even briefly.
Plan social activities that make you feel supported and uplifted.`,
          },
        ].map((item, index) => (
          <details key={index} style={{ marginBottom: "10px" }}>
            <summary
              style={{
                fontWeight: "bold",
                cursor: "pointer",
                padding: "10px",
                background: "#e0e0e0",
                borderRadius: "5px",
              }}
            >
              {item.title}
            </summary>
            <p
              style={{
                padding: "10px",
                background: "#f9f9f9",
                whiteSpace: "pre-wrap",
              }}
            >
              {item.content}
            </p>
          </details>
        ))}
      </div>

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
