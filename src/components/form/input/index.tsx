import React, { FC, ChangeEvent } from "react";

type InputFormItem = {
  name: string;
  type: "email" | "password" | "text";
  labelName: string;
  placeholder: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
};

const InputForm: FC<InputFormItem> = ({
  name,
  type,
  labelName,
  placeholder,
  onChange,
}: InputFormItem) => {
  return (
    <div className="space-y-3">
      <label
        htmlFor={labelName}
        className="block text-sm font-medium text-gray-900 dark:text-white"
      >
        {labelName}
      </label>
      <input
        id={labelName}
        type={type}
        name={labelName}
        onChange={onChange}
        value={name}
        className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required
      />
    </div>
  );
};

export default InputForm;
