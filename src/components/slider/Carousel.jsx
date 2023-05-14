import React from "react";
import Caruasel1 from "../../assets/carousel-1.jpeg";
import Caruasel2 from "../../assets/halsely.jpeg";
import Caruasel3 from "../../assets/advert.jpeg";
import image from "../../assets/flier.png";
import image2 from "../../assets/house.jpeg";
import styled from "styled-components";

const Carousel = () => {
  return (
    <>
      <Container>
        <div className="container-fluid mb-3">
          <div className="row px-xl-5">
            <div className="col-lg-8">
              <div
                id="header-carousel"
                className="carousel slide carousel-fade mb-30 mb-lg-0"
                data-ride="carousel"
              >
                <ol className="carousel-indicators">
                  <li
                    data-target="#header-carousel"
                    data-slide-to="0"
                    className="active"
                  ></li>
                  <li data-target="#header-carousel" data-slide-to="1"></li>
                  <li data-target="#header-carousel" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                  <div
                    className="carousel-item position-relative active"
                    style={{ height: "430px" }}
                  >
                    <img
                      className="position-absolute w-100 h-100"
                      src={Caruasel1}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h4
                          className="display-4 txt-cl mb-3 animate__animated animate__fadeInDown"
                          style={{ fontSize: "30px" }}
                        >
                          Best Hostels
                        </h4>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          Get the best a commodation and have a better
                          University Experience
                        </p>
                        <a
                          className="---btn-1 py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="#container"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="carousel-item position-relative"
                    style={{ height: "430px" }}
                  >
                    <img
                      className="position-absolute w-100 h-100"
                      src={Caruasel2}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h1
                          className="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                          style={{ fontSize: "30px" }}
                        >
                          Beacon Hostels
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          Brings you all the hostels a round Lira University
                          Uganda, Feel free to select and book your favourite
                          hostel.
                        </p>
                        <a
                          className="---btn-1 py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="#container"
                        >
                          Book Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div
                    className="carousel-item position-relative"
                    style={{ height: "430px" }}
                  >
                    <img
                      className="position-absolute w-100 h-100"
                      src={Caruasel3}
                      style={{ objectFit: "cover" }}
                    />
                    <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                      <div className="p-3" style={{ maxWidth: "700px" }}>
                        <h1
                          className="display-4 text-white mb-3 animate__animated animate__fadeInDown"
                          style={{ fontSize: "30px" }}
                        >
                          Download the Lyte app
                        </h1>
                        <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                          its now available on play store
                        </p>
                        <a
                          className="---btn-1 py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                          href="https://play.google.com/store/apps/details?id=com.lyte"
                        >
                          Download Lyte app
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="product-offer mb-30" style={{ height: "200px" }}>
                <img className="img-fluid" src={image} alt="" />
                <div className="offer-text">
                  <h6
                    className="text-white text-uppercase"
                    style={{ fontSize: "13px" }}
                  >
                    Get your self
                  </h6>
                  <h3 className="text-white mb-3" style={{ fontSize: "25px" }}>
                    Better Hostels
                  </h3>
                  <a href="" className="---btn-1">
                    Book Now
                  </a>
                </div>
              </div>
              <div className="product-offer mb-30" style={{ height: "200px" }}>
                <img className="img-fluid" src={image2} alt="" />
                <div className="offer-text">
                  <h6
                    className="text-white text-uppercase"
                    style={{ fontSize: "13px" }}
                  >
                    Proudly brought to you by Kanlyte ug
                  </h6>
                  <h3 className="text-white mb-3" style={{ fontSize: "25px" }}>
                    Visit Kanlyte site
                  </h3>
                  <a href="https://kanlyte.com/" className="---btn-1">
                    visit site here
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};
const Container = styled.div`
  .---btn-1 {
    display: inline-block;
    font-weight: 400;
    line-height: 1.5;
    color: #fff;
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    background-color: #1a5ba6;
    border: 1px solid transparent;
    padding: 0.375rem 0.75rem;
    font-size: 1rem;
    border-radius: 0.25rem;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }
  .txt-cl {
    color: #fff;
  }

  @media screen and (min-width: 280px) and (max-width: 600px) {
    .container-fluid {
      display: none;
    }
  }
  @media screen and (min-width: 600px) and (max-width: 1200px) {
    .container-fluid {
      visibility: visible;
    }
  }
`;
export default Carousel;
