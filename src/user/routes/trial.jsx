import React from "react";
import styled from "styled-components";
import "../Design/team.css";
// import { kawuTeam } from "../../store/otherData";
// import SingleTeamMember from "./SingleTeamMember";

const BTeam = () => {
  return (
    <section class="team">
      <div class="center">
        <h1>Our Team</h1>
      </div>

      <div class="team-content">
        <div class="box">
          <img src="img/01.png" />
          <h3>Steph Jobs</h3>
          <h5>Artist</h5>
          <div class="icons">
            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="img/02.png" />
          <h3>Steph Jobs</h3>
          <h5>Artist</h5>
          <div class="icons">
            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="img/03.png" />
          <h3>Steph Jobs</h3>
          <h5>Artist</h5>
          <div class="icons">
            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>

        <div class="box">
          <img src="img/04.png" />
          <h3>Steph Jobs</h3>
          <h5>Artist</h5>
          <div class="icons">
            <a href="#">
              <i class="ri-twitter-fill"></i>
            </a>
            <a href="#">
              <i class="ri-facebook-box-fill"></i>
            </a>
            <a href="#">
              <i class="ri-instagram-fill"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BTeam;
