import React, { useEffect, useState } from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "../header/Header";
import "../design/Hosteldetails.css";
import { useNavigate, useParams } from "react-router-dom";
import FormsApi from "../../api/api";
import { Button } from "@mui/material";
import Footer from "../footer/Footer";
import { Base64 } from "js-base64";
import user from "..//../app.config";
import styled from "styled-components";

const HostelDetails = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [index, setIndex] = useState(0);
  const [state, setState] = useState({
    hostel: {},
    landlord: {},
  });
  // console.log(user);
  useEffect(() => {
    (async () => {
      let res = await new FormsApi().get(`/hostel/${params.id}`);
      if (res !== "Error") {
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
      setState({ hostel: {}, landlord: {} });
    };
  }, []);
  // console.log(state.hostel);
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
          <h1>{state.hostel.hostel_name}</h1>
          <h4>Hostel Description: </h4>
          <p>{state.hostel.hostel_description}</p>
          <div className="quantity">
            <h4>
              Single Rooms Available: {state.hostel.single_rooms_available}
            </h4>
            <h4>
              Double Rooms Available: {state.hostel.double_rooms_available}
            </h4>
          </div>
          <h4>Hostel Fee Structure: </h4>
          <p>
            The Hostel Fee is <strong>{state.hostel.single_room_amount}</strong>{" "}
            for a single Room and{" "}
            <strong>{state.hostel.double_room_amount}</strong> for a Double Room
          </p>
          <p className="price">Booking Fee: Ugshs:{state.hostel.booking_fee}</p>
          <div className="buttons">
            <Button variant="contained" color="primary">
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
                    Reviews (0)
                  </a>
                </div>
                <div className="tab-content">
                  <div className="tab-pane fade show active" id="tab-pane-1">
                    <h4 className="mb-3">Hostel Description</h4>
                    <p>{state.hostel.hostel_description}</p>
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
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                        </ul>
                      </div>
                      <div className="col-md-6">
                        <ul className="list-group list-group-flush">
                          <li className="list-group-item px-0">
                            Duo amet accusam eirmod nonumy stet et et stet
                            eirmod.
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="tab-pane fade" id="tab-pane-3">
                    <div className="row">
                      <div className="col-md-6">
                        <h4 className="mb-4">
                          {" "}
                          No reviews for {state.hostel.hostel_name}
                        </h4>
                        {/* <div className="media mb-4">
                                        <img src="img/user.jpg" alt="Image" className="img-fluid mr-3 mt-1" style={{width:"45px"}}/>
                                        <div className="media-body">
                                            <h6>John Doe<small> - <i>01 Jan 2045</i></small></h6>
                                            <div className="text-primary mb-2">
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star"></i>
                                                <i className="fas fa-star-half-alt"></i>
                                                <i className="far fa-star"></i>
                                            </div>
                                            <p>Diam amet duo labore stet elitr ea clita ipsum, tempor labore accusam ipsum et no at. Kasd diam tempor rebum magna dolores sed sed eirmod ipsum.</p>
                                        </div>
                                    </div> */}
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
                        <form>
                          <div className="form-group">
                            <label for="message">Your Review *</label>
                            <textarea
                              id="message"
                              cols="30"
                              rows="5"
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label for="name">Your Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <label for="email">Your Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <input
                              type="submit"
                              value="Leave Your Review"
                              className="btn btn-primary px-3"
                            />
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
      <Footer />
    </>
    //   )}
  );
};

