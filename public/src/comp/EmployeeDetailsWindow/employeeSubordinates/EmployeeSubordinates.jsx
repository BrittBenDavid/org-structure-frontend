import React, { Component } from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';

import "../EmployeeDetailsWindow.css";

import PopupTaskToEmployee from './popupTaskToEmployee/PopupTaskToEmployee';

class EmployeeSubordinates extends Component { 


    state = {showPopup: false,
            emp_no: this.props.emp_no,
            emp_subordinates: [],};
    
   
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    componentDidMount(){
        let url = `http://localhost:4000/employee/${this.state.emp_no}/subordinates`;
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("EmployeeSubordinates componentDidMount: check data")
            console.log(data)
            this.setState({emp_subordinates: data.data})
        })
    }

    render(){
        return(
            <div className="employeeSubordinates-container">
                <br></br>
                <h5>My Subordinates</h5>
                <Paper className="paper_container">
                <TableContainer align="center">
                    <Table aria-label="simple table">
                    <TableBody>
                    {this.state.emp_subordinates.map(emp => {
                        return(
                            <TableRow key={emp.emp_no}>
                                    <TableCell>{emp.first_name} {emp.last_name}</TableCell>
                                    <TableCell align="left">{emp.position}</TableCell>
                                    <TableCell align="right">
                                        <Button className="task-btn" 
                                            variant="contained" color="primary"
                                            onClick={this.togglePopup.bind(this)}
                                            >Assign Task</Button>

                                        {this.state.showPopup ?

                                               <PopupTaskToEmployee emp_no_to_task={emp.emp_no} 
                                                   text='Assign task to employee'
                                                   closePopup={this.togglePopup.bind(this)} />
                                               : null }
                                    </TableCell>
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

export default EmployeeSubordinates;

