import React from "react";

const ScrollUp = () => {
  const scrollup = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="chevron_up">
         <i className="las la-chevron-circle-up scroll-top" onClick={scrollup}></i>
    </div>
 
  );
};

export default ScrollUp;
