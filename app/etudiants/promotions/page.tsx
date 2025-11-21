import Link from "next/link";

export default function PromotionsPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-extrabold">Promotions</h1>
      <p className="mt-4">Cette page présente les différentes promotions du Master 2 Droit des Affaires.</p>
      <p className="mt-6">(Contenu à compléter — listes des promotions, années, diplômés, etc.)</p>
      <p className="mt-8"><Link href="/etudiants" className="cta">Retour</Link></p>
    </main>
  );
}
