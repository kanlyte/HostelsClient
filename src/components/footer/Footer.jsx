import React, { useState } from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { useSnackbar } from "notistack";
import { validateEmail } from "../../utils/data/validate";
import FormsApi from "../../api/api";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import PlayStore from "..//../assets/play-store-3.jpg";
function Footer() {
  const { enqueueSnackbar } = useSnackbar();
  const [submit, setSubmit] = useState(false);
  const [data, setData] = useState({
    email: "",
  });

  const newsletterHandler = async (e) => {
    e.preventDefault();
    setSubmit(true);
    if (data.email === "" || data.email === null) {
      enqueueSnackbar("email field is empty", { variant: "warning" });
    } else if (!validateEmail(data.email)) {
      enqueueSnackbar("Enter correct email format", { variant: "error" });
    } else {
      let api = new FormsApi();
      let res = await api.post("/new/subscriber", data);
      if (res.status === true) {
        enqueueSnackbar("Your Email has been added successfully", {
          variant: "success",
        });
        setSubmit(true);
        setData({
          email: "",
        });
      } else if (res.status === false) {
        enqueueSnackbar("An error occured", { variant: "warning" });
        setSubmit(false);
      } else {
        enqueueSnackbar("Some other error occured", { variant: "warning" });
        setSubmit(false);
      }
    }
  };
  return (
    <>
      <footer>
        <div className="ftr-ctr">
          <div className="ftr-upper-flex">
            <div className="ftr-ns1">
              <div className="ftr-logo">
                <h1 style={{ color: "orange" }}>Beacon Hostels</h1>
                <div className="">
                  Beacon Hostels is an Online hostel management System
                  <br /> that Provides acess to all hostels and rental
                  surrounding
                  <br /> Lira University
                </div>
              </div>
              <div className="ftr-app">
                <h3>Get Our App On . . . .</h3>
                <div className="ftr-app-stores" style={{ marginTop: "15px" }}>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.lyte"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <img
                      src={PlayStore}
                      alt=""
                      height="45"
                      width="150"
                      style={{ marginRight: "5px" }}
                    />
                  </a>
                </div>
              </div>
              <div className="ftr-social">
                <div>Follow Us On our Social Media handles</div>
                <span>
                  <a
                    href="https://www.youtube.com/@kanlyteugtutorials2525"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <LinkedInIcon />
                  </a>
                </span>
                <span>
                  <a
                    href="https://twitter.com/Kanlyte_"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <TwitterIcon />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.youtube.com/@kanlyteugtutorials2525"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <YouTubeIcon />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.youtube.com/@kanlyteugtutorials2525"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <FacebookIcon />
                  </a>
                </span>
                <span>
                  <a
                    href="https://www.youtube.com/@kanlyteugtutorials2525"
                    style={{ color: "rgba(255, 255, 255, 0.5)" }}
                  >
                    <InstagramIcon />
                  </a>
                </span>
              </div>
            </div>
            <div className="ftr-ns2">
              <div className="ftr-hdg">Explore Beacon</div>
              <div className="ftr-link">
                <Link
                  to="/aboutus"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  About Us
                </Link>
              </div>
              <div className="ftr-link">
                <Link
                  to="/help/request"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  How to Book
                </Link>
              </div>
              <div className="ftr-feedback">
                <h4>Subscribe to Our newsletter</h4>
                <form autoComplete="off" onSubmit={newsletterHandler}>
                  <input
                    type="email"
                    name="email"
                    className="--contact"
                    placeholder="Enter your Email"
                    value={data.email}
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                  <br />
                  <button type="submit" className="---btn-1">
                    subscribe
                  </button>
                </form>
              </div>
            </div>
            <div className="ftr-ns3">
              <div className="ftr-hdg">Services</div>
              <div className="ftr-link">Savings</div>
              <div className="ftr-link">Mobile Money pay</div>
              <div className="ftr-link">Hostels</div>
              <div className="ftr-link">Discounts</div>
              <div className="ftr-link">Help &amp; FAQs</div>
            </div>
            <div className="ftr-ns4">
              <div className="ftr-hdg">Quick Links</div>
              <div className="ftr-link">
                <Link to="/help" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  Contact Us
                </Link>
              </div>
              <div className="ftr-link">
                <Link to="/tcs" style={{ color: "rgba(255, 255, 255, 0.5)" }}>
                  Terms & C
                </Link>
              </div>
              <div className="ftr-link">
                <Link
                  to="/privacypolicy"
                  style={{ color: "rgba(255, 255, 255, 0.5)" }}
                >
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>
          <div className="ftr-lw-center">
            <div>
              {new Date().getFullYear()} &copy; Kanlyte Technologies LTD
            </div>
            <div>All Rights Reserved</div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
