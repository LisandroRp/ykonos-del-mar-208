import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { inventory } from "@/data/inventory";

export const metadata = {
  title: "Inventario"
};

export default function InventoryPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Inventario" />

      <main className="px-3.5 pb-11 pt-6 min-[431px]:px-4">
        <section className="mx-1 mb-5">
          <h2 className="mb-1.5 text-xl font-semibold">
            Elementos del departamento
          </h2>
          <p className="m-0 text-sm leading-5 text-[#777]">
            Lista de referencia para revisar rápidamente qué hay disponible.
          </p>
        </section>

        <div className="space-y-4">
          {inventory.map((group) => (
            <section
              key={group.category}
              className="overflow-hidden rounded-[18px] bg-white shadow-card"
            >
              <h2 className="border-b border-line bg-white px-5 py-4 text-base font-semibold">
                {group.category}
              </h2>
              <div>
                {group.items.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between gap-4 border-b border-line px-5 py-3.5 last:border-b-0"
                  >
                    <span className="text-sm font-medium">{item.name}</span>
                    <span className="rounded-full bg-[#f2f1ee] px-3 py-1 text-xs font-semibold text-[#777]">
                      {item.quantity}
                    </span>
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>

        <Footer />
      </main>
    </div>
  );
}
