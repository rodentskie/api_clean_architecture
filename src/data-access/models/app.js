const mg = require("mongoose");
// ###
const employeeModel = require("./employee-model");
// ###
const employeeModels = employeeModel({ mg });
// ###
const services = Object.freeze({ employeeModels });

module.exports = services;
module.exports = { employeeModels };
