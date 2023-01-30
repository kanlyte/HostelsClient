import {
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Link, useHistory, useNavigate } from "react-router-dom";
import FormsApi from "../../api/api";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import user from "..//../app.config";
import "../Design/login.scss";
import LogIn from "..//../assets/login.svg"
function Login() {
  const nav = useNavigate();
  useEffect(() => {
    if (user) {
      nav(-1);
    }
  });
  //state
  const [rememberMe, setRememberMe] = useState(true);
  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [submit, setSubmit] = useState(false);
  const [networkError, setNetworkError] = useState(false);

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

  if (user) return <Header />;

  return (
    <>
      <Header />
      <div className="login_ctr">
        <div>
          <div className="_l_txt">Login in to Your account Here</div>
          <form onSubmit={form_submit} className="login_form">
          <div className="_img_l">
        <img src={LogIn} alt="" />
          </div>
            <div className="login_inputs_ctr">
              <TextField
                variant="outlined"
                error={apiFeedBackError}
                helperText={
                  apiFeedBackError
                    ? "Wrong Email or some network error"
                    : ""
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
                  apiFeedBackError
                    ? "Wrong Password or some network error"
                    : ""
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
      </div>
      <Footer />
    </>
  );
}

export default Login;
