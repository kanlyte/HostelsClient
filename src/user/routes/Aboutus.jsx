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
        <div className="m-v-c">
          <div className="vision c_card">
            <h2>Our Vision</h2>
            <p>
              To build a reliable, efficient, secure, robust and reusable
              locally available software providing all online booking and
              payment preferences to the community.
            </p>
          </div>
          <div className="mission c_card">
            <h2>Our Mission</h2>
            <p>
              Desire to avail all places of residence to the community for easy
              choice, selection, booking and decision making of the places of
              best suit, providing of a secure mobile wallet for saving and
              accumulation of fares and payments with timely notifications,
              messages and emails about the transactions made.
            </p>
          </div>
        </div>
        <Container>
          <section class="w3l-team-main team py-5" id="team">
            <div class="container py-lg-5">
              <div class="title-content text-center mb-2">
                <h6 class="title-subw3hny mb-1">Our Team</h6>
                <h3 class="title-w3l">Who Worked With Us.</h3>
              </div>
              <div class="row team-row justify-content-center">
                <div class="col-lg-4 col-6 team-wrap mt-lg-5 mt-4">
                  <div class="team-member text-center">
                    <div class="team-img">
                      <img src={gaston} alt="" class="radius-image" />
                      <div class="overlay-team">
                        <div class="team-details text-center">
                          <div class="socials mt-20">
                            <a href="#url">
                              <span class="fab fa-facebook-f"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-twitter"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-linkedin-in"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#url" class="team-title">
                      Lawrence Petrie
                    </a>
                    <p>Selling Agent</p>
                  </div>
                </div>
                <div class="col-lg-4 col-6 team-wrap mt-lg-5 mt-4">
                  <div class="team-member text-center">
                    <div class="team-img">
                      <img src={aggi} alt="" class="radius-image" />
                      <div class="overlay-team">
                        <div class="team-details text-center">
                          <div class="socials mt-20">
                            <a href="#url">
                              <span class="fab fa-facebook-f"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-twitter"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-linkedin-in"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#url" class="team-title">
                      Jack Peters
                    </a>
                    <p>Selling Agent</p>
                  </div>
                </div>
                <div class="col-lg-4 col-6 team-wrap mt-lg-5 mt-4">
                  <div class="team-member text-center">
                    <div class="team-img">
                      <img src={obua} alt="" class="radius-image" />
                      <div class="overlay-team">
                        <div class="team-details text-center">
                          <div class="socials mt-20">
                            <a href="#url">
                              <span class="fab fa-facebook-f"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-twitter"></span>
                            </a>
                            <a href="#url">
                              <span class="fab fa-linkedin-in"></span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                    <a href="#url" class="team-title">
                      Anna Phillips
                    </a>
                    <p>Selling Agent</p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </Container>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};
const Container = styled.div`
  .team-landing {
    background: #6c757d;
  }

  .grid-alignment {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 30px;
    align-items: end;
  }

  .w3l-team-main .team {
    position: relative;
  }

  .w3l-team-main .our-team .team-row {
    margin-left: -40px;
    margin-right: -40px;
  }

  .w3l-team-main .our-team .team-wrap {
    padding: 0 40px;
  }

  .w3l-team-main .our-team .container-fluid,
  .w3l-team-main .our-team .container-sm,
  .w3l-team-main .our-team .container-md,
  .w3l-team-main .our-team .container-lg,
  .w3l-team-main .our-team .container-xl,
  .w3l-team-main .our-team .container-sm,
  .w3l-team-main .our-team .container-md,
  .w3l-team-main .our-team .container-lg,
  .w3l-team-main .our-team .container-xl,
  .w3l-team-main .our-team .container-sm,
  .w3l-team-main .our-team .container-md,
  .w3l-team-main .our-team .container-lg,
  .w3l-team-main .our-team .container-xl {
    padding: 0 50px;
  }

  .w3l-team-main .team-img img {
    transition: all 0.2s ease-in-out;
    overflow: hidden;
    width: 80%;
  }

  .w3l-team-main .team-member,
  .w3l-team-main .team-img {
    position: relative;
    overflow: hidden;
  }

  .w3l-team-main .team-title {
    margin: 25px 0 0px;
    font-size: 20px;
    color: var(--heading-color);
    font-weight: 600;
    display: block;
  }

  .w3l-team-main .team-member p {
    text-transform: capitalize;
  }

  .w3l-team-main .team-details {
    opacity: 0;
    position: absolute;
    bottom: 12%;
    left: 0;
    overflow: hidden;
    width: 100%;
    z-index: 2;
    transition: all 0.4s ease-in-out;
  }

  .w3l-team-main .team-img:hover .team-details {
    opacity: 1;
  }

  .w3l-team-main .team-img:hover .overlay-team {
    opacity: 1;
  }

  .w3l-team-main .team-member:hover a {
    color: var(--primary-color);
  }

  .w3l-team-main .socials a {
    display: inline-block;
    margin-right: 5px;
  }

  .w3l-team-main .socials a span {
    color: var(--heading-color);
    font-size: 16px;
    display: block;
    width: 42px;
    height: 42px;
    border-radius: 50%;
    line-height: 42px;
    text-align: center;
    transition: all 0.3s ease 0s;
    background: var(--bg-color);
  }

  .w3l-team-main .team-details .socials span {
    color: var(--heading-color);
  }

  .w3l-team-main .socials a:hover span {
    background: #fff;
    color: var(--primary-color);
  }

  @media all and (max-width: 991px) {
    .w3l-team-main .team-title {
      margin: 18px 0 0px;
      font-size: 20px;
    }
  }

  @media all and (max-width: 667px) {
    .grid-alignment {
      display: grid;
      grid-template-columns: 1fr;
      grid-gap: 20px;
      align-items: end;
    }

    .call-grids-w3 .grids-1 {
      padding: 30px 10px;
    }

    .call-grids-w3 .grids-1 h4 a {
      margin: 25px 0 0px;
      font-size: 18px;
    }
  }

  @media all and (max-width: 568px) {
    .team-row {
      padding: 0 10px;
    }

    .team-row .col-6 {
      padding: 0 10px;
    }
  }

  @media all and (max-width: 415px) {
    .team-row {
      padding: 0 5px;
    }
  }

  @media all and (max-width: 384px) {
    .w3l-team-main .team-title {
      font-size: 18px;
    }

    .w3l-team-main .socials a span {
      width: 38px;
      height: 38px;
      line-height: 38px;
    }

    .w3l-team-main .socials a {
      margin-right: 2px;
    }
  }
`;
