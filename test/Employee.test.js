let Employee = require("../classes/Employee.js")

describe("Employee", () => {
    describe("getRole", () => {
        it("Should return the correct role for each employee.", () => {
            let role ="Employee";
            let employee = new Employee("Bob", 4, "bob@email.com", 5);
            expect(employee.getRole()).toBe(role)
        })
    })

    describe("getName", () => {
        it("Should return the correct name of the employee", () => {
            let emp = new Employee("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getName()).toBe(emp.name)
        })
    })

    describe("getId", () => {
        it("Should return the correct id of the employee", () => {
            let emp = new Employee("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getId()).toBe(emp.id)
        })
    })

    describe("getEmail", () => {
        it("Should return the correct email of the employee", () => {
            let emp = new Employee("Jamie", 5, "Jamie@gmail.com");

            expect(emp.getEmail()).toBe(emp.email)
        })
    })
})