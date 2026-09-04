import { Footer } from "@/components/Footer";
import { InfoCard } from "@/components/InfoCard";
import { PageHero } from "@/components/PageHero";
import { usefulInfo } from "@/data/usefulInfo";

export const metadata = {
  title: "Uso del Departamento"
};

export default function UsefulInfoPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Uso del departamento" />

      <main className="px-3.5 pb-11 pt-6 min-[431px]:px-4">
        <section className="mx-1 mb-5">
          <h2 className="mb-1.5 text-xl font-semibold">Información útil</h2>
          <p className="m-0 text-sm leading-5 text-[#777]">
            Datos prácticos para usar el departamento durante tu estadía.
          </p>
        </section>

        <div className="space-y-3">
          {usefulInfo.map((section) => (
            <InfoCard key={section.title} icon={section.icon} title={section.title}>
              <ul className="m-0 list-none space-y-1 p-0">
                {section.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </InfoCard>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
