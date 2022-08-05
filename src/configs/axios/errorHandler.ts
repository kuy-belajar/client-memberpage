import { AxiosError } from "axios";

const errorHandler = (error: AxiosError) => {
  if (error instanceof AxiosError) {
    let message: string;
    if (error.response) {
      if (error.response.status === 500) message = "Something went wrong";
      else message = error.response.data.message;
      if (message) console.log(message);
    }

    return Promise.reject(error);
  }
};

export default errorHandler;
