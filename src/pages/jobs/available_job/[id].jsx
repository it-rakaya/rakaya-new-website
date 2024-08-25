import AvailableJobLayout from "../../../components/jobs/available_job/AvailbleJobLayout";
import SideMenuJob from "../../../components/jobs/available_job/SideMenuJob";
import React, { useContext } from "react";
import { FaTools, FaUser } from "react-icons/fa";
import { DarkModeContext } from "../../../context/DarkModeContext";

function DetailsJob() {
  const { isDarkMode } = useContext(DarkModeContext);

  const sections = {
    المهام: [
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
    المتطلبات: [
      { label: "رقم الجوال", value: "+966541532515", name: "phone" },
      { label: "الجنسية", value: "مصري", name: "nationality" },
      { label: "دولة الاقامة", value: "مصر", name: "residenceCountry" },
      { label: "الجنس", value: "ذكر", name: "gender" },
    ],
  };

  const icons = {
    المهام: (
      <FaUser className="mx-2 text-gold" style={{ width: 22, height: 22 }} />
    ),
    المتطلبات: (
      <FaTools className="mx-2 text-gold" style={{ width: 22, height: 22 }} />
    ),
  };

  return (
    <div style={{ backgroundColor: "#e3e3e35e", height: "100%" }} className="">
      <AvailableJobLayout>
        <SideMenuJob/>
        {/* <div className="row col-8 m-auto py-5">
          <div className="accordion border-0" id="accordionExample">
            {Object.entries(sections).map(
              ([sectionTitle, items], sectionIndex) => (
                <div
                  className="accordion-item border-0 border-bottom py-2"
                  key={sectionIndex}
                >
                  <h2
                    className="accordion-header"
                    id={`heading${sectionIndex}`}
                  >
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
                            <BaseInputField
                              label={item.label}
                              name={item.name}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </Formik>
                </div>
              )
            )}
          </div>
        </div> */}
      </AvailableJobLayout>
    </div>
  );
}

export default DetailsJob;
