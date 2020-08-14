import React from "react";
import "./css/subjects.css";

const Subjects = () => {
  return (
    <>
      <div className="syllabus-banner">
        <h1 className="syllabus-banner-headline">Syllabus</h1>
        <p className="syllabus-banner-content">
          Prescribed syllabus for First Year Second Semester Students
        </p>
      </div>
      <div className="subjects">
        <table>
          <thead>
            <tr>
              <th>COURSE NAME</th>
              <th>PRESCRIBED BOOKS</th>
              <th>CREDITS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Electronics Devices And Circuits</td>
              <td>Jacob Millman, Christos C. Halkias,</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Data Structures And Algorithms</td>
              <td>Ellis Horowitz, Sartaj Sahni</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Internet And Web Technologies</td>
              <td>Robert W. Sebesta, </td>
              <td>3</td>
            </tr>
            <tr>
              <td>Health, Safety And Environment</td>
              <td>J. McCornick, M.S. Sanders, </td>
              <td>1</td>
            </tr>
            <tr>
              <td>Mathemantics - 2</td>
              <td>Erwin Kreyszig</td>
              <td>3</td>
            </tr>
            <tr>
              <td>Human Values And Effective Communication</td>
              <td>O. Henry, “After Twenty Years”</td>
              <td>2</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Subjects;
