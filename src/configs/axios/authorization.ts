import axios from "./index";

const setAuthHeader = (token: string | null = null) => {
  if (token) {
    axios.defaults.headers.common.authorization = token;
  } else {
    delete axios.defaults.headers.common.authorization;
  }
};

export default setAuthHeader;
