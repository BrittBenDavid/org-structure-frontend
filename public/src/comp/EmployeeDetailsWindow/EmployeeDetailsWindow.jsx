import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'

import "./EmployeeDetailsWindow.css";

//import components
import EmployeePrivateDetails from './employeePrivateDetails/EmployeePrivateDetails';
import EmployeeTasks from './employeeTasks/EmployeeTasks';
import EmployeeSubordinates from './employeeSubordinates/EmployeeSubordinates';


class EmployeeDetailsWindow extends Component {
    
     //define state
     state = {emp_no: this.props.match.params.emp_no,
                emp_arr: [],}

     componentDidMount(){
         let url = `http://localhost:4000/employee/${this.state.emp_no}`;
         fetch(url)
         .then(res => res.json())
         .then(data => {
             console.log("EmployeeDetailsWindow componentDidMount: check data")
             console.log(data)
             this.setState({emp_arr: data.data})
         })
     }
 
    render(){
        return(
            <div className="employeeDetailsWindow-container">
                <h4>Employee details</h4>
                {this.state.emp_arr.map(emp => {
                    return (
                        <div key={this.state.emp_no}>
                        <h3>{emp.first_name} {emp.last_name}</h3>
                        <div>
                            <EmployeePrivateDetails emp_no={this.state.emp_no} emp_arr={this.state.emp_arr}/>
                            <EmployeeTasks emp_no={this.state.emp_no}/>
                            <EmployeeSubordinates emp_no={this.state.emp_no}/>
                        </div>
                        </div>
                    )})}
            </div>
        )
    }
}

export default EmployeeDetailsWindow;