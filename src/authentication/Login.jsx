import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import "./style.css";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="container">
      <div className="box">
        <div className="login_title">
          <h2>
            <span>Login</span> |Register
          </h2>
          <p onClick={() => navigate("/register")}>✖</p>
        </div>
        <br />
        <div className="login">
          <p>Enter your username and password to login.</p>
          <input type="text" placeholder="almamun_uxui@outlook.com" />
          <input type="text" placeholder="password" />
          <p>Forgot Password?</p>
          <button
            style={{
              backgroundColor: "rgba(70, 163, 88, 1)",
              color: "white",
              paddingLeft: "140px",
            }}
          >
            Login
          </button>
          <br />
          <h3>Or login with</h3>
          <button>
            <FcGoogle /> Login with Google
          </button>
          <button>
            <FaFacebookF /> Login with Facebook
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
