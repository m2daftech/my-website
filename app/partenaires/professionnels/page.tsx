// removed `allura` font import to use the site's default typography for page titles
import PartnerGrid from "../../components/PartnerGrid";

const partners = [
  {
    name: "Chammas & Marcheteau",
    src: "/logo_partners/Chammas-Marcheteau-OK.jpg",
    href: "https://www.lcdm.law/",
    description:
      "Chammas & Marcheteau est une société d’avocats indépendante qui compte près de 50 spécialistes du droit des affaires dont 13 associés. Le cabinet accompagne ses clients dans leurs activités quotidiennes, leurs transactions stratégiques françaises et cross‑border, leur développement ainsi que la protection de leur propriété intellectuelle et industrielle. Les avocats disposent d’une expertise forte en capital investissement, fusions et acquisitions, fonds et services financiers, corporate, restructuration et retournement, droit social, fiscalité et propriété intellectuelle et technologies de l’information.",
  },
  {
    name: "De Pardieu Brocas Maffei",
    src: "/logo_partners/de-pardieu-brocas-maffei.jpg",
    href: "https://www.de-pardieu.com/",
    description:
      "Fondé en 1993, De Pardieu Brocas Maffei figure parmi les plus importants cabinets d’avocats d’affaires à vocation internationale installés sur la place de Paris ; il compte aujourd’hui plus de 150 avocats dont 38 associés. Ses clients comprennent de grands groupes industriels, financiers et de services, investisseurs institutionnels et fonds d’investissement, français ou étrangers. Les avocats interviennent dans les principaux domaines du droit des affaires : banque – finance, marchés de capitaux, fusions‑acquisitions, droit boursier, private equity, droit fiscal, entreprises en difficulté et restructurations, contentieux des affaires, contrôle des concentrations et droit de la concurrence.",
  },
  {
    name: "DLA Piper",
    src: "/logo_partners/Screenshot-2024-03-06-at-20.27.20.png",
    href: "https://www.dlapiper.com/en-us",
    description:
      "DLA Piper est l’un des plus grands cabinets d’avocats au monde, avec plus de 90 bureaux répartis dans plus de 40 pays. Le cabinet est réputé pour son expertise dans une grande variété de domaines (fusions‑acquisitions, contentieux et arbitrage, transactions immobilières, aviation, IP/IT, assurance, etc.). DLA Piper accompagne des clients dans de nombreux secteurs, notamment les technologies, les services financiers, les sciences de la vie et les énergies.",
  },
  {
    name: "CMS Francis Lefebvre Avocats",
    src: "/logo_partners/Screenshot-2024-03-06-at-20.17.24.png",
    href: "https://cms.law/fr/fra/",
    description:
      "CMS Francis Lefebvre Avocats est l’un des plus grands cabinets d’avocats de droit des affaires en France. Établi depuis 1925 à Paris, le cabinet compte près de 400 avocats spécialisés en droit fiscal, droit des affaires et droit du travail. Sa pluridisciplinarité, la fiabilité de ses recommandations, et son approche globale permettent d’assister groupes français et internationaux, banques, établissements financiers, fonds d’investissement, entreprises de toutes tailles et particuliers dans leurs problématiques juridiques et patrimoniales.",
  },
  {
    name: "Moncey",
    src: "/logo_partners/LOGO-MONCEY-Bleu-sur-fond-blanc.jpg",
    href: "https://www.monceyavocats.com/fr",
    description:
      "Moncey est un cabinet d’avocats d’affaires indépendant intervenant en private equity, fusions & acquisitions, financement, fiscalité, restructuring et droit social, en conseil comme en contentieux. Les équipes plaident une approche pluri‑disciplinaire et accompagnent fonds d’investissement, holdings familiaux, groupes et managers sur les opérations de capital investissement, LBO, cessions, réorganisations et projets post‑acquisition.",
  },
];

export default function PartenairesProfessionnels() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-7xl px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">Partenaires professionnels</h1>
          <p className="mt-6 text-lg text-zinc-700 font-light tracking-wide max-w-3xl mx-auto">
            L’association du Master organise chaque année de nombreuses rencontres au sein des cabinets
            partenaires afin de renforcer les liens entre étudiants et professionnels et favoriser l’insertion.
          </p>
        </div>

        <div className="mb-8">
          <PartnerGrid partners={partners} />
        </div>

        <div className="mt-8 text-center">
          <p className="text-zinc-700">Nous remercions chaleureusement nos partenaires pour leur confiance et leur engagement.</p>
        </div>
      </div>
    </main>
  );
}
