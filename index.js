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

// Questions class will control the flow of questions needed to capture user input correctly
class Questions {

    // this function, after gathering the user input, will create a new object that is an instance of the Manager class, and use that object as an argument in the function that writes the original html layout with just the manager's info shown
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

    // this will prompt the user to select which type of employee they need to add to their roster next, or they can select done if they want to proceed with what they have so far
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

    // this function, after gathering the user input, will create a new instance of the Engineer class and push it into the staff array 
    getEngineerInfo(){
        inquirer
            .prompt(questions.engineerQ)
            .then(res => {
                staff.push(new Engineer(res.engineerName, res.engineerID, res.email, res.github))
                console.log(staff);
                this.addEmployee();

            })
    }

    // this function, after gathering the user input, will create a new instance of the Intern class and push it into the staff array
    getInternInfo(){
        inquirer
            .prompt(questions.internQ)
            .then(res => {
                staff.push(new Intern(res.internName, res.internID, res.email, res.school))
                console.log(staff);
                this.addEmployee();

            })
    }

    // this function will read the index.html as it is after being written with the manager's info, split it in half by where we need to add our list items and put the pieces all back together to use as a parameter for the writeFile method which will display all of the information gathered on the manager and any additional employees added
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




