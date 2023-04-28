import { BrowserRouter, Routes, Route } from "react-router-dom";
import HostelDetails from "../components/hostels/HostelDetails";
import Account from "./account";
import Login from "./account/Login";
import Register from "./account/Register";
import Home from "./Home";
import Booking from "../components/hostels/BookingForm";
import SendEmail from "../components/hostels/SendEmail";
import NotFound from "../components/NotFound/404";
import AboutUs from "./routes/Aboutus";
import PrivacyPolicy from "./routes/Privacypolicy";
import Help from "./routes/Help";
import BookManual from "./routes/BookManual";
import TermsConditions from "./routes/TermsConditions";
import BecomeLandlord from "./routes/BecomeLandlord";
import Finish from "../components/hostels/Finish";
function User() {
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
        <Route path="/booking/finish" element={<Finish />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/privacypolicy" element={<PrivacyPolicy />} />
        <Route path="/help" element={<Help />} />
        <Route path="/bookmanual" element={<BookManual />} />
        <Route path="/becomelandlord" element={<BecomeLandlord />} />
        <Route path="/tcs" element={<TermsConditions />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default User;
