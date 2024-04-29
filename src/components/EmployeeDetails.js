import React from 'react';

function EmployeeDetails({ employee }) {
    return (
        <div>
            <h2>Employee Details</h2>
            <p><strong>ID:</strong> {employee.id}</p>
            <p><strong>First Name:</strong> {employee.FirstName}</p>
            <p><strong>Last Name:</strong> {employee.LastName}</p>
            <p><strong>Gender:</strong> {employee.Gender}</p>
            <p><strong>Age:</strong> {employee.Age}</p>
            <p><strong>Salary:</strong> {employee.Salary}</p>
            <p><strong>Department:</strong> {employee.Department}</p>
        </div>
    );
}

export default EmployeeDetails;
