const { connects } = require("../app");
const { employeeModels } = require("../models/app");
const mg = require("mongoose");

// ######
const query = require("./query");
// ######
const employeesDb = query({ connects, mg, employeeModels });
// ######

module.exports = employeesDb;
