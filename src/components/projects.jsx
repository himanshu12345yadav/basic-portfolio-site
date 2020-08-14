import React from "react";
import "./css/projects.css";
const Projects = () => {
  return (
    <>
      <section className="projects-banner">
        <h1 className="projects-heading">Projects</h1>
        <p className="projects-banner-content">
          These are some projects performed by me. You can find some of
          them and many more in detail on my github profile. Many more are on the way...
        </p>
      </section>
      <div className="projects">
        <table>
          <thead>
            <tr>
              <th>PROJECTS NAME</th>
              <th>HARDWARE OR SOFTWARE USED</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>self balancing robot</td>
              <td>arduino,gyroscope(MPU-6060),PID algorithm</td>
            </tr>
            <tr>
              <td>image processing</td>
              <td>matlab,OpenCV(Python)</td>
            </tr>
            <tr>
              <td>gradient descent optimisation algorithm</td>
              <td>matlab</td>
            </tr>
            <tr>
              <td>Full Fledged Website</td>
              <td>React JS,Node JS,Firebase,</td>
            </tr>
            <tr>
              <td>audio Fingerprinting(spectrogram)</td>
              <td>python(pyAudio,numpy,matplotlib),fast fourier transform</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Projects;
