export function NovaLogo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="grid h-8 w-8 grid-cols-2 gap-[2px] rounded-md bg-foreground p-[3px]">
        <div className="rounded-[2px] bg-primary" />
        <div className="rounded-[2px] bg-secondary" />
        <div className="rounded-[2px] bg-secondary" />
        <div className="rounded-[2px] bg-primary" />
      </div>
      <span className="font-mono text-sm font-semibold tracking-[0.02em]">NOVA</span>
    </div>
  );
}
