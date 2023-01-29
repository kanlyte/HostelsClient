import React, { useEffect, useState } from "react";
import "../design/Hostel.css";
import Header from "../header/Header";
import HostelDetails from "./HostelDetails";
import FormsApi from "../../api/api";
import { Link } from "react-router-dom";
import { Typography } from "@mui/material";

const Hostels = () => {
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
      {/* <MetaData title="Products" /> */}
      <Header />
      <div>
       
          <h2
            style={{
              textAlign: "center",
              borderBottom: "1px solid rgba(21,21,21,0.5)",
              width: "20vmax",
              fontSize: "1.4vmax",
              fontFamily: "Poppins,sans-serif",
              margin: "3vmax auto",
              color: "rgb(0, 0, 0, 0.7)",
            }}
          >
            Featured Products
          </h2>
    
     
       
         
            <div
              className="products"
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                flex: ".9",
              }}
            >
              {state.hostels &&
                state.hostels.map((v, i) => (
                  <Link to={`/hostel/${v.id}`} key={i}>
                    <HostelDetails hostel={v} />
                  </Link>
                ))}
            </div>
          
        </div>

        <div
          className="pagination__box"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "6vmax",
          }}
        ></div>
     
    </>
  );
};

export default Hostels;
