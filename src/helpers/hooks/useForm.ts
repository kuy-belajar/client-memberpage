/* eslint-disable import/no-anonymous-default-export */
import { ChangeEvent, useState } from "react";

type InitialValueItem = {
  [key: string]: string;
};

export default (initialValue: InitialValueItem) => {
  const [state, setState] = useState(initialValue);

  return [
    state,
    (event: ChangeEvent<HTMLInputElement>) => {
      setState({
        ...state,
        [event.target.name]: event.target.value,
      });
    },
    (newState: any) => {
      setState({
        ...state,
        newState,
      });
    },
  ];
};
