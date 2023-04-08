import React, { useEffect, useState } from "react";
import Header from "../components/header/Header";
import "./Design/Home.css";
import ReactPaginate from "react-paginate";
import "react-toastify/dist/ReactToastify.css";
import HostelCard from "../components/hostels/HostelCard";
import FormsApi from "../api/api";
import { Link } from "react-router-dom";
import Footer from "../components/footer/Footer";
import user from "../app.config";
import ScrollUp from "../utils/ScrollUp";
import Pageloader from "../utils/PageLoader";
import Carousel from "../components/slider/Carousel";
import LoadingBackdrop from "../components/Loader/Loader";
const Home = () => {
  const [loader, setLoader] = useState(true);
  const [pageNumber, setPageNumber] = useState(0);
  const [state, setState] = useState({
    pending_hostels: [],
    hostels: [],
  });
  setTimeout(() => {
    setLoader(false);
  }, 1500);
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
  const cardsPerPage = 8;
  const pagesVisited = pageNumber * cardsPerPage;
  const pageCount = Math.ceil(state.hostels.length / cardsPerPage);
  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>
    {loader && <Pageloader />}
      <Header />
      <div className="__main">
      <div className='slider-wrapper'>
        <Carousel />
      </div>
      <div className='__title-md'>
      <h3>See our Featured Hostels</h3>
      </div>
      <div className="_container" id="container">
        {state.hostels.length === 0 ? ( 
        <LoadingBackdrop />
        ) :
        (  state.hostels
          .slice(pagesVisited, pagesVisited + cardsPerPage).map((v, i) => (
          <Link to={`/hostel/${v.id}`} key={i}>
          <HostelCard  hostel={v}  />
          </Link>
        )))}
      
      </div>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      />
      </div>
    <Footer />
    <ScrollUp />
    </>
  );
};

export default Home;
