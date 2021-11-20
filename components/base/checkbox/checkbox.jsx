import React from "react";

// HOW TO USE:
// import checkbox and put the style below to your globals.css and you can create your own custom checkbox
// if you want to use tailwind with labelClassName and inputClassName you must use important or change the global style


const Checkbox = ({ label, labelClassName, inputClassName, ...props }) => {
  return (
    <label className={`custom-checkbox-container ${labelClassName}`}>
      {label}
      <input type="checkbox" {...props} />
      <span className={`custom-checkbox-checkmark ${inputClassName}`}></span>
    </label>
  );
};

export default Checkbox;

// /* The container */
// .custom-checkbox-container {
//   display: block;
//   position: relative;
//   padding-left: 18px;
//   /* margin-bottom: 12px; */
//   cursor: pointer;
//   font-size: 22px;
//   -webkit-user-select: none;
//   -moz-user-select: none;
//   -ms-user-select: none;
//   user-select: none;
// }

// /* Hide the browser's default checkbox */
// .custom-checkbox-container input {
//   position: absolute;
//   opacity: 0;
//   cursor: pointer;
//   height: 0;
//   width: 0;
// }

// /* Create a custom checkbox */
// .custom-checkbox-checkmark {
//   position: absolute;
//   top: 2px;
//   left: 0;
//   height: 0.875rem;
//   width: 0.875rem;
//   border: 1px solid #b00020;
//   border-radius: 0.25rem;
//   background-color: #fff;
// }

// /* On mouse-over, add a grey background color */
// /* .custom-checkbox-container:hover input ~ .custom-checkbox-checkmark {
//   background-color: #ccc;
// } */

// /* When the checkbox is checked, add a blue background */
// .custom-checkbox-container input:checked ~ .custom-checkbox-checkmark {
//   background-color: #fff;
// }

// /* Create the custom-checkbox-checkmark/indicator (hidden when not checked) */
// .custom-checkbox-checkmark:after {
//   content: "";
//   position: absolute;
//   display: none;
// }

// /* Show the custom-checkbox-checkmark when checked */
// .custom-checkbox-container input:checked ~ .custom-checkbox-checkmark:after {
//   display: block;
// }

// /* Style the custom-checkbox-checkmark/indicator */
// .custom-checkbox-container .custom-checkbox-checkmark:after {
//   left: 3px;
//   top: 0px;
//   width: 6px;
//   height: 9px;
//   border: solid #b00020;
//   border-width: 0 2px 2px 0;
//   -webkit-transform: rotate(45deg);
//   -ms-transform: rotate(45deg);
//   transform: rotate(45deg);
// }
