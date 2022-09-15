const Manager = require("../lib/Manager");

describe("Manager", () => {
    describe('getOffice', () => {
        it('should return an object with office number property when called by officeNumber', () => {
            const testValue = '5';
            const obj = new Manager();
            expect(typeof obj).toEqual(testValue);
        });
    });

    describe('getName', () => {
        it('should return a value of \"Manager\" ', () => {
            const obj = new Manager();
            expect(typeof obj).toEqual('Manager');
        });
    });
});