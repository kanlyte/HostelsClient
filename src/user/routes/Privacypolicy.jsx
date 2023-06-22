import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import ScrollUp from "../../utils/ScrollUp";
import "../Design/terms.css";
import { PrivacyPolicy } from "../store/otherData/otherData";

export default () => {
  const updateDate = "June 06, 2023";
  return (
    <>
      <Header />
      <div className="ctr-main">
        <div className="hp-ctr">
          <h1 className="m-hdr">The Private Policy</h1>
          <div className="release-date">Last Updated: {updateDate}</div>
          <div className="hp-nav">
            <div className="nav-h">Table of Contents</div>
            <ol className="hp-nav-li">
              {PrivacyPolicy?.map((item, index) => {
                return (
                  <li key={index}>
                    <a href={`#${index}`}>{item.heading}</a>
                  </li>
                );
              })}
            </ol>
          </div>
          <>
            {PrivacyPolicy?.map((item, index) => {
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
      <ScrollUp />
    </>
  );
};
