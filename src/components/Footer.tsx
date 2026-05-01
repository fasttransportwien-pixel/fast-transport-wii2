import Link from 'next/link';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-ink-100 bg-ink-50/60">
      <div className="container-page grid gap-10 py-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-md text-sm text-ink-500">
            Schnelle Transporte in Wien – zuverlässig, flexibel und persönlich.
          </p>
          <p className="mt-4 text-sm text-ink-500">
            Walter/Jurmann/Gasse 5A/4/16, 1230 Wien · +43 676 4507663 · fasttransportwien@gmail.com
          </p>
          <p className="mt-1 text-xs text-ink-400">UID: ATU82169528</p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink-700">Leistungen</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link className="hover:text-ink-800" href="/leistungen">Alle Services</Link></li>
            <li><Link className="hover:text-ink-800" href="/auftrag">Auftrag erstellen</Link></li>
            <li><Link className="hover:text-ink-800" href="/kontakt">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-ink-700">Rechtliches</h4>
          <ul className="mt-3 space-y-2 text-sm text-ink-500">
            <li><Link className="hover:text-ink-800" href="/impressum">Impressum</Link></li>
            <li><Link className="hover:text-ink-800" href="/datenschutz">Datenschutz</Link></li>
            <li><Link className="hover:text-ink-800" href="/agb">AGB</Link></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-ink-100">
        <div className="container-page flex flex-col items-center justify-between gap-2 py-4 text-xs text-ink-500 md:flex-row">
          <span>© {new Date().getFullYear()} Fast Transport Wien E.U. · Alle Rechte vorbehalten.</span>
          <span className="text-ink-400">Made in Vienna · ATU82169528</span>
        </div>
      </div>
    </footer>
  );
}
