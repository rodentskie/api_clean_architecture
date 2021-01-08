const { encrypt, decrypt } = require("../../functions/app");
// ########
const makeEmployee = require("./make-employees");
// ########
const makeEmployees = makeEmployee({ encrypt });
// ########
const services = Object.freeze({ makeEmployees });

module.exports = services;
module.exports = { makeEmployees };
