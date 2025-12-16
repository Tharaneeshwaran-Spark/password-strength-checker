function FeedbackPanel({ password }) {
  let message = "❌ Weak Password";

  if (
    password.length >= 8 &&
    /[A-Z]/.test(password) &&
    /[a-z]/.test(password) &&
    /[0-9]/.test(password) &&
    /[@$!%*?&]/.test(password)
  ) {
    message = "✅ Strong Password";
  } else if (password.length >= 6) {
    message = "⚠️ Medium Password";
  }

  return <p style={{ marginTop: "10px" }}>{message}</p>;
}

export default FeedbackPanel;
