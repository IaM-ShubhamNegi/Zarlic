import React from "react";
import Authentication from "../ui/AuthenticationComp/Authentication";

const SignUp = () => {
  return (
    <div>
      <Authentication title={"SignUp"} SignUp={true} LogIn={false} Enquiry={false} />
    </div>
  );
};

export default SignUp;
