'use client';

// removed `allura` font import to use the site's default typography for page titles
import Image from "next/image";
import Link from "next/link";
import ExpandableText from "../../components/ExpandableText";

export default function PartenariatESSEC() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">Le Partenariat ESSEC</h1>

          <div className="mt-6 flex flex-col lg:flex-row items-start justify-center gap-8 max-w-4xl mx-auto">
            {/* Large centered ESSEC logo for prominence */}
            <div className="w-full lg:w-1/2 flex items-center justify-center">
              <div className="w-full max-w-md p-6 bg-white rounded-xl border border-zinc-100 shadow-md">
                <Image src="/ESSEC_Logo.svg" alt="ESSEC logo" width={480} height={200} className="object-contain mx-auto" />
              </div>
            </div>

            <div className="w-full lg:w-1/2 text-left">
              <p className="text-lg text-zinc-700 font-light tracking-wide">
                Le Master 2 Droit des affaires Recherche bénéficie d’un partenariat académique et scientifique
                avec l’ESSEC, signé entre l’Université Paris II Panthéon‑Assas et l’ESSEC le 30 octobre 2008.
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">Ce partenariat vise</h2>
            <ul className="list-inside list-disc text-zinc-700 leading-relaxed space-y-2">
              <li>La mise en place d’un parcours d’études facilitant l’accès à chacune des deux institutions et la formation de leurs étudiants respectifs;</li>
              <li>La mise en place de diplômes en partenariat;</li>
              <li>La participation à des projets et entités de recherche, l’accueil de professeurs et coopérations permettant un meilleur rayonnement international.</li>
            </ul>
          </div>

          <div className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md">
            <h2 className="text-2xl font-semibold text-black mb-4">Modalités d'admission</h2>
            <p className="text-zinc-700 leading-relaxed mb-4">
              Les étudiants en Master 2 en droit de l’Université Paris‑Panthéon‑Assas (ou déjà titulaires d’un Master 2)
              participant au programme de coopération et recommandés par leur directeur de Master bénéficieront à ce titre :
            </p>
            <ol className="list-decimal list-inside text-zinc-700 space-y-2">
              <li>
                de l’accès à l’épreuve d’admission au Mastère Spécialisé (MS) « Droit des affaires Internationales et Management » de l’ESSEC;
              </li>
              <li>
                de l’admissibilité automatique et de l’accès aux épreuves d’admission en deuxième année au programme Grande École de l’ESSEC. Le parcours imposé en cycle Master prendra en compte les acquis académiques et professionnels des candidats admis.
              </li>
            </ol>
          </div>
        </div>

        <div className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h2 className="text-2xl font-semibold text-black mb-4">À propos</h2>

          <ExpandableText
            summary={`Le Groupe ESSEC (École Supérieure des Sciences Economiques et Commerciales), fondé en 1907, est un acteur majeur de l’enseignement de la gestion au niveau international. Il accueille des étudiants du monde entier et collabore avec de nombreuses institutions.`}
            full={`Le Groupe ESSEC dispense de nombreux diplômes et programmes. L’enseignement est assuré par des professeurs‑chercheurs reconnus et des professionnels de grande notoriété. Ensemble, ils favorisent l’excellence académique, la créativité et l’ouverture internationale. Ce partenariat académique vise à favoriser la mobilité étudiante, les diplômes conjoints et la coopération en recherche, permettant un meilleur rayonnement international des formations.`}
          />

          <p className="mt-4">
            <a href="https://www.assas-universite.fr/fr/partenariat-entre-luniversite-paris-pantheon-assas-lessec" target="_blank" rel="noopener noreferrer" className="text-[#5a0f19] underline">Consulter la page du partenariat sur le site d'Assas</a>
          </p>
        </div>

        <div className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md">
          <h2 className="text-2xl font-semibold text-black mb-4">Contributions et avantages</h2>
          <p className="text-zinc-700 leading-relaxed mb-4">
            Ce partenariat permet d’enrichir la formation des étudiants, d’offrir des opportunités de mobilité
            et d’accroître la visibilité internationale des programmes. Il favorise également les échanges
            scientifiques et les collaborations entre équipes de recherche.
          </p>

          <div className="mt-6 text-center">
            <Link href="/partenaires/professionnels" className="inline-block px-6 py-3 rounded-full border border-[#5a0f19] text-[#5a0f19] hover:bg-[#5a0f19] hover:text-white transition">Voir les partenaires professionnels</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
