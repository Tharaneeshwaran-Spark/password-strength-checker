function StrengthMeter({ password }) {
  let score = 0;

  if (password.length >= 6) score += 1;
  if (/[A-Z]/.test(password)) score += 1;
  if (/[a-z]/.test(password)) score += 1;
  if (/[0-9]/.test(password)) score += 1;
  if (/[@$!%*?&]/.test(password)) score += 1;

  let width = "0%";
  let color = "#ef4444"; // red

  if (score <= 2) {
    width = "30%";
    color = "#ef4444";
  } else if (score <= 4) {
    width = "65%";
    color = "#f59e0b";
  } else {
    width = "100%";
    color = "#22c55e";
  }

  return (
    <div style={{ marginTop: "15px" }}>
      <div
        style={{
          width: "100%",
          height: "10px",
          background: "#334155",
          borderRadius: "5px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width,
            height: "100%",
            background: color,
            transition: "all 0.6s ease", // 🔥 ANIMATION
          }}
        ></div>
      </div>
    </div>
  );
}

export default StrengthMeter;
