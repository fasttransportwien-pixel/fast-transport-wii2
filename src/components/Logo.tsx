import { cn } from '@/lib/utils';

export function Logo({ className, withWordmark = true }: { className?: string; withWordmark?: boolean }) {
  return (
    <div className={cn('flex items-center gap-2', className)}>
      <svg viewBox="0 0 200 200" className="h-9 w-9 text-ink-800" aria-hidden="true">
        <circle cx="100" cy="100" r="92" fill="none" stroke="currentColor" strokeWidth="10" />
        <g stroke="currentColor" strokeWidth="11" strokeLinecap="round" strokeLinejoin="round" fill="none">
          <path d="M40 95 H140" />
          <path d="M115 75 L150 95 L115 115" />
        </g>
        <text x="100" y="158" textAnchor="middle" fontFamily="Helvetica, Arial, sans-serif" fontWeight="800" fontSize="46" fill="currentColor" letterSpacing="2">
          FTW
        </text>
      </svg>
      {withWordmark && (
        <div className="flex flex-col leading-tight">
          <span className="text-base font-bold text-ink-800">Fast Transport</span>
          <span className="-mt-0.5 text-xs font-semibold text-brand-600">WIEN E.U.</span>
        </div>
      )}
    </div>
  );
}
