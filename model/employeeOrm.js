const { queryAllEmployees } = require("./employeeQueries");
const connection = require("TODO");

// Retrieves all users from employees database
const fetchAllUsersFromDb = async () => {
  try {
    const [rows] = await connection.query(queryAllEmployees);
    return rows[0];
  } catch (e) {
    throw new Error(e);
  }
};

module.exports = {
  fetchAllUsersFromDb,
};
