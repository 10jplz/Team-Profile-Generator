const { describe } = require("@jest/globals");
const Engineer = require("../lib/Engineer");

describe("engineer", () => {
    describe("githubUser", () => {
        it("Should return new engineer github user", () => {
            const gitHubUserN = "10jplz";
            let newUser = new Engineer ("101", "Jose", "JoseE@gmail.com", gitHubUserN);
            expect (newUser.githubUser).toBe('10jplz');
            console.log(newUser)
            console.log(Engineer)
        })

    })
    describe("id", () => {
        it("Should return new Engineer id", () => {
            const eId = "101";
            const nE = new Engineer(eId);
            expect(nE.id).toBe("101")
            console.log(Engineer);
            console.log(eId);
            console.log(nE);
        })
    })

    describe("name", () => {
        it("Should return new Engineer Name", () => {
            const eName = "Jose";
            const nE = new Engineer("101", eName);
            expect(nE.name).toBe("Jose")
            console.log(Engineer);
            console.log(eName);
            console.log(nE);
        })
    })
    
    describe("email", () => {
        it("Should return new Engineer Email", () => {
            const eEmail = "jose@email.com";
            const nE = new Engineer("101", "Jose", eEmail);
            expect(nE.email).toBe("jose@email.com")
            console.log(Engineer);
            console.log(eEmail);
            console.log(nE);
        })
    })
})