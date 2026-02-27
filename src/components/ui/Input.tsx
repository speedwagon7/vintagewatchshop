import { cn } from "@/lib/cn";

type Props = React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ className, ...props }: Props) {
  return (
    <input
      className={cn(
        "h-11 w-full rounded-xl bg-white/5 px-4 text-sm text-[color:var(--foreground)] ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--paper)]/30",
        className,
      )}
      {...props}
    />
  );
}

