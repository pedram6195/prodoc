import React from "react";

const Div = ({ className, children, containerRef, ...props }) => {
  return (
    <div className={className} ref={containerRef} {...props}>
      {children}
    </div>
  );
};

export default Div;
