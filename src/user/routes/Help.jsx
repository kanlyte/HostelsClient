// import Banner from "./Banner";

//imports from mui
import { Button } from "@mui/material";
import AttachEmailOutlinedIcon from "@mui/icons-material/AttachEmailOutlined";
import SettingsPhoneOutlinedIcon from "@mui/icons-material/SettingsPhoneOutlined";
import TtyOutlinedIcon from "@mui/icons-material/TtyOutlined";
import MarkEmailReadOutlinedIcon from "@mui/icons-material/MarkEmailReadOutlined";
import RoomOutlinedIcon from "@mui/icons-material/RoomOutlined";
import Banner from "./Banner";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
export default () => {
  return (
    <>
      <div className="help-container">
        {/* <Banner /> */}
        <Header />
        <div className="helpcenter">
          <div className="heading">
            <h4 style={{ marginTop: "15px" }}>Help Desk</h4>
          </div>
          <div className="body">
            <div className="b-1">
              <h4>Welcome to lyte help center</h4>
              <p>
                Feel free to sign in to access our help desk - We are available
                for you 24/7
              </p>
            </div>
            <div className="b-2">
              <div className="b-2-1">
                <div className="b-2-2-1">
                  <AttachEmailOutlinedIcon />
                  <h5>Send us a message </h5>
                </div>
                <p>
                  Contact our help desk about your bookings or any inquiry - we
                  shall respond to you.
                </p>
              </div>
              <div className="b-2-2">
                <div className="b-2-2-2">
                  <SettingsPhoneOutlinedIcon />
                  <h5>Call us</h5>
                </div>
                <p>
                  For any emergency - make a direct call to our beacon team.
                </p>
              </div>
            </div>
            <div className="b-3">
              <Button size="large">Lyte mobile app will soon be here !</Button>
            </div>
          </div>
        </div>
        <div className="contact-cards">
          <div className="email0">
            <MarkEmailReadOutlinedIcon fontSize="large" color="primary" />
            <h3>Email Us</h3>
            <p>
              <span style={{ color: "#1f93ff" }}>kanlyteug@gmail.com</span>,
              This is our support centered email where you can mail any issues.
            </p>
          </div>
          <div className="call0">
            <TtyOutlinedIcon fontSize="large" color="primary" />
            <h3>Call Us</h3>
            <p>
              <span style={{ color: "#1f93ff" }}>
                +256-787-299-525 | +256-706-533-720
              </span>
              . These are our customer care numbers. Available 24/7
            </p>
          </div>
          <div className="location0">
            <RoomOutlinedIcon fontSize="large" color="primary" />
            <h3>Location</h3>
            <p>
              <span style={{ color: "#1f93ff" }}>Lira University !</span> Ayere
              Village, Barapwo subcounty, Lira city West.
            </p>
          </div>
        </div>
        <div className="leavemessage">
          <div className="message-img"></div>
          <div className="message-form"></div>
        </div>
        <Footer />
      </div>
    </>
  );
};
