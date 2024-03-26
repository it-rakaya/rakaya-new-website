import { useFormikContext } from "formik";
import { useState } from "react";
import PreviewImageLink from "../PreviewImageLink";
import PreviewPdf from "../PreviewPdf";
import Label from "./Label";

function UploadDoc({ name, label, isRequired , accept , textAccept }) {
  const { setFieldValue, errors, touched, handleBlur } = useFormikContext();
  const [preview, setPreview] = useState(null);
  const [isFileLoaded, setIsFileLoaded] = useState(false);
  const [fileType, setFileType] = useState("");
  const [fileName, setFileName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      if (file.size > 50 * 1024 * 1024) {
        setErrorMessage("حجم الملف يجب أن يكون أقل من 50MB");
        setIsFileLoaded(false);
        setPreview(null);
        setFileName(""); // تصفير اسم الملف
        return;
      }
      if (!["application/pdf", "image/jpeg", "image/png"].includes(file.type)) {
        setErrorMessage("يرجى رفع الملف بالصيغ المطلوبة فقط: PDF, JPG, PNG");
        setIsFileLoaded(false);
        setPreview(null);
        setFileName(""); // تصفير اسم الملف
        return;
      }
      setErrorMessage("");
      setIsFileLoaded(true);
      setFileType(file.type);
      setFileName(file.name); // تحديث اسم الملف
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
      setFieldValue(name, file);
    }
  };

  return (
    <div className="flex w-full">
      <div className="w-1/2">
        <Label className="text-center">
          {label}
          {isRequired && <span className="mx-1 text-danger">*</span>}
        </Label>
        <div
          className=" border rounded-3 position-relative cursor-pointer uploadDoc"
          style={{ height: isFileLoaded ? "130px" : "120px" }}
        >
          <input
            type="file"
            accept={accept || "application/pdf,image/jpeg,image/png"}
            name={name}
            onBlur={handleBlur}
            className="position-absolute w-100 h-100 opacity-0 cursor-pointer z-[9]"
            onChange={handleFileChange}
          />
          <div className="text-center p-4 d-flex flex-column align-items-center   ">
            {errorMessage ? (
              <p className="text-danger">{errorMessage}</p>
            ) : isFileLoaded ? (
              <>
                <p className="p-0 m-0 fw-bolder">تم تحميل الملف بنجاح</p>
                <p className="p-0 m-0 ">
                  {fileName.length > 50
                    ? `${fileName.slice(0, 50)}...`
                    : fileName}
                </p>
                <div className="position-absolute bottom-0 my-2 ">
                  {/* <Button color="secondary" className="z-5"> */}
                  {preview && fileType === "application/pdf" ? (
                    <PreviewPdf href={preview} />
                  ) : (
                    <PreviewImageLink url={preview} />
                  )}
                  {/* </Button> */}
                </div>
              </>
            ) : (
              <>
                <p className="p-0 m-0 fw-bolder">اختر ملف أو قم بإسقاطه هنا</p>
                <p className="p-0 m-0 uploadDocPar" >
                  {textAccept ? textAccept :"يرجى رفع الملف بهذه الصيغة: PDF / JPG / PNG"}
                </p>
                <p className="p-0 m-0 uploadDocPar">مساحة الملف: أقل من 50MB</p>
              </>
            )}
          </div>
        </div>
      </div>
      {touched[name] && errors[name] && (
        <div className="text-danger" style={{ fontSize: "12px" }}>
          {errors[name]}
        </div>
      )}
    </div>
  );
}

export default UploadDoc;
