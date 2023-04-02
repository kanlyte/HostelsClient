import React from "react";
import styled from "styled-components";
const Pageloader = () => {
    return (
      <PageloaderContainer>
        <div class="pageloader">
          <div class="loader">
          </div>
        </div>
      </PageloaderContainer>
    );
  };

const PageloaderContainer = styled.div`
.pageloader{
    position: fixed;
    top: 0;
    left: 0;
    z-index: 999999999;
    width: 100%;
    height: 100%;
    background-color: #fff;

}
.loader {
    border: 0 solid transparent;
    border-radius: 50%;
    position: absolute;
    width:100px;
    height:100px;
    top: calc(50vh - 75px);
    left: calc(50vw - 75px);
  }

  .loader:before, .loader:after {
    content: "";
    border: 1em solid #1a5ba6;
    width: inherit;
    height: inherit;
    border-radius: 50%;
    position: absolute;
    top: 0;
    left:0;
    animation: loader 1.6s linear infinite;
    -webkit-animation: loader 1.6s linear infinite;
    opacity:0;
  }
  .loader:before{
    animation-delay: .5s;
  }
  @keyframes loader{
    0% {
      -webkit-transform: scale(0, 0);
      transform: scale(0, 0);
      opacity: 0;
    }
    50% {
        opacity: 1;
      }
    100% {
      -webkit-transform: scale(1, 1);
      transform: scale(1, 1);
      opacity: 0;
    }
  }
  @-webkit-keyframes loader{
    0% {
      -webkit-transform: scale(0, 0);
      opacity: 0.5;
    }
    100% {
      -webkit-transform: scale(1, 1);
      opacity: 0;
    }
  }

  
`;
export default Pageloader;
  