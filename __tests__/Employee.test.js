const { describe, expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

    describe("name", () => {
        it("Should return new employee Name", () => {
            const eName = "Jose";
            const nE = new Employee("", eName);
            expect(nE.name).toBe("Jose")
            console.log(Employee);
            console.log(eName);
            console.log(nE);
        })
    })

describe("employee", () => {
    describe("id", () => {
        it("Should return new employee id", () => {
            const eId = "101";
            const nE = new Employee(eId);
            expect(nE.id).toBe("101")
            console.log(Employee);
            console.log(eId);
            console.log(nE);
        })
    })


})