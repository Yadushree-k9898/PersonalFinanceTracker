import React, { useEffect } from "react";
import "./styles.css";
import { auth } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";

const Header = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate("/dashboard");
    }
  }, [user, loading]);

  const LogoutFnc = () => {
    try {
      signOut(auth)
        .then(() => {
          toast.success("Logout successful");
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.message);
        });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="navbar">
      <p className="logo">MoneyMinder.</p>
      {user && (
        <p onClick={LogoutFnc} className="logo link">
          Logout
        </p>
      )}
    </div>
  );
};

export default Header;
