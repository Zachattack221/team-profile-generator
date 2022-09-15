const Employee = require("../lib/Employee");

// condensed tests to a more readable format

test('Can start employee instance', () => {
    const value = new Employee();
    expect(typeof(value)).toBe('object');
});

test('Can set name with constructor argument', () => {
    const name = 'Zach';
    const value = new Employee(name);
    expect(value.name).toBe(name);
});

test('Can set id with constructor argument', () => {
    const testValue = '5';
    const value = new Employee('Zach', testValue);
    expect(value.id).toBe(testValue);
});

test('Can set email with constructor argument', () => {
    const testValue = 'test@email.com';
    const value = new Employee('Zach', 5, 'test@email.com');
    expect(value.email).toBe(testValue);
});

test('Can get name with getName()', () => {
    const testValue = 'Zach';
    const value = new Employee(testValue);
    expect(value.getName()).toBe(testValue);
});

test('Can get id with getId()', () => {
    const testValue = 6;
    const value = new Employee('Zach', 6);
    expect(value.getId()).toBe(testValue);
});

test('Can get email with getEmail()', () => {
    const testValue = 'test6@email.com';
    const value = new Employee('Zach', 6, 'test6@email.com');
    expect(value.getEmail()).toBe(testValue);
});

test("getRole() should return \"Employee\"", () => {
    const testValue = "Employee";
    const result = new Employee("Zach", 6, "test6@email.com");
    expect(result.getRole()).toBe(testValue);
});

