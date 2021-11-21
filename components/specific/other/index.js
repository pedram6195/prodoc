import React, { useState } from "react";
import Image from "next/image";

import Div from "../container";
import Text from "../../base/text";
import { CloneIcon, TrashIcon, ArrowDown, PlusIcon } from "../../icons";
import Collapse from "../../base/collapse/collapse";

import { limitText, nameMaker, toTitleCase } from "../../../helpers";

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
      <Text className="text-base text-Blue-700 font-EnRegular flex items-center">
        {url}
      </Text>
    </Div>
  );
};

export const ParamViwer = ({
  className,
  param,
  isRequired = false,
  description = "",
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Div className={`flex ${className}`} {...props}>
      <Div className={`flex flex-col font-EnLight mr-16`}>
        <Text className={`text-xs text-Blue-700`}>{param}</Text>
        <Div className="relative mt-[2px]">
          {isRequired && (
            <Text className={`text-Ten absolute text-Red`}>Required</Text>
          )}
        </Div>
      </Div>
      <Div className="relative w-80">
        <Collapse open={open} collapsedHeight={20} className="flex">
          {description.length > 50 && !open && (
            <Text
              className="text-Blue-700 text-Eight font-EnRegular cursor-pointer absolute right-0 bottom-2 bg-white"
              onClick={() => {
                setOpen(!open);
              }}
            >
              More
            </Text>
          )}
          {description.length > 50 && open && (
            <Text
              className="text-Blue-700 text-Eight font-EnRegular cursor-pointer absolute right-0 bottom-1 bg-white"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Less
            </Text>
          )}
          {description.length > 50 && !open && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {limitText(description, 45)}
            </Text>
          )}
          {description.length > 50 && open && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {description}
            </Text>
          )}
          {description.length < 50 && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {description}
            </Text>
          )}
        </Collapse>
        <Div className="bg-Blue-300 h-[1px] w-full"></Div>
      </Div>
    </Div>
  );
};

export const BodyViewer = ({
  className,
  body,
  type,
  isRequired = false,
  description = "",
  children,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  return (
    <Div className={`flex ${className}`} {...props}>
      <Div className={`flex flex-col font-EnLight mr-16`}>
        <Text className={`text-xs text-Blue-700`}>{body}</Text>
        <Div className="relative mt-[2px]">
          {isRequired && (
            <Text className={`text-Ten absolute text-Red`}>Required</Text>
          )}
        </Div>
      </Div>
      <Div className="relative w-80">
        <Text className="font-EnExtraLight text-xs text-Blue-700 mb-3">
          {type}
        </Text>
        <Collapse open={open} collapsedHeight={20} className="flex">
          {description.length > 50 && !open && (
            <Text
              className="text-Blue-700 text-Eight font-EnRegular cursor-pointer absolute right-0 bottom-2 bg-white"
              onClick={() => {
                setOpen(!open);
              }}
            >
              More
            </Text>
          )}
          {description.length > 50 && open && (
            <Text
              className="text-Blue-700 text-Eight font-EnRegular cursor-pointer absolute right-0 bottom-1 bg-white"
              onClick={() => {
                setOpen(!open);
              }}
            >
              Less
            </Text>
          )}
          {description.length > 50 && !open && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {limitText(description, 45)}
            </Text>
          )}
          {description.length > 50 && open && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {description}
            </Text>
          )}
          {description.length < 50 && (
            <Text className="text-xs text-Blue-700 font-EnRegular w-[90%]">
              {description}
            </Text>
          )}
        </Collapse>
        <Div className="bg-Blue-300 h-[1px] w-full"></Div>
      </Div>
    </Div>
  );
};

export const HeaderEditor = ({ header, value, className }) => {
  return (
    <Div className={`flex flex-col ${className}`}>
      <Div className={`flex justify-between`}></Div>
    </Div>
  );
};

