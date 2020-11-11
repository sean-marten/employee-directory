const axios = require("axios");

const queryUrl = "https://randomuser.me/api/?results=50&nat=us";

export default async function getUsers() {
  return await axios.get(queryUrl);
}
