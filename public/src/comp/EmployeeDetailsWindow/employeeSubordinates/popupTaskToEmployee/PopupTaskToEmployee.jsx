import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import './PopupTaskToEmployee.css'


class PopupTaskToEmployee extends Component { 
    state = {
        employee: {
            task_rext: '',
            task_due_date: '',
        }
    };

    addTask = _ => {
        console.log("I am here");
        console.log(this.props.emp_no_to_task)

        const { employee } = this.state;
        console.log(`http://localhost:4000/employee/${this.props.emp_no_to_task}/add_task?task_text=${employee.task_text}&task_due_date=${employee.task_due_date}`);

        fetch(`http://localhost:4000/employee/${this.props.emp_no_to_task}/add_task?task_text=${employee.task_text}&task_due_date=${employee.task_due_date}`)
        .then(response => response.json())
        .then(this.getEmp)
        .catch(err => console.error(err))

    }
         
    render() {
        console.log("emp_no_to_task")
        console.log(this.props.emp_no_to_task)
        const {employee} = this.state;

        return (
            <div className="empReportToManage-container">
            <div className="empReportToManage-inner">
                <h5>{this.props.text}</h5>
                <input
                        value={employee.task_text}
                        onChange={e => this.setState({employee: {task_text: e.target.value}})} />
                <input
                        value={employee.task_due_date}
                        onChange={e => this.setState({employee: {task_due_date: e.target.value}})} />
                <div className="buttons">
                    <br></br>
                    <Button className="cancle-btn" variant="contained" color="primary"
                        onClick={this.addTask}
                        >Save
                        </Button>
                    <Button className="cancle-btn" variant="contained" color="secondary"
                        onClick={this.props.closePopup}
                        >Close
                    </Button>
                </div> 
            </div>
        </div>
        ) 
    }
}

export default PopupTaskToEmployee;

