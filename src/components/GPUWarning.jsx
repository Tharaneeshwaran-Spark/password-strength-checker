function GPUWarning({ seconds }) {
  if (!seconds || seconds === Infinity) return null;

  let message = "✅ Resistant to GPU attacks";
  let color = "#22c55e";

  if (seconds < 3600) {
    message = "❌ Crackable by modern GPU in minutes";
    color = "#ef4444";
  } else if (seconds < 86400) {
    message = "⚠️ Crackable by GPU in hours";
    color = "#f59e0b";
  }

  return (
    <p style={{ marginTop: "8px", color }}>
      🔴 {message}
    </p>
  );
}

export default GPUWarning;
