import { cn } from "@/lib/cn";

type Props = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ className, ...props }: Props) {
  return (
    <textarea
      className={cn(
        "min-h-28 w-full resize-y rounded-xl bg-white/5 px-4 py-3 text-sm text-[color:var(--foreground)] ring-1 ring-white/10 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-[color:var(--paper)]/30",
        className,
      )}
      {...props}
    />
  );
}

