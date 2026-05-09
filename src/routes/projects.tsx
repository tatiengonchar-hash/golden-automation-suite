import { createFileRoute } from "@tanstack/react-router";
import icon01 from "@/assets/icons/icon-01-growth.png";
import icon02 from "@/assets/icons/icon-02-funnel.png";
import icon03 from "@/assets/icons/icon-03-contracts.png";
import icon04 from "@/assets/icons/icon-04-calculator.png";
import icon05 from "@/assets/icons/icon-05-ai-shield.png";
import icon06 from "@/assets/icons/icon-06-pricelist.png";
import icon07 from "@/assets/icons/icon-07-accounting.png";
import icon08 from "@/assets/icons/icon-08-segmentation.png";
import icon09 from "@/assets/icons/icon-09-headset.png";
import icon10 from "@/assets/icons/icon-10-payments.png";
import icon11 from "@/assets/icons/icon-11-warehouse.png";
import icon12 from "@/assets/icons/icon-12-calls.png";
import icon13 from "@/assets/icons/icon-13-ai-deals.png";
import icon14 from "@/assets/icons/icon-14-hr.png";
import icon15 from "@/assets/icons/icon-15-bank-ai.png";
import icon16 from "@/assets/icons/icon-16-interview.png";
import icon17 from "@/assets/icons/icon-17-experts.png";
import icon18 from "@/assets/icons/icon-18-cases.png";
import icon19 from "@/assets/icons/icon-19-implementation.png";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Наши проекты — автоматизация и ИИ" },
      {
        name: "description",
        content:
          "12 реализованных проектов по автоматизации бизнес-процессов и внедрению ИИ: продажи, HR, юридический, бухгалтерия, склад, колл-центр.",
      },
      { property: "og:title", content: "Наши проекты — автоматизация и ИИ" },
      {
        property: "og:description",
        content:
          "Реальные кейсы автоматизации воронок продаж, HR, юр. отдела, бухгалтерии и внедрения ИИ.",
      },
    ],
  }),
  component: ProjectsPage,
});

type Project = {
  title: string;
  description?: string;
  icon: string;
};

