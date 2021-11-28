import React, { useState } from "react";

import Div from "../components/specific/container";
import LineBreak from "../components/base/lineBreak";
import {
  Blue400Button,
  Blue700Button,
  Blue500Button,
  RedButton,
  WhiteButton,
  WhiteButtonRed,
  WhiteButtonBlue,
  PlusButton,
} from "../components/specific/buttons";
import {
  ApiFolderItem,
  ApiFolder,
  UrlInfoBox,
  ParamViwer,
  BodyViewer,
  ApiDocName,
} from "../components/specific/other";
import Text from "../components/base/text";
import {
  InputLabelOut,
  TextareaLabelOut,
  SearchInput,
} from "../components/specific/inputs";
import OtpInput from "react-otp-input";
import Select from "../components/specific/select";
import Checkbox from "../components/specific/checkbox";
import { User } from "../components/specific/other";
import { HeaderUser, HeaderLanding } from "../components/specific/layout";
import { Tabs, Tab, TabContent } from "../components/base/tabs";

const ApiDocComponents = () => {
  const [otp, setOtp] = useState("");

  return (
    <Div className="mr-60 mt-20 ml-60 mb-60">
      <Blue400Button type="button" className="w-1/2 h-12 mb-4">
        Live Test
      </Blue400Button>
      <LineBreak />
      <Blue700Button type="button" className="h-12 w-1/2 mb-4">
        Sign Up
      </Blue700Button>
      <LineBreak />
      <Blue500Button type="button" className="w-1/2 h-10 mb-4">
        Create
      </Blue500Button>
      <LineBreak />
      <RedButton type="button" className="w-1/2 h-10 mb-4">
        Delete
      </RedButton>
      <LineBreak />
      <WhiteButton className="w-1/2 h-10 mb-4" type="button">
        Add Folder
      </WhiteButton>
      <LineBreak />
      <WhiteButtonRed className="w-1/2 h-10 mb-4" type="button">
        Cancel
      </WhiteButtonRed>
      <LineBreak />
      <WhiteButtonBlue className="w-1/2 h-10 mb-4" type="button">
        Cancel
      </WhiteButtonBlue>
      <LineBreak />
      <PlusButton className="w-1/2 h-12 mb-4" type="button">
        Add Body 2
      </PlusButton>
      <LineBreak />
      <ApiFolderItem
        method="Method"
        methodColor="text-Blue-700"
        endPoint="/Endpoint"
        className="mb-4 w-1/2 h-9"
      />
      <LineBreak />
      <ApiFolder
        name="API Folder"
        className="w-1/2"
        onCloneClick={() => {
          console.log("clone clicked");
        }}
        onDeleteClick={() => {
          console.log("delete clicked");
        }}
        onPlusClick={() => {
          console.log("plus clicked");
        }}
      >
        <ApiFolderItem
          method="Method"
          methodColor="text-Blue-700"
          endPoint="/Endpoint"
          className="h-9 w-full"
        />
        <ApiFolderItem
          method="Method"
          methodColor="text-Green"
          endPoint="/Endpoint"
          className="h-9 w-full"
        />
        <ApiFolderItem
          method="Method"
          methodColor="text-Red"
          endPoint="/Endpoint"
          className="h-9 w-full"
        />
      </ApiFolder>
      <LineBreak />
      <InputLabelOut label="Name" placeholder="placeholder" name="name" />
      <LineBreak />
      <TextareaLabelOut
        name="description"
        label="Description"
        placeholder="description placeholder"
        parentClassName="w-1/2"
      />
      <LineBreak />
      <OtpInput
        value={otp}
        onChange={(value) => {
          setOtp(value);
        }}
        numInputs={4}
        isInputNum
        inputStyle={{
          backgroundColor: "#fff",
          marginRight: "1.75rem",
          width: "3rem",
          height: "3rem",
          border: "1px solid #dcdfef",
          borderRadius: "0.5rem",
          fontFamily: "EnRegular",
          fontSize: "1rem",
          color: "#273476",
        }}
      />
      <LineBreak />
      <UrlInfoBox method="Method" url="URL" className="w-1/2" />
      <LineBreak />
      <SearchInput placeholder="Search" className="w-1/2" />
      <LineBreak />
      <Select
        placeHolder="Method"
        placeholderStyles={{ color: "#6673b8", fontSize: "0.75rem" }}
        selectedValueStyles={{ color: "#273476", fontSize: "0.75rem" }}
        containerStyles={{ border: "none" }}
        controlStyles={{
          border: "1px solid #dcdfef",
          height: "3rem",
          paddingLeft: "1rem",
          paddingRight: "1.5rem",
          boxShadow: "none",
          ":hover": { border: "1px solid #dcdfef" },
        }}
        menuStyles={{
          border: "1px solid #dcdfef",
          borderTop: "0",
          borderRadius: "0 0 0.5rem 0.5rem",
          marginTop: "0",
          padding: "1rem 0 1rem 0",
          boxShadow: "none",
        }}
        menuItemStyle={{
          color: "#273476",
          fontSize: "0.75rem",
        }}
        menuListSingleStyle={{
          ":hover": {
            backgroundColor: "#e5e7f3",
          },
        }}
        dropDownStyles={{
          color: "#6673b8",
          fontSize: "0.5rem",
        }}
        className="w-1/2"
      />
      <LineBreak />
      <ParamViwer
        className="mb-5"
        param="param"
        description="this is just a sample text"
        isRequired
      />
      <ParamViwer
        param="param"
        description="this is just a sample text with more characters in one line and it is very simple this is just a sample text with more characters in one line and it is very simple this is just a sample text with more characters in one line and it is very simple this is just a sample text with more characters in one line and it is very simple"
        isRequired
      />
      <LineBreak />
      <BodyViewer
        type="type"
        body="body"
        description="this is a sample text this is a sample text this is a sample text this is a sample text this is a sample text this is a sample text"
        isRequired
        className="mb-4"
      />
      <BodyViewer
        type="type"
        body="body"
        description="this is a sample text this is a sample text this is a sample text this is a sample text this is a sample text this is a sample text"
        isRequired
      />
      <LineBreak />
      <Checkbox
        label="Required"
        labelClassName="font-EnMedium !text-sm text-Red"
        className=""
      />
      <LineBreak />
      <User
        avatar="/images/user-circle.png"
        name="Danial Darabi"
        email="Drdanial97@gmail.com"
      />
      <LineBreak />
      <HeaderUser userName={"userName"} />
      <LineBreak />

      <Text className="text-2xl mb-4">Base Tab</Text>
      <Tabs>
        <Div className={`flex flex-row whitespace-nowrap flex-nowrap`}>
          <Tab index={1}>first</Tab>
          <Tab index={2}>second</Tab>
          <Tab index={3}>third</Tab>
        </Div>

        <TabContent index={1}>
          <Text>First Content</Text>
        </TabContent>
        <TabContent index={2}>
          <Text>Second Content</Text>
        </TabContent>
        <TabContent index={3}>
          <Text>Third Content</Text>
        </TabContent>
      </Tabs>
      <LineBreak />
      <Text className="text-2xl mb-4">api-doc tab</Text>
      <Tabs className="flex flex-col">
        <Div className="flex">
          <Tab index={1} activeStyles="border-b-4 border-b-Blue-700">
            <Text className="text-base text-Blue-700 font-EnMedium p-3">
              Headers
            </Text>
          </Tab>
          <Tab index={2} activeStyles="border-b-4 border-b-Blue-700">
            <Text className="text-base text-Blue-700 font-EnMedium p-3">
              Params
            </Text>
          </Tab>
          <Tab index={3} activeStyles="border-b-4 border-b-Blue-700">
            <Text className="text-base text-Blue-700 font-EnMedium p-3">
              Body
            </Text>
          </Tab>
          <Tab index={4} activeStyles="border-b-4 border-b-Blue-700">
            <Text className="text-base text-Blue-700 font-EnMedium p-3">
              Responses
            </Text>
          </Tab>
        </Div>
        <Div className="h-[4px] w-full bg-Blue-300 shadow-Primary relative bottom-1 -z-10"></Div>
        <TabContent index={1}>Headers</TabContent>
        <TabContent index={2}>Params</TabContent>
        <TabContent index={3}>Body</TabContent>
        <TabContent index={4}>Responses</TabContent>
      </Tabs>
      <LineBreak />
      <ApiDocName
        // apiImage="/images/user-circle.png"
        apiName="api doc name"
        userImages={[
          "/images/user-circle.png",
          "/images/user-circle.png",
          "/images/user-circle.png",
        ]}
        userNames={[
          "mohamad keshavarz",
          "pedram afrasiabi",
          "ehsan jafari",
          "fateme shahbazi",
          "danial darabi",
          "ghazale javidnia",
        ]}
        userCount={31}
        onUserClick={() => console.log("hey")}
        time="17h"
      />
      <LineBreak />
      <HeaderLanding />
    </Div>
  );
};

export default ApiDocComponents;
