import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import "./Design/Home.css";

import "react-toastify/dist/ReactToastify.css";
import HostelCard from "../components/hostels/HostelCard";
import FormsApi from "../api/api";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
const Home = () => {
  const [state, setState] = useState({
    pending_hostels: [],
    hostels: [],
  });

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
      <div className="main">
      <h2 className="homeHeading">Featured Hostels</h2>
      <div className="container" id="container">
        {state.hostels &&
          state.hostels.map((v, i) => (
            <Link to={`/hostel/${v.id}`} key={i}>
            <HostelCard  hostel={v}  />
            </Link>
          ))}
      </div>
      </div>
    <Footer />
    </>
  );
};

export default Home;
