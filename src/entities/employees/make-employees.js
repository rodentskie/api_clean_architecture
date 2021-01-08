const makeEmployee = ({ encrypt }) => {
  return function make({ firstName, lastName, age } = {}) {
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
      getFn: () => encrypt(firstName),
      getLn: () => encrypt(lastName),
      getAge: () => age,
    });
  };
};

module.exports = makeEmployee;
