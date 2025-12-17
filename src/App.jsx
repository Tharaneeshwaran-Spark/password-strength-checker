import { useState } from "react";
import PasswordInput from "./components/PasswordInput";
import StrengthMeter from "./components/StrengthMeter";
import FeedbackPanel from "./components/FeedbackPanel";
import CrackTime from "./components/CrackTime";
import StrengthScore from "./components/StrengthScore";

function App() {
  const [password, setPassword] = useState("");
  const [darkMode, setDarkMode] = useState(true);

  const theme = {
    background: darkMode
      ? "radial-gradient(circle at top, #020617, #000)"
      : "linear-gradient(to right, #f8fafc, #e5e7eb)",
    color: darkMode ? "white" : "#020617",
    glow: darkMode ? "56,189,248" : "59,130,246",
  };

  return (
    <>{}
      <style>
        {`
          @keyframes glowPulse {
            0% {
              box-shadow: 0 0 15px rgba(${theme.glow}, 0.35),
                          0 0 30px rgba(${theme.glow}, 0.15);
            }
            50% {
              box-shadow: 0 0 30px rgba(${theme.glow}, 0.55),
                          0 0 60px rgba(${theme.glow}, 0.25);
            }
            100% {
              box-shadow: 0 0 15px rgba(${theme.glow}, 0.35),
                          0 0 30px rgba(${theme.glow}, 0.15);
            }
          }

          @keyframes fadeSlideIn {
            from {
              opacity: 0;
              transform: translateY(25px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>

      <div
        style={{
          minHeight: "100vh",
          background: theme.background,
          color: theme.color,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          fontFamily: "Arial",
        }}
      >
        {/* MAIN CARD */}
        <div
          style={{
            width: "100%",
            maxWidth: "420px",
            padding: "24px",
            margin: "20px",
            background: darkMode
              ? "linear-gradient(145deg, #020617, #0f172a)"
              : "linear-gradient(145deg, #ffffff, #e5e7eb)",
            borderRadius: "16px",
            border: darkMode ? "1px solid #1e293b" : "1px solid #e5e7eb",
            textAlign: "center",
            position: "relative",
            animation:
              "fadeSlideIn 0.6s ease-out, glowPulse 3s ease-in-out infinite",
          }}
        >
          {/* DARK / LIGHT TOGGLE */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            style={{
              position: "absolute",
              top: "15px",
              right: "15px",
              background: "none",
              border: "none",
              fontSize: "18px",
              cursor: "pointer",
              color: theme.color,
            }}
          >
            {darkMode ? "☀️" : "🌙"}
          </button>

          <h2 style={{ marginBottom: "15px" }}>
            Password Strength Checker
          </h2>

          <PasswordInput setPassword={setPassword} />
          <StrengthMeter password={password} />
          <FeedbackPanel password={password} />
          <CrackTime password={password} />
          <StrengthScore password={password} />
        </div>
      </div>
    </>
  );
}

export default App;
