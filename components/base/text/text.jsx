import React from "react";

const Text = ({ children, className, ...props }) => {
  return (
    <p className={className} {...props}>
      {children}
    </p>
  );
};

export const Heading1 = ({ children, className, ...props }) => {
  return (
    <h1 className={`${className}`} {...props}>
      {children}
    </h1>
  );
};

export const Heading2 = ({ children, className, ...props }) => {
  return (
    <h2 className={`${className}`} {...props}>
      {children}
    </h2>
  );
};

export const Heading3 = ({ children, className, ...props }) => {
  return (
    <h3 className={`${className}`} {...props}>
      {children}
    </h3>
  );
};

export const Heading4 = ({ children, className, ...props }) => {
  return (
    <h4 className={`${className}`} {...props}>
      {children}
    </h4>
  );
};

export const Heading5 = ({ children, className, ...props }) => {
  return (
    <h5 className={`${className}`} {...props}>
      {children}
    </h5>
  );
};

export const Heading6 = ({ children, className, ...props }) => {
  return (
    <h6 className={`${className}`} {...props}>
      {children}
    </h6>
  );
};

export default Text;
