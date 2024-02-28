import { useFormikContext } from "formik";
import { useState } from "react";
import Label from "./Label";
import PreviewImageLink from "../PreviewImageLink";
import Button from "../Button";
import ViewICon from "../icons/ViewICon";
import PreviewPdf from "../PreviewPdf";

function UploadDoc({ name, label, isRequired }) {
  const { setFieldValue } = useFormikContext();
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
          الرجاء رفع سيرتك الذاتية هنا
          {isRequired && <span className="mx-1 text-danger">*</span>}
        </Label>
        <div className=" border rounded-3 position-relative cursor-pointer" style={{ height:isFileLoaded  ?  "130px" :"120px" }}>
          <input
            type="file"
            accept="application/pdf,image/jpeg,image/png"
            name={name}
            className="position-absolute w-100 h-100 opacity-0 cursor-pointer z-[9]"
            onChange={handleFileChange}
          />
          <div
            className="text-center p-4 d-flex flex-column align-items-center   "
            
          >
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
                <p className="p-0 m-0">
                  يرجى رفع الملف بهذه الصيغة: PDF / JPG / PNG
                </p>
                <p className="p-0 m-0">مساحة الملف: أقل من 50MB</p>
              </>
            )}
          </div>
        </div>
      </div>
      {/* <div className="w-1/2 flex justify-center items-center">
        {preview && fileType === "application/pdf" ? (
          <embed
            src={preview}
            type="application/pdf"
            width="100%"
            height="100%"
          />
        ) : preview ? (
          <PreviewImageLink
            url={preview}
            info={true}
            messageInfo={"عرض المعاينة"}
          />
        ) : null}
      </div> */}
    </div>
  );
}

export default UploadDoc;
