import axios, { AxiosInstance, AxiosResponse } from "axios";
import errorHandler from "./errorHandler";

const instance: AxiosInstance = axios.create({
  baseURL: `${process.env.API_GATEWAY_URL}`,
});

instance.interceptors.response.use(
  (response: AxiosResponse) => response.data,
  errorHandler
);

export { default as setAuthHeader } from "./authorization";
export default instance;
