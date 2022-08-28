const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./generate")
const questions = require("./questions.js")
const employeeChoiceArray = ["Intern", "Engineer", "Done"]
let staff = []; 

class Questions {

    getManagerInfo(){
        inquirer
            .prompt(questions.managerQ)
            .then(res => {
                var manager = new Manager(res.managerName, res.managerID, res.email, res.officeNumber);
                fs.writeFile("index.html", generate.writeToIndex(manager), (err) => {
                    err ? console.error(err) : console.log("success")
                })
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

    getEngineerInfo(){
        inquirer
            .prompt(questions.engineerQ)
            .then(res => {
                staff.push(new Engineer(res.engineerName, res.engineerID, res.email, res.github))
                console.log(staff);
                this.addEmployee();

            })
    }

    getInternInfo(){
        inquirer
            .prompt(questions.internQ)
            .then(res => {
                staff.push(new Intern(res.internName, res.internID, res.email, res.school))
                console.log(staff);
                this.addEmployee();

            })
    }

    submitResults(){
        fs.readFile("index.html", "utf-8", (err, res) => {
            err ? console.log(err) : console.log(res)
            let indexOfList = res.indexOf('<ul class="e-list row" id="add-employees">')
            let beg = res.slice(0, indexOfList + 42)
            let end = res.slice(indexOfList + 43, -1)
            let final = `${beg} 
        
                ${generate.stackElements(staff)} 
        
            ${end}`
            fs.writeFile("index.html", final, (err) => {
                err ? console.log(err) : console.log("success")
            })
        })
    }


}

const qString = new Questions();

qString.getManagerInfo();




