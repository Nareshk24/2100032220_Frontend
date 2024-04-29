import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

function AddEmployee() {
    const history = useHistory();
    const [employee, setEmployee] = useState({
        id: '',
        FirstName: '',
        LastName: '',
        Gender: '',
        Age: '',
        Salary: '',
        Department: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setEmployee(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Insert data into database (you can add your logic here)
        console.log('Adding employee:', employee);
        // Redirect to employee component
        history.push('/employees');
    };

    return (
        <div>
            <h2>Add Employee</h2>
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
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default AddEmployee;