export const User = ({ className, avatar, name, email }) => {
  return (
    <Div className={`flex ${className}`}>
      <Div
        className={`relative w-12 h-12 border border-Blue-600 rounded-[50%] p-3 mr-2`}
      >
        <Image
          alt="user avatar"
          layout="responsive"
          width={24}
          height={24}
          src={`${avatar || "/images/user-avatar.svg"}`}
        />
      </Div>
      <Div className={`flex flex-col justify-between`}>
        <Text className={`font-EnMedium text-base text-Blue-700`}>{name}</Text>
        <Text className={`font-EnRegular text-xs text-Blue-600`}>{email}</Text>
      </Div>
    </Div>
  );
};

export const ApiDocName = ({
  apiName = "",
  hasApiImage = false,
  apiImage,
  userImages = [],
  userNames = [],
  onUserClick = (f) => f,
  userCount,
  time,
}) => {
  return (
    <Div className="flex flex-col">
      <Div className="relative w-[15.5rem] h-[12rem] shadow-Blue-400 rounded-[1.25rem] flex justify-center items-center">
        {apiImage ? (
          <Div className='relative w-[15.5rem] h-[12rem]'>
            <Image
              alt="api image"
              src={apiImage}
              layout="responsive"
              width={248}
              height={193}
              className="rounded-[1.25rem]"
            />
          </Div>
        ) : (
          <Text className="font-EnRegular text-[3.125rem] text-Blue-300 select-none">
            {nameMaker(apiName)}
          </Text>
        )}
      </Div>
      <Text className="mt-3 mb-2 text-base text-Blue-700 font-EnRegular">
        {toTitleCase(apiName)}
      </Text>
      <Div className="flex items-center justify-between w-[15rem]">
        <Div className="flex items-center">
          <UsersCircles
            images={userImages}
            userName={userNames}
            onUserClick={onUserClick}
          />
          <Text className="font-EnRegular text-xs text-Blue-600 relative right-2">
            + {userCount - 6}
          </Text>
        </Div>
        <Text className="text-xs text-Blue-700">{time}</Text>
      </Div>
    </Div>
  );
};

export const UsersCircles = ({
  userName = [],
  images = [],
  onUserClick = (f) => f,
}) => {
  return (
    <Div className="flex items-center">
      {/* handle all users have images and images are more than six */}
      {images.length >= 6 &&
        images.slice(0, 6).map((image, index) => (
          <Div
            className={`relative w-7 h-7 rounded-[50%] border border-white cursor-pointer ${
              index === 0
                ? "z-60"
                : index === 1
                ? "right-[0.1875rem] z-50"
                : index === 2
                ? "right-[0.375rem] z-40"
                : index === 3
                ? "right-[0.5625rem] z-30"
                : index === 4
                ? "right-[0.75rem] z-20"
                : index === 5
                ? "right-[0.9375rem] z-10"
                : ""
            }`}
            key={userName[index]}
            onClick={onUserClick}
          >
            <Image
              src={image}
              alt={userName[index]}
              title={userName[index]}
              layout="responsive"
              width={28}
              height={28}
              className="rounded-[50%]"
            />
          </Div>
        ))}
      {/* handle some users have images */}
      {images.length < 6 &&
        [1, 2, 3, 4, 5, 6].map((image, index) => (
          <Div
            className={`relative w-7 h-7 rounded-[50%] cursor-pointer ${
              images[index] && "border border-white"
            } ${
              index === 0
                ? "z-60"
                : index === 1
                ? "right-[0.1875rem] z-50"
                : index === 2
                ? "right-[0.375rem] z-40"
                : index === 3
                ? "right-[0.5625rem] z-30"
                : index === 4
                ? "right-[0.75rem] z-20"
                : index === 5
                ? "right-[0.9375rem] z-10"
                : ""
            }`}
            key={index}
            onClick={onUserClick}
          >
            <Image
              src={images[index] || "/images/user-default-circle.svg"}
              alt={userName[index]}
              title={userName[index]}
              layout="responsive"
              width={28}
              height={28}
              className="rounded-[50%]"
            />
          </Div>
        ))}
    </Div>
  );
};
