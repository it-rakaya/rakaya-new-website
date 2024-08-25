import BaseInputField from "@/components/form/BaseInputField";
import AvailableJobLayout from "@/components/jobs/available_job/AvailbleJobLayout";
import { Formik } from "formik";
import React from "react";
import { FaTools } from "react-icons/fa";
import { FaUser } from "react-icons/fa6";

function JobApplication() {
  const sections = {
    " المهارات الشخصية ": [
      {
        label: "الاسم كامل بالعربي",
        value: "عبد الرحمن القصبي ابراهيم",
        name: "nameAr",
      },
      {
        label: "الاسم كامل بالانجليزية",
        value: "Abdulrahman qassbi ebrahim",
        name: "nameEn",
      },
      { label: "رقم الجوال", value: "+966541532515", name: "phone" },
      { label: "الجنسية", value: "مصري", name: "nationality" },
      { label: "دولة الاقامة", value: "مصر", name: "residenceCountry" },
      { label: "الجنس", value: "ذكر", name: "gender" },
    ],
    "المهارات التقنية": [
      { label: "رقم الجوال", value: "+966541532515", name: "phone" },
      { label: "الجنسية", value: "مصري", name: "nationality" },
      { label: "دولة الاقامة", value: "مصر", name: "residenceCountry" },
      { label: "الجنس", value: "ذكر", name: "gender" },
    ],
  };

  const icons = {
    "المهارات الشخصية  ": (
      <FaUser className="mx-2 text-gold" style={{ width: 22, height: 22 }} />
    ),
    "المهارات التقنية": (
      <FaTools className="mx-2 text-gold" style={{ width: 22, height: 22 }} />
    ),
  };
  return (
    <AvailableJobLayout>
      <div className="row col-8 m-auto">
        <div className="accordion border-0" id="accordionExample">
          {Object.entries(sections).map(
            ([sectionTitle, items], sectionIndex) => (
              <div
                className="accordion-item border-0 border-bottom py-2"
                key={sectionIndex}
              >
                <h2 className="accordion-header" id={`heading${sectionIndex}`}>
                  <button
                    className={`accordion-button px-1 ${
                      sectionIndex !== 0 ? "collapsed" : ""
                    }`}
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${sectionIndex}`}
                    aria-expanded={sectionIndex === 0 ? "true" : "false"}
                    aria-controls={`collapse${sectionIndex}`}
                  >
                    {icons[sectionTitle]}
                    <span className="mx-2 fw-bolder" style={{ fontSize: 18 }}>
                      {sectionTitle}
                    </span>
                  </button>
                </h2>
                <Formik initialValues={{}} onSubmit={() => {}}>
                  <div
                    id={`collapse${sectionIndex}`}
                    className={`accordion-collapse collapse ${
                      sectionIndex === 0 ? "show" : ""
                    }`}
                    data-bs-parent="#accordionExample"
                  >
                    <div className="accordion-body row justify-content-between px-5">
                      {items.map((item, index) => (
                        <div className="col-md-6" key={index}>
                          <BaseInputField label={item.label} name={item.name} />
                        </div>
                      ))}
                    </div>
                  </div>
                </Formik>
              </div>
            )
          )}
        </div>
      </div>
    </AvailableJobLayout>
  );
}

export default JobApplication;
