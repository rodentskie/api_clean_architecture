const updateEmployee = ({ employeesDb, patchEmployees }) => {
  return async function put({ id, ...info }) {
    let data = patchEmployees(id, info);

    data = {
      id: data.getId(),
      firstName: data.getFn(),
      lastName: data.getLn(),
      age: data.getAge(),
    };

    // check id if employee exist
    const checkId = await employeesDb.selectOne({ id: data.id });
    if (checkId.rowCount == 0)
      throw new Error(`Employee doesn't exist, please check.`);

    // check if name exist
    const check = await employeesDb.checkNameExistUpdate({ data });
    if (check.rowCount > 0)
      throw new Error(`Employee already exist, please check.`);

    // update
    const res = await employeesDb.patchEmployee({ data });

    let msg = `Employee was not updated, please try again`;
    if (res[0] == 1) {
      msg = `Employee updated successfully.`;
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = updateEmployee;
