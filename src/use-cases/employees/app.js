const { makeEmployees } = require("../../entities/employees/app"); // entity
const employeesDb = require("../../data-access/employees/app"); // database queries
const { encrypt, decrypt } = require("../../functions/app");
// #########
const addEmployee = require("./insert-employee");
// #########
const addEmployees = addEmployee({ makeEmployees, employeesDb });
// #########
const services = Object.freeze({ addEmployees });

module.exports = services;
module.exports = { addEmployees };
