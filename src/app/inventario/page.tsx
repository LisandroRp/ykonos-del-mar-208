import { Footer } from "@/components/Footer";
import { InventoryList } from "@/components/InventoryList";
import { PageHero } from "@/components/PageHero";

export const metadata = {
  title: "Inventario"
};

export default function InventoryPage() {
  return (
    <div className="page-shell">
      <PageHero compact title="Inventario" />

      <main className="px-3.5 pb-11 pt-6 min-[431px]:px-4">
        <InventoryList />

        <Footer />
      </main>
    </div>
  );
}
