import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Employee from './components/Employee';
import AddEmployee from './components/AddEmployee';
import EditEmployee from './components/EditEmployee';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Switch>
                    <Route path="/" exact component={Home} />
                    <Route path="/employees" component={Employee} />
                    <Route path="/add" component={AddEmployee} />
                    <Route path="/edit/:id" component={EditEmployee} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;

