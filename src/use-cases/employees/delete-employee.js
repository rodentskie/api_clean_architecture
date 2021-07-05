const deleteEmployee = ({ employeesDb }) => {
  return async function select(info) {
    const { id } = info;
    // delete query
    const res = await employeesDb.deleteEmployee({ id });
    let msg = `Employee was not deleted, please try again.`;
    if (res == 1) {
      msg = `Employee deleted successfully.`;
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = deleteEmployee;
