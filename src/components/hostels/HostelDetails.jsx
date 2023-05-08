import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import "../design/Hosteldetails.css";
import { useNavigate, useParams } from "react-router-dom";
import FormsApi from "../../api/api";
import { Button } from "@mui/material";
import Footer from "../footer/Footer";
import { validateEmail } from "../../utils/data/validate";
import { useSnackbar } from "notistack";
import { Base64 } from "js-base64";
import user from "..//../app.config";
import styled from "styled-components";
import Avarta from "../../assets/avarta.jpeg";
import ScrollUp from "../../utils/ScrollUp";

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
 
  return (
    <>
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
          <h4>Hostel Distance: </h4>
          <p>{state.hostel.hostel_distance}</p>
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
      <Review hostel={state.hostel}/>
      <Footer />
      <ScrollUp />
    </>
    //   )}
  );
};

export default HostelDetails;


const Review = ({hostel})=> {
const { enqueueSnackbar } = useSnackbar();
const [submit, setSubmit] = useState(false);
const [state, setState] = useState({
  reviews: [],
});
useEffect(() => {
  (async () => {
    const reviews = await new FormsApi().get(`/reviews/hostel/${hostel.id}`);
    if (reviews !== "Error") {
      if (reviews.status !== false) {
        setState({
          ...state,
          reviews: reviews.result,
        });
      }
    }
  })();
}, []);
// console.log(state.reviews);
    const submitReview = async (e) => {
      e.preventDefault();
      const fd = new FormData(e.target);
      let _fcontent = {};
      fd.forEach((value, key) => {
        _fcontent[key] = value;
      });
      if (_fcontent.review === "" || _fcontent.review === null) {
        enqueueSnackbar("Review field is blank", { variant: "error" });
      } else if (_fcontent.name === "" || _fcontent.name === null) {
        enqueueSnackbar("Name field is blank", { variant: "error" });
      } else if (_fcontent.email === "" || _fcontent.email === null) {
        enqueueSnackbar("Email field is blank", { variant: "error" });
      } else if (!validateEmail(_fcontent.email)) {
        enqueueSnackbar("Enter correct email format", { variant: "error" });
      } else {
        let api = new FormsApi();
        const submitTime = new Date().toString();
        let res = await api.post("/new/review", _fcontent);
        if (res.status === true) {
          enqueueSnackbar("Your Review has been added successfully", {
            variant: "success",
          });
          setSubmit(true);
          e.target.reset();
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        } else if (res.status === false) {
          enqueueSnackbar("An error occured", { variant: "warning" });
          setSubmit(false);
        } else {
          enqueueSnackbar("Some other error occured", { variant: "warning" });
          setSubmit(false);
        }
      }
    };    
return (
  <div>
      <Container>
      <div className="container-fluid pb-5">
        <div className="row px-xl-5">
          <div className="col">
            <div className="bg-light p-30">
              <div className="nav nav-tabs mb-4">
                <a
                  className="nav-item nav-link text-dark active"
                  data-toggle="tab"
                  href="#tab-pane-1"
                >
                  Description
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-2"
                >
                  Information
                </a>
                <a
                  className="nav-item nav-link text-dark"
                  data-toggle="tab"
                  href="#tab-pane-3"
                >
                  Reviews ({state.reviews.length})
                </a>
              </div>
              <div className="tab-content">
                <div className="tab-pane fade show active" id="tab-pane-1">
                  <h4 className="mb-3">Hostel Description</h4>
                  <p>{hostel.hostel_description}</p>
                </div>
                <div className="tab-pane fade" id="tab-pane-2">
                  <h4 className="mb-3">Additional Hostel Information</h4>
                  <p>
                    This hostel is registered with the University and works
                    according to the guidelines provided by the University
                  </p>
                  <div className="row">
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0"></li>
                      </ul>
                    </div>
                    <div className="col-md-6">
                      <ul className="list-group list-group-flush">
                        <li className="list-group-item px-0"></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="tab-pane-3">
                  <div className="row">
                    <div className="col-md-6">
                    {state.reviews.length === 0?
                    (
                      <h4>No reviews to show for this hostel</h4>
                    ):(
                      state.reviews.map((v, i)=>{
                        return(
                          <div className='post-review'key={i}>
                          <div className='list'>
                            <div className='user'>
                              <div className='user-image'>
                                <img src={Avarta}/>
                              </div>
                              <div className='user-meta'>
                                <div className='name'>{v.name}</div>
                                <div className='day-'>2 days ago</div>
                              </div>
                            </div>
                            <div className='review-post'>{v.review}</div>
                          </div>
                        </div>
                        )
                      })
                    )}
                    </div>
                    <div className="col-md-6">
                      <h4 className="mb-4">Leave a review</h4>
                      <small>
                        Your email address will not be published. Required
                        fields are marked *
                      </small>
                      <div className="d-flex my-3">
                        <p className="mb-0 mr-2">Your Rating * :</p>
                        <div className="text-primary">
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                          <i className="far fa-star"></i>
                        </div>
                      </div>
                      <form onSubmit={submitReview}>
                        <div className="form-group">
                        <input
                            type="text"
                            name="hostel_id"
                            value={state.hostel ? state.hostel.id : ""}
                            hidden
                          //   onChange={() =>
                          //   }
                          />
                          <label for="message">Your Review *</label>
                          <textarea
                            id="message"
                            name="review"
                            cols="30"
                            rows="5"
                            className="form-control"
                          />
                        </div>
                        <div className="form-group">
                          <label for="name">Your Name *</label>
                          <input
                            name="name"
                            className="form-control"
                            id="name"
                          />
                        </div>
                        <div className="form-group">
                          <label for="email">Your Email *</label>
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                          />
                        </div>
                        <div className="form-group mb-0">
                          <button type="submit" className=" ---btn-1 px-3">
                            Leave your review
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
)
}
const Container = styled.div`
.post-review .list{
  border-radius:6px;
  box-shadow:0 2px 2px #0002;
  width:100%;
  margin-bottom: 12px;
}
.post-review .list .user{
  display: flex;
  padding:8px;
  overflow:hidden;

}
.post-review .list .user img{
  height:38px;
  width:38px;
  margin-right:10px;
  border-radius:50%;
}
.user-meta .name{
  text-transform:uppercase;
  font-weight:500;
  color:#1742a6;
}
.user-meta .day-{
  font-size:12px;
}
.review-post{
  padding: 5px 0 10px 58px;
}
  .---btn-1 {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: #1742a6;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
`;

// export default Reviews;
