function SwitchtoSignUp() {
  const switchToSignUp = () => {
    window.location = "/signup";
  };

  return (
    <>
      <p>Don't have an account?</p>
      <button onClick={switchToSignUp} id="switchBtn">
        Sign Up
      </button>
    </>
  );
}

export default SwitchtoSignUp;
