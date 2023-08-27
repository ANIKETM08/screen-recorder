import React from "react";
import {NavLink} from "react-router-dom";
import {useAuth} from "../context/AuthContext";
import "./navbar.css";

const Navbar = () => {
  const [auth, setAuth] = useAuth();

  const logout = () => {
    setAuth({
      ...auth,
      user: null,
      token: "",
    });
    localStorage.removeItem("auth");
    alert.success("Logout Successfully");
  };

  return (
    <div>
      <nav
        className="navbar navbar-expand-lg shadow-lg fixed-top  mb-1 w-100"
        style={{
          backgroundImage: "linear-gradient(to right, #434343 0%, black 100%)",
        }}>
        <div className="container-fluid nav-con">
          <div>
            <p
              className="text-center text-color font-style"
              style={{fontSize: "40px", fontWeight: "600"}}>
              Screen Recorder
            </p>
          </div>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse my-auto" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {!auth.user ? (
                <>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/"
                      style={{color: "#fff"}}>
                      Register
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/login"
                      style={{color: "#fff"}}>
                      Login
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  <div className="nav-item dropdown float-right mx-1">
                    <NavLink
                      className="nav-link dropdown-toggle"
                      style={{color: "#fff"}}
                      role="button"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false">
                      {!!auth.user ? <>{auth.user.username}</> : ""}
                    </NavLink>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown">
                      <li>
                        <NavLink
                          to="/login"
                          onClick={logout}
                          className="dropdown-item"
                          style={{color: "#fff"}}>
                          logout
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
