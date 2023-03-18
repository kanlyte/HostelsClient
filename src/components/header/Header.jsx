import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from "@mui/icons-material/Search";
import ExpandDownIcon from "@mui/icons-material/ExpandMoreOutlined";
import User from "@mui/icons-material/PersonOutlined";
import Close from "@mui/icons-material/CloseOutlined";
import ExpandUpIcon from "@mui/icons-material/ExpandLessOutlined";
import Help from "@mui/icons-material/HelpOutlineOutlined";
import Policy from "@mui/icons-material/Shield";
import "./Header.css";
import Logo from "..//../assets/logo3.png";
import user from "..//../app.config";
import { Button } from "@mui/material";
// const user = _user ? _user[0] : {};

const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    helpDropDownActive: false,
    userDropDownActive: false,
    termsDropDownActive: false,
    sideNav: false,
    search_small_screen: false,
  });
  return (
    <>
      <div
        className="sidenav-ctr"
        style={
          state.sideNav
            ? { width: "60%", left: "0px" }
            : { left: "-70%", width: "0px" }
        }
      >
        <button
          className="close-side-nav"
          onClick={() => {
            setState({ ...state, sideNav: !state.sideNav });
          }}
        >
          <Close fontSize="medium" />
        </button>
        <div className="side-nav-content">
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Beacon Hostels</div>
            <li className="sd-item">
              <Link to="/">
                <span className="sd-item-name">
                  <i className="las la-home ctg-icon"></i>
                  Home
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/help">
                <span className="sd-item-name">
                  <i className="las la-phone ctg-icon"></i>
                  Contact Us
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/aboutus">
                <span className="sd-item-name">
                  <i className="las la-phone ctg-icon"></i>
                  About Us
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/privacypolicy">
                <span className="sd-item-name">
                  <i className="las la-shield-alt ctg-icon"></i>
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/tcs">
                <span className="sd-item-name">
                  <i className="las la-file-alt ctg-icon"></i>
                  Terms &amp; Conditions
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/becomelandlord">
                <span className="sd-item-name">
                  <i className="las la-user"></i>
                  Become Landlord
                </span>
              </Link>
            </li>
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">My Account</div>
            {user ? (
              <>
                <li className="sd-item">
                  <Link to="/user/profile">
                    <span className="sd-item-name">
                      <i className="las la-user ctg-icon"></i>
                      My Profile
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/bookings">
                    <span className="sd-item-name">
                      <i className="las la-layer-group ctg-icon"></i>
                      My Bookings
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/editprofile">
                    <span className="sd-item-name">
                      <i className="las la-user-edit ctg-icon"></i>
                      Edit Profile
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/usersecurity">
                    <span className="sd-item-name">
                      <i className="las la-user-edit ctg-icon"></i>
                      Security
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Link to="/user/closeaccount">
                    <span className="sd-item-name">
                      <i className="las la-user-edit ctg-icon"></i>
                      Close Account
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <Button
                    variant="contained"
                    className="sd-item-name plus-btn"
                    onClick={() => {
                      const token_stored = localStorage.getItem("token");
                      if (token_stored) {
                        localStorage.removeItem("token");
                      } else {
                        sessionStorage.removeItem("token");
                      }
                      window.location.replace("/");
                    }}
                  >
                    <i className="las la-sign-out-alt"></i> &nbsp; Log out
                  </Button>
                </li>
              </>
            ) : (
              <li className="sd-item">
                <Link to="/user/login">
                  <Button variant="contained">
                    <i className="las la-sign-in-alt ctg-icon"></i>
                    Log in
                  </Button>
                </Link>
              </li>
            )}
          </ul>
          <div>
            <div className="ftr-lw-center">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Beacon Web App
              </span>
              <div style={{ fontSize: 13 }}>
                {new Date().getFullYear()} &copy; Kanlyte Technologies
              </div>
            </div>
          </div>
        </div>
      </div>
      <header>
        <div className="hdr-banner-ctr">
          <div className="hdr-banner">
            <p>beaconhostels@gmail.com</p>
            <p>Call:0778089708/0706533720</p>
          </div>
        </div>
        <nav className="hdr-nav-ctr">
          <div className="hdr-nav">
            <div
              className="menu-toggle"
              onClick={() => {
                setState({
                  ...state,
                  sideNav: !state.sideNav,
                });
              }}
            >
              {/* <Menu fontSize="large" /> */}
              <i className="las la-bars" style={{ fontSize: "38px" }}></i>
              {/* <CIcon icon={icon.cilAlignLeft} size="xl"/> */}
            </div>
            <Link to="/">
              <div className="hdr-nav-logo">
                <img src={Logo} alt="" />
              </div>
            </Link>
            <div className="hdr-search-ctr">
              <form className="hdr-search">
                <input
                  type="text"
                  name="search"
                  placeholder="Search hostels...."
                />
                <button className="search-icon" type="submit">
                  <SearchIcon fontSize="medium" />
                </button>
              </form>
            </div>
            <div className="hdr-user">
              <div className="hdr-user-help">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    setState({
                      ...state,
                      helpDropDownActive: true,
                    });
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        helpDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <Help fontSize="small" />
                  <span>Help</span>
                  {state.helpDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.helpDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/help">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      Describe hostel
                    </li>
                  </Link>
                  <Link to="/bookmanual">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      How To Book
                    </li>
                  </Link>
                  <Link to="/becomelandlord">
                    <li className="-help">
                      <i className="las la-user"></i>
                      Become Landlord
                    </li>
                  </Link>
                  <Link to="/helpcenter">
                    <li className="-help">
                      <button className="-a-btn -lg" style={{ width: "100%" }}>
                        <i className="las la-sign-out-alt"></i>
                        Help Center
                      </button>
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="hdr-user-terms">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    setState({
                      ...state,
                      termsDropDownActive: true,
                    });
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        termsDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <Policy fontSize="small" />
                  <span>Essentials</span>
                  {state.termsDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.termsDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/tcs">
                    <li className="-help">
                      <i className="las la-file-alt"></i>
                      Terms & Conditions
                    </li>
                  </Link>
                  <Link to="/privacypolicy">
                    <li className="-help">
                      <i className="las la-shield-alt"></i>
                      Privacy Policy
                    </li>
                  </Link>
                  <Link to="/aboutus">
                    <li className="-help">
                      <i className="las la-phone"></i>
                      About Us
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="hdr-user-account">
                <button
                  className="-dropdown"
                  onFocus={() => {
                    if (user) {
                      setState({
                        ...state,
                        userDropDownActive: true,
                      });
                    } else {
                      navigate("/user/login");
                    }
                  }}
                  onBlur={() => {
                    setTimeout(() => {
                      setState({
                        ...state,
                        userDropDownActive: false,
                      });
                    }, 500);
                  }}
                >
                  <User />
                  <span>
                    {user ? `${user.full_name.split(" ")[0]}` : "Account"}
                  </span>
                  {state.userDropDownActive ? (
                    <ExpandUpIcon />
                  ) : (
                    <ExpandDownIcon />
                  )}
                </button>
                <ul
                  className="-help-list -acc-l"
                  style={
                    state.userDropDownActive
                      ? { display: "flex" }
                      : { display: "none" }
                  }
                >
                  <Link to="/user/profile">
                    <li className="-help">
                      <i className="lar la-user"></i>
                      My Profile
                    </li>
                  </Link>
                  <Link to="/user/bookings">
                    <li className="-help">
                      <i className="las la-gift"></i>
                      My Bookings
                    </li>
                  </Link>
                  <a href="/user/editprofile">
                    <li className="-help">
                      <i className="las la-user-edit"></i>
                      Edit Profile
                    </li>
                  </a>
                  <li className="-help">
                    <button
                      className="-a-btn -lg"
                      style={{ width: "100%" }}
                      onClick={() => {
                        const token_stored = localStorage.getItem("token");
                        if (token_stored) {
                          localStorage.removeItem("token");
                        } else {
                          sessionStorage.removeItem("token");
                        }
                        window.location.replace("/");
                      }}
                    >
                      <i className="las la-sign-out-alt"></i>
                      Log Out
                    </button>
                  </li>
                </ul>
              </div>
            </div>
            <div className="hdr-icons-ctr-sm">
              <div
                className="search-i-sm"
                onClick={() => {
                  setState({
                    ...state,
                    search_small_screen: !state.search_small_screen,
                  });
                }}
              >
                <SearchIcon fontSize="large" />
              </div>
              <div className="user-i-sm">
                <Link to="/user/profile">
                  <User fontSize="large" />
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <div
          className="search-bar-sm-appr"
          style={
            state.search_small_screen
              ? { display: "block" }
              : { display: "none" }
          }
        >
          <form
            className="hdr-search"
            // onSubmit={submitSearch}
            style={{ height: "50px" }}
          >
            <input type="text" name="search" placeholder="Search Hostels...." />
            <button className="search-icon" type="submit">
              <SearchIcon fontSize="medium" />
            </button>
          </form>
        </div>
      </header>
    </>
  );
};

export default Header;
