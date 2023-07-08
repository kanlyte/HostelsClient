import React from "react";
import "../Design/team.css";
import SingleTeamMember from "./SingleTeamMember";
import { BeaconHostelsTeam } from "../store/otherData/otherData";


const BTeam = () => {
  return (
    <section class="team">
      <div class="center">
        <h1>Our Team</h1>
      </div>
      <div className="team-content">
        {BeaconHostelsTeam?.map((item, index) => {
          return <SingleTeamMember key={index} {...item} />;
        })}
      </div>
    </section>
  );
};

export default BTeam;
