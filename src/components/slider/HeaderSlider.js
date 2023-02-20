import React from 'react';
import "./HeaderSlider.scss";
import SlideOne from "..//../assets/book.jpeg";
import SlideTwo from "..//../assets/book1.jpeg";
import SlideThree from "..//../assets/slider3.jpg";
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
  let settings = {
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
    <div className='slider'>
      <div className='___contnr'>
        <div className='slider-content overflow-x-hidden'>
          <Slider {...settings}>
            <div className='slider-item'>
              <img src = {SlideOne} alt = "" />
            </div>
            <div className='slider-item'>
              <img src = {SlideTwo} alt = "" />
            </div>
            <div className='slider-item'>
              <img src = {SlideThree} alt = "" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
    </>
  )
}

export default HeaderSlider