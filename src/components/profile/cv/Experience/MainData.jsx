import { useFormikContext } from "formik";
import BaseInputField from "../../../form/BaseInputField";
import DatePickerComp from "../../../form/DatePickerComp";
import SelectJobType from "../../../form/SelectJobType";
import SelectJobLocation from "../../../form/SelectJobLocation";

import TextArea from "../../../form/TextArea";

function MainData() {
  const { setFieldValue , values } = useFormikContext();
  return (
    <div>
      <BaseInputField
        label={"جهة العمل"}
        placeholder={"جهة العمل"}
        name={"employer"}
      />
      <BaseInputField
        label={" المسمى الوظيفي"}
        placeholder={" المسمى الوظيفي"}
        name={"position"}
      />

      <SelectJobType label={"نوع الوظيفة"} name="work_type_id" />
      <SelectJobLocation label={"نوع المكان"} name="location_type_id" />

      <DatePickerComp label={"بداية الفترة"} name={"start_date"} />
      <div class="form-check-reverse my-3">
        <input
          class="form-check-input"
          type="checkbox"
          name="still_working"
          id="flexRadioDefault1"
            checked={values?.still_working == 1}
          onChange={(e) =>
            setFieldValue("still_working", e.target.checked ? 1 : 0)
          }
        />
        <label
          class="form-check-label"
          for="flexRadioDefault1"
          style={{ cursor: "pointer" }}
        >
          لازلت اعمل في هذه الجهة
        </label>
      </div>
      <DatePickerComp label={"نهاية الفترة"} name={"end_date"} 
      disabled={values?.still_working == 1}
      />
      <TextArea label={"تفاصيل مهام عملك"} rows={6} name={"details"} />
    </div>
  );
}

export default MainData;
