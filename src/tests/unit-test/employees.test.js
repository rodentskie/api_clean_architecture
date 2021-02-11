const randomstring = require("randomstring"); // for random string insert and update

// change to test DB
beforeAll(() => {
  process.env.NODE_ENV = "test";
});

// require functions on employees
const {
  addEmployees,
  selectEmployees,
  updateEmployees,
  deleteEmployees,
} = require("../../use-cases/employees/app");

describe(`Employees Tests Suites`, () => {
  test(`Select Employees`, async () => {
    try {
      const info = {};
      const res = await selectEmployees(info);
      expect(res).not.toBeNull();
    } catch (e) {
      console.log("Error: ", e);
    }
  });

  test(`Add Employees - All fields have value.`, async () => {
    try {
      const info = {
        firstName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        lastName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        age: 8,
      };
      const res = await addEmployees(info);
      expect(res).toBe(`Employee has been added successfully.`);
    } catch (e) {
      console.log(`Error: `, e);
    }
  });

  test(`Add Employees - Required fields missing.`, async () => {
    try {
      const info = {
        firstName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        lastName: null,
        age: 8,
      };
      await addEmployees(info);
    } catch (e) {
      expect(e.toString()).toBe("Error: Please enter last name.");
    }
  });

  test(`Update Employees - All fields have value.`, async () => {
    try {
      // select last added
      const info = {};
      const emp = await selectEmployees(info);
      const employee = emp[emp.length - 1];
      const employeeId = employee.id;

      const data = {
        id: employeeId,
        firstName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        lastName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        age: 9,
      };

      const res = await updateEmployees(data);
      expect(res).toBe(`Employee updated successfully.`);
    } catch (e) {
      console.log("Error: ", e);
    }
  });

  test(`Update Employees - Required fields are missing.`, async () => {
    try {
      // select last added
      const info = {};
      const emp = await selectEmployees(info);
      const employee = emp[emp.length - 1];
      const employeeId = employee.id;

      const data = {
        id: employeeId,
        firstName: null,
        lastName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        age: 9,
      };

      await updateEmployees(data);
    } catch (e) {
      expect(e.toString()).toBe("Error: Please enter first name.");
    }
  });

  test(`Delete Employees.`, async () => {
    try {
      // select last added
      const info = {};
      const emp = await selectEmployees(info);
      const employee = emp[emp.length - 1];
      const employeeId = employee.id;

      const data = {
        id: employeeId,
      };

      const res = await deleteEmployees(data);
      expect(res).toBe(`Employee deleted successfully.`);
    } catch (e) {
      console.log("Error: ", e);
    }
  });
});
