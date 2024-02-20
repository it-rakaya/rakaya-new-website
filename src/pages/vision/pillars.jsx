import Container from "@/components/Container";
import VisionLayout from "@/components/vision/VisionLayout";
import React from "react";

const PillarHeader = ({ title, icon }) => {
   return (
      <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
         <div className="">
            <i className={`${icon} fs-5`}></i>
         </div>
         <h5 className="">{title}</h5>
      </div>
   );
};

const pillars = () => {
   return (
      <VisionLayout title={"قيم نعتز بها "}>
         <Container className="me-0 col-12 col-lg-6">
            <p className="">
               نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها
               وترسّخ علاقتنا بعملائنا 
            </p>
            <span className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2">
               الرؤية
            </span>
            <p>
               هدفنا أن تكون "ركايا" مركزًا عالميًا للخبرات ومرجعًا يُستقى منه ،
               من خلال تقديم أفضل الحلول بمعايير عالمية متطورة مع فهم فريد للسوق
               المحلي
            </p>
            <PillarHeader title="الشفافية" icon="bi bi-list-nested" />
            <p>
               التواصل الواضح مع العميل وتقديم الإستشارة بعد دراستها من كل
               الجوانب
            </p>
            <PillarHeader title="المسؤولية" icon="bi bi-bar-chart" />
            <p>
               الالتزام بأداء العمل على أكمل وجه وإضافة قيمة نوعية تساهم بتحقيق
               النجاح
            </p>
            <PillarHeader title="الاستدامة" icon="bi bi-grid-1x2" />
            <p> الحرص على خلق علاقة شراكة ناجحة مستدامة على المدى الطويل</p>
            <PillarHeader title="التمكين" icon="bi bi-asterisk" />
            <p>
               العمل على الوصول لأكبر قدرة إنتاجية وزيادة الكفاءة بخطط وأهداف
               منظمة 
            </p>
            <PillarHeader title="الجدارة" icon="bi bi-star" />
            <p>
               إنجاز العمل بطريقة صحيحة وفي توقيت مثالي بواسطة استشاريين
               متخصصين 
            </p>
         </Container>
      </VisionLayout>
   );
};

export default pillars;
