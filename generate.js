// const jsdom = require("jsdom");
// const dom = new jsdom.JSDOM("index.html")
// const $ = require("jquery")(dom.window);

const stackElements = (staff) => {
    let arrOfSections = [];
    staff.forEach(item => {
        if(item.getRole() === "Engineer"){
            arrOfSections.push(appendEngineer(item))
        } else if(item.getRole() === "Intern"){
            arrOfSections.push(appendIntern(item))
        }
    })
    return arrOfSections.join("\n")
}



const appendEngineer = (engineer) => {
    return `
                        <li style="list-style: none;" class="col-4">
                            <div class="card p-2">
                                <div class="card-title">
                                    <h3 class="border-bottom py-1 text-white bg-primary">${engineer.name}</h3>
                                    <br>
                                    <p>${engineer.getRole()}</p>
                                </div>
                                <div class="card-body">
                                    <ul class="manager-details w-100 list-group">
                                        <li class="list-group-item">Employee ID: ${engineer.id}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></li>
                                        <li class="list-group-item">GitHub: <a href="${engineer.getGithub()}">${engineer.github}</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>`
    

}

const appendIntern = (intern) => {
    return `
                        <li style="list-style: none;" class="col-4">
                            <div class="card p-2">
                                <div class="card-title">
                                    <h3 class="border-bottom py-1 text-white bg-primary">${intern.name}</h3>
                                    <br>
                                    <p>${intern.getRole()}</p>
                                </div>
                                <div class="card-body">
                                    <ul class="manager-details w-100 list-group">
                                        <li class="list-group-item">Employee ID: ${intern.id}</li>
                                        <li class="list-group-item">Email: <a href="mailto:${intern.email}">${intern.email}</a></li>
                                        <li class="list-group-item">School: ${intern.school}</li>
                                    </ul>
                                </div>
                            </div>
                        </li>`
    

}


const writeToIndex = (manager) => {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.0/css/bootstrap.min.css"/>
        <title>Document</title>
    </head>
    <body style="overflow-x:hidden;">
    
        <div class="heading w-100 m-0 p-3 text-center text-white bg-primary">
            <div class="title-heading">
                <h2>Roster Profile</h2>
            </div>
        </div>
    
        <div class="contain w-100 m-0 my-5 d-flex flex-column align-items-center">
            <div class="manager w-50">
                <div class="card p-2">
                    <div class="card-title">
                        <h4 class="border-bottom py-2 text-white bg-primary">${manager.name}</h4>
                        <br>
                        <p>${manager.getRole()}</p>
                    </div>
                    <div class="card-body p-0">
                        <ul class="manager-details list-group">
                            <li class="list-group-item">Employee ID: ${manager.id}</li>
                            <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
                            <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="employees w-100 my-5">
                <div class="employee-contain">
                    <ul class="e-list row" id="add-employees">
                        
                    </ul>
                </div>
            </div>
        </div>
    
        <script src="https://code.jquery.com/jquery-3.5.1.min.js"></script>

        
    </body>
    </html>`
}

module.exports = {
    appendEngineer,
    writeToIndex,
    stackElements
};