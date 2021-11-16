import React from "react";

const Input = ({ className, parentClassName, children, ...props }) => {
  return (
    <div className={parentClassName}>
      <input className={`focus:outline-none ${className}`} {...props} />
      {children}
    </div>
  );
};

export default Input;
