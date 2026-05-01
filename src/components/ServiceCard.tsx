import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { ServiceIcon } from './ServiceIcon';

const SERVICE_TEXT: Record<string, { title: string; body: string; audience: string }> = {
  PACKAGE: { title: 'Pakete & Sendungen', body: 'Sicherer Transport für Pakete jeder Größe – von Brief bis Großkarton.', audience: 'Privat & Geschäft' },
  FLOWERS: { title: 'Blumenlieferung', body: 'Frische Blumen liebevoll und pünktlich zugestellt – auch zu besonderen Anlässen.', audience: 'Floristen, Privat' },
  DOCUMENTS: { title: 'Dokumente', body: 'Vertrauliche Dokumente, Verträge und Akten – Hand-zu-Hand zugestellt.', audience: 'Kanzleien, Unternehmen' },
  MAGAZINES: { title: 'Magazine & Zeitungen', body: 'Regelmäßige Verteilung von Magazinen und Zeitungen an viele Adressen.', audience: 'Verlage, Medien' },
  STORE_PICKUP: { title: 'Bestellungen aus Geschäften', body: 'Wir kaufen ein, holen ab und liefern direkt zu dir nach Hause oder ins Büro.', audience: 'Privatkunden' },
  EXPRESS: { title: 'Express Lieferung', body: 'In unter 60 Minuten am Ziel – wenn es wirklich schnell gehen muss.', audience: 'Unternehmen, Notfälle' },
  COOLING: { title: 'Kühltransport', body: 'Temperaturgeführte Lieferung für Lebensmittel, Medikamente und sensible Ware.', audience: 'Apotheken, Gastronomie' },
  BUSINESS: { title: 'Firmenkunden & Daueraufträge', body: 'Individuelle Konditionen für regelmäßige Touren und Daueraufträge.', audience: 'Geschäftskunden' },
};

export function ServiceCard({ kind }: { kind: string }) {
  const t = SERVICE_TEXT[kind];
  if (!t) return null;
  return (
    <div className="card group flex flex-col p-6 transition hover:-translate-y-1 hover:shadow-lg">
      <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <ServiceIcon kind={kind} className="h-5 w-5" />
      </div>
      <h3 className="text-base font-bold text-ink-800">{t.title}</h3>
      <p className="mt-2 flex-1 text-sm text-ink-500">{t.body}</p>
      <p className="mt-3 text-xs font-semibold uppercase tracking-wide text-ink-400">{t.audience}</p>
      <Link
        href={`/auftrag?service=${kind}`}
        className="mt-5 inline-flex items-center gap-1 text-sm font-semibold text-brand-600 hover:text-brand-700"
      >
        Auftrag erstellen <ArrowRight className="h-4 w-4" />
      </Link>
    </div>
  );
}
