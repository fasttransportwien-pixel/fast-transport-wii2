import Link from 'next/link';
import { ArrowRight, Clock, ShieldCheck, Tag, Headphones, Star } from 'lucide-react';
import { ServiceCard } from '@/components/ServiceCard';

const SERVICE_KINDS = ['PACKAGE', 'FLOWERS', 'DOCUMENTS', 'MAGAZINES', 'STORE_PICKUP', 'EXPRESS', 'COOLING', 'BUSINESS'];

const REVIEWS = [
  { quote: 'Top zuverlässig, immer pünktlich und sehr persönlich. Wir lassen alle unsere Magazine über Fast Transport Wien zustellen.', name: 'Media for Med Magazine Service GmbH', role: 'Kunde seit 2023' },
  { quote: 'Kurzfristig angefragt, eine Stunde später war das Paket beim Kunden. Genau das, was wir brauchten.', name: 'Sara Köhler', role: 'Boutique-Inhaberin' },
  { quote: 'Schnelle Kommunikation, faire Preise, professionelle Abwicklung – uneingeschränkt empfehlenswert.', name: 'Markus Weber', role: 'Eventagentur' },
];

const FAQ = [
  { q: 'Wie schnell könnt ihr liefern?', a: 'Standard-Lieferungen am selben Tag in Wien. Express in der Regel innerhalb von 60 Minuten nach Bestätigung.' },
  { q: 'Was kostet eine Lieferung?', a: 'Der Standardpreis liegt bei 25 € pro Adresse inkl. 20% MwSt. Mit dem Rabattcode FTW20 sparst du bis zu 20%.' },
  { q: 'Welche Zahlungsarten werden akzeptiert?', a: 'Rechnung mit IBAN-Überweisung. Firmenkunden bekommen eine PDF-Rechnung.' },
  { q: 'Liefert ihr auch außerhalb Wiens?', a: 'Auf Anfrage liefern wir auch in das Wiener Umland. Bitte kontaktiere uns für ein individuelles Angebot.' },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="hero-pattern absolute inset-0 -z-10 opacity-60" />
        <div className="container-page grid gap-10 py-20 md:grid-cols-2 md:py-28">
          <div className="flex flex-col justify-center">
            <span className="section-eyebrow">
              <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
              Wien · Kurier · Transport
            </span>
            <h1 className="mt-4 text-4xl font-extrabold leading-tight text-ink-800 md:text-5xl">
              Schnelle Transporte in Wien – zuverlässig, flexibel und persönlich.
            </h1>
            <p className="mt-5 max-w-xl text-lg text-ink-500">
              Fast Transport Wien E.U. liefert Pakete, Dokumente, Blumen, Kühlware und Geschäftsbestellungen pünktlich – für Privat- und Firmenkunden in ganz Wien.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link href="/auftrag" className="btn-primary">
                Jetzt Auftrag erstellen <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/kontakt" className="btn-secondary">Kontakt aufnehmen</Link>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink-500">
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4 text-brand-600" /> Versichert & seriös</span>
              <span className="flex items-center gap-2"><Clock className="h-4 w-4 text-brand-600" /> Same-Day & Express</span>
              <span className="flex items-center gap-2"><Tag className="h-4 w-4 text-brand-600" /> Faire Festpreise</span>
            </div>
          </div>
          <div className="relative">
            <div className="card relative overflow-hidden p-6 md:p-8">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-400 via-brand-500 to-brand-700" />
              <p className="text-xs font-bold uppercase tracking-wide text-brand-600">Beispielbestellung</p>
              <h3 className="mt-2 text-lg font-bold text-ink-800">3 Lieferadressen · Express</h3>
              <ul className="mt-5 space-y-3 text-sm">
                <li className="flex items-start justify-between gap-3">
                  <span className="text-ink-600">3 × 25 € pro Adresse</span>
                  <span className="font-semibold text-ink-800">75,00 €</span>
                </li>
                <li className="flex items-start justify-between gap-3">
                  <span className="text-ink-600">Express-Zuschlag</span>
                  <span className="font-semibold text-ink-800">15,00 €</span>
                </li>
                <li className="flex items-start justify-between gap-3 text-brand-700">
                  <span>Rabatt FTW20</span>
                  <span className="font-semibold">−15,00 €</span>
                </li>
                <li className="border-t border-ink-100 pt-3" />
                <li className="flex items-start justify-between gap-3">
                  <span className="text-sm font-bold text-ink-800">Gesamtpreis inkl. 20% MwSt</span>
                  <span className="text-2xl font-extrabold text-brand-600">75,00 €</span>
                </li>
              </ul>
              <Link href="/auftrag" className="btn-primary mt-7 w-full">Jetzt Auftrag erstellen</Link>
              <p className="mt-3 text-center text-xs text-ink-400">Spare bis zu 20% mit Code FTW20</p>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-y border-ink-100 bg-white">
        <div className="container-page flex flex-wrap items-center justify-center gap-x-10 gap-y-3 py-6 text-xs font-semibold uppercase tracking-wide text-ink-400">
          <span>Vertraut von Wiener Unternehmen seit Jahren</span>
          <span aria-hidden>•</span>
          <span>Media for Med Magazine Service GmbH</span>
          <span aria-hidden>•</span>
          <span>Wiener Apotheken</span>
          <span aria-hidden>•</span>
          <span>Wiener Floristen</span>
          <span aria-hidden>•</span>
          <span>Eventagenturen</span>
        </div>
      </section>

      {/* SERVICES */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="section-eyebrow">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-500" /> Leistungen
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink-800 md:text-4xl">Was wir für dich liefern</h2>
        </div>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICE_KINDS.map((k) => <ServiceCard key={k} kind={k} />)}
        </div>
      </section>

      {/* WHY */}
      <section className="bg-ink-50/60 py-20">
        <div className="container-page">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-extrabold text-ink-800 md:text-4xl">Warum Fast Transport Wien?</h2>
          </div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: Clock, title: 'Schnell wie Express', body: 'Same-Day-Lieferung in Wien – und Express in unter 60 Minuten möglich.' },
              { icon: ShieldCheck, title: 'Zuverlässig & versichert', body: 'Persönliche Betreuung und sicherer Transport jeder Sendung.' },
              { icon: Tag, title: 'Transparente Preise', body: 'Festpreise pro Adresse, klar angezeigt vor dem Absenden.' },
              { icon: Headphones, title: 'Persönlich erreichbar', body: 'Direkter Kontakt zum Inhaber – kein Callcenter, keine Wartezeit.' },
            ].map(({ icon: Icon, title, body }) => (
              <div key={title} className="card p-6">
                <div className="mb-3 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-50 text-brand-600">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-base font-bold text-ink-800">{title}</h3>
                <p className="mt-2 text-sm text-ink-500">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section className="container-page py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-extrabold text-ink-800 md:text-4xl">Was unsere Kunden sagen</h2>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {REVIEWS.map((r, i) => (
            <figure key={i} className="card p-6">
              <div className="flex items-center gap-1 text-brand-600">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star key={j} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm text-ink-700">&ldquo;{r.quote}&rdquo;</blockquote>
              <figcaption className="mt-4">
                <div className="text-sm font-bold text-ink-800">{r.name}</div>
                <div className="text-xs text-ink-500">{r.role}</div>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-ink-50/60 py-20">
        <div className="container-page mx-auto max-w-3xl">
          <h2 className="text-3xl font-extrabold text-ink-800 md:text-4xl">Häufig gestellte Fragen</h2>
          <div className="mt-8 space-y-3">
            {FAQ.map((f, i) => (
              <details key={i} className="card group p-5 open:shadow-md">
                <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-ink-800">
                  {f.q}
                  <span className="text-brand-600 transition group-open:rotate-45">＋</span>
                </summary>
                <p className="mt-3 text-sm text-ink-600">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container-page py-20">
        <div className="rounded-3xl bg-ink-800 p-10 text-white md:p-14">
          <div className="grid gap-6 md:grid-cols-3 md:items-center">
            <div className="md:col-span-2">
              <h2 className="text-3xl font-extrabold md:text-4xl">Bereit für deine erste Lieferung?</h2>
              <p className="mt-3 max-w-xl text-white/70">
                Lege deinen Auftrag in weniger als 2 Minuten an – Preis sofort sichtbar.
              </p>
            </div>
            <div className="flex md:justify-end">
              <Link href="/auftrag" className="btn-primary text-base">
                Auftrag erstellen <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
