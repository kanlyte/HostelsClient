import React from "react";


import "../design/Hostel.css";
const HostelCard = ({ hostel }) => {
  return (
    <>
   <div className="grid_ctr">
      <div className="grid-item">
        <div className="card">
        {hostel.hostel_images
          ? JSON.parse(hostel.hostel_images).map((v, i) => {
              if (i === 0) {
                return (
                  <div key={i}>
                    <img src={v} alt="Hostel img" className="card-img" />
                  </div>
                );
              }
            })
          : "No Hostel Images"}
          <div className="card-content">
            <h1 className="card-header">{hostel.hostel_name}</h1>
            <p className="card-text">{hostel.hostel_distance}</p>
            <p className="card-text">Hostel Fee: {hostel.single_room_amount}</p>
            
            <button className="card-btn">Visit <span>&rarr;</span></button>
          </div>
        </div>
      </div>
      </div>
    {/* <div className="HostelCard">
        {hostel.hostel_images
          ? JSON.parse(hostel.hostel_images).map((v, i) => {
              if (i === 0) {
                return (
                  <div key={i}>
                    <img src={v} alt="Hostel img" className="ProductImg" />
                  </div>
                );
              }
            })
          : "No Hostel Images"}
        <p className="hostelName">{hostel.hostel_name}</p>
        <div>
          <span>{hostel.hostel_distance}</span>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <div className="offerPriceBox">
            <h1
              className="discountPrice"
              style={{
                paddingLeft: "2.5vmax",
                fontSize: ".9vmax",
                paddingBottom: "0",
              }}
            ></h1>
            <span className="p__Price">6</span>
          </div>
        </div>
        </div> */}
    </>
  );
};

export default HostelCard;
