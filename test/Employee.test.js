let Employee = require("../classes/Employee.js")

describe("Employee", () => {
    describe("getRole", () => {
        it("Should return the correct role for each employee.", () => {
            let role ="Employee";
            let employee = new Employee("Bob", 4, "bob@email.com", 5);
            expect(employee.getRole()).toBe(role)
        })
    })
})