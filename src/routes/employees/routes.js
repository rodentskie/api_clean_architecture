const {
  employeeAdds,
  employeesSelects,
  employeesUpdates,
  employeesDeletes,
} = require("../../controller/employees/app");

const route = ({ router, makeExpressCallback, validateAuth }) => {
  // #####
  // GET
  router.get("/", validateAuth, makeExpressCallback(employeesSelects));
  router.get("/:id", validateAuth, makeExpressCallback(employeesSelects));
  // #####
  // POST

  // add new employee
  router.post("/", validateAuth, makeExpressCallback(employeeAdds));

  // #####
  // PATCH

  // update employee
  router.patch("/:id", validateAuth, makeExpressCallback(employeesUpdates));

  // #####
  // DELETE

  router.delete("/:id", validateAuth, makeExpressCallback(employeesDeletes));

  return router;
};

module.exports = route;
