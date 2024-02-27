import { useFormikContext } from "formik";
import { useState } from "react";
import Label from "./Label";

function UploadDoc({ name, label, isRequired }) {
  const { setFieldValue } = useFormikContext();
  const [preview, setPreview] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    console.log("🚀 ~ handleFileChange ~ file:", file);
    if (file) {
      // Check if the file is a PDF
      if (file.type == "application/pdf") {
        // Preview PDF
        const reader = new FileReader();
        reader.onloadend = () => {
          setPreview(reader.result);
        };
        reader.readAsDataURL(file);
      } else {
        setPreview(null);
      }

      // Store the file in an array
      setFieldValue(name, file);
    }
  };

  return (
    <div className="w-full">
      <Label className={`text-center  `}>
        الرجاء رفع سيرتك الذاتية هنا
        {isRequired && <span className="mx-1 text-red-500">*</span>}
      </Label>
      <div className="h-[100px]   border  rounded-3  position-relative cursor-pointer">
        <input
          type="file"
          accept="application/pdf,image/jpeg,image/png"
          name={name}
          className="position-absolute w-100 h-100 opacity-0 cursor-pointer z-[9]"
          onChange={handleFileChange}
        />
        <div className="text-center p-4">
          {preview ? (
            <embed src={preview} width="100%" height="100%" />
          ) : (
            <>
              <p className="p-0 m-0 fw-bolder">اختر ملف أو قم بإسقاطه هنا</p>
              <p className="p-0 m-0">
                يرجى رفع الملف بهذه الصيغة: PDF / JPG / PNG
              </p>
              <p className="p-0 m-0">مساحة الملف: أقل من 50MB</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default UploadDoc;
