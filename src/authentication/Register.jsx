import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import "./style.css";
const Register = () => {
  return (
    <div className="container">
      <div className="box">
        <div className="login_tittle">
          <h2>
            <>Login |</> <span>Register</span>
          </h2>
          <p>✖</p>
        </div>
        <br />
        <div className="login1">
          <p>Enter your username and password to Register</p>
          <input type="text" placeholder="Username" />
          <input type="text" placeholder="Enter your email address" />
          <input type="text" placeholder="password" />
          <input type="text" placeholder="Confirm Password" />
          <button
            style={{
              backgroundColor: "rgba(70, 163, 88, 1)",
              color: "white",
              paddingLeft: "140px",
            }}
          >
            Register
          </button>
          <br />
          <h3>Or register with</h3>
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

export default Register;
