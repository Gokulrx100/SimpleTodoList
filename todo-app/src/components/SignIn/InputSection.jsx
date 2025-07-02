function InputSection({
  username,
  setUsername,
  password,
  setPassword,
  Signin,
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
      <button onClick={Signin}>Sign In</button>
    </>
  );
}

export default InputSection;
