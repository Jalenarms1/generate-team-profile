const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const employeeChoiceArray = ["Intern", "Engineer", "Done"]
let staff = []; 

class Questions {

    getManagerInfo(){
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "managerName",
                    message: "Enter the name of your project Manager.",
                    validate: (managerName) => {
                        if(managerName === "" || !isNaN(managerName)){
                            return "Please make a valid entry."
                        }
                        return true
                    }
                },
                {
                    name: "managerID",
                    message: `Enter your project Manager's employee ID.`,
                    validate: (managerID) => {
                        if(managerID.trim() === ""){
                            return "Please make a valid entry."

                        }
                        return true
                    }
                },
                {
                    name: "email",
                    message: "Enter the project Manager's email address.",
                    validate: email => {
                        if(email.trim() === "" || !email.includes("@")){
                            return "Please make a vaild entry."
                        }
                        return true
                    }
                },
                {
                    name: "officeNumber",
                    message: "Enter the project Manager's office number.",
                    validate: officeNumber => {
                        if(isNaN(officeNumber)){
                            return "Please enter a valid number."
                        }
                        return true 
                    }
                }
            ])
            .then(res => {
                staff.push(new Manager(res.managerName, res.managerID, res.email, res.officeNumber))
                this.addEmployee();
            })
    }

    addEmployee(){
        inquirer
            .prompt([
                {
                    type: "list",
                    name: "employeeType",
                    message: "Choose a type of employee to add to your roster, or select 'Done' to submit results",
                    choices: employeeChoiceArray
                }
            ])
            .then(res => {
                if(res.employeeType === "Engineer"){
                    this.getEngineerInfo();
                } else if(res.employeeType === "Intern"){
                    this.getInternInfo();
                } else if(res.employeeType === "Done"){
                    this.submitResults();
                }
            })
    }

    trackEmployeesArray(type){
        return employeeArray = employeeArray.filter(item => {
            return item !== type
        })
    }

    getEngineerInfo(){
        inquirer
            .prompt([
                {
                    name: "engineerName",
                    message: "Enter the engineer's name.",
                    validate: engineerName => {
                        if(engineerName.trim() === "" || !isNaN(engineerName)){
                            return "Please make a valid entry."
                        }
                        return true 
                    }
                },
                {
                    name: "engineerID",
                    message: "Enter the engineer's employee ID.",
                    validate: engineerID => {
                        if(isNaN(engineerID)){
                            return "Please enter a number ID"
                        }
                        return true
                    }
                },
                {
                    type:"email",
                    name: "email",
                    message: "Enter your engineer's email address.",
                    validate: email => {
                        if(email.trim() === "" || !email.includes("@")){
                            return "Please make a valid entry"
                        }
                        return true
                    }
                },
                {
                    name: "github",
                    message: "Enter your engineer's GitHub username.",
                    validate: github => {
                        if(github.trim() === ""){
                            return "Please make a valid entry."
                        }
                        return true 
                    }
                }
            ])
            .then(res => {
                staff.push(new Engineer(res.engineerName, res.engineerID, res.email, res.github))
                console.log(staff);
                this.addEmployee();

            })
    }


}

const qString = new Questions();

qString.getManagerInfo();




