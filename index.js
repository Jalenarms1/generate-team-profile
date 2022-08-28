const Employee = require("./classes/Employee");
const Engineer = require("./classes/Engineer");
const Intern = require("./classes/Intern");
const Manager = require("./classes/Manager");
const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./generate")
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
                        if(managerID.trim() === "" || isNaN(managerID)){
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

    getInternInfo(){
        inquirer
            .prompt([
                {
                    name: "internName",
                    message: "Enter the intern's name.",
                    validate: engineerName => {
                        if(engineerName.trim() === "" || !isNaN(engineerName)){
                            return "Please make a valid entry."
                        }
                        return true 
                    }
                },
                {
                    name: "internID",
                    message: "Enter the intern's employee ID.",
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
                    message: "Enter your intern's email address.",
                    validate: email => {
                        if(email.trim() === "" || !email.includes("@")){
                            return "Please make a valid entry"
                        }
                        return true
                    }
                },
                {
                    name: "school",
                    message: "Enter your intern's school of attendance.",
                    validate: github => {
                        if(github.trim() === "" || !isNaN(github)){
                            return "Please make a valid entry."
                        }
                        return true 
                    }
                }
            ])
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




