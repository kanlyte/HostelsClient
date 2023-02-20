import React from 'react';
import "./Loader.scss";
import loader from "../../assets/loader.svg";

const Loader = () => {
  return (
    <>
    <div className='___container'>
      <div className='___loader ___flex'>
        <img src = {loader} alt = "" />
      </div>
    </div>
    </>
  )
}

export default Loader
