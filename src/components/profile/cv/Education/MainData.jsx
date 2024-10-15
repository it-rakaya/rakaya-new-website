import { useFormikContext } from "formik";
import { useEffect } from "react";
import SelectUniversities from "../../../SelectUniversities";
import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import SelectEducation from "../../../form/SelectEducation";
import SelectGpa from "../../../form/SelectGpa";
import SelectMajors from "../../../form/SelectMajors";
import SelectNationality from "../../../form/SelectNationality";

function MainData() {
  const { values, setFieldValue } = useFormikContext();

  useEffect(() => {
    if ([1, 2, 3].includes(values?.education_level_id)) {
      setFieldValue("gpa_from", "100");
      //  console.log("Ddd");
    }
  }, [setFieldValue, values?.education_level_id]);

  const isUniversitySelectVisible =
    values?.country_id == 189 &&
    [7, 6, 5, 4].includes(values?.education_level_id);

  const isMajorSelectVisible = [7, 6, 5, 4].includes(
    values?.education_level_id
  );

  const isGpaDisabled = [1, 2, 3].includes(values?.education_level_id);

  return (
    <div>
      <SelectEducation label="مستوى التعليم" name="education_level_id" />
      <SelectNationality label="الدولة" name="country_id" />

      {isUniversitySelectVisible ? (
        <SelectUniversities label="الكلية" name="university" />
      ) : (
        [7, 6, 5, 4].includes(values?.education_level_id) && (
          <BaseInputField
            label="الكية"
            name="university"
            placeholder="الكية"
            type="text"
          />
        )
      )}

      {isMajorSelectVisible && <SelectMajors label="التخصص" name="major" />}

      <div className="d-flex gap-2 mt-3">
        <div className="w-25">
          <BaseInputField
            label="المعدل"
            type={"numeric"}
            disabled={!values?.gpa_from}
            name="gpa"
            maxValue={+values?.gpa_from}
          />
        </div>
        <div className="w-75">
          <SelectGpa label="من" name="gpa_from" disabled={isGpaDisabled} />
        </div>
      </div>

      <DatePickerComp label="سنة الالتحاق (ميلادي)" name="start_date" />

      <div className="form-check-reverse my-3">
        <input
          className="form-check-input"
          type="checkbox"
          id="flexRadioDefault1"
          name="still_studying"
          onChange={(e) =>
            setFieldValue("still_studying", e.target.checked ? 1 : 0)
          }
        />
        <label
          className="form-check-label"
          htmlFor="flexRadioDefault1"
          style={{ cursor: "pointer" }}
        >
          لازلت ادرس
        </label>
      </div>

      <DatePickerComp
        label="سنة التخرج (ميلادي)"
        name="graduation_date"
        disabled={values?.still_studying == 1}
      />
    </div>
  );
}

export default MainData;
