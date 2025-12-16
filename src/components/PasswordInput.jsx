function PasswordInput({ setPassword }) {
  return (
    <div style={{ width: "100%", marginTop: "15px" }}>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => setPassword(e.target.value)}
        style={{
          width: "100%",
          padding: "12px",
          fontSize: "16px",
          borderRadius: "6px",
          border: "1px solid #cbd5f5",
          boxSizing: "border-box", // ⭐ IMPORTANT
          textAlign: "center",      // ⭐ CENTER TEXT
        }}
      />
    </div>
  );
}

export default PasswordInput;
