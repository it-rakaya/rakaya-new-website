
import { Form, Formik } from "formik";
import React from "react";
import Button from "../../../Button"
import SelectSkills from "../../../form/SelectSkills";
import SelectExperienceYears from "../../../form/SelectExperienceYears";
import SelectLevel from "../../../form/SelectLevel";
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
