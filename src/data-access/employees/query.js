const query = ({ connects, models }) => {
  return Object.freeze({
    insertNewEmployee,
  });

  async function insertNewEmployee({ data }) {
    try {
      // use sequelize on inserting
      const Employee = models.Employee;
      const res = await Employee.create(data);
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = query;
