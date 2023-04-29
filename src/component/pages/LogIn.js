import React from "react";
import Authentication from "../ui/AuthenticationComp/Authentication";

const LogIn = () => {
  return (
    <div>
      <Authentication title={"LogIn"} SignUp={false} LogIn={true} Enquiry={false} />
    </div>
  );
};

export default LogIn;
