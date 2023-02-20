import "../Design/All.css";
import Passport from "../../assets/passport.jpeg";
import OurTeam from "..//../assets/ourteam.jpeg";
export default () => {
  return (
    <>
      <div className="aboutuscontainer">
        <div className="aboutus">
          <div className="aboutusdescription">
            <h2>Beacon Hostels App</h2>
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
            <h4 style={{ color: "blue" }}>About Beacon Hostels app</h4>
            <p>
              Beacon hostels is a room booking application that is developed
              locally in Uganda. It was developed to solve problems that are
              existing in the use of manual ways of booking rooms by different
              categories of people including university and institutional
              students, travelllers and rourists, residents and all other
              categories of people accross Uganda. This syatem has all hostels,
              rentals, appartments, hotels, inns, and Motels which provide
              accomodation services to people and acced, registered and working
              with beacon hostels.
            </p>
          </div>
          <div className="aboutusimage">
            <img className="aboutus-image" src={OurTeam} alt="" />
          </div>
        </div>
        <div className="ourteam">
          <div className="ourteam-head">
            <h1>Our team</h1>
            <p>
              We're impartial and independent, and every day we create
              distinctive,reusable , rubost, and world-class reintermediate
              softwares.
            </p>
          </div>
          <div className="ourteam-team">
            <div className="team1">
              <img className="team-image" src={Passport} alt="" />
              <h3>Name</h3>
              <p>Position</p>
            </div>
            <div className="team2">
              <img className="team-image" src={Passport} alt="" />
              <h3>Name</h3>
              <p>Position</p>
            </div>
            <div className="team3">
              <img className="team-image" src={Passport} alt="" />
              <h3>Name</h3>
              <p>Position</p>
            </div>
            <div className="team4">
              <img className="team-image" src={Passport} alt="" />
              <h3>Name</h3>
              <p>Position</p>
            </div>
            <div className="team5">
              <img className="team-image" src={Passport} alt="" />
              <h3>Name</h3>
              <p>Position</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
