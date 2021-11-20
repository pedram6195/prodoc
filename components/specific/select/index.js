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
      <ArrowDown label="arrow down" />
    </components.DropdownIndicator>
  );
};


const Select = ({
  placeHolder,
  placeholderStyles,
  inputStyles,
  dropDownStyles,
  selectedValueStyles,
  className,
  containerStyles,
  controlStyles,
  menuStyles,
  menuItemStyle,
  menuListSingleStyle,
  ...props
}) => {
  return (
      <Selects
      //remove the text input indicator on input and make it readonly
      isSearchable={false}
      //instanceId for next.js and server-side rendering
      instanceId='react_select_instance_id'
      //custom components
        components={{
          DropdownIndicator,
          IndicatorSeparator,
          Placeholder,
        }}
        // placeholder for select
        placeholder={placeHolder}
        //options are the list to show after click on select
        options={options}
        //className for the entire container
        className={`border border-Blue-300 rounded-lg h-12 ${className}`}
        //custom styles
        styles={{
          //container is the whole select container
          container: (base) => ({
            ...base,
            ...containerStyles,
          }),
          //control is the container for input and dropDownIndicator
          control: (base, state) => ({
            ...base,
            transition: "0.3s",
            borderRadius: state.selectProps.menuIsOpen
              ? "0.5rem 0.5rem 0 0"
              : "0.5rem",
              cursor: 'pointer',
            ...controlStyles,
          }),
          //selected value inside the select
          input: (base) => ({
            ...base,
            ...inputStyles,
          }),
          // dropDown Indicator
          dropdownIndicator: (base, state) => ({
            ...base,
            transition: "0.3s",
            transform: state.selectProps.menuIsOpen && "rotate(180deg)",
            ...dropDownStyles,
          }),
          placeholder: (base) => ({
            ...base,
            ...placeholderStyles,
          }),
          //every single item value
          singleValue: (base) => ({
            ...base,
            ...selectedValueStyles,
          }),
          //menu is the container for all the options
          menu: (base) => ({
            ...base,
            
            ...menuStyles,
          }),
          //container for items but it's inside menu wrapper
          menuList: (base) => ({
            ...base,
            
            ...menuItemStyle,
          }),
          //every single option
          option: (base, { isFocused, isSelected }) => ({
            ...base,
            backgroundColor: isFocused && "#e5e7f3",
            color: isFocused && "#273476",
            backgroundColor: isSelected && "#e5e7f3",
            color: isSelected && "#273476",
            cursor: 'pointer',
            ...menuListSingleStyle,
          }),
        }}
        //   menuIsOpen
        {...props}
      />
  );
};

export default Select;
