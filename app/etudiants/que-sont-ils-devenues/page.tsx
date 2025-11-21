import Link from "next/link";

export default function AlumniFollowupPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-16">
      <h1 className="text-3xl font-extrabold">Que sont‑ils devenues ?</h1>
      <p className="mt-4">Page dédiée au suivi des anciens étudiants — parcours professionnels, témoignages, contacts.</p>
      <p className="mt-6">(Contenu à compléter — ajouter témoignages, filtrage par promotion, etc.)</p>
      <p className="mt-8"><Link href="/etudiants" className="cta">Retour</Link></p>
    </main>
  );
}
