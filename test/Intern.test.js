let Intern = require("../classes/Intern.js")

describe("Intern", () => {
    describe("getRole", () => {
        it("Should return the correct role for each employee.", () => {
            let role ="Intern";
            let intern = new Intern("Bob", 4, "bob@email.com", "ASU");
            expect(intern.getRole()).toBe(role)
        })
    })

    describe("getSchool", () => {
        it("Should return the correct school listed for the intern.", () => {
            let intern = new Intern("Bob", 4, "bob@email.com", "ASU") ;
            expect(intern.getSchool()).toBe(intern.school)
        })
    })

    describe("getName", () => {
        it("Should return the correct name of the employee", () => {
            let emp = new Intern("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getName()).toBe(emp.name)
        })
    })

    describe("getId", () => {
        it("Should return the correct id of the employee", () => {
            let emp = new Intern("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getId()).toBe(emp.id)
        })
    })

    describe("getEmail", () => {
        it("Should return the correct email of the employee", () => {
            let emp = new Intern("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getEmail()).toBe(emp.email)
        })
    })
})