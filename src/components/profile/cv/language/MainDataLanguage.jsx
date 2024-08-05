import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import SelectLanguage from "@/components/form/SelectLanguage";
import SelectLevel from "@/components/form/SelectLevel";
import UploadDoc from "@/components/form/UploadDoc";
import { Form, Formik } from "formik";
import React from "react";

function MainDataLanguage({ setShowSkills }) {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <div className="my-4">
            <SelectLanguage label={"اللغات"} />
            <div class="form-check-reverse my-3">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexRadioDefault1"
              //   checked={check}
              //   onChange={() => setCheck(!check)}
            />
            <label
              class="form-check-label"
              for="flexRadioDefault1"
              style={{ cursor: "pointer" }}
            >
              اللغه الأم
            </label>
          </div>

            <SelectLevel label={"المستوى"} />
            <UploadDoc label={""} />
          </div>
          <div className="mt-3 d-flex justify-content-between">
            <Button>حفظ</Button>

            <Button color="secondary" onClick={() => setShowSkills(true)}>
              الرجوع
            </Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default MainDataLanguage;
