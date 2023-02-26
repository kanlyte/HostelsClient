import "../Design/All.css";
import Passport from "../../assets/passport.jpeg";
import OurTeam from "..//../assets/ourteam.jpeg";
import Banner from "./Banner";
import q1 from "../../assets/q1.png";
import q2 from "../../assets/q2.png";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default () => {
  return (
    <>
      <div className="aboutuscontainer">
        {/* <Banner /> */}
        <Header />
        <div className="aboutus">
          <div className="aboutusdescription">
            <h2 style={{ marginTop: "15px" }}>Beacon Hostels App</h2>
            <p>
              This is a product under Kanlyte technlogies.
              <br />
              KANLYTE TECHNOLOGIES is a technology based company that aims to
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
          <h4 style={{ color: "blue" }}>About Beacon Hostels app</h4>
          <p>
            Beacon hostels is a room booking application that is developed
            locally in Uganda. It was developed to solve problems that are
            existing in the use of manual ways of booking rooms by different
            categories of people including university and institutional
            students, travelllers and rourists, residents and all other
            categories of people accross Uganda. This system has all hostels,
            rentals, appartments, hotels, inns, and Motels which provide
            accomodation services to people and acced, registered and working
            with beacon hostels.
          </p>
        </div>
        <div className="m-v-c">
          <div className="vision">
            <h4>Our Vision</h4>
            <p>
              To build a reliable, efficient, secure, robust and reusable
              locally available software providing all online booking and
              payment preferences to the community.
            </p>
          </div>
          <div className="mission">
            <h4>Our Mission</h4>
            <p>
              Desire to avail all places of residence to the community for easy
              choice, selection, booking and decision making of the places of
              best suit, providing of a secure mobile wallet for saving and
              accumulation of fares, save payments
            </p>
          </div>
          {/* <div className="m-o">
            <div className="o-image">
              <img src={q1} alt="" />
            </div>
            <div className="Objectives">
              <h4>Objectives</h4>
              <li>To provide a platform for online room booking.</li>
              <li>
                To provide a variety of choices of rooms and places of
                residence.
              </li>
              <li>Real time data and response to clients.</li>
              <li>Provision of a mobile payment gateway for all fares</li>
              <li>
                Provision of a mobile E-wallet for saving and accumulation of
                fares
              </li>
              <li> To provide a platform for managing houses by the owners</li>
            </div>
          </div>
          <div className="c-o">
            <div className="corevalues">
              <h4>Core Values</h4>
              <li>Integrity</li>
              <li>Transparency</li>
              <li>Responsibility</li>
              <li> Respect</li>
              <li>Honesty</li>
              <li>Loyalty</li>
              <li>Confidentiality</li>
              <li>Objectivity</li>
            </div>
            <div className="c-image">
              <img src={q2} alt="" />
            </div>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
};
