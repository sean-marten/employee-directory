const axios = require("axios");

const queryUrl = "https://randomuser.me/api/?results=50&nat=us";

export default function getUsers() {
  axios.get(queryUrl).then((res) => {
    console.log(res);
  });
}
