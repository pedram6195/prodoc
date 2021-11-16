import React, { useState } from "react";

import Div from "../container";
import Text from "../../base/text";
import { CloneIcon, TrashIcon, ArrowDown, PlusIcon } from "../../icons";
import Collapse from "../../base/collapse/collapse";

export const ApiFolderItem = ({
  method,
  methodColor,
  endPoint,
  className,
  onClickIcon = (f) => f,
  ...props
}) => {
  return (
    <Div
      className={`flex items-center pl-Eighteen border-l-4 border-l-white transition duration-300 font-EnRegular text-xs group hover:bg-Blue-300 hover:border-l-4 hover:border-l-Blue-700 hover:transition hover:duration:300 ${className}`}
      {...props}
    >
      <Text className={`mr-3 ${methodColor}`}>{method}</Text>
      <Text className="text-Blue-700 font-EnExtraLight mr-3">{endPoint}</Text>
      <CloneIcon
        className="text-base text-Blue-700 hidden cursor-pointer group-hover:flex"
        onClick={onClickIcon}
      />
    </Div>
  );
};

export const ApiFolder = ({
  name,
  onCloneClick = (f) => f,
  onPlusClick = (f) => f,
  onDeleteClick = (f) => f,
  className,
  children,
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Collapse className={`${className}`} open={open} collapsedHeight={36}>
      <Div className="flex justify-between items-center h-9 px-3 cursor-pointer hover:bg-Blue-300 transition duration-300 group">
        <Div
          onClick={() => {
            setOpen(!open);
          }}
          className="w-full"
        >
          <Text>{name}</Text>
        </Div>
        <Div className="flex">
          <CloneIcon
            className="cursor-pointer text-base text-Blue-700 hidden group-hover:block transition duration-300"
            onClick={onCloneClick}
          />
          <PlusIcon
            className="cursor-pointer text-base text-Blue-700 ml-2 hidden group-hover:block transition duration-300"
            onClick={onPlusClick}
          />
          <TrashIcon
            className="cursor-pointer text-base text-Red ml-2 hidden group-hover:block transition duration-300"
            onClick={onDeleteClick}
          />
          <ArrowDown
            onClick={() => {
              setOpen(!open);
            }}
            className={`flex items-center cursor-pointer text-xs ml-5 transition duration-300 ${
              open
                ? "transform rotate-180 transition duration-300"
                : "transform rotate-0"
            }`}
          />
        </Div>
      </Div>

      {children}
    </Collapse>
  );
};

export const UrlInfoBox = ({ method, url, className, ...props }) => {
  return (
    <Div
      className={`flex items-center px-2 py-2 h-12 rounded-lg border border-Blue-300 ${className}`}
      {...props}
    >
      <Div
        className={`rounded-lg bg-Blue-100 flex justify-center items-center mr-6 h-8 py-2 px-8`}
      >
        <Text className="text-Blue-700 text-xs font-EnRegular">{method}</Text>
      </Div>
      <Text className='text-base text-Blue-700 font-EnRegular flex items-center'>
        {url}
      </Text>
    </Div>
  );
};
