const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
let employeeArray = ["Intern", "Manager", "Engineer"];

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
                    type: "list",
                    name: "chooseNext",
                    choices: employeeArray,
                }
            ])
            .then(res => {
                console.log(res)
                if(res.chooseNext === "Engineer"){
                    this.trackEmployeesArray("Engineer")
                    this.getEngineerInfo();
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
                    message: "What is your engineer's name?"
                },
                {
                    type: "list",
                    name: "listch",
                    choices: employeeArray
                }
            ])
    }


}

const qString = new Questions();

qString.getManagerInfo();




