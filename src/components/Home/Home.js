import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./Home.scss";

class Home extends Component {
  render() {
    return (
      <div>
        <nav>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Active
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Link
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Link
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Home;
