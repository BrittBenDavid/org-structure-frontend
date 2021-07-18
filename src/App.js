//import
import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//import components
import EmployeeList from './comp/EmployeeList/EmployeeList';
import EmployeeDetailsWindow from './comp/EmployeeDetailsWindow/EmployeeDetailsWindow';

//import style and images
import './App.css';
import img from './images/task_photo.jpg';

console.log("App: start")

function App() {
    return (
        <Router>
        <header className="App">
            <br/><br/>
            <img className="logo" src={img} alt='tasks'/>
            <div>
                <Link to="/"></Link>
                <Link to="/employee/:emp_no"></Link>
            </div>
    
        </header>
        <Switch>
            <Route exact path="/" component={EmployeeList} />   
            <Route exact path="/employee/:emp_no" component={EmployeeDetailsWindow} />
        </Switch>
        </Router>
    )
};

export default App;