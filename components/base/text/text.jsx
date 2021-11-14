import React from "react";

const Text = ({ children, className, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export default Text;
