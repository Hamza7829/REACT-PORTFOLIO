// EducationTable.js

import React from 'react';
import './education.css'
import { useTheme } from '../components/Context';
import Fade from 'react-reveal/Fade';
const EducationTable = () => {

  const educationData = [
    { degree: 'IT', institution: 'Islamia University of Bahawalpur', score: '3.30 CGPA', years: '2022 - 2024' },
    { degree: 'ADP', institution: 'Islamia University of Bahawalpur', score: '63%', years: '2019 - 2021' },
    { degree: 'ICS', institution: 'Bahawalpur Board', score: '73.90%', years: '2017 - 2019' },
    { degree: 'SSC/Matric', institution: 'Bahawalpur Board', score: '69%', years: '2015 - 2017' }
  ];

  return (
    <div className="container">
<Fade left>
<h2 style={{ textAlign: 'center', marginBottom: '20px' }}>Education</h2>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th>Degree</th>
            <th>Institution</th>
            <th>Years</th>
          </tr>
        </thead>
        <tbody>
          {educationData.map((edu, index) => (
            <tr key={index}>
              <td>{edu.degree}</td>
              <td>{edu.institution}</td>
              <td>{edu.years}</td>
            </tr>
          ))}
        </tbody>
      </table>
</Fade>

    </div>
  );
};

export default EducationTable;
