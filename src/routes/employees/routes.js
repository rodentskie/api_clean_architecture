const { employeeAdds } = require("../../controller/employees/app");

const route = ({ router, makeExpressCallback, validateAuth }) => {
  // #####
  // GET

  // #####
  // POST

  // add new employee
  router.post("/", validateAuth, makeExpressCallback(employeeAdds));

  // #####
  // PATCH

  return router;
};

module.exports = route;
