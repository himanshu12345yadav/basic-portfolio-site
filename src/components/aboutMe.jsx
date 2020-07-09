import React from "react";
import profile_image from "../assets/profile_image.jpg";
import "./css/aboutMe.css";
const AboutMe = () => {
  return (
    <>
      <div className="AboutMe">
        <div className="profile_image">
          <img src={profile_image} alt="profile" align="center" />
        </div>
        <table>
          <thead>
            <tr>
              <th colSpan="2">
                <h2 className="hedading">who am i?</h2>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>name</td>
              <td>HIMANSHU</td>
            </tr>
            <tr>
              <td>roll no</td>
              <td>2019KUEC2009</td>
            </tr>
            <tr>
              <td>Branch</td>
              <td>electronics and communciation engineering</td>
            </tr>
            <tr>
              <td>occupation</td>
              <td>student</td>
            </tr>
            <tr>
              <td>fields of interest</td>
              <td>
                ethical hacking, computers, networking,robotics, Artificial
                Intelligence
              </td>
            </tr>
            <tr>
              <td>Qualities</td>
              <td>Autodidact(self learner), passionately curious</td>
            </tr>
            <tr>
              <td>motivational quote</td>
              <td>
                <i>
                  it's not that i am so smart, it's just that i stay with
                  problems longer.
                </i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AboutMe;
