function LogOut() {
  const logout = () => {
    localStorage.removeItem("token");
    window.location = "/signin";
  };

  return (
    <button id="logout-button" onClick={logout}>
      LogOut
    </button>
  );
}

export default LogOut;
