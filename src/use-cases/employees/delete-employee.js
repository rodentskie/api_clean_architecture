const deleteEmployee = ({ employeesDb }) => {
  return async function select(info) {
    const { id } = info;

    // delete query
    const res = await employeesDb.deleteEmployee({ id });
    let msg = `Employee was not deleted, please try again`;
    if (res) msg = `Employee deleted successfully.`;
    return msg;
  };
};

module.exports = deleteEmployee;
