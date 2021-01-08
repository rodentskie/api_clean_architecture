const { addEmployees } = require("../../use-cases/employees/app");
// #########
const employeeAdd = require("./insert-employee");
// #########
const employeeAdds = employeeAdd({ addEmployees });
// #########
const services = Object.freeze({
  employeeAdds,
});

module.exports = services;
module.exports = {
  employeeAdds,
};
