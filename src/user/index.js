
import { BrowserRouter,Routes, Route} from "react-router-dom";
import HostelDetails from "../components/hostels/HostelDetails";
import Account from "./account";
import Login from "./account/Login";
import Register from "./account/Register";
import Home from "./Home";
import Booking from "../components/hostels/BookingForm";
import SendEmail from "../components/hostels/SendEmail";
import Finish from "../user/routes/bookings/finish";
import NotFound from "../components/NotFound/404";
function User(){
    return (
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="user/sendmail" element={<SendEmail />} />
    <Route path="/hostel/:id" element={<HostelDetails />} />
    <Route path="/user/:page" element={<Account />} />
    <Route path="user/register" element={<Register />} />
    <Route path="user/login" element={<Login />} />
    <Route path="/bookingform" element={<Booking />} />
    <Route path="/bookings/finish" element={<Finish />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
  </BrowserRouter>
    );
  };
  
  export default User;