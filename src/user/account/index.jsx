import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "../Design/user.css";
import Avarta from "..//../assets/user.svg";
import {
  Button,
  FilledInput,
  FormControl,
  IconButton,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import Person from "@mui/icons-material/Person";
import user from "..//../app.config";
import { useEffect } from "react";
import { ChevronRight } from "@mui/icons-material";
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import Footer from "../../components/footer/Footer";
import { useState } from "react";
import FormsApi from "../../api/api";

export default ({_user}) => {
  const params = useParams();
  const navigate = useNavigate();
useEffect(()=>{
  if (!user) {
    navigate("/user/login");
  }
}, []);
  // console.log(state._user);


//filtering the users and matchng the right user
// const _usa = state.users.filter((m)=>{
//   return user.id === m.id;
// });
  if (!user) return <Header />;

  return (
    <>
      <Header />
      <main>
        <section className="___profile-ctr">
          <div className="___cad">
            <div>
              <div className="___mge_ac">Manage Your Hostel Account</div>
              <Link
                to="/user/profile"
                className={
                  params.page === "profile"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span> My Profile</span>
              </Link>
              <Link
                to="/user/bookings"
                className={
                  params.page === "bookings"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span> My Bookings</span>
              </Link>
              <Link
                to="/user/recentlyviewed"
                className={
                  params.page === "recentlyviewed"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span> Recently viewed Hostels</span>
              </Link>
              <Link
                to="/user/editprofile"
                className={
                  params.page === "editprofile"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span> Edit Profile</span>
              </Link>
              <Link
                to="/user/usersecurity"
                className={
                  params.page === "usersecurity"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span>Security</span>
              </Link>
              <Link
                to="/user/closeaccount"
                className={
                  params.page === "closeaccount"
                    ? "user-link -b-x active"
                    : "user-link"
                }
              >
                <span> Close Account</span>
              </Link>
              <span
                className="user-link -b-x"
                onClick={() => {
                  const token_stored = localStorage.getItem("token");
                  if (token_stored) {
                    localStorage.removeItem("token");
                  } else {
                    sessionStorage.removeItem("token");
                  }
                  window.location.replace("/");
                }}
              >
                <span>Log Out</span>
                <ChevronRight />
              </span>
            </div>
          </div>
          <div className="___cad_te">
            <div>
              {params.page === "profile"
                ? "Personal Details"
                : params.page === "bookings"
                ? "My Bookings"
                : params.page === "editprofile"
                ? "Update Profile"
                : params.page === "usersecurity"
                ? "Security"
                : params.page === "recentlyviewed"
                ? "Recently Viewed Hostels"
                : params.page === "closeaccount"
                ? "Close Account"
                : "No Content for this"}
            </div>
            <div className="">
              {params.page === "profile" ? (
                <Profile />
              ) : params.page === "bookings" ? (
                <Bookings />
              ) : params.page === "editprofile" ? (
                <EditProfile />
              ) : params.page === "recentlyviewed" ? (
                <RcentlyViewed />
              ) : params.page === "closeaccount" ? (
                <AccountClosed />
              ) : params.page === "usersecurity" ? (
                <Security />
              ) : (
                <div> &nbsp; &nbsp; .... &nbsp; &nbsp;</div>
              )}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

const Profile = ({_user}) => {
  const [showPassword, setShowPassword] = useState(false);
  const[state, setState] = useState({
    _user: {},
  })
  useEffect(() => {
    (async () => {
      const res = await new FormsApi().get("/user/one/" + user.id);
      if (res !== "Error") {
        if (res.status !== false) {
          setState({
            ...state,
            _user: res.result,
          });
        }
      }
    })();
  }, []);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="__profile_">
        <form autoComplete="off">
          <div className="__input_ctr">
            <div className="__inputs_on_left">
              <TextField
                name="full_name"
                variant="filled"
                label="Full name"
                value={state._user.full_name || " "}
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
              <TextField
                type="number"
                name="phone_number"
                value={state._user.phone_number || " "}
                variant="filled"
                label="contact"
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
            </div>

            <div className="__inputs_on_right">
              <TextField
                name="email"
                variant="filled"
                label="Email Address"
                value={state._user.email || " "}
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
          <FormControl
           variant="filled"
           style={{
            width: "75%",
            margin: "20px",
          }}>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            value={state._user.password || " "}

          />
        </FormControl>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const Bookings = () => {
  return (
    <>
      <div className="___projects">
        <div className="card">
          <div className="card-header">
            <h4>My Bookings</h4>
          </div>
          <div className="card-body">
            <table width="100%">
              <thead>
                <tr>
                  <td>Hostel Name</td>
                  <td>Room Number</td>
                  <td>Booking date</td>
                </tr>
              </thead>
              {/* <tbody>
                {this.state.free.length === 0 ? (
                  <tr>
                    <td>No Free Room</td>
                  </tr>
                ) : this.state.free.length >= 5 ? (
                  this.state.free
                    .slice(
                      this.state.free.length - 5,
                      this.state.free.length
                    )
                    .map((x, y) => {
                      return (
                        <tr key={y}>
                          <td>{x.room_no}</td>
                          <td>{x.room_fee}</td>
                          <td>{x.room_type}</td>
                        </tr>
                      );
                    })
                ) : (
                  this.state.free.map((v, i) => {
                    return (
                      <tr key={i}>
                        <td>{v.room_no}</td>
                        <td>{v.room_fee}</td>
                        <td>{v.room_type}</td>
                      </tr>
                    );
                  })
                )}
              </tbody> */}
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

const EditProfile = () => {
  return (
    <>
      <div className="__profile_">
        <form autoComplete="off">
          <div className="__input_ctr">
            <div className="__inputs_on_left">
              <TextField
                name="full_name"
                variant="outlined"
                label="Full name"
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
              <TextField
                type="number"
                name="phone_number"
                variant="outlined"
                label="contact"
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                style={{ marginInline: 10 }}
              >
                Save profile
              </Button>
            </div>

            <div className="__inputs_on_right">
              <TextField
                name="email"
                variant="outlined"
                label="Email Address"
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
              <TextField
                name="password"
                variant="outlined"
                label="password"
                style={{
                  width: "75%",
                  margin: "20px",
                }}
              />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
const AccountClosed = () => {
  return (
    <div>
      <div>
        <span>Read Before closing your account</span>
      </div>
      <div className="__act_t">
        <p>
          Please You are about to ask us to permanently close your Beacon
          account and delete your data. Once your account is closed, you wont be
          able to book any hostel.
        </p>
      </div>
      <div className="__act_t">
        <p>
          This may take up to 30 days from the date of submission of your
          request.
        </p>
      </div>
      <div className="__cl_aa">
        <form>
          <FormControl
            variant="outlined"
            label="Select the reason"
            style={{
              width: "80%",
              margin: "20px",
            }}
          >
            <InputLabel id="type">Select the reason</InputLabel>
            <Select
              inputProps={{ name: "select_reason" }}
              id="select_room_type"
              label="Select the reason"
            >
              <MenuItem value="single">
                I am not using the account anymore
              </MenuItem>
              <MenuItem value="double">I wish to create a new account</MenuItem>
              <MenuItem value="double">I have another account</MenuItem>
              <MenuItem value="double">
                I dont want to disclose my reasons
              </MenuItem>
            </Select>
          </FormControl>
          <div>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ marginInline: 10 }}
            >
              Close my account
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
const Security = () => {
  return <div>Security</div>;
};
const RcentlyViewed = () => {
  return <div>Recently viewed</div>;
};
