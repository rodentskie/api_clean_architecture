const {
  makeEmployees,
  patchEmployees,
} = require("../../entities/employees/app"); // entity
const employeesDb = require("../../data-access/employees/app"); // database queries
const { encrypt, decrypt } = require("../../functions/app");
// #########
const addEmployee = require("./insert-employee");
const selectEmployee = require("./select-employees");
const updateEmployee = require("./update-employee");
const deleteEmployee = require("./delete-employee");
// #########
const addEmployees = addEmployee({ makeEmployees, employeesDb });
const selectEmployees = selectEmployee({ employeesDb, decrypt });
const updateEmployees = updateEmployee({ employeesDb, patchEmployees });
const deleteEmployees = deleteEmployee({ employeesDb });
// #########
const services = Object.freeze({
  addEmployees,
  selectEmployees,
  updateEmployees,
  deleteEmployees,
});

module.exports = services;
module.exports = {
  addEmployees,
  selectEmployees,
  updateEmployees,
  deleteEmployees,
};
