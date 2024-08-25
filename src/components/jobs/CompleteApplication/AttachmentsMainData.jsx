import UploadDoc from "../../../components/form/UploadDoc";
import React from "react";

function AttachmentsMainData({ check, setCheck }) {
  return (
    <div>
      <UploadDoc
        name="candidate_portfolio"
        label={"صورة شخصية مناسبة لبطاقة العمل"}
        messageInfo={"يرجى رفع صورة شخصية مناسبة لبطاقة العمل"}
        accept={"image/jpeg,image/png,image/jpg"}
      />
      <UploadDoc
        name="candidate_national_id"
        label={"بطاقة الهوية"}
        isRequired
      />
      <UploadDoc name="candidate_iban" label={"شهادة الايبان"} isRequired />
      <div class="form-check-reverse my-3">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexRadioDefault1"
          checked={check}
          onChange={() => setCheck(!check)}
        />
        <label
          class="form-check-label"
          for="flexRadioDefault1"
          style={{ cursor: "pointer" }}
        >
          أقر بأن جميع البيانات التي قدمتها في طلب التوظيف صحيحة ودقيقة بمعرفتي
          الكاملة ، وأتعهد بتحمل المسؤولية الكاملة عن صحة هذه البيانات وأي تبعات
          قد تنتج عن أي معلومات غير صحيحة أو مضللة تقدمت بها. كما أوافق على
          تقديم وثائق تثبت صحة المعلومات المقدمة في حال الطلب.
        </label>
      </div>
    </div>
  );
}

export default AttachmentsMainData;
