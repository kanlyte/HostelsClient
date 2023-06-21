import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../design/notfound.css";
import NotFnd from "..//../assets/404.svg";
export default () => (
  <>
    <div className="__img">
      <img src={NotFnd} alt="" />
    </div>
    <div
      className="p_text404"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <span className="error_text" style={{ marginBlock: 10, color: "#444" }}>
        This Page Was Not Found On The Server!
      </span>
      <p>We're sorry, but we can't find the page you were looking for</p>
      <Link to="/">
        <Button variant="contained" color="primary" style={{ marginBlock: 20 }}>
          <span style={{ fontSize: "17.5px", marginRight: "10px" }}>
            <span className="las la-home"></span>
          </span>
          Go back to Home
        </Button>
      </Link>
    </div>
  </>
);
