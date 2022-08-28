let Manager = require("../classes/Manager.js")

describe("Manager", () => {
    describe("getRole", () => {
        it("Should return the correct role for each employee.", () => {
            let role ="Manager";
            let manager = new Manager("Bob", 4, "bob@email.com", 5);
            expect(manager.getRole()).toBe(role)
        })
    })
})