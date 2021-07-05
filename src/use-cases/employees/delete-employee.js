const deleteEmployee = ({ employeesDb }) => {
  return async function select(info) {
    const { id } = info;
    console.log(id);
    // delete query
    const res = await employeesDb.deleteEmployee({ id });
    let msg = `Employee was not deleted, please try again.`;
    console.log(`res`, res);
    if (res == 1) {
      msg = `Employee deleted successfully.`;
      return msg;
    } else {
      throw new Error(msg);
    }
  };
};

module.exports = deleteEmployee;
