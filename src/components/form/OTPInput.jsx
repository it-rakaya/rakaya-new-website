import React from "react";
import OtpInput from "react-otp-input";

function OTPInput({ setOtp, otp }) {
  // const [otp, setOtp] = useState("");

  return (
    <div>
      <OtpInput
        value={otp}
        onChange={setOtp}
        numInputs={4}
        renderSeparator={<span> </span>}
        renderInput={(props) => <input {...props} />}
        inputStyle={{
          border: "1px solid #dee2e6",
          // padding:"6.5px 14px",
          borderRadius: "5px",
          margin: "0 5px",
          width: "35px",
          height: "35px",
        }}
        containerStyle={{
          flexDirection: "row-reverse",
          justifyContent: "flex-end",
        }}
      />
    </div>
  );
}

export default OTPInput;
