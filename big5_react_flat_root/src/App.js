import "./App.css";
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

import { auth, requestNotificationPermission } from "./firebase";
import DailyNudge from "./DailyNudge";
import NavBar from "./components/NavBar";
import Resources from "./components/Resources";
import UrgentHelp from "./components/UrgentHelp";
import Login from "./Login";
import Checklist from "./components/Checklist"; // ✅ NEW
import Big5Accordion from "./components/Big5Accordion";

function Home() {
  const [userName, setUserName] = useState(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const name =
          user.displayName?.split(" ")[0] ||
          user.email?.split("@")[0] ||
          "legend";
        setUserName(name);
      } else {
        navigate("/login");
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, [navigate]);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <div style={{ textAlign: "center", marginBottom: "20px" }}>
        <img
          src="/big5applogo.svg"
          alt="The Big 5 App Logo"
          style={{ width: "200px", height: "auto" }}
        />
      </div>

      <h1>Welcome Back!</h1>

      <p style={{ marginTop: 10 }}>
        The Big 5 are five groups of actions that are strongly linked to good
        mental health.
        <br />
        The Big 5 App is designed to help you to do more of the Big 5, so that
        you can be the best version of yourself.
      </p>

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

      <div style={{ marginBottom: "30px" }}>
        <DailyNudge />
      </div>

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
        <Route path="/checklist" element={<Checklist />} /> {/* ✅ NEW */}
      </Routes>
    </Router>
  );
}

export default App;
