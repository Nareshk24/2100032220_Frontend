import React from 'react';

const EmployeeTable = ({ employees }) => {
    // Function to capitalize the first letter of a string
    const capitalizeFirstLetter = (str) => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    // Function to calculate position based on age
    const getPosition = (age) => {
        return age > 40 ? 'Sr. Employee' : 'Jr. Employee';
    };

    // Function to calculate salary based on age and position
    const calculateSalary = (age, position) => {
        return position === 'Sr. Employee' ? age * 10 + 50000 : age * 5 + 50000;
    };

    return (
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Position</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                {employees.map((employee, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'even' : 'odd'}>
                        <td>{capitalizeFirstLetter(employee.firstName)}</td>
                        <td>{capitalizeFirstLetter(employee.lastName)}</td>
                        <td>{employee.age}</td>
                        <td>{getPosition(employee.age)}</td>
                        <td>${calculateSalary(employee.age, getPosition(employee.age))}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default EmployeeTable;
