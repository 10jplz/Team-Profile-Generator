const Intern = require("../lib/Intern");

describe("Intern", () => {
    describe("school", () => {
        it("Should return new Intern school", () => {
            const internSchool = "UofU";
            let newIntern = new Intern ("101", "Jose", "Jose@email.com", internSchool)
            expect (newIntern.school).toBe('UofU');
            console.log(Intern)
            console.log(newIntern)
        })
    })
    describe("id", () => {
        it("Should return new Intern id", () => {
            const eId = "101";
            const nE = new Intern (eId);
            expect(nE.id).toBe("101")
            console.log(Intern);
            console.log(eId);
            console.log(nE);
        })
    })

    describe("name", () => {
        it("Should return new Intern Name", () => {
            const eName = "Jose";
            const nE = new Intern("101", eName);
            expect(nE.name).toBe("Jose")
            console.log(Intern);
            console.log(eName);
            console.log(nE);
        })
    })
    
    describe("email", () => {
        it("Should return new Intern Email", () => {
            const eEmail = "jose@email.com";
            const nE = new Intern("101", "Jose", eEmail);
            expect(nE.email).toBe("jose@email.com")
            console.log(Intern);
            console.log(eEmail);
            console.log(nE);
        })

    })

    describe("role", () => {
        it("Should return new Intern Role", () => {
            const eRole = "Intern"
            const nE = new Intern ("101", "Jose", "jose@email.com", eRole);
            expect(nE.role).toBe("Intern");
            console.log(Intern.role);
        })
    })

})