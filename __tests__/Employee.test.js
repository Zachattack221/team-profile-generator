const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe('name', () => {
        it('should return and object with name property when called by name variable', () => {
            const obj = new Employee();
            expect(typeof obj).toEqual('name');
        });
    });

    describe('id', () => {
        it('should return and object with id property when called by id variable', () => {
            const obj = new Employee();
            expect(typeof obj).toEqual('id');
        });
    });

    describe('email', () => {
        it('should return and object with email property when called by email variable', () => {
            const obj = new Employee();
            expect(typeof obj).toEqual('email');
        });
    });

    describe('getRole', () => {
        it('should return a value of "Employee" ', () => {
            const obj = new Employee();
            expect(typeof obj).toEqual('Employee');
        });
    });

});
