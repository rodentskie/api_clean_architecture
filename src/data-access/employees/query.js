const query = ({ connects, employeeModels }) => {
  return Object.freeze({
    insertNewEmployee,
    checkNameExist,
    selectAll,
    selectOne,
    checkNameExistUpdate,
    patchEmployee,
    deleteEmployee,
  });

  async function deleteEmployee({ id }) {
    try {
      // use sequelize on inserting
      const Employee = models.Employee;
      const res = await Employee.destroy({
        where: {
          id,
        },
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

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

  async function checkNameExist({ data }) {
    try {
      const pool = await connects();

      const { firstName, lastName } = data; // deconstruct

      const res = await new Promise((resolve) => {
        const sql = `SELECT id FROM "Employees" WHERE "firstName" = $1 AND "lastName" = $2;`;
        const params = [firstName, lastName];
        pool.query(sql, params, (err, res) => {
          pool.end(); // end connection

          if (err) resolve(err);
          resolve(res);
        });
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectAll({}) {
    try {
      const mySchema = await employeeModels();
      const conn = await connects();
      const myModel = conn.model("Employee", mySchema);

      const res = myModel.find({}, function (err, docs) {
        if (err) return console.log(err);

        console.log(docs);
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectOne({ id }) {
    try {
      const pool = await connects();

      const res = await new Promise((resolve) => {
        const sql = `SELECT * FROM "Employees" WHERE id = $1;`;
        const params = [id];
        pool.query(sql, params, (err, res) => {
          pool.end(); // end connection

          if (err) resolve(err);
          resolve(res);
        });
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function checkNameExistUpdate({ data }) {
    try {
      const pool = await connects();

      const { firstName, lastName, id } = data; // deconstruct

      const res = await new Promise((resolve) => {
        const sql = `SELECT id FROM "Employees" WHERE "firstName" = $1 AND id <> $3 AND "lastName" = $2 AND id <> $3;`;
        const params = [firstName, lastName, id];
        pool.query(sql, params, (err, res) => {
          pool.end(); // end connection

          if (err) resolve(err);
          resolve(res);
        });
      });

      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function patchEmployee({ data }) {
    try {
      // use sequelize on update
      const Employee = models.Employee;
      const res = await Employee.update(
        {
          firstName: data.firstName,
          lastName: data.lastName,
          age: data.age,
        },
        {
          where: {
            id: data.id,
          },
        }
      );
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = query;