const Container = styled.div`
  .nav {
    display: flex;
    flex-wrap: wrap;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .nav-link {
    display: block;
    padding: 0.5rem 1rem;
  }

  .nav-link:hover,
  .nav-link:focus {
    text-decoration: none;
  }

  .nav-link.disabled {
    color: #6c757d;
    pointer-events: none;
    cursor: default;
  }

  .nav-tabs {
    border-bottom: 1px solid #dee2e6;
  }

  .nav-tabs .nav-item {
    margin-bottom: -1px;
  }

  .nav-tabs .nav-link {
    border: 1px solid transparent;
  }

  .nav-tabs .nav-link:hover,
  .nav-tabs .nav-link:focus {
    border-color: #e9ecef #e9ecef #dee2e6;
  }

  .nav-tabs .nav-link.disabled {
    color: #6c757d;
    background-color: transparent;
    border-color: transparent;
  }

  .nav-tabs .nav-link.active,
  .nav-tabs .nav-item.show .nav-link {
    color: #495057;
    background-color: #f5f5f5;
    border-color: #dee2e6 #dee2e6 #f5f5f5;
  }

  .nav-tabs .dropdown-menu {
    margin-top: -1px;
  }

  .nav-pills .nav-link.active,
  .nav-pills .show > .nav-link {
    color: #fff;
    background-color: #ffd333;
  }

  .nav-fill > .nav-link,
  .nav-fill .nav-item {
    flex: 1 1 auto;
    text-align: center;
  }

  .nav-justified > .nav-link,
  .nav-justified .nav-item {
    flex-basis: 0;
    flex-grow: 1;
    text-align: center;
  }

  .tab-content > .tab-pane {
    display: none;
  }

  .tab-content > .active {
    display: block;
  }

  .navbar {
    position: relative;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    padding: 0.5rem 1rem;
  }

  .navbar .container,
  .navbar .container-fluid,
  .navbar .container-sm,
  .navbar .container-md,
  .navbar .container-lg,
  .navbar .container-xl {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
  }

  .navbar-brand {
    display: inline-block;
    padding-top: 0.3125rem;
    padding-bottom: 0.3125rem;
    margin-right: 1rem;
    font-size: 1.25rem;
    line-height: inherit;
    white-space: nowrap;
  }

  .navbar-brand:hover,
  .navbar-brand:focus {
    text-decoration: none;
  }

  .navbar-nav {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
  }

  .navbar-nav .nav-link {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-nav .dropdown-menu {
    position: static;
    float: none;
  }

  .navbar-text {
    display: inline-block;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
  }

  .navbar-collapse {
    flex-basis: 100%;
    flex-grow: 1;
    align-items: center;
  }

  .navbar-toggler {
    padding: 0.25rem 0.75rem;
    font-size: 1.25rem;
    line-height: 1;
    background-color: transparent;
    border: 1px solid transparent;
  }

  .navbar-toggler:hover,
  .navbar-toggler:focus {
    text-decoration: none;
  }

  .navbar-toggler-icon {
    display: inline-block;
    width: 1.5em;
    height: 1.5em;
    vertical-align: middle;
    content: "";
    background: no-repeat center center;
    background-size: 100% 100%;
  }

  @media (max-width: 575.98px) {
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid,
    .navbar-expand-sm > .container-sm,
    .navbar-expand-sm > .container-md,
    .navbar-expand-sm > .container-lg,
    .navbar-expand-sm > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 576px) {
    .navbar-expand-sm {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-sm .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-sm .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-sm .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-sm > .container,
    .navbar-expand-sm > .container-fluid,
    .navbar-expand-sm > .container-sm,
    .navbar-expand-sm > .container-md,
    .navbar-expand-sm > .container-lg,
    .navbar-expand-sm > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-sm .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-sm .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 767.98px) {
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid,
    .navbar-expand-md > .container-sm,
    .navbar-expand-md > .container-md,
    .navbar-expand-md > .container-lg,
    .navbar-expand-md > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 768px) {
    .navbar-expand-md {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-md .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-md .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-md .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-md > .container,
    .navbar-expand-md > .container-fluid,
    .navbar-expand-md > .container-sm,
    .navbar-expand-md > .container-md,
    .navbar-expand-md > .container-lg,
    .navbar-expand-md > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-md .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-md .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 991.98px) {
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid,
    .navbar-expand-lg > .container-sm,
    .navbar-expand-lg > .container-md,
    .navbar-expand-lg > .container-lg,
    .navbar-expand-lg > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 992px) {
    .navbar-expand-lg {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-lg .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-lg .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-lg .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-lg > .container,
    .navbar-expand-lg > .container-fluid,
    .navbar-expand-lg > .container-sm,
    .navbar-expand-lg > .container-md,
    .navbar-expand-lg > .container-lg,
    .navbar-expand-lg > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-lg .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-lg .navbar-toggler {
      display: none;
    }
  }

  @media (max-width: 1199.98px) {
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid,
    .navbar-expand-xl > .container-sm,
    .navbar-expand-xl > .container-md,
    .navbar-expand-xl > .container-lg,
    .navbar-expand-xl > .container-xl {
      padding-right: 0;
      padding-left: 0;
    }
  }

  @media (min-width: 1200px) {
    .navbar-expand-xl {
      flex-flow: row nowrap;
      justify-content: flex-start;
    }
    .navbar-expand-xl .navbar-nav {
      flex-direction: row;
    }
    .navbar-expand-xl .navbar-nav .dropdown-menu {
      position: absolute;
    }
    .navbar-expand-xl .navbar-nav .nav-link {
      padding-right: 0.5rem;
      padding-left: 0.5rem;
    }
    .navbar-expand-xl > .container,
    .navbar-expand-xl > .container-fluid,
    .navbar-expand-xl > .container-sm,
    .navbar-expand-xl > .container-md,
    .navbar-expand-xl > .container-lg,
    .navbar-expand-xl > .container-xl {
      flex-wrap: nowrap;
    }
    .navbar-expand-xl .navbar-collapse {
      display: flex !important;
      flex-basis: auto;
    }
    .navbar-expand-xl .navbar-toggler {
      display: none;
    }
  }

  .navbar-expand {
    flex-flow: row nowrap;
    justify-content: flex-start;
  }

  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    padding-right: 0;
    padding-left: 0;
  }

  .navbar-expand .navbar-nav {
    flex-direction: row;
  }

  .navbar-expand .navbar-nav .dropdown-menu {
    position: absolute;
  }

  .navbar-expand .navbar-nav .nav-link {
    padding-right: 0.5rem;
    padding-left: 0.5rem;
  }

  .navbar-expand > .container,
  .navbar-expand > .container-fluid,
  .navbar-expand > .container-sm,
  .navbar-expand > .container-md,
  .navbar-expand > .container-lg,
  .navbar-expand > .container-xl {
    flex-wrap: nowrap;
  }

  .navbar-expand .navbar-collapse {
    display: flex !important;
    flex-basis: auto;
  }

  .navbar-expand .navbar-toggler {
    display: none;
  }

  .navbar-light .navbar-brand {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-brand:hover,
  .navbar-light .navbar-brand:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-nav .nav-link {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar-light .navbar-nav .nav-link:hover,
  .navbar-light .navbar-nav .nav-link:focus {
    color: rgba(0, 0, 0, 0.7);
  }

  .navbar-light .navbar-nav .nav-link.disabled {
    color: rgba(0, 0, 0, 0.3);
  }

  .navbar-light .navbar-nav .show > .nav-link,
  .navbar-light .navbar-nav .active > .nav-link,
  .navbar-light .navbar-nav .nav-link.show,
  .navbar-light .navbar-nav .nav-link.active {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-toggler {
    color: rgba(0, 0, 0, 0.5);
    border-color: rgba(0, 0, 0, 0.1);
  }

  .navbar-light .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-light .navbar-text {
    color: rgba(0, 0, 0, 0.5);
  }

  .navbar-light .navbar-text a {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-light .navbar-text a:hover,
  .navbar-light .navbar-text a:focus {
    color: rgba(0, 0, 0, 0.9);
  }

  .navbar-dark .navbar-brand {
    color: #fff;
  }

  .navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #fff;
  }

  .navbar-dark .navbar-nav .nav-link {
    color: rgba(255, 255, 255, 0.5);
  }

  .navbar-dark .navbar-nav .nav-link:hover,
  .navbar-dark .navbar-nav .nav-link:focus {
    color: rgba(255, 255, 255, 0.75);
  }

  .navbar-dark .navbar-nav .nav-link.disabled {
    color: rgba(255, 255, 255, 0.25);
  }

  .navbar-dark .navbar-nav .show > .nav-link,
  .navbar-dark .navbar-nav .active > .nav-link,
  .navbar-dark .navbar-nav .nav-link.show,
  .navbar-dark .navbar-nav .nav-link.active {
    color: #fff;
  }

  .navbar-dark .navbar-toggler {
    color: rgba(255, 255, 255, 0.5);
    border-color: rgba(255, 255, 255, 0.1);
  }

  .navbar-dark .navbar-toggler-icon {
    background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='30' height='30' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 0.5%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e");
  }

  .navbar-dark .navbar-text {
    color: rgba(255, 255, 255, 0.5);
  }

  .navbar-dark .navbar-text a {
    color: #fff;
  }

  .navbar-dark .navbar-text a:hover,
  .navbar-dark .navbar-text a:focus {
    color: #fff;
  }

  .card {
    position: relative;
    display: flex;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card > hr {
    margin-right: 0;
    margin-left: 0;
  }

  .card > .list-group {
    border-top: inherit;
    border-bottom: inherit;
  }

  .card > .list-group:first-child {
    border-top-width: 0;
  }

  .card > .list-group:last-child {
    border-bottom-width: 0;
  }

  .card > .card-header + .list-group,
  .card > .list-group + .card-footer {
    border-top: 0;
  }

  .card-body {
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1.25rem;
  }

  .card-title {
    margin-bottom: 0.75rem;
  }

  .card-subtitle {
    margin-top: -0.375rem;
    margin-bottom: 0;
  }

  .card-text:last-child {
    margin-bottom: 0;
  }

  .card-link:hover {
    text-decoration: none;
  }

  .card-link + .card-link {
    margin-left: 1.25rem;
  }

  .card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-footer {
    padding: 0.75rem 1.25rem;
    background-color: rgba(0, 0, 0, 0.03);
    border-top: 1px solid rgba(0, 0, 0, 0.125);
  }

  .card-header-tabs {
    margin-right: -0.625rem;
    margin-bottom: -0.75rem;
    margin-left: -0.625rem;
    border-bottom: 0;
  }

  .card-header-pills {
    margin-right: -0.625rem;
    margin-left: -0.625rem;
  }

  .card-img-overlay {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    padding: 1.25rem;
  }

  .card-img,
  .card-img-top,
  .card-img-bottom {
    flex-shrink: 0;
    width: 100%;
  }

  .card-deck .card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-deck {
      display: flex;
      flex-flow: row wrap;
      margin-right: -15px;
      margin-left: -15px;
    }
    .card-deck .card {
      flex: 1 0 0%;
      margin-right: 15px;
      margin-bottom: 0;
      margin-left: 15px;
    }
  }

  .card-group > .card {
    margin-bottom: 15px;
  }

  @media (min-width: 576px) {
    .card-group {
      display: flex;
      flex-flow: row wrap;
    }
    .card-group > .card {
      flex: 1 0 0%;
      margin-bottom: 0;
    }
    .card-group > .card + .card {
      margin-left: 0;
      border-left: 0;
    }
  }

  .card-columns .card {
    margin-bottom: 0.75rem;
  }

  @media (min-width: 576px) {
    .card-columns {
      column-count: 3;
      column-gap: 1.25rem;
      orphans: 1;
      widows: 1;
    }
    .card-columns .card {
      display: inline-block;
      width: 100%;
    }
  }

  .list-group {
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
  }

  .list-group-item-action {
    width: 100%;
    color: #495057;
    text-align: inherit;
  }

  .list-group-item-action:hover,
  .list-group-item-action:focus {
    z-index: 1;
    color: #495057;
    text-decoration: none;
    background-color: #f8f9fa;
  }

  .list-group-item-action:active {
    color: #6c757d;
    background-color: #e9ecef;
  }

  .list-group-item {
    position: relative;
    display: block;
    padding: 0.75rem 1.25rem;
    background-color: #fff;
    border: 1px solid rgba(0, 0, 0, 0.125);
  }

  .list-group-item.disabled,
  .list-group-item:disabled {
    color: #6c757d;
    pointer-events: none;
    background-color: #fff;
  }

  .list-group-item.active {
    z-index: 2;
    color: #fff;
    background-color: #ffd333;
    border-color: #ffd333;
  }

  .list-group-item + .list-group-item {
    border-top-width: 0;
  }

  .list-group-item + .list-group-item.active {
    margin-top: -1px;
    border-top-width: 1px;
  }

  .list-group-horizontal {
    flex-direction: row;
  }

  .list-group-horizontal > .list-group-item.active {
    margin-top: 0;
  }

  .list-group-horizontal > .list-group-item + .list-group-item {
    border-top-width: 1px;
    border-left-width: 0;
  }

  .list-group-horizontal > .list-group-item + .list-group-item.active {
    margin-left: -1px;
    border-left-width: 1px;
  }

  @media (min-width: 576px) {
    .list-group-horizontal-sm {
      flex-direction: row;
    }
    .list-group-horizontal-sm > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-sm > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-sm > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 768px) {
    .list-group-horizontal-md {
      flex-direction: row;
    }
    .list-group-horizontal-md > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-md > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-md > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 992px) {
    .list-group-horizontal-lg {
      flex-direction: row;
    }
    .list-group-horizontal-lg > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-lg > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-lg > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  @media (min-width: 1200px) {
    .list-group-horizontal-xl {
      flex-direction: row;
    }
    .list-group-horizontal-xl > .list-group-item.active {
      margin-top: 0;
    }
    .list-group-horizontal-xl > .list-group-item + .list-group-item {
      border-top-width: 1px;
      border-left-width: 0;
    }
    .list-group-horizontal-xl > .list-group-item + .list-group-item.active {
      margin-left: -1px;
      border-left-width: 1px;
    }
  }

  .list-group-flush > .list-group-item {
    border-width: 0 0 1px;
  }

  .list-group-flush > .list-group-item:last-child {
    border-bottom-width: 0;
  }

  .list-group-item-primary {
    color: #856e1b;
    background-color: #fff3c6;
  }

  .list-group-item-primary.list-group-item-action:hover,
  .list-group-item-primary.list-group-item-action:focus {
    color: #856e1b;
    background-color: #ffeead;
  }

  .list-group-item-primary.list-group-item-action.active {
    color: #fff;
    background-color: #856e1b;
    border-color: #856e1b;
  }

  .list-group-item-secondary {
    color: #7f7f7f;
    background-color: #fcfcfc;
  }

  .list-group-item-secondary.list-group-item-action:hover,
  .list-group-item-secondary.list-group-item-action:focus {
    color: #7f7f7f;
    background-color: #efefef;
  }

  .list-group-item-secondary.list-group-item-action.active {
    color: #fff;
    background-color: #7f7f7f;
    border-color: #7f7f7f;
  }

  .list-group-item-success {
    color: #155724;
    background-color: #c3e6cb;
  }

  .list-group-item-success.list-group-item-action:hover,
  .list-group-item-success.list-group-item-action:focus {
    color: #155724;
    background-color: #b1dfbb;
  }

  .list-group-item-success.list-group-item-action.active {
    color: #fff;
    background-color: #155724;
    border-color: #155724;
  }

  .list-group-item-info {
    color: #0c5460;
    background-color: #bee5eb;
  }

  .list-group-item-info.list-group-item-action:hover,
  .list-group-item-info.list-group-item-action:focus {
    color: #0c5460;
    background-color: #abdde5;
  }

  .list-group-item-info.list-group-item-action.active {
    color: #fff;
    background-color: #0c5460;
    border-color: #0c5460;
  }

  .list-group-item-warning {
    color: #856404;
    background-color: #ffeeba;
  }

  .list-group-item-warning.list-group-item-action:hover,
  .list-group-item-warning.list-group-item-action:focus {
    color: #856404;
    background-color: #ffe8a1;
  }

  .list-group-item-warning.list-group-item-action.active {
    color: #fff;
    background-color: #856404;
    border-color: #856404;
  }

  .list-group-item-danger {
    color: #721c24;
    background-color: #f5c6cb;
  }

  .list-group-item-danger.list-group-item-action:hover,
  .list-group-item-danger.list-group-item-action:focus {
    color: #721c24;
    background-color: #f1b0b7;
  }

  .list-group-item-danger.list-group-item-action.active {
    color: #fff;
    background-color: #721c24;
    border-color: #721c24;
  }

  .list-group-item-light {
    color: #858585;
    background-color: white;
  }

  .list-group-item-light.list-group-item-action:hover,
  .list-group-item-light.list-group-item-action:focus {
    color: #858585;
    background-color: #f2f2f2;
  }

  .list-group-item-light.list-group-item-action.active {
    color: #fff;
    background-color: #858585;
    border-color: #858585;
  }

  .list-group-item-dark {
    color: #202428;
    background-color: #c9cbcd;
  }

  .list-group-item-dark.list-group-item-action:hover,
  .list-group-item-dark.list-group-item-action:focus {
    color: #202428;
    background-color: #bcbec1;
  }

  .list-group-item-dark.list-group-item-action.active {
    color: #fff;
    background-color: #202428;
    border-color: #202428;
  }
`;

export default HostelDetails;
