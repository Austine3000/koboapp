import React, { Component } from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import * as home from "../../store/actions";
import { Bar } from "react-chartjs-2";
import "./Home.scss";

const data = {
  labels: [
    "MAR 2018",
    "APR 2018",
    "MAY 2018",
    "JUN 2018",
    "JUL 2018",
    "AUG 2018"
  ],
  datasets: [
    {
      label: "My First dataset",
      backgroundColor: "rgb(238, 168, 38)",
      fillColor: "rgba(220,220,220,0.5)",
      strokeColor: "rgba(220,220,220,0.8)",
      highlightFill: "rgba(220,220,220,0.75)",
      highlightStroke: "rgba(220,220,220,1)",
      data: [667, 2059, 800, 1081, 2300, 1755]
    },
    {
      label: "My Second dataset",
      backgroundColor: "rgb(49, 49, 155)",
      fillColor: "rgb(64, 64, 130)",
      strokeColor: "rgb(64, 64, 130)",
      highlightFill: "rgb(64, 64, 130)",
      highlightStroke: "rgb(64, 64, 130)",
      data: [2008, 1408, 1440, 1945, 1860, 2227]
    }
  ]
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true
        }
      }
    ]
  }
};
class Home extends Component {
  componentWillMount() {
    this.props.onGetAllGraphContent();
  }
  render() {
    return (
      <div>
        <nav className="nav-custom-style">
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <NavLink className="nav-link active" to="/">
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Requests
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Trips
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Routes
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Battlefield
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Wallet
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Notification|234
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Settings
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Logout
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className="row">
          <div className="col-sm-3">
            <div className="welcome-heading-style">
              <h2 className="welcome-note">WELCOME</h2>
              <h2 className="company-name">DHL Worldwide Express</h2>
            </div>
            <div className="side-bar-style">
              <div className="side-bar-inner-style">
                <p className="side-title">Total Requests</p>
                <p>5,129</p>
              </div>
            </div>
            <div className="side-bar-style">
              <div className="side-bar-inner-style">
                <p className="side-title">Active Trips</p>
                <p>129</p>
              </div>
            </div>
            <div className="side-bar-style">
              <div className="side-bar-inner-style">
                <p className="side-title">Completed Trips</p>
                <p>2,002</p>
              </div>
            </div>
            <div className="side-bar-style">
              <div className="side-bar-inner-style">
                <p className="side-title">Total Revenue</p>
                <p>#23,000,237</p>
              </div>
            </div>
            <div className="side-bar-style">
              <div className="side-bar-inner-last-style">
                <p className="side-title">Pending Requests</p>
                <p>15</p>
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            <div className="main-content-area">
              <h2 className="page-name">Shipping & Trip report</h2>
              <Bar data={this.props.graphdata} options={options} height={80} />
              <h2 className="page-name">Active Trips</h2>
              <table class="table">
                <thead>
                  <tr>
                    <th className="table-heading" scope="col">
                      ID & Date
                    </th>
                    <th className="table-heading" scope="col">
                      Trip
                    </th>
                    <th className="table-heading" scope="col">
                      Class
                    </th>
                    <th className="table-heading" scope="col">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>2342</b> <br />
                      20/01/19
                    </td>
                    <td className="table-body">
                      Apapa, Lagos, Nigeria <span className="to-style">to</span>{" "}
                      Ore-Ondo road, Ondo, Nigeria
                    </td>
                    <td className="table-body">40ft Flatbed</td>
                    <td className="table-body">
                      {" "}
                      <span className="dot" />
                      Loading
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>2342</b> <br />
                      20/01/19
                    </td>
                    <td>
                      Apapa, Lagos, Nigeria <span className="to-style">to</span>{" "}
                      Ore-Ondo road, Ondo, Nigeria
                    </td>
                    <td>40ft Flatbed</td>
                    <td>
                      {" "}
                      <span className="dot" />
                      Enroute
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>2342</b> <br />
                      20/01/19
                    </td>
                    <td>
                      Apapa, Lagos, Nigeria <span className="to-style">to</span>{" "}
                      Ore-Ondo road, Ondo, Nigeria
                    </td>
                    <td>40ft Flatbed</td>
                    <td>
                      {" "}
                      <span className="dot" />
                      Delivered
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="row footer-custom-style">
          <div className="col-sm-5">
            <h5 className="footer-heading">Kobo360</h5>
            <p className="footer-paragraph">
              The company is disrupting the $150 billion Africa logistics
              industry, which still mostly relies on telephones, opaque pricing
              and full of expensive middleman.
            </p>
            <p className="footer-paragraph">
              @ Copyright 2018, All Rights Reserved, Kobo Logistics
            </p>
          </div>
          <div className="col-sm-2">
            <h5 className="footer-heading">For Shippers</h5>
            <ul>
              <li>Login</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="col-sm-2">
            <h5 className="footer-heading">For Shippers</h5>
            <ul>
              <li>Login</li>
              <li>Terms of service</li>
              <li>Privacy policy</li>
            </ul>
          </div>
          <div className="col-sm-3">
            <h5 className="footer-heading">Contact</h5>
            <p className="footer-paragraph">
              22 Ikorodu road, Jibowu Yaba, Lagos, Nigeria
            </p>
            <p className="footer-paragraph">info@kobo360.com 08037899876</p>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    graphdata: state.home.graphdata
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onGetAllGraphContent: () => dispatch(home.getAllGraphContent())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
