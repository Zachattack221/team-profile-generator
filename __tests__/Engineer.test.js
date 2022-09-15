const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
    test('getGithub', () => {
        it('should return an object with github property when called by github variable', () => {
            const testValue = 'gittest';
            const obj = new Engineer();
            expect(typeof obj).toEqual(testValue);
        });
    });

    describe('getName', () => {
        it('should return a value of \"Engineer\" ', () => {
            const obj = new Engineer();
            expect(typeof obj).toEqual('Engineer');
        });
    });
});
