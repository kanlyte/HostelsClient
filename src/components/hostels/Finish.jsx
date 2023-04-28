import React, { useEffect, useState } from "react";
import "../design/finish.css";
import Header from "../header/Header";
import airtel from "..//../assets/airtel.png";
import mtn from "..//../assets/mtn-logo.png";
import { Button } from "@mui/material";
import FormsApi from "../../api/api";
import user from "..//../app.config";
import ScrollUp from "../../utils/ScrollUp";
import Footer from "../footer/Footer";
import { Link } from "react-router-dom";
const shortid = require("shortid");

function Finish() {
  const [state, setState] = useState({
    bookings: [],
  });
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
    <Header />
     <div class="booking_ctr">
      <div className="bkng_ctr_1">
        <div className="s-1-head">
          <span>
            <i class="fas fa-check-circle -s-i-3"></i>
            <b>My Booking Details</b>
          </span>
        </div>
        <div className="card-body">
        <table width="100%">
        <thead>
          <tr>
            <td>Hostel</td>
            <td>Room No</td>
            <td>Booking Fee</td>
            <td>Payment Token</td>
            <td>Payment Status</td>
          </tr>
        </thead>
        <tbody>
        {state.bookings.length === 0 ? (
          <div>
          <p style={{ padding: "5px" }}>loading ......</p>
          </div>
          ) : (
            state.bookings.map((v, i) => {
              return(
                <tr key={i}>
                  <td>{v.name_of_hostel}</td>
                  <td>{v.room_number}</td>
                  <td>{v.booking_fee}</td>
                  <td>{v.payment_code}</td>
                  <td>
                    <Button
                     variant="contained"
                     color={
                     v.book_status === true ? "primary" : "secondary"
                     }>
                    {v.book_status === true ? "Confirmed" : "Pending"}
                    </Button>
                  </td>
                </tr>
              )}
            ))}
        </tbody>
        </table>
        </div>
        <div className="--terms">
        <b>Note the following:</b>
              <ol>
                <li>Appending room can be booked by another person.</li>
                <li>Your booking code shall expire in 12 hours. Once you exceed 12 hours before paying your booking fee, your booking will be canceled.</li>
                <li>Please note that the booking fee is part of the Room Amount.</li>
                <li>Your booking status shall be changed to completed from your bookings and there you will have completed the booking process.</li>
              </ol>
              <Link to="/">
              <button className="btn-terms">Return Home</button>
              </Link>
        </div>
      </div>
      <div className="bkng_ctr_1">
        <div className="s-1-head">
          <span>
            <i class="fas fa-check-circle -s-i-3"></i>
            <b>Pay with Merchant code</b>
          </span>
        </div>
        <div class="p-order-address payment">
          <form id="pay-form">
            <div class="mm-input">
              <label for="payment_method" class="-mm-l">
                <b> Using Mobile Money</b> - MTN
              </label>
            </div>
            <div class="-mm-img">
              <img src={mtn} alt="" />
            </div>
            <div class="p-order-procedure">
              <b>Merchant Code Payment Procedure Using MTN:</b>
              <ol>
                <li>Dial '*165*3#'</li>
                <li>Enter Our Authorised Merchant Code</li>
                <li>Enter Booking Fee</li>
                <li>Enter your PIN And Approve The Payment</li>
                <li>
                  You will receive SMS/Email confirming a successful payment.
                </li>
              </ol>
            </div>
          </form>
        </div>
        <div className="bkng_ctr_2">
        <div className="s-1-head">
          <span>
            <b>Pay with Merchant code</b>
          </span>
        </div>
        <div class="p-order-address payment">
          <form id="pay-form">
            <div class="mm-input">
              <label for="payment_method" class="-mm-l">
                <b> Using Airtel Money</b> - AIRTEL
              </label>
            </div>
            <div class="-mm-img">
              <img src={airtel} alt="" />
            </div>
            <div class="p-order-procedure">
              <b>Merchant Code Payment Procedure Using Airtel:</b>
              <ol>
                <li>Dial '*185*9#'</li>
                <li>Enter Our Authorised Merchant Code</li>
                <li>Enter Booking Fee</li>
                <li>Enter your PIN And Approve The Payment</li>
                <li>
                  You will receive SMS/Email confirming a successful payment.
                </li>
              </ol>
            </div>
          </form>
        </div>
      </div>
      </div>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
}

export default Finish;
