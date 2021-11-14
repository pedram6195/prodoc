import React from "react";

const Input = ({ className, children, ...props }) => {
  return (
    <div>
      <input className={`focus:outline-none ${className}`} {...props} />
      {children}
    </div>
  );
};

export default Input;
