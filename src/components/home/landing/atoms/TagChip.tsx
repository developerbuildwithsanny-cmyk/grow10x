type TagChipProps = {
  label: string;
  variant?: "light" | "dark";
};

export function TagChip({ label, variant = "light" }: TagChipProps) {
  const styles =
    variant === "dark"
      ? "border-[#3A3530] bg-[#26231F] text-landing-accent"
      : "border-landing-border bg-landing-cream text-landing-ink";

  return (
    <span
      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium ${styles}`}
    >
      {label}
    </span>
  );
}
