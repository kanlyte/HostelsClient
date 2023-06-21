import "../Design/All.css";
import Passport from "../../assets/passport.jpeg";
import aggi from "../../assets/aggi.jpeg";
import obua from "../../assets/obua.jpg";
import gaston from "../../assets/gaston.jpeg";
import OurTeam from "..//../assets/ourteam.jpeg";
import Banner from "./Banner";
import q1 from "../../assets/q1.png";
import q2 from "../../assets/q2.png";
import message from "../../assets/message.JPG";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";
import ScrollUp from "../../utils/ScrollUp";
import Pageloader from "../../utils/PageLoader";
import { useState } from "react";
import PageStarter from "../../utils/PageStarter";
import styled from "styled-components";
import BTeam from "./BTeam";
export default () => {
  const [loader, setLoader] = useState(true);
  setTimeout(() => {
    setLoader(false);
  }, 1500);
  return (
    <>
      {loader && <Pageloader />}
      <div className="aboutuscontainer">
        <Header />
        <div className="aboutus">
          <div
            className="aboutusdescription wow fadeInLeft"
            data-wow-delay=".5s"
          >
            <h2 style={{ marginTop: "15px" }}>Beacon Hostels App</h2>
            <p>
              This is a product under Kanlyte technlogies.
              <br />
              Kanlyte Technologies is a technology based company that aims to
              digitalize Uganda through providing science and technological
              services to communities in an efficient way.We offer enhanced IT
              and business services so as to link the country to the outside
              world by developing solutions for real time problems.We do
              software development, mobile app development, graphics design,
              business process management, website development, monitoring and
              evaluation systems,ICT consultancy, business support and also
              conduct internship trainings at all levels.
            </p>
          </div>
          <div className="aboutusimage">
            <img className="aboutus-image" src={OurTeam} alt="" />
          </div>
        </div>
        <div className="aboutbeacon">
          <h2>About Beacon Hostels app</h2>
          <p>
            Beacon hostels is a room booking application that is developed
            locally in Uganda. It was developed to solve problems that are
            existing in the use of manual ways of booking rooms by different
            categories of people including university and institutional
            students, travelllers and tourists, residents and all other
            categories of people accross the country. This system has all
            hostels, rentals, appartments, hotels, inns, and Motels which
            provide accomodation services to people that are registered and
            working with beacon hostels.
          </p>
        </div>
      </div>

      <div className="wrapper-ctr">
        <div className="cards_wrap">
          <div className="card_item">
            <div className="card_inner">
              <i className="las la-eye"></i>
              <div className="role_name">Our Vission</div>
              <div className="film">
                To build a reliable, efficient, secure, robust and reusable
                locally available software providing all online booking and
                payment preferences to the community.
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_inner">
              <i className="las la-angle-double-right"></i>
              <div className="role_name">Our Mission</div>
              <div className="film">
                Desire to avail all places of residence to the community for
                easy choice, selection, booking and decision making of the
                places of best suit, providing of a secure mobile wallet for
                saving and accumulation of fares and payments with timely
                notifications, messages and emails about the transactions made.
              </div>
            </div>
          </div>
          <div className="card_item">
            <div className="card_inner">
              <i className="las la-history"></i>
              <div className="role_name">Our Core-Values</div>
              <div className="film">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </div>
            </div>
          </div>
        </div>
      </div>
      <BTeam />
      <Footer />
      <ScrollUp />
    </>
  );
};
