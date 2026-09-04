type SectionTitleProps = {
  title: string;
  children?: React.ReactNode;
  eyebrow?: string;
};

export function SectionTitle({ title, children, eyebrow }: SectionTitleProps) {
  return (
    <div className="mx-1 mb-4">
      {eyebrow ? (
        <div className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#8b8984]">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="m-0 mb-1 text-[21px] font-semibold leading-tight">
        {title}
      </h2>
      {children ? (
        <p className="m-0 text-[13px] leading-5 text-[#88847e]">{children}</p>
      ) : null}
    </div>
  );
}
