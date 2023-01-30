import {
  Backdrop,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";
import FormsApi from "../../api/api";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import "../Design/register.css";
import user from "..//../app.config";

export default function Register() {
  const nav = useNavigate();

  const [apiFeedBackError, setApiFeedBackError] = useState(false);
  const [samePassword, setSamePassword] = useState(true);
  const [apiEmailUsed, setApiEmailUsed] = useState(false);
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    document.body.style.backgroundColor = "#fff";
  }, []);

  const form_submit = async (e) => {
    e.preventDefault();
    setSubmit(true);
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    if (_fcontent.repeat_password !== _fcontent.password) {
      setSamePassword(false);
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    let api = new FormsApi();
    let res = await api.post("/newuser", _fcontent);
    if (res === "Error") {
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }
    if (res.status === false) {
      if (res.data === "Emailtaken") {
        setApiEmailUsed(true);
        setSubmit(false);
        return;
      } else {
        setApiFeedBackError(true);
        setSubmit(false);
        return;
      }
    } else {
      const data = Base64.encode(JSON.stringify({ ...res.result }));
      localStorage.setItem("token", data);
      setSubmit(false);
      nav("/user/profile");
    }
  };
  useEffect(() => {
    if (user) {
      nav(-1);
    }
  }, []);

  if (user) return <Header />;
  return (
    <>
      <Header />
      <div className="reg_ctr cdd">
        <div className="h_ctr">Register Your Account Here</div>
        <form className="" onSubmit={form_submit}>
          <div>
            <TextField
              label="Your Full Name"
              name="full_name"
              variant="outlined"
              color="primary"
              style={{ width: "100%", margin: "10px 0px" }}
            />
          </div>
          <div className="register-inputs-ctr-divided">
            <TextField
              label="Phone Number"
              name="phone_number"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
            />
            <TextField
              label="Email Address"
              name="email"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={
                apiEmailUsed ? "Email already in use" : ""
              }
            />
          </div>
          <div className="register-inputs-ctr-divided">
            <TextField
              label="Set a Password"
              name="password"
              type="password"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={samePassword ? "" : "Passwords Don't Match"}
              error={!samePassword}
            />
            <TextField
              label="Repeat Password"
              name="repeat_password"
              type="password"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
              helperText={
                samePassword
                  ? "Making sure, you dont go wrong"
                  : "Passwords Don't Match"
              }
              error={!samePassword}
            />
          </div>
          <div>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    color="primary"
                    name="terms_and_conditions"
                    checked={termsCheckBox}
                    onChange={() => {
                      setTermsCheckBox(!termsCheckBox);
                    }}
                  />
                }
                label="I agree to the Terms and Conditions of using this app"
              />
            </FormGroup>
          </div>
          <div>
          <Button
                    variant="outlined"
                    type="submit"
                    color={apiFeedBackError ? "secondary" : "primary"}
                    style={{ width: "100%", margin: "15px 0px" }}
                    disabled={!termsCheckBox}
                  >
                    <CircularProgress
                      size={15}
                      thickness={10}
                      style={{
                        display: submit ? "inline-block" : "none",
                        marginRight: "20px",
                      }}
                    />
                    {submit
                      ? "Please Wait..."
                      : apiFeedBackError
                      ? "Something Went Wrong, Try again"
                      : "Submit"}
                  </Button>
          </div>
          <div style={{ width: "100%", marginBlock: "10px" }}>
            Already having an account?
            <Link to="/user/login">
              <span
                style={{
                  textDecoration: "underline",
                  color: "blue",
                  marginLeft: "5px",
                }}
              >
                Sign in here
              </span>
            </Link>
          </div>
        </form>
      </div>
      <Footer />
    </>
  );
}
