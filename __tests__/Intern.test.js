const Intern = require("../lib/Intern");

// pulls in Employee parent class and Intern sub-class

test('Can set school with constructor argument', () => {
    const testValue = 'FSU';
    const value = new Intern('Tom', 3, 'email@email.com', testValue);
    expect(value.school).toBe(testValue);
});

test('Can get school with getSchool()', () => {
    const testValue = "FSU";
    const value = new Intern('Tom', 3, 'email@email.com', testValue);
    expect(value.getSchool()).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
    const testValue = 'Intern';
    const result = new Intern("Zach", 6, "test6@email.com", testValue);
    expect(result.getRole()).toBe(testValue);
});