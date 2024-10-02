import { useFormikContext } from "formik";
import React from "react";
import SelectExperienceYears from "../../../form/SelectExperienceYears";
import SelectLevel from "../../../form/SelectLevel";
import SelectSkills from "../../../form/SelectSkills";
function MainDataSkills() {
  const { values } = useFormikContext();
  return (
    <div>
      <SelectSkills label={"المهارة"} name={"skill_id"} />
      {values?.typeSkills == "technical" && (
        <>
          <SelectExperienceYears
            label={"عدد سنين الخبرة"}
            name={"years_of_experience"}
          />
          <SelectLevel label={"المستوى"} name={"level"} />
        </>
      )}
    </div>
  );
}

export default MainDataSkills;
