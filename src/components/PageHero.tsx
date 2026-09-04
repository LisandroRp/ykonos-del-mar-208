import Link from "next/link";
import { heroImage } from "@/data/site";

type PageHeroProps = {
  title: React.ReactNode;
  subtitle?: string;
  badge?: boolean;
  compact?: boolean;
};

export function PageHero({
  title,
  subtitle,
  badge = false,
  compact = false
}: PageHeroProps) {
  return (
    <header
      className={`relative flex items-end bg-cover bg-center px-5 text-white ${
        compact ? "h-[250px] py-7" : "h-[410px] py-7 min-[451px]:h-[470px] min-[451px]:px-6 min-[451px]:py-8"
      }`}
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(0,0,0,.04) 20%, rgba(0,0,0,.15) 55%, rgba(0,0,0,.76) 100%), url("${heroImage}")`
      }}
    >
      <Link
        href="/"
        aria-label="Volver al inicio"
        className="absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-black/20 text-xl font-light text-white backdrop-blur-md transition hover:bg-black/30"
      >
        ‹
      </Link>

      <div>
        <div
          className={
            badge
              ? "mb-3 inline-block rounded-full border border-white/50 bg-black/15 px-3 py-2 text-[10px] font-semibold uppercase tracking-[2px] backdrop-blur-md"
              : "mb-1.5 text-[11px] font-semibold uppercase tracking-[3px] opacity-90"
          }
        >
          Ykonos del Mar
        </div>
        <h1
          className={`m-0 font-semibold leading-[1.06] ${
            compact ? "text-[31px] min-[431px]:text-[31px]" : "text-[34px] min-[451px]:text-[39px]"
          }`}
        >
          {title}
        </h1>
        {subtitle ? (
          <p className="mt-3 max-w-[450px] text-[15px] leading-6 text-white/90">
            {subtitle}
          </p>
        ) : null}
      </div>
    </header>
  );
}
