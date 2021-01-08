const { connects } = require("../app");
const models = require("../sequelize/models");
// ######
const query = require("./query");
// ######
const employeesDb = query({ connects, models });
// ######

module.exports = employeesDb;