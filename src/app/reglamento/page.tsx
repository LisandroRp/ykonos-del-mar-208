import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { rules } from "@/data/rules";

export const metadata = {
  title: "Reglamento"
};

export default function RulesPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Reglamento" />

      <main className="px-3.5 pb-11 pt-6 min-[431px]:px-4">
        <section className="mx-1 mb-5">
          <h2 className="mb-1.5 text-xl font-semibold">
            Para una estadía tranquila
          </h2>
          <p className="m-0 text-sm leading-5 text-[#777]">
            Reglas principales del departamento y convivencia en el edificio.
          </p>
        </section>

        <div className="space-y-3">
          {rules.map((rule, index) => (
            <article
              key={rule.title}
              className="rounded-[18px] bg-white p-5 shadow-card"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-[13px] bg-[#f2f1ee] text-sm font-semibold text-[#777]">
                {index + 1}
              </div>
              <h2 className="mb-2 text-base font-semibold">{rule.title}</h2>
              <p className="m-0 text-[13px] leading-5 text-[#888]">
                {rule.description}
              </p>
            </article>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
