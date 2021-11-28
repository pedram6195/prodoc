import React, { useState, useContext, createContext } from "react";
import Div from "../container";

const TabsContext = createContext();

export const Tabs = ({ children, className, ...props }) => {
  const [active, setActive] = useState(1);

  return (
    <TabsContext.Provider value={[active, setActive]}>
      <Div
        className={`flex flex-col ${className}`}
        {...props}
      >
        {children}
      </Div>
    </TabsContext.Provider>
  );
};

export const Tab = ({
  children,
  className,
  isActive = false,
  index,
  activeStyles,
  ...props
}) => {
  const [active, setActive] = useContext(TabsContext);

  return (
    <Div
      className={`cursor-pointer flex whitespace-nowrap ${
        active === index && activeStyles
      } ${className}`}
      onClick={() => {
        setActive(index);
      }}
      {...props}
    >
      {children}
    </Div>
  );
};

export const TabContent = ({ children, className, index, ...props }) => {
  const [active] = useContext(TabsContext);

  return (
    <Div
      className={`hidden ${active === index && "!block"} ${className}`}
      {...props}
    >
      {children}
    </Div>
  );
};
