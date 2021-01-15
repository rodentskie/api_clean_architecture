const {
  addEmployees,
  selectEmployees,
  updateEmployees,
  deleteEmployees,
} = require("../../use-cases/employees/app");
// #########
const employeeAdd = require("./insert-employee");
const employeesSelect = require("./select-employees");
const employeesUpdate = require("./update-employee");
const employeesDelete = require("./delete-employee");
// #########
const employeeAdds = employeeAdd({ addEmployees });
const employeesSelects = employeesSelect({ selectEmployees });
const employeesUpdates = employeesUpdate({ updateEmployees });
const employeesDeletes = employeesDelete({ deleteEmployees });
// #########
const services = Object.freeze({
  employeeAdds,
  employeesSelects,
  employeesUpdates,
  employeesDeletes,
});

module.exports = services;
module.exports = {
  employeeAdds,
  employeesSelects,
  employeesUpdates,
  employeesDeletes,
};
