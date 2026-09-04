import type { CSSProperties, ReactNode } from "react";

type SectionShellProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  innerClassName?: string;
  style?: CSSProperties;
};

export function SectionShell({
  id,
  children,
  className = "",
  innerClassName = "",
  style,
}: SectionShellProps) {
  return (
    <section id={id} className={`scroll-mt-16 ${className}`} style={style}>
      <div className={`mx-auto w-full max-w-[1280px] px-6 ${innerClassName}`}>
        {children}
      </div>
    </section>
  );
}
