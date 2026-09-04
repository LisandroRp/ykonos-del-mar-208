import { MenuCard } from "@/components/MenuCard";
import { Footer } from "@/components/Footer";
import { homeCards } from "@/data/home";
import { heroImage } from "@/data/site";

export default function Home() {
  return (
    <div className="home-shell">
      <header
        className="flex h-[480px] items-end bg-cover bg-center px-8 py-10 text-white max-[560px]:h-[360px] max-[560px]:px-6 max-[560px]:py-8"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.04), rgba(0,0,0,.64)), url("${heroImage}")`
        }}
      >
        <div>
          <div className="mb-2 text-[17px] font-semibold uppercase tracking-[6px] opacity-95 max-[560px]:text-[12px] max-[560px]:tracking-[4px]">
            Ykonos del Mar
          </div>
          <h1 className="m-0 text-[46px] font-semibold leading-none tracking-[-1px] max-[560px]:text-[42px]">
            Bienvenidos
          </h1>
          <p className="mt-4 text-[21px] font-semibold max-[560px]:text-[18px]">
            Departamento 208
          </p>
        </div>
      </header>

      <main className="px-8 pb-9 pt-10 max-[560px]:px-5 max-[560px]:pt-9">
        <section className="mb-9 max-[560px]:mb-7">
          <h2 className="mb-3 text-[28px] font-semibold leading-tight max-[560px]:text-[25px]">
            Información de tu estadía
          </h2>
          <p className="m-0 text-[21px] leading-8 text-[#777] max-[560px]:text-base max-[560px]:leading-6">
            Encontrá rápidamente todo lo que necesitás sobre el departamento y
            el edificio.
          </p>
        </section>

        <nav className="grid grid-cols-2 gap-5 max-[560px]:grid-cols-1 max-[560px]:gap-4">
          {homeCards.map((card) => (
            <MenuCard key={card.href} {...card} />
          ))}
        </nav>

        <Footer />
      </main>
    </div>
  );
}
