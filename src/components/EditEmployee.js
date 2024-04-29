import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import employees from './employees';

function EditEmployee() {
    const history = useHistory();
    const { id } = useParams();
    const employeeData = employees.find(emp => emp.id === parseInt(id));
    const [employee, setEmployee] = useState(employeeData);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Update data in database (you can add your logic here)
        console.log('Updating employee:', employee);
        // Redirect to employee component
        history.push('/employees');
    };

    return (
        <div>
            <h2>Edit Employee</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="FirstName" value={employee.FirstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="LastName" value={employee.LastName} onChange={handleChange} required />
                </label>
                <label>
                    Gender:
                    <input type="text" name="Gender" value={employee.Gender} onChange={handleChange} required />
                </label>
                <label>
                    Age:
                    <input type="number" name="Age" value={employee.Age} onChange={handleChange} required />
                </label>
                <label>
                    Salary:
                    <input type="number" name="Salary" value={employee.Salary} onChange={handleChange} required />
                </label>
                <label>
                    Department:
                    <input type="text" name="Department" value={employee.Department} onChange={handleChange} required />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditEmployee;
