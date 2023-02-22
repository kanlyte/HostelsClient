import Banner from "./Banner";
import "../Design/All.css";
import Footer from "../../components/footer/Footer";

export default () => {
  return (
    <>
      <div className="bookmanualcontainer">
        <Banner />
        <div className="bookingmanual">
          <div className="bookheading">
            <h4>Booking Manual</h4>
            <p>
              Hello our estemmed client. The beacon hostels team is privilaged
              to have you here. Feel free to mail us in case of any matters
              concerning our services. Our official email is
              <span style={{ color: "#1f93ff" }}> kanlyteug@gmail</span>
            </p>
          </div>
          <div className="bookdetails">
            {/* <hr /> */}
            <h4>Procedures For Booking</h4>
            <p>
              <span style={{ color: "#1f93ff" }}>1:</span> Browse to our
              official site{" "}
              <span style={{ color: "#1f93ff" }}>beaconhostels.com</span>Here,
              you will see / search for any hostel or rental around Lira
              university.
            </p>
            <p>
              <span style={{ color: "#1f93ff" }}>2:</span> Click to a hostel
              that you have loved to have your stay in.This shall take you to a
              page where the description of that hostel is, the terms and
              conditions, available rooms, booking fares and all other necessary
              information about that hostel.Once you are not satisfied with that
              hostel, click the back arrow to get to all other histels, If you
              love the ostel, Place the button
              <span style={{ color: "#1f93ff" }}>Procced to book</span>
            </p>
            <p>
              <span style={{ color: "#1f93ff" }}>3:</span> Once you procced to
              book, you shall be required to loginto your beacon account if you
              have any, else you will be required to create a beacon account
              with the system.
            </p>
            <p>
              <span style={{ color: "#1f93ff" }}>4:</span> A booking form shall
              then be presented to you where you shall be entitled to confirm
              with the hostel under which you are booking a room, and other
              neccessary information that shall be required of you.
            </p>
            <p>
              <span style={{ color: "#1f93ff" }}>5:</span> Confirm your booking
              by pressing
              <span style={{ color: "#1f93ff" }}>Confirm my booking</span>
            </p>
            {/* <hr /> */}
          </div>
          <div className="payment">
            <h4>Payments Methods</h4>
            <p>
              Booking fee and other payments / rent fees are currently being
              payed manually. An Automated payment module is being worked upon
              to ease payments of booking fee and rent fees.
            </p>
            <hr />
            <h4>Thanks for booking with us.</h4>
            <h5>In the name of the beacon</h5>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
