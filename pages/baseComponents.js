import React from "react";
import withAuth from "../HOC/withAuth";

const BaseComponents = () => {
    return (
      <div>
        <h1
          className="pl-60 pt-32 font-EnRegular text-xl"
          style={{ color: "#707070" }}
        >
          Hey There welcome to 1234567890 website.
        </h1>
        <h1 className="pl-60 font-EnBlack">
          .سلام به سایت ۱۲۳۴۵۶۷۸۹۰ خوش آمدید
        </h1>
      </div>
    );
}

export default withAuth(BaseComponents)