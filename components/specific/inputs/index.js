import React from "react";

import Input from "../../base/input";
import Div from "../container";

export const InputLabelOut = ({
  className,
  labelClassName,
  name,
  label,
  children,
  ...props
}) => {
  return (
    <Div>
      <label
        htmlFor={name}
        className={`text-Blue-600 text-Ten mb-2 ${labelClassName}`}
      >
        {label}
      </label>
      <Input
        id={name}
        parentClassName="bg-white border border-Blue-300 rounded-lg pl-4 pr-4 flex items-center h-12 w-1/2"
        className="bg-transparent font-EnRegular text-xs text-Blue-700 w-full placeholder-Blue-600"
        {...props}
      />
    </Div>
  );
};

export const TextareaLabelOut = ({
  name,
  label,
  className,
  parentClassName,
  containerClassName,
  ...props
}) => {
  return (
    <Div className={`w-full ${containerClassName}`}>
      <label htmlFor={name} className="text-Ten text-Blue-600 mb-2">
        {label}
      </label>
      <Div
        className={`h-16 px-4 flex items-center bg-white rounded-lg border border-Blue-300 ${parentClassName}`}
      >
        <textarea
          name={name}
          id={name}
          className={`outline-none bg-transparent w-full text-xs font-EnRegular text-Blue-700 placeholder-Blue-600 ${className}`}
          {...props}
        ></textarea>
      </Div>
    </Div>
  );
};

export const SearchInput = ({ className, ...props }) => {
  return (
    <Input
      parentClassName={`h-12 rounded-lg px-6 flex items-center border border-Blue-300 ${className}`}
      className={`text-Blue-600 font-EnRegular text-Fourteen placeholder-Blue-600 w-full`}
      {...props}
    />
  );
};
