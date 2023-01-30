import { Phone, QuestionAnswerOutlined } from "@mui/icons-material";
import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import ThanksImg from "..//..//../assets/thanks.svg";
import "..//../Design/finish.scss";
import user from "..//..//../app.config";
function finish() {
  return (
    <>
      <div className="_bking">
        <div className="_f_booking_ctr">
          <div className="_booking_info">
            <div className="_img">
              <img src={ThanksImg} alt="" width="80%" height="80%" />
            </div>
            <div className="_b_text">
              <strong style={{ fontSize: "20px" }}>
                {" "}
                {user ? user.full_name : ""}
              </strong>{" "}
              Thanks for booking with Us....
              <br />
              Navigate to <Link to="/user/bookings" style={{color: "blue"}}>bookings</Link> to view your
              booking details
              <br />
              You will also receive an EMAIL
              <br />
              containing the booking information and our team will contact you
              for more info.
            </div>
            <Link to="/">
              <Button
                variant="contained"
                color="primary"
                style={{
                  margin: "20px 0px",
                  width: "100px !important",
                }}
              >
                Return to Home Page
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default finish;
