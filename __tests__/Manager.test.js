const Manager = require("../lib/Manager");

// pulls in Employee parent class and Manager sub-class

test('Can set office number with constructor argument', () => {
    const testValue = 20;
    const value = new Manager('Tom', 3, 'email@email.com', testValue);
    expect(value.officeNumber).toBe(testValue);
});

test('Can get office number with officeNumber()', () => {
    const testValue = 20;
    const value = new Manager('Tom', 3, 'email@email.com', testValue);
    expect(value.getOfficeNumber()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = 'Manager';
    const result = new Manager("Zach", 6, "test6@email.com", testValue);
    expect(result.getRole()).toBe(testValue);
});