import { FC, ReactNode, Children, useState, useEffect, useRef } from "react";
import clsx from "clsx";

type SelectFormItem = {
  name: string;
  labelName: string;
  value: string | number;
  placeholder: string;
  children: ReactNode[];
  onClick: (occupation: string) => void;
  // onClick: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SelectForm: FC<SelectFormItem> = ({
  name,
  labelName,
  value,
  placeholder,
  children,
  onClick,
}: SelectFormItem) => {
  const [toggle, setToggle] = useState(() => false);
  const selectWrapper = useRef<HTMLInputElement>(null);

  const toggleSelect = () => setToggle(() => !toggle);

  const clickOutside = (event: any): void => {
    if (
      selectWrapper.current &&
      !selectWrapper.current?.contains(event.target)
    ) {
      setToggle(false);
    }
  };

  const items = Children.toArray(children);
  const selected: any = items.find(({ props }: any) => props.value === value);

  useEffect(() => {
    if (selectWrapper) {
      window.addEventListener("mousedown", clickOutside);

      return () => {
        window.removeEventListener("mousedown", clickOutside);
      };
    }
  }, []);

  return (
    <>
      <div className="space-y-3">
        <label
          htmlFor={labelName}
          className="block text-sm font-medium text-gray-900 dark:text-white"
        >
          {labelName}
        </label>
        <div className="relative" ref={selectWrapper} onClick={toggleSelect}>
          <div className="flex justify-between cursor-pointer bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            <span className="poppins text-gray-500">
              {selected?.props?.children ?? placeholder}
            </span>
          </div>
          <div
            className={clsx(
              "absolute left-0 rounded bg-white w-full border border-gray-300",
              { ["hidden"]: !toggle, ["border-primary-600 border-2"]: toggle }
            )}
          >
            {items.map((item: any, index) => {
              return (
                <div
                  key={index}
                  className="cursor-pointer px-4 py-2 bg-white hover:bg-gray-200 transition-all duration-200"
                  onClick={() => onClick(item.props.value)}
                >
                  {item.props.children}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SelectForm;
