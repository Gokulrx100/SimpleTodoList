function SwitchToSignIn() {
  const switchContainer = () => {
    window.location = "/signin";
  };

  return (
    <>
      <p>Already have an account?</p>
      <button onClick={switchContainer} id="switchBtn">
        Sign In
      </button>
    </>
  );
}

export default SwitchToSignIn;
