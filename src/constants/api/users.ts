import axios from "@/configs/axios";

type CredentialsItem = {
  email: string;
  password: string;
};

const login = (credentials: CredentialsItem) =>
  axios.post("/users/login", credentials);

const details = () => axios.get("/users/login");

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  login,
  details,
};
