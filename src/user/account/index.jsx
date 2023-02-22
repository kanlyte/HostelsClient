import { Link, useNavigate, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import "../Design/user.css";
import Avarta from "..//../assets/user.svg";
import { Button, TextField } from "@mui/material";
import Person from '@mui/icons-material/Person';
import user from "..//../app.config";
import { useEffect } from "react";
import { ChevronRight } from "@mui/icons-material";
import Footer from "../../components/footer/Footer";

export default () => {
  const params = useParams();
  const navigate = useNavigate();
  useEffect(() => {
    if (!user) {
      navigate("/user/login");
    }
  }, []);

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
            <span> Recently viewed</span>
            </Link>

            <Link
              to="/user/editprofile"
              className={
                params.page === "editprofile" ? "user-link -b-x active" : "user-link"
              }
            >
              <span> Edit Profile</span>
            </Link>
            <Link
              to="/user/recentlyviewed"
              className={
                params.page === "recentlyviewed"
                  ? "user-link -b-x active"
                  : "user-link"
              }
            >
              <span>Security</span>
            </Link>
            <Link
              to="/user/recentlyviewed"
              className={
                params.page === "recentlyviewed"
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
              ? "My Profile"
              : params.page === "bookings"
              ? "My Bookings"
              : params.page === "editprofile"
              ? "Update Profile"
              : "No Content for this"}
          </div>
          <div className="user-content-ctr">
            {params.page === "profile" ? (
              <Profile />
            ) : params.page === "bookings" ? (
              <Bookings />
            ) : params.page === "editprofile" ? (
              <EditProfile />
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

const Profile = () => {
  return (
    <div className="p_ctr">
      <div className="profile-photo">
        <div>
          <img src={Avarta} alt="Profileimg" />
          <h3>Role: User</h3>
        </div>
      </div>
      <form className="form_inpts cd">
        <p>
          <label>Change Photo:</label>
          <input type="file" accept="image/*" name="image" onChange="" />
        </p>
        <p>
          <label>Name:</label>
          <TextField
            label="Name"
            name="name"
            variant="outlined"
            color="primary"
            style={{ width: "50%" }}
          />
        </p>
        <p>
          <label>Email:</label>
          <TextField
            label="Email"
            name="email"
            variant="outlined"
            color="primary"
            style={{ width: "50%" }}
          />
        </p>
        <p>
          <label>Phone:</label>
          <TextField
            label="Phone"
            name="phone"
            variant="outlined"
            color="primary"
            style={{ width: "50%" }}
          />
        </p>
        <p>
          <label>Bio:</label>
          <textarea
            name="bio"
            // value={profile?.bio}
            // onChange={handleInputChange}
            cols="30"
            rows="10"
          ></textarea>
        </p>
        <Button
        variant="contained"
        color="primary">
          Update Profile
        </Button>
      </form>
    </div>
  );
};

const Bookings = () => {
    return(
        <div className="user-data-ctr">
        <div>
          <div className="h_bkd">Hostel Booked</div>
          <div>
            <div>Date</div>
            <div>Joshua</div>
          </div>
          <div>
            <div>Room Number</div>
            <div>not indicated</div>
          </div>
          <div>
            <div>Booking Fee</div>
            <div>UGX 50,000</div>
          </div>
          <div className="c_btn">
          <Button
          variant="contained"
          color="success">Cancel Booking</Button>
        </div>
        </div>
        <div>
          <div className="h_bkd">Hostel Booked</div>
          <div>
            <div>Date</div>
            <div>Joshua</div>
          </div>
          <div>
            <div>Room Number</div>
            <div>not indicated</div>
          </div>
          <div>
            <div>Booking Fee</div>
            <div>UGX 50,000</div>
          </div>
        </div>
        </div>
    )
};

const EditProfile = ()=>{
  return(
    <div>Profile</div>
  )
}

