import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import "../design/notfound.scss";
import NotFnd from "..//../assets/404.svg";
export default () => (
  <>
    <div className="_img">
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
      <span
        className="error_text"
        style={{ marginBlock: 10, fontSize: "25px", color: "#444" }}
      >
        This Page Was Not Found On The Server!
      </span>
      <p>
        We're sorry, but we can't find the page you were looking for. It's
        probably some thing we've done wrong but now we know about it and we'll
        try to fix it.
      </p>
      <p>In the meantime, try one of these options:</p>
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
