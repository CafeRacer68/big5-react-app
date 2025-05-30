import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

// Utility to detect iOS devices
const isIOS = () => {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
};

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    console.log("🔐 Auth attempt:", isLogin ? "Login" : "Sign Up", email);

    try {
      if (isLogin) {
        await signInWithEmailAndPassword(auth, email, password);
        console.log("✅ Logged in");
      } else {
        await createUserWithEmailAndPassword(auth, email, password);
        console.log("✅ Account created");
      }

      navigate("/"); // Redirect to home
    } catch (err) {
      console.error("❌ Auth error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div
      style={{
        padding: 20,
        maxWidth: 400,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      {/* Logo */}
      <img
        src="/big5applogo.svg"
        alt="Big 5 App Logo"
        style={{ width: "150px", marginBottom: "10px" }}
      />

      {/* Tagline */}
      <p
        style={{
          marginTop: 0,
          marginBottom: "10px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        Free Digital Mental Health App
      </p>

      {/* Autoplaying YouTube video */}
      <iframe
        width="100%"
        height="200"
        src="https://www.youtube.com/embed/lYGyyJ2bzCw?autoplay=1&mute=1&playsinline=1"
        title="Big 5 Mental Health Intro by Prof Nick Titov"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        style={{ borderRadius: "10px", marginBottom: "20px" }}
      ></iframe>

      <h2>{isLogin ? "Login" : "Create Account"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
          autoFocus={!isIOS()}
        />
        <br />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
        />
        <br />
        <br />
        <button
          type="submit"
          style={{
            width: "100%",
            padding: "10px",
            backgroundColor: "#003366",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          {isLogin ? "Login" : "Sign Up"}
        </button>
      </form>

      <p style={{ color: "red" }}>{error}</p>

      <button
        onClick={() => setIsLogin(!isLogin)}
        style={{
          marginTop: "10px",
          background: "none",
          border: "none",
          color: "#003366",
          cursor: "pointer",
          textDecoration: "underline",
        }}
      >
        {isLogin
          ? "Need an account? Sign Up"
          : "Already have an account? Login"}
      </button>
    </div>
  );
};

export default Login;
