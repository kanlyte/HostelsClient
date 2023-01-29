import axios from "axios";
import { useState } from "react";

function SendEmail() {

    const [email, setEmail] = useState("");

    const sendEmail = async (e) => {
      e.preventDefault();
  
      const data = {
        email,
      };
  console.log(email);
      const response = await axios.post(
        "http://localhost:5058/api/v6/sendmail",
        data
      );
      console.log(response.data);
    };
  return (
    <div className="--flex-center --bg-primary --100vh">
    <div className="--width-500px --card --p --bg-light">
      <form className="--form-control" onSubmit={sendEmail}>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="--btn --btn-primary">
          Send Email
        </button>
      </form>
    </div>
  </div>
  )
}

export default SendEmail