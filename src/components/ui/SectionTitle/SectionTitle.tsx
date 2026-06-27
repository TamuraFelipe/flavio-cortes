interface SectionTitleProps {
  title: string;
  subtitle?: string;
}
export function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <div className="w-full">
      <div className="flex items-center gap-4">
        <span className="text-xs lg:text-base uppercase tracking-[0.35em] text-[#b89b5e]">
          {title}
        </span>

        <div className="h-px flex-1 bg-[#5c4b2c]"></div>
      </div>

      <h3
        className="
                mt-4 
                text-white 
                text-xl
                lg:text-4xl 
                uppercase 
                font-black 
                tracking-[0.08em]
                "
      >
        {subtitle}
      </h3>
    </div>
  );
}
