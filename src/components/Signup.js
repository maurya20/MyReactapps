import React from "react";
import "./Signup.css";
import { Link } from "react-router-dom";

const Signup = () => {
  return (

    <div className="signup-form">
      <form>
        <h2>Sign Up</h2>
          <div className="form-group">
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  for="first_name"
                  name="first_name"
                  placeholder="First Name"
                  required="required"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
                  for="last_name"
                  name="last_name"
                  placeholder="Last Name"
                  required="required"
                />
              </div>
            </div>
          </div>
          <div className="form-group">
            <input
              type="text"
              className="form-control"
              for="username"
              name="username"
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              for="email"
              name="email"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              for="password1"
              name="password1"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              for="password2"
              name="password2"
              placeholder="Confirm Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <label className="form-check-label">
              <input type="checkbox" required="required" /> I accept the{" "}
              <Link to={"/home"}>Terms of Use</Link> &amp; <Link to={"/home"}>Privacy Policy</Link>
              <button
                type="submit"
                className="btn btn-success"
                style={{float:"right"}}
              >
                Sign Up
              </button>
            </label>
          </div>
          <div className="form-group"></div>
        </form>
        <h5>
          Have an account?{" "}
          <Link to={"/home"}>
            <h4 className="btn btn-primary">Login here</h4>
          </Link>
        </h5>
      </div>
    
  );
};

export default Signup
