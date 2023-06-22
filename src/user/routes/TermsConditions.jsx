import { Link } from "@mui/material";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../Design/terms.css";
import { TandCsData } from "../store/otherData/otherData";

export default () => {
  const updateDate = "June 20, 2023";

  return (
    <>
      <div className="tc">
        <Header />
        <div className="ctr-main">
          <div className="hp-ctr">
            <h1 className="m-hdr">Beacon Hostels' Terms &amp; Conditions</h1>
            <div className="release-date">Last Updated On: {updateDate}</div>
            <div className="hp-nav"></div>
            <>
              {TandCsData?.map((item, index) => {
                return (
                  <div id={`${index}`} key={index} className="hp-content">
                    <h2 className="hp-content-h">
                      {(index += 1)}. {item.heading}
                    </h2>
                    {item.paragraphs?.map((item) => {
                      return <p className="hp-content-p -intro-p">{item}</p>;
                    })}
                  </div>
                );
              })}
            </>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};
