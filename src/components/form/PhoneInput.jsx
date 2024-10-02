import { useFormikContext } from "formik";
import Label from "./Label";
import SelectPhoneCode from "./SelectPhoneCode";
import { CountryCode } from "../../../public/countryCode";

function PhoneInput({ label, required }) {
  const { values, setFieldValue, errors, touched, handleBlur } =
    useFormikContext();
  const selectedCountry =
    CountryCode.find((country) => country.value === values.phone_code) ||
    CountryCode.find((country) => country.value === "+966");
  const formatPhoneNumber = (inputValue, selectedCountry) => {
    inputValue = inputValue.replace(/[^0-9]/g, "");
    if (!inputValue) return "";
    const maxLength = selectedCountry?.maxLength - 1 || inputValue.length;
    inputValue = inputValue.slice(0, maxLength);
    let formattedInput = "";
    let maskIndex = 0;
    for (let i = 0; i < inputValue.length; i++) {
      if (selectedCountry?.mask[maskIndex] === " ") {
        formattedInput += " ";
        maskIndex++;
      }
      formattedInput += inputValue[i];
      maskIndex++;
    }

    return formattedInput.trim();
  };

  const handlePhoneChange = (e) => {
    const formatted = formatPhoneNumber(e.target.value, selectedCountry);

    setFieldValue("phone", formatted.replace(/\s+/g, ""));
  };

  return (
    <div>
      <Label className={"text_Dark"}>
        {label}
        <span className="text-danger mx-1">{required ? "*" : ""}</span>
      </Label>
      <div className="d-flex gap-2">
        <div className="w-75">
          <input
            type="text"
            placeholder={selectedCountry?.mask || "xx xxx xxxx"}
            dir="ltr"
            value={
              values.phone
                ? formatPhoneNumber(values.phone, selectedCountry)
                : ""
            }
            onChange={handlePhoneChange}
            onBlur={handleBlur}
            inputMode="numeric"
            autoComplete="off"
            name="phone"
            className={`form-control ${
              errors.phone && touched.phone ? "border-danger" : ""
            }`}
          />
        </div>
        <div
          className={`border w-25 d-flex align-items-center justify-content-center rounded-2 ${
            errors.phone && touched.phone ? "border-danger" : ""
          }`}
        >
          <SelectPhoneCode name={"phone_code"} />
        </div>
      </div>
      {touched.phone && errors.phone && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {errors.phone}
        </div>
      )}
    </div>
  );
}

export default PhoneInput;
