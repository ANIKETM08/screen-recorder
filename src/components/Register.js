import React, {useState} from "react";
import "./register.css";
import {Link, useNavigate} from "react-router-dom";
import axios from "axios";
import {toast} from "react-hot-toast";

const Register = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cpassword, setCpassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== cpassword) {
      alert("password not matching");
    } else {
      try {
        const response = await axios.post("/api/user/register", {
          username,
          email,
          password,
          cpassword,
        });
        if (response.data.success) {
          toast.success(response.data.message);
          navigate("/login");
        } else {
          toast.error(response.data.message);
        }
      } catch (error) {
        console.log(error);
        toast.error("something went wrong");
      }
    }
  };
  return (
    <>
      <div className="container mt-5">
        {/* <div>
          <h1 className="text-center text-color">Screen Recording App</h1>
        </div> */}
        <form className="form-signup" method="POST">
          <h2 className="text-center">Register</h2>
          <p className="text-center">Create Your Account</p>
          <div className="form-group mt-2">
            <input
              type="text"
              name="username"
              className="form-control"
              placeholder="Enter username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <div className="form-group mt-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                type="password"
                name="password"
                className="form-control"
                placeholder="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="form-group mt-3">
              <input
                className="form-control"
                type="password"
                name="confirm_password"
                placeholder="confirm password"
                value={cpassword}
                onChange={(e) => setCpassword(e.target.value)}
              />
            </div>
          </div>
          <button
            type="submit"
            onClick={handleSubmit}
            className="btn btn-success w-100 btn-block mt-3">
            Register
          </button>
          <div className="mt-2">
            <p>
              Already have an account ?
              <Link
                to="/login"
                style={{textDecoration: "none", color: "#FF0000"}}>
                Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
