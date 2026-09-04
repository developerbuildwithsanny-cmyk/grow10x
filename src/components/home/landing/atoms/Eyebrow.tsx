type EyebrowProps = {
  label: string;
  tone?: "light" | "dark";
};

export function Eyebrow({ label, tone = "light" }: EyebrowProps) {
  return (
    <div className="flex items-center">
      <span
        aria-hidden
        className="h-[1.5px] w-4 shrink-0 bg-landing-accent"
      />
      <p
        className={`pl-2 font-poppins font-medium tracking-wide text-sm ${
          tone === "dark" ? "text-landing-accent" : "text-landing-accent"
        }`}
      >
        {label}
      </p>
    </div>
  );
}
