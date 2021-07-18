import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';

import "../EmployeeDetailsWindow.css";

class EmployeeTasks extends Component { 
            
    //define state
    state = {emp_no: this.props.emp_no,
        emp_tasks: [],}

    componentDidMount(){
        let url = `http://localhost:4000/employee/${this.state.emp_no}/tasks`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("EmployeeTasks componentDidMount: check data")
            console.log(data)
            this.setState({emp_tasks: data.data})
        })
    }

    render(){
        return(
            <div className="employeeTasks-container">
                <br></br>
                <h5>My Tasks</h5>
                <Paper className="paper_container">
                <TableContainer>
                    <Table aria-label="simple table">
                    <TableBody>
                {this.state.emp_tasks.map(emp => {
                    return(
                        <TableRow key={this.props.emp_no}>
                            <TableCell align="left">{emp.task_text}</TableCell>
                            <TableCell align="right">{emp.task_due_date}</TableCell>
                        </TableRow>
                    )})}
                    </TableBody>
                    </Table>
                </TableContainer>
                </Paper>
            </div>
        )
    }
}

export default EmployeeTasks;