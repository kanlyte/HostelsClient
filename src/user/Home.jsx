import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import "./Design/Home.css";

import "react-toastify/dist/ReactToastify.css";
import HostelCard from "../components/hostels/HostelCard";
import FormsApi from "../api/api";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import user from "../app.config";
import HeaderSlider from "../components/slider/HeaderSlider";
import Loader from "../components/Loader/Loader";
const Home = () => {
  const [state, setState] = useState({
    pending_hostels: [],
    hostels: [],
  });
// console.log(user);
  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/allhostels");
      if (res === "Error") {
        console.log(res);
      } else {
        if (res.status) {
          let pending_hostels = [];
          let hostels = [];
          res.result.forEach((el) => {
            if (el.confirmed) {
              hostels.push(el);
            } else {
              pending_hostels.push(el);
            }
          });
          setState({ ...state, pending_hostels, hostels });
        }
      }
    })();
  }, []);
  return (
    <>
    
      <Header />
      <div className="__main">
      <div className='slider-wrapper'>
        <HeaderSlider />
      </div>
      <div className='__title-md'>
      <h3>See our Featured Hostels</h3>
      </div>
      <div className="_container" id="container">
        {state.hostels.length === 0 ? ( 
        <Loader />
        ) :
        (  state.hostels.map((v, i) => (
          <Link to={`/hostel/${v.id}`} key={i}>
          <HostelCard  hostel={v}  />
          </Link>
        )))}
      </div>
      </div>
    <Footer />
    </>
  );
};

export default Home;
