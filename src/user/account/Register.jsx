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
  const [termsCheckBox, setTermsCheckBox] = useState(false);
  const [state, setState] = useState({
    submit: false,
    apiFeedBackError: false,
    apiEmailUsed: false,
    open_loader: false,
    samePassword: true,
    open_loader: false,
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },
  });

 const form_submit = async (e) => {
    e.preventDefault();
    setState({...state, submit: true,});
    const fd = new FormData(e.target);
    let _fcontent = {};
    fd.forEach((value, key) => {
      _fcontent[key] = value;
    });
    if (_fcontent.repeat_password !== _fcontent.password) {
      setState({...state,
      apiFeedBackError: true,
      submit: false,
      samePassword: false,
      });
      return;
    }
    let api = new FormsApi();
    let res = await api.post("/newuser", _fcontent);
    if (res === "Error") {
      setState({...state,
      apiFeedBackError: true,
      submit: false,
      });
      return;
    }
    if (res.status === false) {
      if (res.data === "Emailtaken") {
        setState({...state,
        apiFeedBackError: true,
        submit: false,
      });
        return;
      } else {
        setState({...state,
        apiFeedBackError: true,
        submit: true,
      });
        return;
      }
    } else {
      const data = Base64.encode(JSON.stringify({ ...res.result }));
      localStorage.setItem("token", data);
      setState({...state,
      submit: true,});    
      nav("/user/profile");
    }
  };



  const handleClose = () => {
    setState({ ...state, open_loader: false });
  };
  const handleToggle = () => {
    setState({ ...state, open_loader: true });
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
                state.apiEmailUsed ? "Email already in use" : ""
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
            />
            <TextField
              label="Repeat Password"
              name="repeat_password"
              type="password"
              variant="outlined"
              color="primary"
              style={{ width: "48%" }}
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
              style={{ width: "100%", margin: "15px 0px" }}
              color={state.apiFeedBackError ? "secondary" : "primary"}
            >
              {state.submit
                ? "Please Wait..."
                : state.apiFeedBackError
                ? "Something Went Wrong, Try again"
                : "Submit"}
            </Button>
          </div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={state.open_loader}
            onClick={handleClose}
          >
            <CircularProgress color="inherit" thickness={5} size={70} />
          </Backdrop>
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
