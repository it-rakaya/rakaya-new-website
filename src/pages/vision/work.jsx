import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import VisionLayout from "@/components/vision/VisionLayout";
import { works } from "@/data";
import React from "react";

const Work = () => (
  <>
    <Header text={"كيف تعمل ركايا"} />

    <VisionLayout title={"كيف تعمل ركايا"}>
      <Container className="mt-5 me-0 col-12 col-lg-10">
        <div className="">
          <p className="text-justify">
            في كل شركة، توجد هيكلة تنظيمية مصممة لتسهيل الحوكمة. الصفحة التالية
            تقدم شرحًا للتركيب التنظيمي المتبع في شركة ركايا، وذلك بهدف توضيح
            دور ومسؤوليات كل موظف بشكل يسهل فهمه. هذا سيساعد أيضًا الموظفين على
            معرفة المسار الصحيح لتقديم الاستفسارات والتقارير. في ركايا، نحن في
            مرحلة تجريب لعدة آليات مختلفة لتحديد الهيكلة التي تلائمنا بأفضل شكل.
          </p>
          <p className="text-justify">
            من خلال تجاربنا، توصلنا إلى أنه من غير المفيد تبني نظام هيكلي جاهز
            وفرضه بشكل مباشر على شركتنا. أيضًا، لاحظنا أن بعض الأدوار وأساليب
            الترقي في العديد من المؤسسات لا تناسب طبيعة عملنا في ركايا. حتى هذه
            اللحظة، نحن نتبع هيكلًا تنظيميًا مصممًا خصيصًا لتلبية احتياجات
            ركايا.
          </p>
          {works.map((item, index) => (
            <div key={index}>
              <h3 className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2 headingVision ">
                {item.title}
              </h3>

              <p className="text-justify">{item?.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </VisionLayout>
  </>
);

export default Work;
