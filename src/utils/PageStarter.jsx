import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";


const PageStarter = ({ page }) => {
  return (
        <div className="row">
          <div className="col">
            <ul className="breadcrumb-nav">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>{page}</li>
            </ul>
          </div>
        </div>
  );
};
const Container = styled.div`

`;
export default PageStarter;