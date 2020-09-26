import React, { Component } from "react";
import "./Footer.css";

export class Footer1 extends Component {
  render() {
    return (
      <div className="footer1">
        <div className="container-fluid">
          <div className="row">
            <div className="col">
              {" "}
              <h5 className="title">M & M Enterprises</h5>
              <p>Email: mukesh.ice17@gmail.com</p>
              <p>Mob: 9540339805</p>
            </div>
            <div className="col">
              <h5 className="title">Links</h5>
              <ul>
                <li className="list-unstyled">
                  <a href="https://maurya20.github.io/rrt/">
                    Sample Trading Info Website
                  </a>
                </li>
                <li className="list-unstyled">
                  <a href="https://maurya20.github.io/amb_website/">
                    Sample Company Info Website
                  </a>
                </li>
              </ul>
            </div>
            <div className="col">
              <h3>Some thing here!!</h3>
              <p>Another things.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer1;
