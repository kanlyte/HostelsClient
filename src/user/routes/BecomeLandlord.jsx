import React from 'react'
import Footer from '../../components/footer/Footer'
import Header from '../../components/header/Header'
import Req from "../../assets/Air hostess-pana.svg"
import { Button, TextField } from '@mui/material'
import "../Design/landlod.scss";

function BecomeLandlord() {
  return (
    <>
    <Header />
    <div className='__req_ctr'>
        <div className='__req_img'>
            <div>
                <img src={Req} />
            </div>
        </div>
        <div className='__form_inputs'>
        <div>Send us A request here If you want to become a landlord</div>
        <form className="" onSubmit={""}>
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
           
            />
          </div>
          <div>
            <Button
            variant='contained'
            color='primary'
            type='submit'
            style={{ width: "100%" }}
            >submit request</Button>
          </div>
          </form>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default BecomeLandlord