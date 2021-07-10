const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe("officeNumber", () => {
        it("Should return new Manager office number", () => {
            const mOfficeNumber = "1";
            let newManager = new Manager("101", "Jose", "manager@email", mOfficeNumber);
            expect (newManager.officeNumber).toBe('1');
            console.log(newManager)
            console.log(Manager);
        })
    })
    describe("id", () => {
        it("Should return new Manager id", () => {
            const eId = "101";
            const nE = new Manager(eId);
            expect(nE.id).toBe("101")
            console.log(Manager);
            console.log(eId);
            console.log(nE);
        })
    })

    describe("name", () => {
        it("Should return new Manager Name", () => {
            const eName = "Jose";
            const nE = new Manager("101", eName);
            expect(nE.name).toBe("Jose")
            console.log(Manager);
            console.log(eName);
            console.log(nE);
        })
    })
    
    describe("email", () => {
        it("Should return new Manager Email", () => {
            const eEmail = "jose@email.com";
            const nE = new Manager("101", "Jose", eEmail);
            expect(nE.email).toBe("jose@email.com")
            console.log(Manager);
            console.log(eEmail);
            console.log(nE);
        })

    })
    describe("role", () => {
        it("Should return new Manager Role", () => {
            const eRole = "Manager"
            const nE = new Manager("101", "Jose", "jose@email.com", eRole);
            expect(nE.role).toBe("Manager");
            console.log(Manager.role);
        })
    })

})