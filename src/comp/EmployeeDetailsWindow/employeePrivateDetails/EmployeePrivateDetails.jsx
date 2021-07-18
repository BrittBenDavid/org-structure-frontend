import React, { Component } from 'react';
import { Router, Route, browserHistory, IndexRoute} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import {useState} from 'react';

import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';

import Button from '@material-ui/core/Button';

import "../EmployeeDetailsWindow.css";
import img_src from "../../../images/0.jpeg";

import PopupEmpReportToManage from './popupEmpReportToManage/PopupEmpReportToManage';

import Popup from 'react-popup';

class EmployeePrivateDetails extends Component { 
    
    constructor() {
        super();
        this.state = {showPopup: false};
    }
    togglePopup() {
        this.setState({
            showPopup: !this.state.showPopup
        });
    }

    render(){
        return(
            <div className="employeePrivateDetails-container">
                <br></br>
                {this.props.emp_arr.map(emp => {
                return (
                    <div key={this.props.emp_no}>
                        <Paper className="paper_container">
                            <TableContainer align="center">
                                <TableBody>
                                    <TableRow >
                                        <TableCell></TableCell>
                                        <TableCell><img className="emp_img" src={img_src} /></TableCell>
                                        <TableCell>
                                            <TableRow><TableCell>Name: {emp.first_name} {emp.last_name}</TableCell><TableCell></TableCell></TableRow>
                                            <TableRow><TableCell>Position: {emp.position}</TableCell><TableCell></TableCell></TableRow>
                                            <TableRow>
                                                <TableCell>Manager: {emp.mng_first_name} {emp.mng_last_name}</TableCell>
                                                <TableCell>
                                                    <Button className="report-btn" 
                                                            variant="contained" color="primary"
                                                            onClick={this.togglePopup.bind(this)}
                                                            >Report</Button>
                                                 
                                                    
                                                    {this.state.showPopup ?
                                               
                                                    <PopupEmpReportToManage mng_no={emp.mng_emp_no} 
                                                        text='Report to manager'
                                                        closePopup={this.togglePopup.bind(this)} />
                                                    : null }
                                                </TableCell>                                                    
                                            </TableRow>
                                        </TableCell>
                                    </TableRow>
                                </TableBody>
                            </TableContainer>
                        </Paper>
                    </div>
                )})}          
            </div>
        )
    }
}

export default EmployeePrivateDetails;