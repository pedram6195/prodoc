import React from "react";
import Selects, { components } from "react-select";
import { ArrowDown } from "../../icons";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

const Placeholder = (props) => {
  return <components.Placeholder {...props} />;
};

const IndicatorSeparator = ({ innerProps }) => {
  return <span style={{ display: "none" }} {...innerProps}></span>;
};

const DropdownIndicator = (props) => {
  return (
    <components.DropdownIndicator {...props}>
      <ArrowDown label="arrow down" className="text-Blue-600 text-Eight" />
    </components.DropdownIndicator>
  );
};

const Select = ({
  placeHolder,
  placeholderStyles,
  inputStyles,
  selectedValueStyles,
  className,
  containerStyles,
  controlStyles,
  menuStyles,
  menuItemStyle,
  menuListSingle,
  ...props
}) => {
  return (
    <Selects
      components={{ DropdownIndicator, IndicatorSeparator, Placeholder }}
      placeholder={placeHolder}
      options={options}
      className={`border border-Blue-300 rounded-lg h-12 ${className}`}
      styles={{
        container: (base) => ({
          ...base,
          ...containerStyles,
        }),
        control: (base) => ({
          ...base,
          ...controlStyles,
        }),
        input: (base) => ({
          ...base,
          ...inputStyles,
        }),
        placeholder: (base) => ({
          ...base,
          ...placeholderStyles,
        }),
        singleValue: (base) => ({
          ...base,
          ...selectedValueStyles,
        }),
        menu: (base) => ({
          ...base,
          ...menuStyles,
        }),
        menuList: (base) => ({
          ...base,
          ...menuItemStyle,
        }),
        option: (base, { isFocused, isSelected }) => ({
          ...base,
          backgroundColor: isFocused && "#e5e7f3",
          color: isFocused && "#273476",
          backgroundColor: isSelected && "#e5e7f3",
          color: isSelected && "#273476",
          ...menuListSingle,
        }),
      }}
    //   menuIsOpen
      {...props}
    />
  );
};

export default Select;
