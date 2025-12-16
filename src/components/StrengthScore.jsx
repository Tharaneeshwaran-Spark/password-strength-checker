function StrengthScore({ password }) {
  let score = 0;

  if (!password) return <p>Strength Score: 0 / 100</p>;

  // Length score (max 40)
  score += Math.min(password.length * 5, 40);

  // Character variety (max 40)
  if (/[a-z]/.test(password)) score += 10;
  if (/[A-Z]/.test(password)) score += 10;
  if (/[0-9]/.test(password)) score += 10;
  if (/[@$!%*?&]/.test(password)) score += 10;

  // Bonus entropy (max 20)
  if (password.length >= 12) score += 20;

  score = Math.min(score, 100);

  let color = "red";
  if (score >= 70) color = "green";
  else if (score >= 40) color = "orange";

  return (
    <p style={{ marginTop: "10px", color }}>
      📊 Strength Score: <b>{score} / 100</b>
    </p>
  );
}

export default StrengthScore;
