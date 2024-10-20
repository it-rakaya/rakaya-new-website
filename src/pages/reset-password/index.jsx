import React from "react";
import LoginLayout from "../../components/form/Login/LoginLayout";
import Main from "../../components/auth/forget-password/Main";

function ResetPassword() {
  return (
    <div>
      <LoginLayout>
        <div className="">
          <Main />
        </div>
      </LoginLayout>
    </div>
  );
}

export default ResetPassword;
ResetPassword.noLayout = true;
