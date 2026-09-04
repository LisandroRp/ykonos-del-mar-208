import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { SectionTitle } from "@/components/SectionTitle";
import { amenities, services } from "@/data/building";
import { poolImage } from "@/data/site";

export const metadata = {
  title: "Edificio y Amenities"
};

export default function BuildingPage() {
  return (
    <div className="page-shell bg-paperWarm">
      <PageHero
        badge
        title={
          <>
            Edificio &<br />
            amenities
          </>
        }
        subtitle="Espacios pensados para disfrutar Pinamar tanto dentro como fuera del departamento."
      />

      <main className="px-3.5 pb-12 pt-7 min-[451px]:px-4">
        <section className="px-1 pb-8">
          <div className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#8b8984]">
            Living Hotel & SPA
          </div>
          <h2 className="mb-3 max-w-[520px] text-[27px] font-semibold leading-[1.18] tracking-[-.5px]">
            Todo lo que necesitás, sin salir del edificio.
          </h2>
          <p className="m-0 max-w-[580px] text-sm leading-6 text-[#74716c]">
            Ykonos del Mar combina espacios de descanso, entretenimiento y
            servicios para hacer más cómoda tu estadía.
          </p>
        </section>

        <section
          className="mb-8 flex h-[305px] items-end overflow-hidden rounded-[22px] bg-cover bg-center p-6 text-white shadow-feature min-[451px]:h-[345px]"
          style={{
            backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.02), rgba(0,0,0,.60)), url("${poolImage}")`
          }}
        >
          <div>
            <div className="mb-1 text-[10px] font-semibold uppercase tracking-[2px] opacity-80">
              Relax
            </div>
            <div className="text-[23px] font-semibold">
              Piscina exterior climatizada
            </div>
          </div>
        </section>

        <section>
          <SectionTitle title="Amenities">
            Espacios disponibles dentro de Ykonos del Mar.
          </SectionTitle>

          <div className="mb-8 grid grid-cols-2 gap-3">
            {amenities.map((amenity) => (
              <article
                key={amenity.name}
                className="flex min-h-[143px] flex-col justify-between rounded-[18px] bg-white p-4 shadow-card min-[451px]:min-h-[150px] min-[451px]:p-5"
              >
                <div className="flex h-[43px] w-[43px] items-center justify-center rounded-[13px] bg-paperWarm text-[22px]">
                  {amenity.icon}
                </div>
                <div>
                  <h3 className="mt-5 text-sm font-semibold leading-tight min-[451px]:text-[15px]">
                    {amenity.name}
                  </h3>
                  <p className="mt-1 text-[11px] leading-4 text-[#99958f]">
                    {amenity.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="relative mb-8 overflow-hidden rounded-[22px] bg-[#22211f] px-5 py-6 text-white min-[451px]:px-6 min-[451px]:py-7">
          <div className="absolute -right-16 -top-20 h-44 w-44 rounded-full bg-white/[.035]" />
          <div className="relative">
            <div className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#aaa69f]">
              Experiencia Ykonos
            </div>
            <h2 className="mb-3 max-w-[430px] text-[25px] font-medium leading-[1.18]">
              La comodidad de un departamento, con servicios de hotel.
            </h2>
            <p className="m-0 max-w-[500px] text-[13px] leading-6 text-[#bdb9b2]">
              El edificio suma servicios pensados para simplificar la estadía y
              disfrutar Pinamar con mayor comodidad.
            </p>
          </div>
        </section>

        <section>
          <SectionTitle title="Servicios">
            Servicios disponibles en el edificio.
          </SectionTitle>

          <div className="rounded-[20px] bg-white px-5 py-1 shadow-card">
            {services.map((service) => (
              <div
                key={service.title}
                className="flex items-center gap-3.5 border-b border-line py-4 last:border-b-0"
              >
                <div className="w-9 text-center text-xl">{service.icon}</div>
                <div>
                  <div className="mb-0.5 text-sm font-semibold">
                    {service.title}
                  </div>
                  <div className="text-[11px] leading-4 text-[#96928c]">
                    {service.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-5 rounded-[14px] bg-white/55 px-4 py-3 text-[11px] leading-5 text-[#89857f]">
          Los horarios, modalidades de uso y disponibilidad de algunos
          amenities o servicios pueden variar. Ante cualquier duda, consultá con
          conserjería.
        </div>

        <Footer />
      </main>
    </div>
  );
}
