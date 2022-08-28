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
})