import "../Design/All.css";
import Passport from "../../assets/passport.jpeg";
import aggi from "../../assets/aggi.jpeg";
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
            students, travelllers and rourists, residents and all other
            categories of people accross Uganda. This system has all hostels,
            rentals, appartments, hotels, inns, and Motels which provide
            accomodation services to people and acced, registered and working
            with beacon hostels.
          </p>
        </div>
        <div className="m-v-c">
          <div className="vision">
            <h2>Our Vision</h2>
            <p>
              To build a reliable, efficient, secure, robust and reusable
              locally available software providing all online booking and
              payment preferences to the community.
            </p>
          </div>
          <div className="mission">
            <h2>Our Mission</h2>
            <p>
              Desire to avail all places of residence to the community for easy
              choice, selection, booking and decision making of the places of
              best suit, providing of a secure mobile wallet for saving and
              accumulation of fares, save payments
            </p>
          </div>
        </div>
        <div className="message">
          <div className="message-image">
            <img src={message} alt="" />
          </div>
          <div className="message-content">
            <h2>Send a message to our team for any inquires </h2>
            <div style={{ paddingLeft: "10px" }}>
              <TextField
                id="outlined-multiline-static"
                label="inquiry"
                multiline
                fullWidth
                rows={8}
                defaultValue="Type your message here"
              />
            </div>
            <div
              style={{
                paddingLeft: "10px",
                paddingTop: "20px",
                paddingBottom: "20px",
              }}
            >
              <Button variant="contained" fullWidth>
                Send message
              </Button>
            </div>
          </div>
        </div>
        <h2
          style={{
            textAlign: "center",
            marginTop: "50px",
            marginBottom: "50px",
            color: "#1f93ff",
          }}
        >
          Our Developer Team
        </h2>

        <div className="ourteam-team">
          <div className="team1">
            <img className="team-image" src={gaston} alt="" />
            <p style={{ marginLeft: "10px" }}>
              <span
                style={{
                  color: "#1f93ff",
                  fontWeight: "bolder",
                  fontSize: "large",
                }}
              >
                NAHURIRA GASTON
              </span>
              <br />
              <span>Back end developer</span>
            </p>
          </div>
          <div className="team2">
            <img className="team-image" src={Passport} alt="" />
            <p style={{ marginLeft: "10px" }}>
              <span
                style={{
                  color: "#1f93ff",
                  fontWeight: "bolder",
                  fontSize: "large",
                }}
              >
                WEKOBOSA SAMUEL
              </span>
              <br />
              <span>Front end developer</span>
            </p>
          </div>
          <div className="team3">
            <img className="team-image" src={aggi} alt="" />
            <p style={{ marginLeft: "10px" }}>
              <span
                style={{
                  color: "#1f93ff",
                  fontWeight: "bolder",
                  fontSize: "large",
                }}
              >
                AGGI PETER
              </span>
              <br />
              <span>Front end developer</span>
            </p>
          </div>
          <div className="team4">
            <img className="team-image" src={aggi} alt="" />
            <p style={{ marginLeft: "10px" }}>
              <span
                style={{
                  color: "#1f93ff",
                  fontWeight: "bolder",
                  fontSize: "large",
                }}
              >
                KUGUMIKIRIZA ANDREW
              </span>
              <br />
              <span>Graphics designer</span>
            </p>
          </div>
          <div className="team5">
            <img className="team-image" src={aggi} alt="" />
            <p style={{ marginLeft: "10px" }}>
              <span
                style={{
                  color: "#1f93ff",
                  fontWeight: "bolder",
                  fontSize: "large",
                }}
              >
                OBUA WOODGATE
              </span>
              <br />
              <span>Marketing manager</span>
            </p>
          </div>
        </div>
        <div className="our-pattners">
          <div className="lirauniversity"></div>
          <div className="kakebe"></div>
          <div className="amarahub"></div>
        </div>
      </div>
      <Footer />
    </>
  );
};
