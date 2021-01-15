const patchEmployee = ({ encrypt }) => {
  return function make(id, { firstName, lastName, age } = {}) {
    if (!id) {
      throw new Error("Please enter ID of employee.");
    }
    if (!firstName) {
      throw new Error("Please enter first name.");
    }
    if (!lastName) {
      throw new Error("Please enter last name.");
    }
    if (age == null) {
      throw new Error("Please enter age.");
    }
    return Object.freeze({
      getId: () => id,
      getFn: () => encrypt(firstName),
      getLn: () => encrypt(lastName),
      getAge: () => age,
    });
  };
};

module.exports = patchEmployee;
