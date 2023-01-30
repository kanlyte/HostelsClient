import React, {useState, useEffect} from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchIcon from '@mui/icons-material/Search';
import ExpandDownIcon from '@mui/icons-material/ExpandMoreOutlined';
import ExpandUpIcon from '@mui/icons-material/ExpandLessOutlined';
import Help from '@mui/icons-material/HelpOutlineOutlined';
import User from '@mui/icons-material/PersonOutlined';
import Close from '@mui/icons-material/CloseOutlined';
import CIcon from '@coreui/icons-react';
import * as icon from '@coreui/icons';
import "./Header.css";
import Logo from "..//../assets/logo.png"
import user from "..//../app.config";
// const user = _user ? _user[0] : {};




const Header = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    helpDropDownActive: false,
    userDropDownActive: false,
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
              <Link to="/category/627b655966349809adc1d7c6">
                <span className="sd-item-name">
                  <i className="las la-home ctg-icon"></i>
                  Home
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/">
                <span className="sd-item-name">
                  <i className="las la-hotel ctg-icon"></i>
                  Featured Hostels
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b658f66349809adc1d7d4">
                <span className="sd-item-name">
                  <i className="las la-phone ctg-icon"></i>
                  Contact Us
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b65d866349809adc1d7ed">
                <span className="sd-item-name">
                  <i className="las la-shield-alt ctg-icon"></i>
                  Privacy Policy
                </span>
              </Link>
            </li>
            <li className="sd-item">
              <Link to="/category/627b664566349809adc1d803">
                <span className="sd-item-name">
                  <i className="las la-file-alt ctg-icon"></i>
                  Terms &amp; Conditions
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
                  <Link to="/user/edit">
                    <span className="sd-item-name">
                      <i className="las la-user-edit ctg-icon"></i>
                      Edit Profile
                    </span>
                  </Link>
                </li>
                <li className="sd-item">
                  <button
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
                    <i className="las la-sign-out ctg-icon"></i>
                    Log out
                  </button>
                </li>
              </>
            ) : (
              <li className="sd-item">
                <Link to="/user/login">
                  <button className="sd-item-name plus-btn">
                    <i className="las la-sign-in-alt ctg-icon"></i>
                    Log in
                  </button>
                </Link>
              </li>
            )}
          </ul>
          <ul className="sd-ns1 sd-ns">
            <div className="sd-hdr">Seek for Help on Our System</div>
            <li className="sd-item">
              <Link to="/help/request">
                <span className="sd-item-name">
                  <i className="las la-bed ctg-icon"></i>
                  Describe Your Hostel
                </span>
              </Link>
            </li>
          </ul>
          <div>
            <div className="ftr-lw-center">
              <span style={{ fontWeight: "bold", fontSize: 20 }}>
                Beacon Web App
              </span>
              <div>
                {new Date().getFullYear()} &copy; Kanlyte Technologies
              </div>
              <div>All Rights Reserved</div>
            </div>
          </div>
        </div>
      </div>
    <header>
    <div className="hdr-banner-ctr">
      <div className="hdr-banner">
        <h4>beaconhostels@gmail.com</h4>
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
          <i className="las la-bars" style={{fontSize: "38px"}} ></i>
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
              <Link to="/help/request">
                <li className="-help">
                  <i className="lar la-user"></i>
                  Describe hostel
                </li>
              </Link>
              <Link to="/help">
                <li className="-help">
                  <i className="lar la-user"></i>
                  How To Book
                </li>
              </Link>
              <Link to="/help">
                <li className="-help">
                  <i className="las la-shopping-cart"></i>
                  Make comments
                </li>
              </Link>
              <li className="-help">
                <button className="-a-btn -lg" style={{ width: "100%" }}>
                  <i className="las la-sign-out-alt"></i>
                   Help Center
                </button>
              </li>
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
              <Link to="/user/orders">
                <li className="-help">
                  <i className="las la-gift"></i>
                  My Bookings
                </li>
              </Link>
              <a href="/user/edit">
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
