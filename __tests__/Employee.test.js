const { describe, expect, it } = require("@jest/globals");
const Employee = require("../lib/Employee");

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
    
    describe("email", () => {
        it("Should return new employee Email", () => {
            const eEmail = "jose@email.com";
            const nE = new Employee("", "", eEmail);
            expect(nE.email).toBe("jose@email.com")
        })
    })
})