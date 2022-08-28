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
})