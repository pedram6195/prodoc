import React from "react";

const Checkbox = ({label, labelClassName, inputClassName, ...props }) => {
  return (
    <label className={`custom-checkbox-container ${labelClassName}`}>
      {label}
      <input type="checkbox" {...props} />
      <span className={`custom-checkbox-checkmark ${inputClassName}`}></span>
    </label>
  );
};

export default Checkbox