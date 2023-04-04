import React, { useEffect, useState } from "react";
import {
  TextField,
  Alert as MuiAlert,
  Button,
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
import FormsApi from "../../api/api";
import user from "..//../app.config";
import styled from "styled-components";
import rn from "random-number";
import ScrollUp from "../../utils/ScrollUp";

function BookingForm() {
  var options = {
    min: 1000,
    max: 9000,
    integer: true,
  };

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

  const selected_room_arr = availabel_rooms.filter((r) => {
    return state.selected_room_no === r.room_number;
  });
  const s_r_arr = selected_room_arr ? selected_room_arr[0] : {};
  // console.log(s_r_arr);

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
        navigate("/bookings/Finish");
      }, 2000);
    } else if (res.status === false) {
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
      <Container>
        <main>
          <div className="fullwidth-ctr">
              <div
                className=""
                style={{
                  borderBottom: "1px solid #f0f0f0",
                  padding: "1rem",
                }}
              >
                <div className="form-header-ctr">
                  <div className="">
                    <h5>Booking Form</h5>
                  </div>
                </div>
                <div className="card-body">
                  <div>
                    <div className="inputCtr">
                      <h4>Booking Details</h4>
                      <div className="inputs_ctr_np">
                        <div className="inputs_left_np">
                          <form
                            className="card"
                            autoComplete="off"
                            onSubmit={submit_booking_form}
                          >
                            <input
                              type="text"
                              name="landlord_id"
                              value={bookh ? bookh.hostel_landlord : ""}
                              hidden
                              onChange={() => {}}
                            />
                            <input
                              type="text"
                              name="hostel_id"
                              value={bookh ? bookh.id : ""}
                              hidden
                              onChange={() => {}}
                            />
                            <input
                              type="text"
                              name="user_id"
                              value={user ? user.id : ""}
                              hidden
                              onChange={() => {}}
                            />
                            <input
                              type="text"
                              name="room_id"
                              value={s_r_arr ? s_r_arr.id : ""}
                              hidden
                              onChange={() => {}}
                            />
                            <input
                              type="text"
                              name="payment_code"
                              value={rn(options)}
                              hidden
                              // onChange={() => {}}
                            />
                            <TextField
                              name="booking_fee"
                              type="number"
                              value={bookh ? bookh.booking_fee : " "}
                              hidden
                            />
                            <div className="inputs_ctr_flex">
                              <TextField
                                name="name"
                                variant="outlined"
                                label="Full Name"
                                style={{
                                  width: "75%",
                                  margin: "10px",
                                }}
                                value={user.full_name || " "}
                              />
                              <TextField
                                name="telephone_number"
                                variant="outlined"
                                label="Contact"
                                value={user.phone_number || " "}
                                style={{
                                  width: "75%",
                                  margin: "10px",
                                }}
                              />
                            </div>
                            <div className="inputs_ctr_fullwidth">
                              <TextField
                                name="name_of_hostel"
                                variant="outlined"
                                label="Hostel name"
                                value={bookh ? bookh.hostel_name : " "}
                                style={{
                                  width: "100%",
                                }}
                              />
                            </div>
                            <div className="inputs_ctr_flex">
                              <TextField
                                name="email"
                                variant="outlined"
                                label="Email"
                                value={user.email || " "}
                                style={{
                                  width: "75%",
                                  margin: "10px",
                                }}
                              />
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
                                  style={{
                                    width: "75%",
                                    margin: "10px",
                                  }}
                                >
                                  {availabel_rooms.length === 0 ? (
                                    <MenuItem value="">
                                      No rooms available
                                    </MenuItem>
                                  ) : (
                                    availabel_rooms.map((v, i) => (
                                      <MenuItem key={i} value={v.room_number}>
                                        {v.room_number}
                                      </MenuItem>
                                    ))
                                  )}
                                </Select>
                              </FormControl>
                            </div>
                            <div
                              style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                margin: 10,
                              }}
                            >
                              <Button
                                variant="outlined"
                                color="primary"
                                type="submit"
                              >
                                Submit Form
                              </Button>
                            </div>
                          </form>
                        </div>
                        <div className="inputs_right_np">
                          <h4 style={{ margin: "20px" }}>See Room Details</h4>
                          <div className="tbl_ctr_np">
                            <table width="100%">
                              <thead>
                                <tr>
                                  <td>Room type</td>
                                  <td>Booking fee</td>
                                  <td>Room description</td>
                                </tr>
                              </thead>
                              <tbody>
                                <tr>
                                  <td>{s_r_arr ? s_r_arr.room_type : ""}</td>
                                  <td>{s_r_arr ? s_r_arr.room_fee : ""}</td>
                                  <td>
                                    {s_r_arr ? s_r_arr.room_description : ""}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          </div>
        </main>
      </Container>
      <Footer />
    <ScrollUp />
    </>
  );
}

const Container = styled.div`
  .inputCtr {
    width: 90%;
    margin: auto;
  }
  .form-header-ctr h5{
    font-size:25px;
    margin-left: 70px;
  }
   .inputCtr h4{
    font-size: 18px;
  }
  .inputs_ctr_fullwidth {
    padding: 15px 20px;
  }
  .inputCtrPaymentsDepart {
    width: 55%;
    margin: auto;
  }
  .inputs_ctr_flex {
    display: flex;
    justify-content: space-between;
    // padding: 15px 20px;
  }
  .inputs_ctr {
    width: 100%;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    margin: 15px auto;
    display: flex;
    justify-content: space-around;
  }
  .inputs_ctr_np {
    width: 100%;
    margin: 15px auto;
    display: flex;
    justify-content: space-around;
  }
  .inputs_ctr_np > div {
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
  }
  .inputs_right_np {
    flex: 2;
    margin-left: 10px;
  }
  .inputs_left_np {
    flex: 1;
    margin-right: 10px;
  }
  .tbl_ctr_np {
    width: 95%;
    margin: auto;
    /* overflow-x: scroll; */
  }
  td {
    width: 25% !important;
  }
  /*inputs for new product*/
  .inpts_center {
    flex: 1;
  }
  .inpts_on_left {
    flex: 1;
  }
  .inpts_on_right {
    flex: 1;
  }
  /*name cell*/
  .name_cell {
    max-width: 150px !important;
    overflow: hidden;
    text-overflow: ellipsis;
    color: red;
  }
  @media screen and (max-width: 1024px) {
    .inputCtr {
      width: 100%;
      margin: auto;
    }
    .inputs_ctr {
      flex-direction: column;
    }
    /*Payments Responsive*/
    .card-header-payments {
      justify-content: flex-end;
    }
    .class_payment_header {
      display: none;
    }
    .inputCtrPaymentsDepart {
      width: 75%;
      margin: auto;
    }
  }

  @media screen and (max-width: 600px) {
    /* payments responsive */
    .inputCtrPaymentsDepart {
      width: 100%;
      margin: auto;
    }
    .inputs_ctr_np{
      display: flex;
      flex-direction: column;
      gap:30px;
    }
      .form-header-ctr h5{
    font-size:20px;
    margin-left: 10px;
  }
   .card-body {
    overflow: auto;
  }
    .tbl_ctr_np {
  overflow-x: scroll;
  }
    .inputs_ctr {
    border: none;
    margin: 0px;
  }
   .inputs_ctr_np > div {
    border:none;
    border-radius: 5px;
  }
  .inputCtr h4{
    font-size: 16px;
  }

  }
`;

export default BookingForm;
