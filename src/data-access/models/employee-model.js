const employeeModel = ({ mg }) => {
  return async function myModel() {
    const Schema = mg.Schema;
    const ObjectId = mg.ObjectId;

    const employee = new Schema({
      _id: ObjectId,
      firstName: String,
      lastName: String,
      age: Number,
      createdAt: Date,
      updatedAt: Date,
    });

    return employee;
  };
};

module.exports = employeeModel;
