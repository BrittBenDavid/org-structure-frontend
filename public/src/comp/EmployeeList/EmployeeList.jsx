//import
import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom";

//import { emp_ar } from '../data/emp';

import './EmployeeList.css';

import Grid from '@material-ui/core/Paper';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';


class EmployeeList extends Component {
    //define state
    state = {emp_arr: []}

    componentDidMount(){
        let url = 'http://localhost:4000/employees';
        fetch(url)
        .then(res => res.json())
        .then(data => {
            console.log("EmployeesList componentDidMount: check data")
            console.log(data)
            this.setState({emp_arr: data.data})
        })
    }

    render() {
        return(
            <div className="employeeList-container">
                <h1>Organization Structure</h1>
                <h4>Britt Ben-David's Project</h4>
                <h3>Employee List</h3>
                <br></br>
                <div className="row">
                    <Grid container spacing={3} justify="center">
                                <TableContainer component={Paper}>
                                    <Table className="table_container" stickyHeader aria-label="sticky table">
                                        <TableHead>
                                            <TableRow className="table_head">
                                                <TableCell><h5>Employee Name</h5></TableCell>
                                                <TableCell align="left"><h5>Position</h5></TableCell>
                                                <TableCell align="left"><h5>Details</h5></TableCell>
                                            </TableRow>
                                        </TableHead>
                                        <TableBody>
                                            {this.state.emp_arr.map(emp => {
                                                return (
                                                    <TableRow key={emp.emp_no}>
                                                        <TableCell component="th" scope="row">
                                                            {emp.first_name} {emp.last_name}
                                                        </TableCell>
                                                        <TableCell align="left">{emp.position}</TableCell>
                                                        <TableCell align="left">
                                                            <Button component={Link} to={`/employee/${emp.emp_no}`} 
                                                                variant="contained"
                                                                color="primary">
                                                                    View
                                                            </Button>
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                    </Grid>
                    <br></br>
                </div>
            </div>
        )
    }    
}


export default EmployeeList;
