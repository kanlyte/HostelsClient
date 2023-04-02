import React from "react";
import styled from "styled-components";

const SuccessFul = ({ open, setOpen }) => {
  return (
    <Container onClick={() => setOpen(false)}>
      <div className="maill-success">
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container">
              <div className="success-content">
                <i className="lni lni-thumbs-up"></i>
                <h1>Congratulations!</h1>
                <h2>Your Mail Sent Successfully</h2>
                <p></p>
                <div className="button">
                  <button onClick={() => setOpen(false)} className="btn">
                    Back to Home
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};
const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  background-color: #fffffff2;
`;
export default SuccessFul;
