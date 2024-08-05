import Button from "@/components/Button";
import BaseInputField from "@/components/form/BaseInputField";
import SelectExperienceYears from "@/components/form/SelectExperienceYears";
import SelectLevel from "@/components/form/SelectLevel";
import SelectSkills from "@/components/form/SelectSkills";
import { Form, Formik } from "formik";
import React from "react";

function MainDataSkills({ setShowSkills }) {
  return (
    <div>
      <Formik initialValues={{}} onSubmit={() => {}}>
        <Form>
          <SelectSkills label={"المهارة"} />
          <SelectExperienceYears label={"عدد سنين الخبرة"} />
          <SelectLevel label={"المستوى"} />
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

export default MainDataSkills;
