'use client';

import Link from 'next/link';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { cn } from '@/lib/utils';

export function Header() {
  const [open, setOpen] = useState(false);

  const items = [
    { href: '/', label: 'Start' },
    { href: '/leistungen', label: 'Leistungen' },
    { href: '/auftrag', label: 'Auftrag erstellen' },
    { href: '/kontakt', label: 'Kontakt' },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-ink-100 bg-white/85 backdrop-blur">
      <a href="#main" className="sr-only focus:not-sr-only focus:absolute focus:left-2 focus:top-2 focus:rounded focus:bg-brand-500 focus:px-3 focus:py-1 focus:text-white">
        Zum Inhalt springen
      </a>
      <div className="container-page flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2"><Logo /></Link>

        <nav className="hidden md:flex md:items-center md:gap-1">
          {items.map((it) => (
            <Link key={it.href} href={it.href} className="rounded-md px-3 py-2 text-sm font-semibold text-ink-700 hover:bg-ink-50 hover:text-ink-900">
              {it.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link href="/auftrag" className="btn-primary text-sm">Auftrag erstellen</Link>
        </div>

        <button
          className="inline-flex items-center justify-center rounded-md p-2 text-ink-700 hover:bg-ink-50 md:hidden"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((s) => !s)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <div className={cn('border-t border-ink-100 bg-white md:hidden', open ? 'block' : 'hidden')}>
        <div className="container-page py-3">
          <nav className="flex flex-col">
            {items.map((it) => (
              <Link key={it.href} href={it.href} className="rounded-md px-2 py-2.5 text-sm font-semibold text-ink-700 hover:bg-ink-50" onClick={() => setOpen(false)}>
                {it.label}
              </Link>
            ))}
          </nav>
          <div className="mt-3 flex justify-end">
            <Link href="/auftrag" className="btn-primary text-sm" onClick={() => setOpen(false)}>Auftrag erstellen</Link>
          </div>
        </div>
      </div>
    </header>
  );
}
