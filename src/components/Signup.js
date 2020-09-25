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
                  placeholder="First Name"
                  required="required"
                />
              </div>
              <div className="col">
                <input
                  type="text"
                  className="form-control"
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
              placeholder="Username"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              required="required"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
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
