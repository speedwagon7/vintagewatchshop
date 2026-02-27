import { cn } from "@/lib/cn";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "ghost";
};

export function Button({ className, variant = "primary", ...props }: Props) {
  const base =
    "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition disabled:opacity-50 disabled:cursor-not-allowed";
  const variants: Record<NonNullable<Props["variant"]>, string> = {
    primary:
      "bg-[color:var(--paper)] text-[color:var(--ink)] ring-1 ring-black/10 hover:bg-[#eadfcd]",
    secondary:
      "bg-white/5 text-[color:var(--foreground)] ring-1 ring-white/15 hover:bg-white/10 hover:ring-white/25",
    ghost: "bg-transparent text-[color:var(--foreground)] hover:bg-white/10",
  };

  return <button className={cn(base, variants[variant], className)} {...props} />;
}

