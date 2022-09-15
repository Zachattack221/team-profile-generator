const Intern = require("../lib/Intern");

describe("Intern", () => {
    test('getSchool', () => {
        it('should return an object with school property when called by school variable', () => {
            const testValue = 'FSU';
            const obj = new Intern();
            expect(typeof obj).toEqual(testValue);
        });
    });

    describe('getName', () => {
        it('should return a value of \"Intern\" ', () => {
            const obj = new Intern();
            expect(typeof obj).toEqual('Intern');
        });
    });
});