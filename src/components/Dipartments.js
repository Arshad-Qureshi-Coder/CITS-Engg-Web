import React from 'react';

const Departments = () => {
  const engineeringDepartments = [
    { id: 1, name: 'Computer Software Application (CSA)', description: 'Explore the world of computer software development.' },
    { id: 2, name: 'Computer Hardware and Network Management (CHNM)', description: 'Learn about computer hardware and network administration.' },
    { id: 3, name: 'Solar Technician', description: 'Gain skills in solar technology and renewable energy.' },
    { id: 4, name: 'Electrician', description: 'Develop expertise in electrical systems and wiring.' },
    { id: 5, name: 'Electronic Mechanics (EM)', description: 'Study the mechanics of electronic systems and devices.' },
    // Add more departments as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Choose Your Engineering Departments</h2>

      <div className="row">
        {engineeringDepartments.map(department => (
          <div key={department.id} className="col-md-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{department.name}</h5>
                <p className="card-text">{department.description}</p>
                <a href={`/departments/${department.id}`} className="btn btn-primary">Explore</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Departments;
