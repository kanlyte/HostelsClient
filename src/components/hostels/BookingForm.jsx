import React, { useEffect, useState } from "react";
import {
  TextField,
  Alert as MuiAlert,
  Button,
  Backdrop,
  CircularProgress,
  Snackbar,
  Slide,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import Footer from "../footer/Footer";
import Header from "../header/Header";
import { Base64 } from "js-base64";
import "../design/Booking.scss";
import FormsApi from "../../api/api";
import user from "..//../app.config";
// const user = _user ? _user[0] : {};

function BookingForm() {
  const navigate = useNavigate();
  const [state, setState] = useState({
    open_loader: false,
    submit: false,
    hostels: [],
    a_rooms: [],
    booked_rooms: [],
    selected_room_no: "",
    mui: { snackBarPosition: { vertical: "top", horizontal: "right" } },
  });

  const changeSelectRoomNo = (event) => {
    setState({ ...state, selected_room_no: event.target.value });
  };

 

  useEffect(() => {
    (async () => {
      const hstls = await new FormsApi().get("/allhostels");
      const rooms = await new FormsApi().get("/allrooms");
      if (hstls === "Error" && rooms === "Error") {
        console.log(hstls, rooms);
      } else {
        if (hstls.status && rooms.status) {
          let hostels = [];
          let a_rooms = [];
          let booked_rooms = [];
          hstls.result.forEach((el) => {
            hostels.push(el);
          });
          rooms.result.forEach((el) => {
            if (el.booked) {
              booked_rooms.push(el);
            } else {
              a_rooms.push(el);
            }
          });
          setState({ ...state, hostels, a_rooms, booked_rooms });
        }
      }
    })();
  }, []);
  // const hostel_Id = localStorage.getItem("hostel_id")
  // ? JSON.parse(Base64.decode(localStorage.getItem("hostel_id")))
  // : [];
  const url_params = new URLSearchParams(window.location.search);
  const hostel_id = url_params.get("hostel");
  const bh = state.hostels.filter((el) => {
    return el.id === hostel_id;
  });
  const bookh = bh ? bh[0] : {};
  const availabel_rooms = state.a_rooms.filter((v) => {
    return v.hostel_id === hostel_id;
  });
  const submit_booking_form = async (e) => {
    e.preventDefault();
    setState({ ...state, submit: true, open_loader: true });
    let fd = new FormData(e.target);
    let contentObj = {};
    fd.forEach((v, i) => {
      contentObj[i] = v;
    });
    let formsApi = new FormsApi();
    let res = await formsApi.post("/book", contentObj);
    if (res.status === true) {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "room booked sucessfully",
          snackBarStatus: "success",
          snackBarOpen: true,
        },
        submit: true,
      });
      setTimeout(() => {
        navigate("/bookings/finish");
      }, 2000);
    
    } else if(res.status === false) {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: res.data,
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
        submit: false,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } else {
      setState({
        ...state,
        mui: {
          ...state.mui,
          snackBarMessage: "some other error",
          snackBarStatus: "warning",
          snackBarOpen: true,
        },
        submit: false,
      });
      setTimeout(() => {
        window.location.reload();
      }, 2000);
   
    }
  // console.log(contentObj);

  };
  const handleClose = () => {
    setState({ ...state, open_loader: false });
  };
  const handleToggle = () => {
    setState({ ...state, open_loader: true });
  };
  //close snackBar
  const handleCloseSnackbar = (event, reason) => {
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
        onClose={handleCloseSnackbar}
        message={state.mui.snackBarMessage}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={state.mui.snackBarStatus}
          sx={{ width: "100%" }}
        >
          {state.mui.snackBarMessage}
        </Alert>
      </Snackbar>
      <Header />
      <div className="bookingdetails">
        <div className="bookingdetails1">
          <div className="message">
            <p>
              <span style={{ color: "blue" }}>Dear Gaston,</span> <br />
              Feel free to complete your booking proces, You shall be mailed and
              called back to confirm to you that your room has been isorated for
              you. On your arrival, you shall find a custodian at our offices at
              the trading center of the university and shall direct you to your
              hostel.
              <br />
              <span style={{ color: "blue" }}>Thanks for booking with us.</span>
              <br />
              <span style={{ color: "gray" }}>For more information;</span>
              <br />
              Call / Whatsapp :
              <span style={{ color: "gray" }}>0787299525 / 0778089708</span>
              <br />
              Email:
              <span style={{ color: "gray" }}>kanlyteug@gmail.com</span>
            </p>
          </div>
        </div>
        <div className="bookingdetails2">
          <div>
            <h4>Please Fill this form to complete your booking process</h4>
          </div>
          <div className="booking-inputs-ctr">
            <form onSubmit={submit_booking_form}>
              <input
                type="text"
                name="hostel_id"
                value={bookh ? bookh.id : ""}
                hidden
                onChange={() => {}}
              />
                <input
                type="text"
                name="room_id"
                value={state.selected_room_no ? state.selected_room_no : ""}
                hidden
                onChange={() => {}}
              />
              <div>
                <TextField
                  label="Full Name"
                  name="name"
                  variant="outlined"
                  helperText={`Like: "Aggi peter"`}
                  color="primary"
                  style={{ width: "98%" }}
                  value={user.full_name || " "}
                />
              </div>
              <div className="bking-inputs-ctr-d">
                <TextField
                  label="Telephone Number"
                  variant="outlined"
                  name="telephone_number"
                  helperText={`Eg: "0778089708"`}
                  color="primary"
                  style={{ width: "48%" }}
                  value={user.phone_number || " "}
                />
                <TextField
                  label="Name of hostel booked"
                  variant="outlined"
                  name="name_of_hostel"
                  color="primary"
                  style={{ width: "48%" }}
                  value={bookh ? bookh.hostel_name : " "}
                />
              </div>
              <div className="bking-inputs-ctr-hw">
                <FormControl fullWidth>
                  <InputLabel id="select-room-no-label">
                    Select Room No.
                  </InputLabel>
                  <Select
                    labelId="select-room-no-label"
                    value={state.selected_room_no}
                    label="Select Room No"
                    onChange={changeSelectRoomNo}
                    name="room_number"
                    required
                  >
                    {availabel_rooms.length === 0 ? (
                      <MenuItem value="">No rooms available</MenuItem>
                    ) : (
                      availabel_rooms.map((v, i) => (
                        <MenuItem key={i} value={v.id}>
                          {v.room_number}
                        </MenuItem>
                      ))
                    )}
                  </Select>
                </FormControl>
              </div>
              <div className="bking-inputs-ctr-d">
                <TextField
                  label="Email"
                  name="email"
                  variant="outlined"
                  color="primary"
                  helperText={`gmail account`}
                  style={{ width: "48%" }}
                  value={user.email || " "}
                />
                <TextField
                  label="Level: (council / degree / depromer / masters"
                  variant="outlined"
                  name="level"
                  color="primary"
                  style={{ width: "48%" }}
                />
              </div>
              <div className="bking-inputs-ctr-d">
                <TextField
                  label="Type of entry (private / government)"
                  name="type_of_entry"
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                />
                <TextField
                  id="outlined-basic"
                  label="Location / district"
                  name="location"
                  required
                  variant="outlined"
                  color="primary"
                  style={{ width: "48%" }}
                />
              </div>

              <div className="tf">
                <Button
                  id="booking-btn"
                  variant="contained"
                  className="btn-btn"
                  size="medium"
                  type="submit"
                  onClick={handleToggle}
                >
                  PROCCED TO PAYMENT
                </Button>
              </div>
              <Backdrop
                sx={{
                  color: "#fff",
                  zIndex: (theme) => theme.zIndex.drawer + 1,
                }}
                open={state.open_loader}
                onClick={handleClose}
              >
                <CircularProgress color="inherit" />
              </Backdrop>
            </form>
          
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default BookingForm;
