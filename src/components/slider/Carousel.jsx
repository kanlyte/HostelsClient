import React from "react";
import Caruasel1 from "../../assets/carousel-1.jpg";
import Caruasel2 from "../../assets/halsely.jpeg";
import Caruasel3 from "../../assets/room.jpg";


import image from "../../assets/hse.jpeg";
import image2 from "../../assets/house.jpeg";

const Carousel = () => {
  return (
    <>
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
                style={{height:"430px"}}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={Caruasel1}
                  style={{objectFit:"cover"}}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth:"700px"}}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Best Hostels
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Get the best a commodation and have a better University Experience
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#"
                    >
                      Book Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{height:"430px"}}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={Caruasel2}
                  style={{objectFit:"cover"}}
                />
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth:"700px"}}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                      Beacon Hostels
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                      Brings you all the hostels a round Lira University Uganda, Feel free to select and book your favourite hostel.
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
              <div
                className="carousel-item position-relative"
                style={{height:"430px"}}
              >
                <img
                  className="position-absolute w-100 h-100"
                  src={Caruasel3}
                  style={{objectFit:"cover"}}/>
                <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                  <div className="p-3" style={{maxWidth:"700px"}}>
                    <h1 className="display-4 text-white mb-3 animate__animated animate__fadeInDown">
                     About Beacon hostels
                    </h1>
                    <p className="mx-md-5 px-5 animate__animated animate__bounceIn">
                     We are available 24/7 
                    </p>
                    <a
                      className="btn btn-outline-light py-2 px-4 mt-3 animate__animated animate__fadeInUp"
                      href="#"
                    >
                      Shop Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-4">
          <div className="product-offer mb-30" style={{height:"200px"}}>
            <img className="img-fluid" src={image} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Get your self</h6>
              <h3 className="text-white mb-3">Better Hostels</h3>
              <a href="" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
          <div className="product-offer mb-30" style={{height:"200px"}}>
            <img className="img-fluid" src={image2} alt="" />
            <div className="offer-text">
              <h6 className="text-white text-uppercase">Get your self</h6>
              <h3 className="text-white mb-3">Better Hostels</h3>
              <a href="" className="btn btn-primary">
                Book Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};
export default Carousel;
