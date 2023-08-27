import React, {useState} from "react";
import {Link, Outlet, useNavigate} from "react-router-dom";
import "./register.css";
import axios from "axios";
import {useAuth} from "../context/AuthContext";
import {toast} from "react-hot-toast";

function Login() {
  const navigate = useNavigate();

  const [auth, setAuth] = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("/api/user/login", {
        email,
        password,
      });
      if (response && response.data.success) {
        toast.success(response.data && response.data.message);
        setAuth({
          ...auth,
          user: response.data.user,
          token: response.data.token,
        });
        localStorage.setItem("auth", JSON.stringify(response.data));
        navigate("recorder");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("something went wrong");
    }
  };

  if (auth.user) {
    return (
      <>
        <Outlet />
      </>
    );
  } else {
    return (
      <>
        <div className="container mt-5">
          {/* <div>
          <h1 className="text-center text-color">Screen Recording App</h1>
        </div> */}
          <form className="form-signup" onSubmit={handleLogin}>
            <h2 className="text-center">Login</h2>
            <p className="text-center">Login Your Account</p>
            <div className="form-group mt-3">
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

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
            </div>
            <button
              type="submit"
              className="btn btn-success w-100 btn-block mt-3">
              Login
            </button>
            <div>
              <p>
                Don't have an account ?
                <Link to="/" style={{textDecoration: "none", color: "#FF0000"}}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
        {/* <Outlet /> */}
      </>
    );
  }
}

export default Login;
