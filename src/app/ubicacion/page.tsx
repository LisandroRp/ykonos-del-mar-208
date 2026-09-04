import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { maps } from "@/data/site";

export const metadata = {
  title: "Ubicación"
};

export default function LocationPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Ubicación" />

      <main className="px-4 pb-11 pt-6">
        <section className="mb-4 rounded-[18px] bg-white p-5 shadow-card">
          <div className="flex items-center gap-3.5">
            <div className="flex h-[46px] w-[46px] shrink-0 items-center justify-center rounded-[14px] bg-[#f1f0ed] text-[23px]">
              📍
            </div>
            <div>
              <h2 className="mb-1 text-lg font-semibold">Ykonos del Mar</h2>
              <p className="m-0 text-sm leading-5 text-[#777]">
                Eneas y Jason
                <br />
                Pinamar, Buenos Aires
              </p>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-2 gap-2.5">
            <div className="rounded-xl bg-[#f7f6f3] p-3">
              <div className="mb-1 text-[11px] uppercase tracking-[1px] text-[#999]">
                Zona
              </div>
              <div className="text-sm font-medium">Centro de Pinamar</div>
            </div>
            <div className="rounded-xl bg-[#f7f6f3] p-3">
              <div className="mb-1 text-[11px] uppercase tracking-[1px] text-[#999]">
                Referencia
              </div>
              <div className="text-sm font-medium">A 1 cuadra de Bunge</div>
            </div>
          </div>
        </section>

        <div className="mb-4 h-[310px] overflow-hidden rounded-[18px] bg-[#ddd] shadow-card min-[431px]:h-[340px]">
          <iframe
            src={maps.embed}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-full w-full border-0"
            title="Mapa de Ykonos del Mar"
          />
        </div>

        <a
          className="flex w-full items-center justify-center rounded-[14px] bg-[#222] p-4 text-[15px] font-semibold text-white no-underline transition hover:opacity-90"
          href={maps.open}
          target="_blank"
          rel="noreferrer"
        >
          📍&nbsp;&nbsp;Abrir en Google Maps
        </a>

        <Footer />
      </main>
    </div>
  );
}
