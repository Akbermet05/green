import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebookF } from "react-icons/fa6";
import "./style.css";
import { useAuth } from "../context/AuthContext";
const Register = () => {
  const { register } = useAuth();
  const [form, setForm] = useState({
    // name: "",
    username: "",
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(form.name, form.username, form.email, form.password);
  };
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
        <form className="login1" onSubmit={handleSubmit}>
          <p>Enter your username and password to Register</p>
          <input
            onChange={handleChange}
            type="text"
            placeholder="Username"
            name="username"
            value={form.username}
          />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Enter your email address || phone.."
            name="email"
            value={form.email}
          />
          <input
            onChange={handleChange}
            type="password"
            placeholder="password"
            name="password"
            value={form.password}
          />
          <button
            type="submit"
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
        </form>
      </div>
    </div>
  );
};

export default Register;

// import React, { useState } from "react";
// import scss from "./Register.module.scss";
// import { useAuth } from "../context/AuthContext";
// // import { Alert } from "bootstrap";
// const Register = () => {
//   const [form, setForm] = useState({
//     name: "",
//     username: "",
//     email: "",
//     password: "",
//   });
//   const { register, error } = useAuth();
//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     register(form.name, form.username, form.email, form.password);
//   };
//   return (
//     <div className={scss.mainContainer}>
//       <form className={scss.register} onSubmit={handleSubmit}>
//         {/* {error && (<Alert message={error} type="error" showIcon />)()} */}
//         <h1>Register</h1>
//         <input
//           onChange={handleChange}
//           type="text"
//           name="name"
//           value={form.name}
//           placeholder="name"
//         />
//         <input
//           onChange={handleChange}
//           type="text"
//           name="username"
//           value={form.username}
//           placeholder="username"
//         />
//         <input
//           onChange={handleChange}
//           type="text"
//           name="email"
//           value={form.email}
//           placeholder="Email"
//         />
//         <input
//           onChange={handleChange}
//           type="password"
//           name="password"
//           value={form.password}
//           placeholder="Password"
//         />
//         <button type="submit">register</button>
//       </form>
//     </div>
//   );
// };
// export default Register;
