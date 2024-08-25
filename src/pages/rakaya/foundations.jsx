/* eslint-disable react/no-unescaped-entities */
import Container from "../../components/Container";
import CustomHead from "../../components/CustomHead";
import Header from "../../components/jobs/Header";
import VisionLayout from "../../components/vision/VisionLayout";

const Base = () => {
  const description =
    "الأسس هي تلك العناصر الجوهرية التي يجب أن نوليها اهتمامًا خاصًا في حياتنا وعملنا. نحافظ على هذه الأسس في مقدمة تفكيرنا، حتى لو تحولت ركايا إلى شركة بعيدة عن اهتماماتها";
  return (
    <>
      <CustomHead title={"أسس"} description={description} />

      <Header text={"أُسس"} />

      <VisionLayout title="أسس">
        <Container className="col-12 col-md-10 d-flex flex-wrap  justify-content-lg-start mx-0 gap-3">
          <p className="mt-3 text-justify">
            الأسس هي تلك العناصر الجوهرية التي يجب أن نوليها اهتمامًا خاصًا في
            حياتنا وعملنا. هذه الأسس تحدد طريقة العمل، وليس جوهره. نحافظ على هذه
            الأسس في مقدمة تفكيرنا، حتى لو تحولت ركايا إلى شركة بعيدة عن
            اهتماماتها.
          </p>
          <h3 className="">{"كل ما هنا يخصك"}</h3>
          <p className="text-justify">
            من الصحيح أن لكل موظف في ركايا مهام محددة وتسمية وظيفية توضح دوره.
            ومع ذلك، من المهم عدم الوقوع في فخ القول "هذا ليس من مسؤوليتي" عندما
            يتعلق الأمر بمهام خارج نطاق وظيفتك المباشرة. تذكر دائمًا أن كل ما
            يساهم في نجاح ركايا يعتبر جزءًا من دورك.
          </p>
          <p className="text-justify">
            كن مسؤولاً ودقيقاً، حتى في الأمور التي قد تبدو خارج نطاق مسؤولياتك
            في ركايا. اهتم بالتفاصيل التي قد يغفل عنها الآخرون. قد تكون هذه
            التفاصيل الصغيرة هي التي تحدد نجاح أو فشل مشروع ما. لا تتردد في
            التحدث وطرح الأسئلة للتأكد من أن كل شيء على ما يرام ولا يوجد أي
            إشارة لمشكلة محتملة.
          </p>
          <h3 className="">{"انتقِ الأذكياء والأكثر تميزاً"}</h3>
          <p className="text-justify">
            قد يقع ضمن مسؤولياتك في ركايا توظيف شخص جديد لإدارتك. تمهل في هذا
            الأمر ولا تكتفِ بالبحث عن من يمكنه إنجاز المهمة فحسب. اسعَ لإيجاد
            شخص يمكنه إضافة قيمة حقيقية إلى الفريق ويسهم في إحداث تغيير إيجابي
            في بنية الفريق والشركة ككل. ستواجه العديد من المرشحين الجيدين
            والمتميزين، ولكن التحدي الأكبر يكمن في قدرتك على قول "لا" للممتاز
            لتفسح المجال لقبول الرائعين فقط.
          </p>
          <p className="text-justify">
            أنت لست بحاجة إلى شخص يقتصر دوره على تنفيذ التعليمات في ركايا. ما
            تحتاجه هو شخص يتجاوز التوقعات، يمتلك القدرة والشجاعة لاتخاذ قرارات
            تسهم في تعزيز الإنتاجية.
          </p>
          <ul className=" mx-3 mx-md-5">
            <li className="text-justify">
              اسأل المتقدمين للوظيفة في ركايا عن روتينهم اليومي واستفسر عما
              حققوه في الشهر الماضي. تأكد من الحصول على إجابات مفصلة ودقيقة. من
              المهم أن تفهم كيف توصلوا إلى حلول للتحديات التي واجهوها، أو كيف
              ساهموا في نجاح المشاريع التي عملوا عليها، حيث يمكن أن يكون من
              السهل نسب نجاح المشاريع إلى أنفسهم.
            </li>
            <li>اختبر قدراته في مهمة عملية قبل أن تتخذ قرار التوظيف.</li>
            <li className="text-justify">
              أن تقتصر على توظيف الأفراد الاستثنائيين في ركايا لا يضمن النجاح
              بنسبة 100%، ولكن إذا شعرت بالراحة تجاه المرشح، فدع حدسك يكون
              مرشدك.
            </li>
            <li className="text-justify">
              تحلّى بالجرأة لاتخاذ المخاطرات في ركايا؛ هذا أمر جيد. ومع ذلك، لا
              تتنازل أبدًا عن توظيف شخص غير مؤهل. إذا لزم الأمر، لا تتردد في
              إنهاء التعاقد مع الأشخاص الذين لا يؤدون بشكل جيد. الموظفون الأكفاء
              سيجذبون مزيدًا من الكفاءات، بينما الأشخاص ذوي الأداء الضعيف قد
              يؤدون إلى تدهور أداء الشركة.
            </li>
          </ul>
          <h3 className="">{'"أخبرني بصراحة وجهاً لوجه"'}</h3>
          <p className="text-justify">
            إذا واجهت موقفًا يجعلك تشعر بالحرج في التعبير عن مشاعرك تجاه مشكلة
            ما مع أحد زملائك أو مديرك أو أي شخص آخر داخل الشركة، لا تتردد في
            مواجهته بنفسك. تجنب طلب النصح من الآخرين وتوجه مباشرةً للتحدث عن
            مشاعرك ووجهات نظرك حول المشكلة أو الفكرة أو أي سوء فهم قد حدث.
          </p>
          <h3 className="">
            {"قم بعمل مقارنة بين من كنت عليه في الأمس ومن أنت اليوم"}
          </h3>
          <p className="text-justify">
            عادةً ما يخطئ الإنسان بمقارنة نفسه مع الآخرين، بينما يمكن أن تكون
            المقارنة مع الذات أكثر فعالية في تحسين الأداء. إن كنت اليوم أفضل مما
            كنت عليه في الأمس، فأنت بالفعل على الدرب الصحيح نحو التحسن. غالبًا
            ما يستصغر الإنسان قدراته على تحقيق الإنجازات طويلة الأمد. كما يقول
            المثل:{" "}
            <strong>
              "السفينة في الميناء آمنة، لكن ليس من أجل هذا صُنعت السفن."
            </strong>
          </p>
        </Container>
      </VisionLayout>
    </>
  );
};

export default Base;
