const addEmployee = ({ makeEmployees, employeesDb }) => {
  return async function post(info) {
    let data = await makeEmployees(info); // entity

    data = {
      firstName: data.getFn(),
      lastName: data.getLn(),
      age: data.getAge(),
    };

    // to do checking if name already exist

    //   insert
    const res = await employeesDb.insertNewEmployee({ data });

    // ##
    let msg = `Error on inserting employee, please try again.`;

    if (res) msg = `Employee has been added successfully.`;

    return msg;
  };
};

module.exports = addEmployee;
