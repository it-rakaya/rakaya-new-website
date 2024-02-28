import Container from "@/components/Container";
import Header from "@/components/jobs/Header";
import VisionLayout from "@/components/vision/VisionLayout";
import React from "react";

const PillarHeader = ({ title, icon }) => (
  <div className="d-flex align-items-baseline mb-1 gap-3 text-gold">
    <i className={`${icon} fs-5`}></i>
    <h5>{title}</h5>
  </div>
);

const pillarsData = [
  {
    title: "الشفافية",
    icon: "bi bi-list-nested",
    description:
      "التواصل الواضح مع العميل وتقديم الإستشارة بعد دراستها من كل الجوانب",
  },
  {
    title: "المسؤولية",
    icon: "bi bi-bar-chart",
    description:
      "الالتزام بأداء العمل على أكمل وجه وإضافة قيمة نوعية تساهم بتحقيق النجاح",
  },
  {
    title: "الاستدامة",
    icon: "bi bi-grid-1x2",
    description: "الحرص على خلق علاقة شراكة ناجحة مستدامة على المدى الطويل",
  },
  {
    title: "التمكين",
    icon: "bi bi-asterisk",
    description:
      "العمل على الوصول لأكبر قدرة إنتاجية وزيادة الكفاءة بخطط وأهداف منظمة",
  },
  {
    title: "الجدارة",
    icon: "bi bi-star",
    description:
      "إنجاز العمل بطريقة صحيحة وفي توقيت مثالي بواسطة استشاريين متخصصين",
  },
];

const Pillars = () => (
  <>
    <Header text={"أركاننا"} />

    <VisionLayout title="قيم نعتز بها">
      <Container className="me-0 col-12 col-lg-6">
        <p>
          نؤمن بأن كل عمل لا يتم بإتقان من غير أسس أخلاقية مهنية نسترشد بها
          وترسّخ علاقتنا بعملائنا
        </p>
        <span className="badge bg-forth border-primary py-2 px-3 text-primary fw-bold fs-5 my-2">
          الرؤية
        </span>
        <p>
          هدفنا أن تكون ركايا مركزًا عالميًا للخبرات ومرجعًا يُستقى منه من خلال
          تقديم أفضل الحلول بمعايير عالمية متطورة مع فهم فريد للسوق المحلي
        </p>
        {pillarsData.map((pillar) => (
          <React.Fragment key={pillar.title}>
            <PillarHeader title={pillar.title} icon={pillar.icon} />
            <p>{pillar.description}</p>
          </React.Fragment>
        ))}
      </Container>
    </VisionLayout>
  </>
);

export default Pillars;
