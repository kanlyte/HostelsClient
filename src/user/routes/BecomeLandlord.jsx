import React, { useState } from "react";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import Req from "../../assets/Air hostess-pana.svg";
import { Button, TextField } from "@mui/material";
import "../Design/landlod.scss";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import { Slide, Snackbar } from "@mui/material";
import FormsApi from "../../api/api";

function BecomeLandlord() {
  const [apiEmailUsed, setApiEmailUsed] = useState(false);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [state, setState] = useState({
    mui: {
      snackBarPosition: { vertical: "top", horizontal: "right" },
    },
  });

  const form_submit = async (e) => {
    e.preventDefault();
    setState({
      ...state,
      mui: {
        ...state.mui,
        snackBarMessage: "Please Wait....",
        snackBarStatus: "info",
        snackBarOpen: true,
      },
    });
    const fd = new FormData(e.target);
    let form_content = {};
    fd.forEach((value, key) => {
      form_content[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/request/landlord", form_content);
    if (res.data === "Email already used by another user") {
      setApiEmailUsed(true);
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else if (res.status === false) {
      setApiFeedBackError(true);
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "success",
          snackBarOpen: true,
        },
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    }
  };
  //close snackbar
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };

  //alert for material ui
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={4500}
        onClose={handleClose}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleClose}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
      <Header />
      <div className="__req_ctr">
        <div className="__req_img">
          <div>
            <img src={Req} />
          </div>
        </div>
        <div className="__form_inputs">
          <div>Send us A request here If you want to become a landlord</div>
          <form className="" onSubmit={form_submit}>
            <div>
              <TextField
                label="Your Full Name"
                name="name"
                variant="outlined"
                required
                color="primary"
                style={{ width: "100%", margin: "10px 0px" }}
              />
            </div>
            <div className="register-inputs-ctr-divided">
              <TextField
                label="Phone Number"
                name="phone"
                variant="outlined"
                color="primary"
                style={{ width: "48%" }}
              />
              <TextField
                label="Email Address"
                name="email"
                variant="outlined"
                color="primary"
                error={apiEmailUsed ? true : false}
                helperText={apiEmailUsed ? "This Email is already used" : ""}
                style={{ width: "48%" }}
              />
            </div>
            <div>
              <Button
                variant="contained"
                color="primary"
                type="submit"
                style={{ width: "100%" }}
              >
                submit request
              </Button>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BecomeLandlord;
