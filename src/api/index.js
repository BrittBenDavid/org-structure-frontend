import axios from 'axios';

const url = 'http://localhost:4000';



export const fetchEmployeesData = async () => {
    try {
        const {data} = await axios.get(`${url}/employees`);
        console.log("i am here - before modifiedEmployees")
        const modifiedEmployees = data.map((emp) => emp.first_name
        //({
            //emp_no: emp.emp_no,
          //  first_name: emp.first_name,
            //last_name: emp.last_name,
            //position: emp.position
        //})
        );
        console.log("i am here - after modifiedEmployees")

        console.log(modifiedEmployees);
        return modifiedEmployees;
    }
    catch(error) {
        console.error(error);
    }
}




/*export const fetchTasks = _ => {

    try {
        const {data} = await axios.get(`${url}/5/tasks`);

        const modifiedTasks = data.map((taskData) => ({
            task_text: taskData.confirmed.total,
            task_due_date: taskData.deaths.total,
        }));
        console.log(modifiedTasks);
        return modifiedTasks;
    }
    catch(error) {
        console.error(error);
    }
}*/
