const managerQ = [
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
            if(email.trim() === "" || !email.includes("@") || !email.includes(".com")){
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
];

const engineerQ = [
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
            if(email.trim() === "" || !email.includes("@") || !email.includes(".com")){
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
];

const internQ = [
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
            if(email.trim() === "" || !email.includes("@") || !email.includes(".com")){
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
];

module.exports = {
    managerQ,
    engineerQ,
    internQ
}






