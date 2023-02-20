import React from "react";
import "./Footer.css";
import Footerimg from "..//../assets/logo.png";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <>
      <footer>
        <div className="ftr_container top">
          <div className="subscribe" id="contact">
            <h2>Subscribe to Our newsletter</h2>
            <p>This will help us connected with you in case of any query</p>
            <div className="input flex">
              <input type="email" placeholder="Your Email address" />
              <button className="flex1 __btn">
                <span>Subscribe</span>
                <i className="fas fa-arrow-circle-right"></i>
              </button>
            </div>
          </div>

          <div className="content grid  top">
            <div className="box">
              <div className="__logo">
                <h1 style={{ color: "orange" }}>Beacon Hostels</h1>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.{" "}
              </p>
              <div class="social flex">
                <i class="fab fa-facebook-f"></i>
                <i class="fab fa-twitter"></i>
                <i class="fab fa-instagram"></i>
                <i class="fab fa-youtube"></i>
              </div>
            </div>

            <div className="box">
              <h2>Quick Links</h2>
              <ul>
                <li>
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    How to book
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    Describe Hostel
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    Make comments
                  </Link>
                </li>
                <li>
                  {" "}
                  <Link
                    to="/help/request"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            <div className="box">
              <h2>Services</h2>
              <ul>
                <li>
                  <i class="fas fa-angle-double-right"></i>Savings
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Mobile money pay
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Hostels
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Discounts
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>Events
                </li>
                <li>
                  <i class="fas fa-angle-double-right"></i>recommended hostels
                </li>
              </ul>
            </div>

            <div className="box">
              <h2>Address</h2>
              <div className="icon flex">
                <div className="i">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="text">
                  <h3>Address</h3>
                  <p>Lira Uganda</p>
                </div>
              </div>
              <div className="icon flex">
                <div className="i">
                  <i className="fas fa-phone"></i>
                </div>
                <div className="text">
                  <h3>Phone</h3>
                  <p>+256762677787</p>
                </div>
              </div>
              <div className="icon flex">
                <div className="i">
                  <i className="far fa-envelope"></i>
                </div>
                <div className="text">
                  <h3>Email</h3>
                  <p>beaconhostel@gmail.com</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
