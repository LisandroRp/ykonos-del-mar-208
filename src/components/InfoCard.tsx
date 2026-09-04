type InfoCardProps = {
  icon?: string;
  title: string;
  children?: React.ReactNode;
};

export function InfoCard({ icon, title, children }: InfoCardProps) {
  return (
    <section className="rounded-[18px] bg-white p-5 shadow-card">
      <div className="flex items-start gap-4">
        {icon ? (
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-[14px] bg-[#f2f1ee] text-[23px]">
            {icon}
          </div>
        ) : null}
        <div className="min-w-0 flex-1">
          <h2 className="m-0 mb-1 text-base font-semibold">{title}</h2>
          <div className="text-[13px] leading-5 text-[#888]">{children}</div>
        </div>
      </div>
    </section>
  );
}
