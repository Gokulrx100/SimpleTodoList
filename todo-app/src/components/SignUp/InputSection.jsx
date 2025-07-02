function InputSection({
  username,
  setUsername,
  password,
  setPassword,
  Signup,
}) {
  return (
    <>
      <input
        type="text"
        placeholder="Username"
        id="username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="password"
        id="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="off"
      />
      <button onClick={Signup}>Sign Up</button>
    </>
  );
}

export default InputSection;
