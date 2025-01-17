import React from "react";
import "./styles.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const LogoutFnc = () => {
    alert("Logout");
  };

  return (
    <div className="navbar">
      <p className="logo">MoneyMinder.</p>
      <p onClick={LogoutFnc} className="logo link">
        Logout
      </p>
    </div>
  );
};

export default Header;
