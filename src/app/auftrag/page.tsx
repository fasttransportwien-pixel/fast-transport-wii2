import { OrderForm } from '@/components/OrderForm';

export const dynamic = 'force-dynamic';

export default function OrderPage({ searchParams }: { searchParams: { service?: string } }) {
  return (
    <section className="container-page py-12 md:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <h1 className="text-3xl font-extrabold text-ink-800 md:text-4xl">Auftrag erstellen</h1>
        <p className="mt-3 text-base text-ink-500">
          Kein Online-Zahlungssystem – wir prüfen jede Anfrage persönlich und melden uns innerhalb kurzer Zeit zurück.
        </p>
      </div>
      <div className="mt-10">
        <OrderForm initialService={searchParams.service} />
      </div>
    </section>
  );
}
