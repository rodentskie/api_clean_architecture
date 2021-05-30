const selectEmployee = ({ employeesDb, decrypt }) => {
  return async function select(info) {
    let data = [];

    const { id } = info; // deconstruct

    const res = await employeesDb.selectAll({});
    /*
    if (id) {
      // select one
      const res = await employeesDb.selectOne({ id });
      if (res.rowCount > 0) {
        // only when there is data returned
        const items = res.rows;
        for (let i = 0; i < items.length; i++) {
          const e = items[i];

          // push items to array
          data.push({
            id: e.id,
            firstName: e.firstName ? decrypt(e.firstName) : null,
            lastName: e.lastName ? decrypt(e.lastName) : null,
            age: e.age ? e.age : 0,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          });
        }
      }
    } else {
      // select all
      const res = await employeesDb.selectAll({});
      if (res.rowCount > 0) {
        // only when there is data returned
        const items = res.rows;
        for (let i = 0; i < items.length; i++) {
          const e = items[i];

          // push items to array
          data.push({
            id: e.id,
            firstName: e.firstName ? decrypt(e.firstName) : null,
            lastName: e.lastName ? decrypt(e.lastName) : null,
            age: e.age ? e.age : 0,
            createdAt: e.createdAt,
            updatedAt: e.updatedAt,
          });
        }
      }
    }
    */
    return data;
  };
};

module.exports = selectEmployee;
