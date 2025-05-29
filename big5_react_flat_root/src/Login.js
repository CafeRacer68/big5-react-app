import React, { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

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

      navigate("/"); // ✅ Redirect to Home after login/signup
    } catch (err) {
      console.error("❌ Auth error:", err.message);
      setError(err.message);
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 400, margin: "0 auto" }}>
      <h2>{isLogin ? "Login" : "Create Account"}</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          style={{ width: "100%", padding: "8px" }}
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
