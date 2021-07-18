import React, { Component } from 'react';

import Button from '@material-ui/core/Button';

import './PopupEmpReportToManage.css'


class PopupEmpReportToManage extends Component { 
    
    state = {
        employee: {
            report_text: '',
        }
    };

    addReport = _ => {
        console.log("I am here");
        const { employee } = this.state;
        console.log(`http://localhost:4000/employee/${this.props.mng_no}/add_report?report_text=${employee.report_text}`);

        fetch(`http://localhost:4000/employee/${this.props.mng_no}/add_report?report_text=${employee.report_text}`)
        .then(response => response.json())
        .then(this.getEmp)
        .catch(err => console.error(err))

    }
            
    render() {
        console.log()
        const {employee} = this.state;
        console.log(employee.mng_no)
        console.log(employee.report_text)
        return (
            <div className="empReportToManage-container">
            <div className="empReportToManage-inner">
                <h5>{this.props.text}</h5>
                <input
                        value={employee.report_text}
                        onChange={e => this.setState({employee: {report_text: e.target.value}})} />
                <div className="buttons">
                    <br></br>
                    <Button className="cancle-btn" variant="contained" color="primary"
                        onClick={this.addReport}
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

export default PopupEmpReportToManage;


