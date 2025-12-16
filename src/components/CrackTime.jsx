import GPUWarning from "./GPUWarning";

function CrackTime({ password }) {
  if (!password) return null;

  let charsetSize = 0;

  if (/[a-z]/.test(password)) charsetSize += 26;
  if (/[A-Z]/.test(password)) charsetSize += 26;
  if (/[0-9]/.test(password)) charsetSize += 10;
  if (/[@$!%*?&]/.test(password)) charsetSize += 7;

  const combinations = Math.pow(charsetSize, password.length);
  const guessesPerSecond = 1e9;
  const seconds = combinations / guessesPerSecond;

  function formatTime(sec) {
    if (sec < 60) return `${Math.round(sec)} seconds`;
    if (sec < 3600) return `${Math.round(sec / 60)} minutes`;
    if (sec < 86400) return `${Math.round(sec / 3600)} hours`;
    if (sec < 31536000) return `${Math.round(sec / 86400)} days`;
    return `${Math.round(sec / 31536000)} years`;
  }

  return (
    <>
      <p style={{ marginTop: "10px", color: "#38bdf8" }}>
        ⏱ Estimated crack time: <b>{formatTime(seconds)}</b>
      </p>
      <GPUWarning seconds={seconds} />
    </>
  );
}

export default CrackTime;

