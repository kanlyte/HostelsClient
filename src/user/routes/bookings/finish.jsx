import { Phone, QuestionAnswerOutlined } from "@mui/icons-material";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import Paper from "@mui/material/Paper";

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ThanksImg from "..//..//../assets/thanks.svg";
import "..//../Design/finish.scss";
import user from "..//..//../app.config";
import Footer from "../../../components/footer/Footer";
import FormsApi from "../../../api/api";
import ScrollUp from "../../../utils/ScrollUp";
const shortid = require("shortid");
const Finish = () => {
  const [state, setState] = useState({
    bookings: [],
  });
  console.log(state.bookings);
  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get(`/booking/user/${user.id}`);
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let bookings = [];
          res.result.forEach((w) => {
            bookings.push(w);
          });
          setState({ ...state, bookings });
        }
      }
    })();
  }, []);
  return (
    <>
      {/* <div className="_bking"> */}
      <div className="_f_booking_ctr">
        <div className="_booking_info">
          <div className="_booking_details">
            <div className="_img">
              {/* <img
                src={ThanksImg}
                alt="png"
                width="80%"
                height="80%"
                style={{ marginLeft: "10px" }}
              /> */}
            </div>
            <h2 style={{ color: "#007bff" }}>-----Your Bookings------</h2>
            <p>
              Hello &nbsp; &nbsp;
              <span style={{ fontSize: "15px", color: "#007bff" }}>
                {user ? user.full_name : ""}
              </span>
            </p>
            <p>The following is your booking details</p>
            <TableContainer
              className="--table--"
              component={Paper}
              // sx={{ maxWidth: "500px" }}
            >
              <Table size="small" aria-label="a dense table">
                <TableHead>
                  <TableRow>
                    <TableCell
                      style={{ color: "#007bff", fontWeight: "bolder" }}
                    >
                      Hostel
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "#007bff", fontWeight: "bolder" }}
                    >
                      Room No
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "#007bff", fontWeight: "bolder" }}
                    >
                      Booking Fee
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "#007bff", fontWeight: "bolder" }}
                    >
                      Payment token
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "#007bff", fontWeight: "bolder" }}
                    >
                      Payment Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.bookings.length === 0 ? (
                    <div>
                      <p style={{ padding: "5px" }}>loading ......</p>
                    </div>
                  ) : (
                    state.bookings.map((v, i) => {
                      return (
                        <TableRow
                          key={i}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell component="th" scope="row">
                            {v.name_of_hostel}
                          </TableCell>
                          <TableCell align="right">{v.room_number}</TableCell>
                          <TableCell align="right">{v.booking_fee}</TableCell>
                          <TableCell align="right">{v.payment_code}</TableCell>
                          <TableCell align="right">
                            <Button
                              variant="contained"
                              color={
                                v.book_status === true ? "primary" : "secondary"
                              }
                            >
                              {v.book_status === true ? "Confirmed" : "Pending"}
                            </Button>
                          </TableCell>
                        </TableRow>
                      );
                    })
                  )}
                </TableBody>
              </Table>
            </TableContainer>
            <p>A pending room can be booked by another person.</p>
            <p
              style={{
                fontSize: "15px",
                color: "black",
                fontWeight: "500",
              }}
            >
              Your booking code shall expire in 12 hours. Once you exceed 12
              hours before paying your booking fee, your booking will be
              canceled.
              <br />
              Please note that the booking fee is part of the Room Amount
            </p>
            <p>
              Your booking status shall be changed to completed from your
              bookings and there you will have completed the booking process.
            </p>
            <h4>
              For inquiries: call, whatsapp, or text <span>0762-534-356</span>
            </h4>
            <p style={{ color: "#007bff" }}>Thanks for booking with us</p>
            <div className="my__">
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
          <div className="_booking_payments">
            <h2 style={{ color: "#007bff" }}>How to pay booking fee</h2>

            <p>
              The following are the different methods of paying the booking fee
            </p>
            <h4>Method 1: Using Payment Code</h4>
            <div className="--mtd1--">
              <p>
                <span style={{ color: "#007bff" }}>Using MTN Network</span>
                <br />
                Dial
                <span
                  style={{
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  *165*1*1#
                </span>
                <br />
                Enter this number:
                <span
                  style={{
                    fontSize: "15px",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  03924367477
                </span>
                <br />
                Enter your booking fee corresponding to the booking that you are
                paying for
                <br />
                Enter the payment code as a reason for the booking that you are
                paying
                <br />
                Enter your MMomey pin to complete your payment.
              </p>
            </div>
            {/* <h4>Using AIRTEL Network</h4> */}
            <p>
              <span style={{ color: "#007bff" }}>Using AIRTEL Network</span>
              <br />
              Dial
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                *185*1*1#
              </span>
              <br />
              Enter this number:
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                03924367477
              </span>
              <br />
              Enter your booking fee corresponding to the booking that you are
              paying for
              <br />
              Enter the payment code as a reason for the booking that you are
              paying
              <br />
              Enter your MMomey pin to complete your payment.
            </p>

            <br />
            <h4>Method 2: Using Merchant Code</h4>
            <p>
              <span style={{ color: "#007bff" }}>Using MTN Network</span>
              <br />
              Dial
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                *165*3#
              </span>
              <br /> Enter our authorized merchant code
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                45643
              </span>
              <br />
              Enter Booking fee
              <br /> Enter your MMomey pin to complete your payment.
            </p>
            <p>
              <span style={{ color: "#007bff" }}>Using AIRTEL Network</span>
              <br />
              Dial
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                *185*9#
              </span>
              <br />
              Enter our authorized merchant code
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                45643
              </span>
              <br />
              Enter Booking fee
              <br />
              Enter your MMomey pin to complete your payment.
            </p>

            <p style={{ color: "#007bff" }}>Thanks for booking with us</p>

            <div className="m__">
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
          {/* <div className="_img">
              <img src={ThanksImg} alt="" width="80%" height="80%" />
            </div>
            <div className="_b_text">
              <strong style={{ fontSize: "20px" }}>
                
                {user ? user.full_name : ""}
              </strong>
              Your booking request has been received but still pending.
              <br />
              Your Paim
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
            </Link> */}
        </div>
      </div>
      {/* </div> */}
      <Footer />
      <ScrollUp/>
    </>
  );
};

export default Finish;
