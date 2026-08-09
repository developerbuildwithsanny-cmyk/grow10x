import { cn } from "@/lib/utils";

export function Container({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("mx-auto w-full max-w-[1280px] px-6", className)}>
      {children}
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="font-mono text-sm font-bold uppercase tracking-[0.1em] text-yellow">
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className,
  dark = false,
}: {
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
}) {
  return (
    <h2
      className={cn(
        "font-heading text-[48px] font-extrabold leading-[48px]",
        dark ? "text-black" : "text-white",
        className,
      )}
    >
      {children}
    </h2>
  );
}

export function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[16.67px] w-[16.67px] shrink-0", className)}
      viewBox="0 0 17 17"
      fill="currentColor"
    >
      <path d="M6.5 11.5L3.5 8.5L2 10L6.5 14.5L15 6L13.5 4.5L6.5 11.5Z" />
    </svg>
  );
}

export function ArrowRightIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-4 w-4", className)}
      viewBox="0 0 16 16"
      fill="currentColor"
    >
      <path d="M8 3L6.94 4.06L10.13 7.25H3V8.75H10.13L6.94 11.94L8 13L13 8L8 3Z" />
    </svg>
  );
}

export function ChevronDownIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[7.4px] w-3", className)}
      viewBox="0 0 12 8"
      fill="currentColor"
    >
      <path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" fill="none" />
    </svg>
  );
}

export function PlayIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[21px] w-[16.5px]", className)}
      viewBox="0 0 17 21"
      fill="currentColor"
    >
      <path d="M0 0V21L17 10.5L0 0Z" />
    </svg>
  );
}

export function StarIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[11px] w-[12px]", className)}
      viewBox="0 0 12 11"
      fill="currentColor"
    >
      <path d="M6 0L7.35 4.13L12 4.54L8.5 7.37L9.71 12L6 9.13L2.29 12L3.5 7.37L0 4.54L4.65 4.13L6 0Z" />
    </svg>
  );
}

export function LinkedInIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[10px] w-5", className)}
      viewBox="0 0 20 10"
      fill="currentColor"
    >
      <path d="M2.5 0C1.12 0 0 1.12 0 2.5C0 3.88 1.12 5 2.5 5C3.88 5 5 3.88 5 2.5C5 1.12 3.88 0 2.5 0ZM0.5 10H4.5V6H0.5V10ZM7 6V9.75C7 10.44 7.56 11 8.25 11H11.75C12.44 11 13 10.44 13 9.75V7.5C13 6.67 12.33 6 11.5 6H9.5V4.5C9.5 4.22 9.72 4 10 4H12V1H9.5C7.84 1 6.5 2.34 6.5 4V6H7Z" />
    </svg>
  );
}

export function ActivityIcon({ className }: { className?: string }) {
  return (
    <svg
      className={cn("h-[14px] w-5", className)}
      viewBox="0 0 20 14"
      fill="currentColor"
    >
      <path d="M0 14H20V12H0V14ZM2 10H18L14 4L10 8L7 5L2 10Z" />
    </svg>
  );
}
