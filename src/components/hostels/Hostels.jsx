import React, { useEffect, useState } from "react";
import "../design/Hostel.css";
import Header from "../header/Header";
import HostelDetails from "./HostelDetails";
import FormsApi from "../../api/api";
import { Link } from "react-router-dom";

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
      <Header />
      <div>
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
    </>
  );
};

export default Hostels;
