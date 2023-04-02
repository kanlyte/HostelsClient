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
            <h2>-----Your Bookings------</h2>
            <p>
              Hello &nbsp; &nbsp;
              <span style={{ fontSize: "15px", color: "black" }}>
                {user ? user.full_name : ""}
              </span>
            </p>
            <p>The following is your booking details</p>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell style={{ color: "black", fontWeight: "bolder" }}>
                      Hostel
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Room No
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Booking Fee
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Payment token
                    </TableCell>
                    <TableCell
                      align="right"
                      style={{ color: "black", fontWeight: "bolder" }}
                    >
                      Status
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {state.bookings.length === 0 ? (
                    <div>
                      <h4>Keep around, your bookings are loading</h4>
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
                          <TableCell align="right">100,000</TableCell>
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
            {/* <p>
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Hostel:&nbsp; &nbsp;
              </span>
              Greysn
            </p>
            <p>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Type or room:&nbsp; &nbsp;
              </span>
              Single
            </p>
            <p>
              <span
                style={{
                  fontSize: "15px",
                  fontWeight: "bolder",
                  color: "black",
                }}
              >
                Room Amount:&nbsp; &nbsp;
              </span>
              Ugsh:800000
            </p>
            <p>
              <p>
                <span
                  style={{
                    fontSize: "15px",
                    fontWeight: "bolder",
                    color: "black",
                  }}
                >
                  Booking Fee:&nbsp; &nbsp;
                </span>
                Ugsh:100000
              </p>
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Booking code:&nbsp; &nbsp;
              </span>{" "}
              10362
            </p>
            <p>
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                Booking status:&nbsp; &nbsp;
              </span>
              Pending
            </p> */}
            <p>A pending room can be booked by another person.</p>
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
            <h2>How to pay booking fee</h2>
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
              Follow the following procedures to complete your payment using our
              merchant codes.
            </p>
            <p>
              Dial{" "}
              <span
                style={{
                  fontSize: "15px",
                  color: "black",
                  fontWeight: "bolder",
                }}
              >
                *598*7#
              </span>{" "}
              on your phone on either airtel or mtn network
            </p>
            <p>
              A list of services to be payed for shall be displayed. including
              Hostel, Hotel, Office space, appartments and others
            </p>
            <p>
              Select <span>Hostel</span>
            </p>
            <p>You will be required to enter your booking code</p>
            <p>After, you will enter the booking fee </p>
            <p>
              And complete the transaction by putting your mobile money pin.
            </p>
            <p>
              Your booking status shall be changed to completed from your
              bookings and there you will have completed the booking process.
            </p>
            <h4>
              For inquiries: call, whatsapp, or text <span>0762-534-356</span>
            </h4>
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
    </>
  );
};

export default Finish;
