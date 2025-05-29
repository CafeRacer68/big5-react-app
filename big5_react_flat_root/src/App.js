import "./App.css";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";

import { auth, requestNotificationPermission } from "./firebase";
import MoodCheckin from "./MoodCheckin";
import DailyMessage from "./DailyMessage";
import Journal from "./Journal";
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
      // If not logged in, redirect to login page
      navigate("/login");
    } else {
      // Set user's name for welcome message
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
      <h1>Welcome back, {userName} 👋</h1>
      <MoodCheckin />
      <DailyMessage />
      <Journal />
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
