import Link from "next/link";

type MenuCardProps = {
  href: string;
  icon: string;
  title: string;
};

export function MenuCard({ href, icon, title }: MenuCardProps) {
  return (
    <Link
      href={href}
      className="flex min-h-[193px] flex-col justify-between rounded-[22px] bg-white px-7 py-7 no-underline shadow-card transition hover:-translate-y-0.5 hover:shadow-feature max-[560px]:min-h-[164px] max-[560px]:rounded-[20px] max-[560px]:px-6"
    >
      <span className="text-[30px] leading-none">{icon}</span>
      <span className="flex items-center justify-between gap-5 text-[22px] font-semibold text-ink max-[560px]:text-[19px]">
        {title}
        <span className="text-[36px] font-light leading-none text-[#a7a7a7]">
          →
        </span>
      </span>
    </Link>
  );
}
