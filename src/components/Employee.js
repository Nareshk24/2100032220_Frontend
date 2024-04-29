import React from 'react';
import { Link } from 'react-router-dom';
import employees from './employees';

function Employee() {
    return (
        <div>
            <h2>Employee List</h2>
            <Link to="/add">
                <button>Add Employee</button>
            </Link>
            <table>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Gender</th>
                        <th>Age</th>
                        <th>Salary</th>
                        <th>Department</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map(employee => (
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.FirstName}</td>
                            <td>{employee.LastName}</td>
                            <td>{employee.Gender}</td>
                            <td>{employee.Age}</td>
                            <td>{employee.Salary}</td>
                            <td>{employee.Department}</td>
                            <td>
                                <Link to={`/edit/${employee.id}`}>
                                    <button>Edit</button>
                                </Link>{' '}
                                <button onClick={() => handleDelete(employee.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

function handleDelete(id) {
    // Ask for confirmation before deleting
    const confirmDelete = window.confirm('Are you sure you want to delete this employee?');
    if (confirmDelete) {
        // Delete logic (you can add your logic here)
        console.log('Deleting employee:', id);
    }
}

export default Employee;
