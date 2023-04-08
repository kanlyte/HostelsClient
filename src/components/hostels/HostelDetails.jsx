import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import "../design/Hosteldetails.css";
import { useNavigate, useParams } from "react-router-dom";
import FormsApi from "../../api/api";
import { Button } from "@mui/material";
import Footer from "../footer/Footer";
import { Base64 } from "js-base64";
import user from "..//../app.config";
import ScrollUp from "../../utils/ScrollUp";
import Reviews from "./Reviews";

const HostelDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [index, setIndex] = useState(0);
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState({
    hostel: {},
    landlord: {},
  });

  useEffect(() => {
    (async () => {
      let res = await new FormsApi().get(`/hostel/${params.id}`);
      if (res !== "Error"){
        if (res.status) {
          setState({
            ...state,
            hostel: res.result.hostel || {},
            landlord: res.result.landlord || {},
          });
        }
      }
    })();
    return () => {
      setState({ hostel: {}, landlord: {}, });
    };
  }, []);
  // console.log(state.reviews);
 
  return (
    <>
      {/* <MetaData title={`${product.name}`} /> */}
      <Header />
      <div className="hostel-detail-container">
        <div>
          <div className="image-container">
            {state.hostel.hostel_images
              ? JSON.parse(state.hostel.hostel_images).map((image, i) => {
                  if (i === 0) {
                    return (
                      <div key={i}>
                        <img
                          src={index ? index : image}
                          alt="Hostel img"
                          className="hostel-detail-image"
                        />
                      </div>
                    );
                  }
                })
              : "No Hostel Images"}
          </div>
          <div className="small-images-container">
            {state.hostel.hostel_images
              ? JSON.parse(state.hostel.hostel_images).map((item, i) => {
                  return (
                    <img
                      key={i}
                      src={item}
                      className={
                        i === index
                          ? "small-image selected-image"
                          : "small-image"
                      }
                      onMouseEnter={() => setIndex(item)}
                    />
                  );
                })
              : "No Hostel Images"}
          </div>
        </div>
        <div className="hostel-detail-desc">
          <h2>{state.hostel.hostel_name}</h2>
          <h4>Hostel Description: </h4>
          <p>{state.hostel.hostel_description}</p>
          <div className="quantity">
            <h5>
              Single Rooms Available: {state.hostel.single_rooms_available}
            </h5>
            <h4>
              Double Rooms Available: {state.hostel.double_rooms_available}
            </h4>
          </div>
          <h4 className="h_s">Hostel Fee Structure: </h4>
          <p>
            The Hostel Fee is <strong>{state.hostel.single_room_amount}</strong>{" "}
            for a single Room and{" "}
            <strong>{state.hostel.double_room_amount}</strong> for a Double Room
          </p>
          <p className="price">
            Booking Fee: (UGX): {state.hostel.booking_fee}
          </p>
          <div className="buttons">
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                window.history.back();
              }}
            >
              Cancel Hostel
            </Button>
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                if (Boolean(user)) {
                  navigate(`/bookingform?hostel=${state.hostel.id}`);
                } else {
                  navigate("/user/login");
                }
                // localStorage.setItem("hostel_id", Base64.encode(JSON.stringify(state.hostel.id)));
              }}
            >
              Book Now
            </Button>
          </div>
        </div>
      </div>
      <Reviews hstl={state.hostel}/>
      <Footer />
      <ScrollUp />
    </>
    //   )}
  );
};

export default HostelDetails;
