import React from "react";

import Button from "../../base/button";
import { PlusIcon } from "../../icons";

export const Blue400Button = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-Blue-200 border border-Blue-400 rounded-lg text-Blue-700 font-EnRegular text-base ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const Blue700Button = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-Blue-700 rounded-lg font-EnRegular text-base text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const Blue500Button = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-Blue-500 rounded-lg font-EnRegular text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const RedButton = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-Red rounded-lg font-EnRegular text-white ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const WhiteButton = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-white border border-Blue-700 text-Blue-500 rounded-lg font-EnRegular ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const WhiteButtonRed = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-white border-2 border-Red text-Red rounded-lg font-EnRegular ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const WhiteButtonBlue = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-white border-2 border-Blue-700 text-Blue-700 rounded-lg font-EnRegular ${className}`}
      {...props}
    >
      {children}
    </Button>
  );
};

export const PlusButton = ({ className, children, ...props }) => {
  return (
    <Button
      className={`bg-white border-2 border-Blue-300 text-Blue-600 rounded-lg font-EnRegular flex justify-center items-center ${className}`}
      {...props}
    >
      <PlusIcon className='mr-2 text-Blue-600' />
      {children}
    </Button>
  );
};
