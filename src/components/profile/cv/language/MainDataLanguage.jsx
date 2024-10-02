import React from "react";
import SelectLanguage from "../../../form/SelectLanguage";
import SelectLanguageLevel from "../../../form/SelectLanguageLevel";
import UploadDoc from "../../../form/UploadDoc";

function MainDataLanguage() {
  return (
    <div>
      <div className="my-4">
        <SelectLanguage label={"اللغات"} name={"language_id"} />

        <SelectLanguageLevel label={"المستوى"} name={"level"} />
        <UploadDoc label={""}  name={"attachment_url"}/>
      </div>
    </div>
  );
}

export default MainDataLanguage;
