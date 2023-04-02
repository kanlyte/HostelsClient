import {
  Alert as MuiAlert,
  Slide,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
  Snackbar,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Link, useHistory, useNavigate } from "react-router-dom";
import FormsApi from "../../api/api";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import user from "..//../app.config";
import "../Design/login.scss";
import LogIn from "..//../assets/login.svg";
const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});
function Login() {
  const nav = useNavigate();
  useEffect(() => {
    if (user) {
      nav(-1);
    }
  });
  // console.log(user);
  //state
  const [rememberMe, setRememberMe] = useState(true);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [state, setState] = useState({
    mui: {
      snackBarOpen: false,
      snackBarMessage: "",
      snackBarStatus: "info",
      snackBarPosition: { vertical: "bottom", horizontal: "center" },
    },
  });

  const form_submit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    let api = new FormsApi();
    let res = await api.post("/login", _fcontent);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);

      return;
    }
    if (res.status === false) {
      setApiFeedBackError(true);
      setSubmit(false);
    } else {
      if (rememberMe) {
        const data = Base64.encode(JSON.stringify(res.user));
        localStorage.setItem("token", data);
        setSubmit(false);
      } else {
        const data = Base64.encode(JSON.stringify(res.user));
        sessionStorage.setItem("token", data);
        setSubmit(false);
      }
      nav(0);
    }
  };

  //close mui
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setState({
      ...state,
      mui: { ...state.mui, snackBarMessage: "", snackBarOpen: false },
    });
  };
  if (user) return <Header />;

  return (
    <>
      <Snackbar
        open={state.mui.snackBarOpen}
        anchorOrigin={state.mui.snackBarPosition}
        autoHideDuration={9000}
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
      <div className="login_ctr">
        <form onSubmit={form_submit} className="login_form">
          <div className="_img_l">
            <img src={LogIn} alt="" />
          </div>
          <div className="login_inputs_ctr">
            <TextField
              variant="outlined"
              error={apiFeedBackError}
              helperText={
                apiFeedBackError ? "Wrong Email or some network error" : ""
              }
              label="Email"
              type="text"
              name="email"
              fullWidth
              style={{ margin: "20px 0px" }}
            />
            <TextField
              error={apiFeedBackError}
              helperText={
                apiFeedBackError ? "Wrong Password or some network error" : ""
              }
              variant="outlined"
              label="Password"
              type="password"
              name="password"
              fullWidth
              style={{ margin: "20px 0px" }}
            />
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="rem_me"
                    checked={rememberMe}
                    onChange={() => {
                      setRememberMe(!rememberMe);
                    }}
                  />
                }
                label="Remember Me"
              />
            </FormGroup>
            <div className="lgin_btn_ctr">
              <Button
                color="primary"
                type="submit"
                variant={submit ? "outlined" : "contained"}
                style={{ width: "100%" }}
              >
                <CircularProgress
                  size={15}
                  thickness={10}
                  style={{
                    display: submit ? "inline-block" : "none",
                    marginRight: "20px",
                  }}
                />
                {submit ? "Please Wait..." : "Sign In"}
              </Button>
            </div>
            <div className="_tc" style={{ width: "100%", marginBlock: "10px" }}>
              Not Registered?
              <Link to="/user/register">
                <span
                  style={{
                    textDecoration: "underline",
                    color: "blue",
                    marginLeft: "5px",
                  }}
                >
                  Register Here
                </span>
              </Link>
            </div>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}

export default Login;
