import React, { Fragment } from "react";

import "../design/Hostel.css";
const HostelCard = ({ hostel }) => {
  return (
    <>
        <section className="__property">
          <div className="__cntr">{/* <h3>Popula Hostel</h3> */}</div>
          <div className="__row">
            <div className="__column">
              <div className="___single_hstl">
                <div className="___card">
                  <div className="__hstl_thumb">
                    <div className="__hstl_tag">Book now</div>
                    {hostel.hostel_images
                      ? JSON.parse(hostel.hostel_images).map((v, i) => {
                          if (i === 0) {
                            return (
                              <div key={i}>
                                <img
                                  src={v}
                                  alt="Hostel img"
                                  className="card-img"
                                />
                              </div>
                            );
                          }
                        })
                      : "No Hostel Images"}
                  </div>
                  <div className="___hstl_content">
                    <h3>{hostel.hostel_name}</h3>
                    <div className="__mark">
                      <i className="fa-solid fa-location-dot"></i>
                      <span>{hostel.hostel_distance}</span>
                    </div>
                    <span className="___amount">
                      Hostel Fee {hostel.single_room_amount}(UGX)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
    </>
  );
};

export default HostelCard;
