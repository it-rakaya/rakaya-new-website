import UploadDoc from "@/components/form/UploadDoc"
import { useFormikContext } from "formik"
import React from "react"

function AttachmentsMainData({ check, setCheck }) {
  const { values } = useFormikContext()
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
      <UploadDoc
        name="Passport_photo"
        label={"صورة الجواز"}
        isRequired={!values.national_id.startsWith("1")}
      />
      <UploadDoc name="candidate_iban" label={"شهادة الايبان"} isRequired />

      <UploadDoc
        name="last_certificate"
        label={" نسخة من شهادة  لآخر مؤھل دراسي"}
        isRequired
      />
      <UploadDoc
        name="courses_certificate"
        label={"نسخة من شھادة الدورات التدریبة أن وجدت"}
      />
      <UploadDoc
        name="experience_certificate"
        label={"نسخة من شھادة الخبرات السابقة أن وجدت"}
      />
      <UploadDoc name="driving_license_photo" label={"صورة رخصة القیادة"} />
      <UploadDoc name="national_address" label={"صورة  العنوان الوطني "} />

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
  )
}

export default AttachmentsMainData
