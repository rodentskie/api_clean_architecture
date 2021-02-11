const randomstring = require("randomstring"); // for random string insert and update

// change to test DB
beforeAll(() => {
  process.env.NODE_ENV = "test";
});

const routes = require("./employees"); // routes to be tested

describe(`Employees Tests Suites`, () => {
  test(`Select Employees`, async () => {
    try {
      const res = await routes.selectEmployees();
      const data = res.status;
      expect(data).toBe(200);
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
        age: 13,
      };
      const res = await routes.addEmployees({ info });
      const data = res.status;
      expect(data).toBe(201);
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
      const res = await routes.addEmployees({ info });
      const data = res.response.status;
      expect(data).toBe(400);
    } catch (e) {
      console.log(`Error: `, e);
    }
  });

  test(`Update Employees - All fields have value.`, async () => {
    try {
      const emp = await routes.selectEmployees();
      const employees = emp.data.view;
      const id = employees[employees.length - 1].id;
      const info = {
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

      const res = await routes.updateEmployees({ id, info });
      const data = res.status;
      expect(data).toBe(200);
    } catch (e) {
      console.log("Error: ", e);
    }
  });

  test(`Update Employees - Required fields are missing.`, async () => {
    try {
      const emp = await routes.selectEmployees();
      const employees = emp.data.view;
      const id = employees[employees.length - 1].id;
      const info = {
        firstName: null,
        lastName: randomstring.generate({
          length: 12,
          charset: "alphabetic",
        }), // generate random string
        age: 9,
      };

      const res = await routes.updateEmployees({ id, info });
      const data = res.response.status;
      expect(data).toBe(400);
    } catch (e) {
      console.log("Error: ", e);
    }
  });

  test(`Delete Employees`, async () => {
    try {
      const emp = await routes.selectEmployees();
      const employees = emp.data.view;
      const id = employees[employees.length - 1].id;

      const res = await routes.deleteEmployees({ id });
      const data = res.status;
      expect(data).toBe(200);
    } catch (e) {
      console.log("Error: ", e);
    }
  });
});
