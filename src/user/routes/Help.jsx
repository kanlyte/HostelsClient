import { useSnackbar } from "notistack";
import React, { useState } from "react";
import styled from "styled-components";
import FormsApi from "../../api/api";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import { validateEmail } from "../../utils/data/validate";
import ScrollUp from "../../utils/ScrollUp";
export default () => {
  const {enqueueSnackbar } = useSnackbar();
  const [sendSuccess, setSendSuccess] = useState(false);
  const [submit, setSubmit] = useState(false);

  const [data, setData] = useState({
    name: "",
    subject: "",
    email: "",
    message: "",
  });
const submitMessage = async(e)=>{
  e.preventDefault();
  if (data.name === "" || data.name === null) {
   enqueueSnackbar("Name field is blank", { variant: "error" });
  }else if (data.subject === "" || data.subject === null) {
   enqueueSnackbar("Subject field is blank", { variant: "error" });
}else if (data.email === "" || data.email === null) {
   enqueueSnackbar("Email field is blank", { variant: "error" });
}else if (data.message === "" || data.message === null) {
   enqueueSnackbar("message field is blank", { variant: "error" });
}else if(!validateEmail(data.email)){
  enqueueSnackbar("Enter correct email format", {variant: "error",});
}
else{
  let api = new FormsApi();
  let res = await api.post("/new/contact", data);
  if (res.status === true) {
    enqueueSnackbar("Request sent successfully", {variant: "success",});
    setSubmit(true);
    setData({
      name: "",
      subject: "",
      email: "",
      message: "",
    })
  }
  else if(res.status === false){
    enqueueSnackbar("An error occured", {variant: "warning",});
    setSubmit(false);
  }else{
    enqueueSnackbar("Some other error occured", {variant: "warning",});
    setSubmit(false);
  }

}
}


const onCall = () => {
  window.open("tel:+256778089708");
  };

  const onMail = () => {
    window.open("email:beaconhostels@gmail.com");
    };

  return (
    <>
      <Header />
      <Container>
      <main id="main">
        <section id="breadcrumbs" class="breadcrumbs">
          <div class="container">
            <ol>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Contact</li>
            </ol>
            <h2>Contact Us</h2>
          </div>
        </section>
        <section id="contact" class="contact">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <div class="info-box mb-4 contact_hovering">
              <i class="las la-map icon-box"></i>
              <h3>Our Address</h3>
              <p>Obote Avenue, Lira City, Uganda</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-box  mb-4 contact_hovering" onClick={()=>onMail()}>
              <i class="las la-envelope icon-box"></i>
              <h3>Email Us</h3>
              <p>beaconhostels@gmail.com</p>
            </div>
          </div>

          <div class="col-lg-3 col-md-6">
            <div class="info-box  mb-4 contact_hovering" onClick={()=> onCall()}>
              <i class="las la-phone-alt icon-box"></i>
              <h3>Call Us</h3>
              <p>+256778089708</p>
            </div>
          </div>

        </div>

        <div class="row">

          <div class="col-lg-6 ">
            {/* <iframe class="mb-4 mb-lg-0" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d249.3589020022708!2d32.59921337416957!3d0.35338587788557546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbb5263afb221%3A0xf710e7c1db9d9677!2skawu%20smart!5e0!3m2!1sen!2sug!4v1669599345997!5m2!1sen!2sug" frameborder="0" style="border:0; width: 100%; height: 384px;" allowfullscreen></iframe> */}
          </div>

          <div class="col-lg-6">
            <form class="php-email-form" onSubmit={submitMessage}>
              <div class="row">
                <div class="col-md-6 form-group">
                  <input
                   name="name"
                   class="form-control"
                   id="name"
                   placeholder="Enter Your Name"
                   value={data.name} 
                   onChange={(e) =>
                    setData({ ...data, name: e.target.value })
                  }/>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                  <input
                   class="form-control" 
                   name="email" 
                   id="email"
                   placeholder="Enter Your Email"
                  //  required 
                   value={data.email} 
                   onChange={(e) =>
                    setData({ ...data, email: e.target.value })
                  }
                   />
                </div>
              </div>
              <div class="form-group mt-3">
                <input
                 class="form-control"
                 name="subject"
                 id="subject" 
                 placeholder="Enter your Subject"
                //  required
                 value={data.subject} 
                 onChange={(e) =>
                  setData({ ...data, subject: e.target.value })
                } />
              </div>
              <div class="form-group mt-3">
                <textarea
                 class="form-control"
                 name="message"
                 rows="5" 
                 placeholder="Enter your Message"
                //  required
                 value={data.message} 
                 onChange={(e) =>
                  setData({ ...data, message: e.target.value })
                }></textarea>
              </div>
              <div class="text-center"><button type="submit">Send Message</button></div>
            </form>
          </div>

        </div>

      </div>
    </section>
      </main>
      </Container>
      <Footer />
      <ScrollUp/>

    </>
  );
};
const Container = styled.div`
.breadcrumbs {
  padding: 20px 0 20px 0;
  background: #f7f7f7;
  border-bottom: 1px solid #ededed;
  margin-bottom: 40px;
}
.breadcrumbs h2 {
  font-size: 28px;
  font-weight: 700;
  color: #1519ee;
}
.breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0 0 5px 0;
  margin: 0;
  font-size: 14px;
}

.breadcrumbs ol li+li {
  padding-left: 10px;
}

.breadcrumbs ol li+li::before {
  display: inline-block;
  padding-right: 10px;
  color: #6e6e6e;
  content: "/";
}
.contact .info-box {
  color: #444444;
  text-align: center;
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 20px 0 30px 0;
}

.contact .info-box i {
  font-size: 32px;
  color: #e96b56;
  border-radius: 50%;
  padding: 8px;
  border: 2px dotted #fef5f4;
}

.contact .info-box h3 {
  font-size: 20px;
  color: #777777;
  font-weight: 700;
  margin: 10px 0;
}

.contact .info-box p {
  padding: 0;
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
  color: #777777;
}

.contact .php-email-form {
  box-shadow: 0 0 30px rgba(214, 215, 216, 0.6);
  padding: 30px;
}

.contact .php-email-form .validate {
  display: none;
  color: red;
  margin: 0 0 15px 0;
  font-weight: 400;
  font-size: 13px;
}

.contact .php-email-form .error-message {
  display: none;
  color: #fff;
  background: #ed3c0d;
  text-align: left;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .error-message br+br {
  margin-top: 25px;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #fff;
  background: #18d26e;
  text-align: center;
  padding: 15px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: #fff;
  text-align: center;
  padding: 15px;
}

.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid #18d26e;
  border-top-color: #eee;
  -webkit-animation: animate-loading 1s linear infinite;
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input,
.contact .php-email-form textarea {
  border-radius: 0;
  box-shadow: none;
  font-size: 14px;
}

.contact .php-email-form input:focus,
.contact .php-email-form textarea:focus {
  border-color: #e96b56;
}

.contact .php-email-form input {
  padding: 10px 15px;
}

.contact .php-email-form textarea {
  padding: 12px 15px;
}

.contact .php-email-form button[type=submit] {
  background: #e96b56;
  border: 0;
  border-radius: 50px;
  padding: 10px 24px;
  color: #fff;
  transition: 0.4s;
}

.contact .php-email-form button[type=submit]:hover {
  background: #e6573f;
}

@-webkit-keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}


section {
  padding: 0 9%;
  padding-top: 5rem;
  padding-bottom: 2rem;
}

.contact_hovering:hover {
  background: #1a5ba6;
  border-color: #e96b56;
}
.contact_hovering .icon-box:hover{
  background: #fff;
  color: #e96b56;

}
.contact_hovering:hover h3,
.contact_hovering:hover p {
  color: #fff;
}



`;
