import React, { useEffect, useState } from "react";
import {
  Alert as MuiAlert,
  Button,
  Checkbox,
  CircularProgress,
  FormControlLabel,
  FormGroup,
  TextField,
} from "@mui/material";
import { Base64 } from "js-base64";
import { Link, useNavigate } from "react-router-dom";
import Home from "../../assets/hostel1.jpg";
import FormsApi from "../../api/api";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import user from "..//../app.config";
import Swal from 'sweetalert2';
import { useSnackbar } from "notistack";
import { validateEmail } from "../../utils/data/validate";
import ScrollUp from "../../utils/ScrollUp";
import styled from "styled-components";


export default function Register() {
  const {enqueueSnackbar} = useSnackbar();
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
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
   if(_fcontent.full_name === "" || _fcontent.full_name === null){
      enqueueSnackbar("Name field is empty", { variant: "error" });
      setSubmit(false);
    }else if(_fcontent.phone_number === "" || _fcontent.phone_number === null){
      enqueueSnackbar("Phone Number field is empty", { variant: "error" });
      setSubmit(false);
    }else if(_fcontent.email === "" || _fcontent.email === null){
      enqueueSnackbar("Email field is blank", { variant: "error" });
      setSubmit(false);
    }else if(!validateEmail(_fcontent.email)){
      enqueueSnackbar("Please Enter correct email formart", { variant: "error" });

    }else if (_fcontent.repeat_password !== _fcontent.password) {
      setSamePassword(false);
      setApiFeedBackError(true);
      setSubmit(false);
      return;
    }else{
      setSubmit(true);
    let api = new FormsApi();
    let res = await api.post("/newuser", _fcontent);
    console.log(res.result);

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
      Swal.fire({
        position: 'center',
        icon: 'success',
        title: 'Account Created Successfully',
        showConfirmButton: false,
        timer: 6500
      })
      nav("/user/login");
    }
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
      <Container>
      <div className="register-ctr">
          <div>
            <div>
              <img src={Home} />
            </div>
            <div>
              <form onSubmit={form_submit} className="form_ctr">
                <div>
                  <h4 className="acc_hint">Create Your Account</h4>
                </div>
                <div>
                  <TextField
                    label="Your Full Name"
                    name="full_name"
                    type="text"
                    variant="outlined"
                    color="primary"
                    style={{ width: "100%", margin: "10px 0px" }}
                  />
                </div>
                <div className="register-inputs-ctr-divided">
                  <TextField
                    label="Phone Number"
                    name="phone_number"
                    helperText="Like 0778089708"
                    variant="outlined"
                    color="primary"
                    type="number"
                    placeholder="07xxxxxxxx"
                    style={{ width: "48%" }}
                   
                  />
                  <TextField
                    label="Email Address"
                    name="email"
                    variant="outlined"
                    color="primary"
                    style={{ width: "48%" }}
                    helperText={
                      apiEmailUsed ? "Email address already in use" : ""
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
                        ? "Making sure, passwords are the same"
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
                      label="I agree to the Terms and Conditions of using the app"
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
                <div style={{ width: "100%", marginBlock: "10px" }} className="_links">
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
          </div>
        </div>
      </Container>
      <Footer />
      <ScrollUp />
    </>
  );
}

const Container = styled.div`
.register-ctr {
  width: 80%;
  margin: 15px auto;
}
.register-ctr > div:first-child {
  font-size: 30px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.register-ctr > div:nth-child(3) {
  margin: 10px 0px;
}
.register-ctr > div:nth-child(4) {
  display: flex;
  margin-top: 20px;
}
.register-ctr > div:nth-child(4) > div:nth-child(2) {
  flex: 2;
  display: flex;
  justify-content: center;
  align-items: center;
}
.register-ctr > div:nth-child(4) > div:nth-child(2) form > div:nth-child(1) {
  text-align: center;
  font-size: 25px;
  padding-bottom: 10px;
}
.register-inputs-ctr-divided {
  display: flex;
  justify-content: space-between;
  margin: 10px 0px;
}
.form_ctr{
  width:100%;
}
.acc_hint{
  font-size:20px;
  color:#777777;
}
._links{
  font-size:16px;
}

@media screen and (max-width: 1024px) {
  .register-ctr > div:nth-child(4) {
    display: flex;
    flex-direction: column;
  }
  .register-ctr > div:nth-child(4) > div:nth-child(1) {
    border-right: none;
  }
  .register-ctr > div:nth-child(4) > div:nth-child(2) form {
    width: 95%;
  }
}

@media screen and (max-width: 768px) {
  .register-ctr {
    width: 95%;
    margin: 15px auto;
  }
}

`;
