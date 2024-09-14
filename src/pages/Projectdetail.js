import React from 'react';
import '../components/Projectdetail.css';

function Projectdetail() {
  const projects = [
    {
      name: 'E-commerce Store',
      description: 'A full-featured e-commerce store built with React and hooks, reusable components, and routing.',
      technologies: 'React, Bootstrap, JavaScript',
      date: '2024'
    },
    {
      name: 'Blog Page',
      description: 'A blog page fetching data from JSONPlaceholder using React hooks and displayed using Bootstrap components.',
      technologies: 'React, JSONPlaceholder, Bootstrap',
      date: '2024'
    },
    {
      name: 'Portfolio Application',
      description: 'A personal portfolio showcasing education, skills, and projects with Bootstrap styling.',
      technologies: 'React, Bootstrap',
      date: '2024'
    },{
      name: 'Dental Clinc Appointment',
      description: "Final year project" ,
      technologies: 'React, Bootstrap',
      date: '2023'
    }
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Project Details</h2>
      <table className="table table-bordered">
        <thead className="thead-dark">
          <tr>
            <th scope="col">Project Name</th>
            <th scope="col">Description</th>
            <th scope="col">Technologies Used</th>
            <th scope="col">Completion Date</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, index) => (
            <tr key={index}>
              <td>{project.name}</td>
              <td>{project.description}</td>
              <td>{project.technologies}</td>
              <td>{project.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Projectdetail;
