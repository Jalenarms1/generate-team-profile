let Engineer = require("../classes/Engineer.js")

describe("Engineer", () => {
    describe("getRole", () => {
        it("Should return the correct role for each employee.", () => {
            let role ="Engineer";
            let engineer = new Engineer("Bob", 4, "bob@email.com", "bob42");
            expect(engineer.getRole()).toBe(role)
        })
    })

    describe("getGithub", () => {
        it("Should return the url to the users github profile.", () => {
            let engineer = new Engineer("Bob", 4, "bob@email.com", "bob42")

            expect(engineer.getGithub()).toEqual(`https://github.com/${engineer.github}`)
        })
    })

    describe("getName", () => {
        it("Should return the correct name of the employee", () => {
            let emp = new Engineer("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getName()).toBe(emp.name)
        })
    })

    describe("getId", () => {
        it("Should return the correct id of the employee", () => {
            let emp = new Engineer("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getId()).toBe(emp.id)
        })
    })

    describe("getEmail", () => {
        it("Should return the correct email of the employee", () => {
            let emp = new Engineer("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getEmail()).toBe(emp.email)
        })
    })
})