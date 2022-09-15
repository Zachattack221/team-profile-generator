const Engineer = require("../lib/Engineer");

// // pulls in Employee parent class and Engineer sub-class

test('Can set GitHub with constructor argument', () => {
    const testValue = 'gitty85';
    const value = new Engineer('Tom', 3, 'email@email.com', testValue);
    expect(value.gitHub).toBe(testValue);
});

test('Can get GitHub acct with getGithub()', () => {
    const testValue = 'gitty85';
    const value = new Engineer('Tom', 3, 'email@email.com', testValue);
    expect(value.getGithub()).toBe(testValue);
});

test("getRole() should return \"Engineer\"", () => {
    const testValue = 'Engineer';
    const result = new Engineer("Zach", 6, "test6@email.com", testValue);
    expect(result.getRole()).toBe(testValue);
});
