import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import './DashboardSidebar.scss';

class DashboardSidebar extends Component {
  render() {
    return (
      <section id="sideMenu">
        <nav>
          <NavLink to="/dashboard/overview">
            <i className="fas fa-tachometer-alt" />
            <span>Overview</span>
          </NavLink>
          <NavLink to="/dashboard/template">
            <i className="fas fa-file-alt" />
            <span>Template</span>
          </NavLink>
        </nav>
      </section>
    );
  }
}

export default DashboardSidebar;
