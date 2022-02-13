import axios from "axios";
import { loginUrl } from "../urls";

export const login = async (username, password) => {
  var data = {
    username: username,
    password: password,
  };
  await axios
    .post(loginUrl)
    .then((res) => {
      console.log(res);
      data = res.data;
    })
    .catch((err) => {
      console.log("Something went wrong" + err);
    });

  return data;
};
