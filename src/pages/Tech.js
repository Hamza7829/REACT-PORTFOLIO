import React from 'react';
import './tech.css';
import List from './Technology';
import Rotate from 'react-reveal/Rotate';
export default function Tech() {
  return (
    <>
      <div className='container techstack text-center'>
        <h2 className='techstack-title'>Technologies Stacks</h2>
        <hr className='techstack-divider'/>
        <p className='techstack-description'>
          Including programming language, database, framework, and frontend development.
        </p>
      </div>
      <div className='container'>
        <div className='row'>
          <Rotate>
          {List.map(tech => (
            <div key={tech.id} className="col-md-4 col-sm-6 mb-4">
              <div className="card h-100 text-center">
                <div className="card-body">
                  <h5 className="card-title">{tech.Name}</h5>
                  {tech.Icon && <tech.Icon size={40} className="tech-icon"/>} {/* Adjusted size */}
                </div>
              </div>
            </div>
          ))}
          </Rotate>
         
        </div>
      </div>
    </>
  );
}