const projects: Project[] = [
  {
    title: "Автоматизация воронки продаж",
    description:
      "Перенос сделок из Excel в CRM за 1 день. Сквозная аналитика, автозаполнение карточек и контроль конверсии на каждом этапе.",
    icon: icon01,
  },
  {
    title: "Обработка откликов в HR",
    description:
      "Массовый подбор персонала: автоматический парсинг резюме, скоринг кандидатов и распределение по вакансиям без ручной рутины.",
    icon: icon02,
  },
  {
    title: "Сравнение договоров",
    description:
      "ИИ-сверка версий договоров для юридического отдела: подсветка изменений, выявление рисков и сокращение времени проверки в разы.",
    icon: icon03,
  },
  {
    title: "Excel → веб-калькуляторы",
    description:
      "Превращаем сложные Excel-расчёты в удобные онлайн-калькуляторы с понятным интерфейсом и контролируемой бизнес-логикой.",
    icon: icon04,
  },
  {
    title: "Безопасное внедрение ИИ",
    description:
      "Внедрение ИИ в условиях автоматизации и сокращения функций: контроль доступа к данным, аудит решений и управление рисками.",
    icon: icon05,
  },
  {
    title: "Анализ прайс-листов поставщиков",
    description:
      "Автоматический сбор и сравнение прайсов: выявление выгодных условий, отслеживание изменений и формирование отчётов закупщику.",
    icon: icon06,
  },
  {
    title: "Первичные бухгалтерские документы",
    description:
      "Распознавание и классификация счетов, актов и накладных. Автозагрузка в учётную систему с проверкой реквизитов.",
    icon: icon07,
  },
  {
    title: "ИИ-сегментация клиентов",
    description:
      "Кластеризация клиентской базы для маркетинга: персональные предложения, прогноз оттока и рост LTV без ручного анализа.",
    icon: icon08,
  },
  {
    title: "ИИ-ассистент колл-центра",
    description:
      "Помощник операторов интернет-провайдера: подсказки по скриптам, поиск ответов в базе знаний и автозаполнение тикетов.",
    icon: icon09,
  },
  {
    title: "Сверка платежей",
    description:
      "Автоматическая сверка банковских выписок с реестром и закрытие финансовых документов без ручных Excel-таблиц.",
    icon: icon10,
  },
  {
    title: "Складская комплектация",
    description:
      "ИИ-помощник комплектовщика: оптимальный маршрут по складу, контроль ошибок сборки и ускорение отгрузки заказов.",
    icon: icon11,
  },
  {
    title: "Фиксация результатов звонков",
    description:
      "Автоматическое заполнение CRM по итогам звонка в отделе продаж: транскрипция, тэги и следующие шаги без ручного ввода.",
    icon: icon12,
  },
  {
    title: "ИИ-агент: сделки и логистика",
    description:
      "ИИ-агент, который закрывает сделки и координирует логистику: согласование условий, подготовка документов и контроль доставки без ручного участия менеджера.",
    icon: icon13,
  },
  {
    title: "Автоматизация HR-процессов",
    description:
      "Единый контур для HR: оценка сотрудников, онбординг новичков и обработка внутренних заявок — без таблиц и потерянных писем.",
    icon: icon14,
  },
  {
    title: "ИИ в закрытом контуре банка",
    description:
      "Внедрение ИИ внутри защищённого периметра банка: работа без интернета и внешних API, полный контроль данных и соответствие требованиям ИБ.",
    icon: icon15,
  },
  {
    title:
      "Проводим технические интервью в формате живых собеседований или в системе с прокторингом",
    icon: icon16,
  },
  {
    title:
      "Оценку кандидатов выполняют практикующие инженеры и архитекторы ИИ и смежных технологий",
    icon: icon17,
  },
  {
    title:
      "Проверяем практические навыки через прикладные бизнес-задачи и кейсы",
    icon: icon18,
  },
  {
    title:
      "Оцениваем способность внедрять решения в бизнес, а не только разрабатывать их",
    icon: icon19,
  },
];

function ProjectsPage() {
  return (
    <main className="min-h-screen bg-[#22293B] text-white">
      <section className="mx-auto max-w-7xl px-6 pt-20 pb-12 md:pt-28 md:pb-16">
        <div className="max-w-3xl">
          <span className="inline-block h-1 w-16 rounded bg-[#FFD301]" />
          <h1 className="mt-6 text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
            Наши проекты
          </h1>
          <p className="mt-5 text-base text-[#EEEEEE]/80 md:text-lg">
            12 реализованных кейсов по автоматизации бизнес-процессов и
            безопасному внедрению ИИ — от воронки продаж и HR до бухгалтерии,
            склада и колл-центра.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-20">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <article
              key={i}
              className="group flex items-center gap-5 rounded-2xl bg-[#EEEEEE] p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:shadow-xl"
            >
              <img
                src={p.icon}
                alt=""
                aria-hidden="true"
                loading="lazy"
                width={512}
                height={512}
                className="h-24 w-24 shrink-0 self-center object-contain md:h-28 md:w-28"
              />
              <div className="min-w-0">
                <h3 className="text-lg font-bold leading-snug text-[#22293B]">
                  {p.title}
                </h3>
                {p.description && (
                  <p className="mt-2 text-sm leading-relaxed text-[#22293B]/75">
                    {p.description}
                  </p>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-6 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold md:text-4xl">
            Хотите похожий проект?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[#EEEEEE]/80">
            Расскажите о задаче — подберём решение по автоматизации или
            внедрению ИИ под ваши процессы.
          </p>
          <a
            href="mailto:hello@example.com"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-[#FFD301] px-8 py-4 text-base font-semibold text-[#22293B] transition-transform duration-200 hover:-translate-y-0.5 hover:brightness-105"
          >
            Обсудить проект
          </a>
        </div>
      </section>
    </main>
  );
}
