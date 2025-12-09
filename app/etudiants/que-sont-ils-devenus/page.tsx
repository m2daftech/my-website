import Image from "next/image";
// removed `allura` font import to use the site's default typography for page titles

const alumni = [
    {
      name: "Hubert Segain",
      title: "Partner at Linklaters",
      promotion: 1996,
      desc: "«La qualité du corps enseignant et la rigueur de la sélection des étudiants en font à mon sens un des meilleurs diplômes en droit des affaires. Il permet tout à la fois de poursuivre une carrière en tant qu’avocat, qu’en tant que juriste d’entreprise ou d’enseignant. J’ai eu la chance de pouvoir l’intégrer en 1995 et je dois au Professeur Paul Didier de m’avoir communiqué une réelle passion pour le droit des affaires. En charge du recrutement pour Herbert Smith, ce diplôme fait partie du petit nombre de formations que nous privilégions. »",
      photo: "/photos_actualites/alumni/1.png",
    },

     {
      name: "Louis-Jérôme Laisney",
      title: "Partner at Norton Rose Fullbright",
      promotion: 2007,
      desc: "«Le Master 2 Droit des affaires de Paris II restera sans doute pour moi l’année la plus enrichissante et la plus épanouissante de mes études. La qualité des programmes, axés principalement sur le droit des sociétés et le droit des contrats, associée à la renommée des enseignants et à leur implication, font de ce Master le sésame d’une entrée réussie dans la vie active. Un emploi du temps qui fait une grande place à la recherche pour des sujets d’étude résolument tournés vers la pratique.  »",
      photo: "/photos_actualites/alumni/2.png",
    },

    {
      name: "Charles Bailliart",
      title: "Investment Associate Montagu",
      promotion: 2014,
      desc: "«Excellente réputation. J’ai pu intégrer Latham & Watkins et la renommée est acquise dans tous les cabinets. Je n’exerce finalement pas la profession d’avocat et travaille en finance mais ne regrette pas un seul instant l’excellente formation et les grands professeurs qui l’animent.  »",
      photo: "/photos_actualites/alumni/3.png",
    },

     {
      name: "Martin-Saint-Etienne Thomas",
      title: "Associate at Perspectives Avocats",
      promotion: 2016,
      desc: "« Excellent Master, technique et dont la dimension « recherche » s’avère particulièrement utile dans le cadre de l’activité professionnelle.  »",
      photo: "/photos_actualites/alumni/4_1.webp",
    },

    {
      name: "Vignoli Neto Orlando",
      title: "Associate at Charles Russell Speechlys",
      promotion: 2019,
      desc: "«Très bon Master pour le domaine du M&A, Private Equity et Restructuring en cabinet d’avocats ou pour devenir juriste d’entreprise. Les options pluridisciplinaires permettent à l’étudiant une formation complémentaire et approfondie  dans d’autres matières tel qu’en droit international des affaires, bancaire, fiscal des affaires et concurrence.»",
      photo: "/photos_actualites/alumni/5_1.jpg",
    },
];

export default function AlumniFollowupPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="text-left mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">Que sont‑ils devenus ?</h1>
          <p className="mt-3 text-lg text-zinc-700 font-light tracking-wide">Suivi des alumni — parcours professionnels, témoignages et contacts.</p>
        </div>

        <div className="flex items-center justify-between mb-8 gap-6">
          <p className="text-zinc-600">Retrouvez ci‑dessous quelques anciens et si vous faites partie du réseau, ajoutez‑vous :</p>

          <div className="flex-shrink-0">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScN5DMQZ5ZythVyQoKi2fGLFLWTsQ5t94LKhPycsfWWwaOmew/viewform?usp=sharing&ouid=114732897840132022425"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-5 py-3 rounded-full font-medium shadow-sm border border-[#590707] text-[#590707] bg-white hover:bg-[#F7EDED] transition"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="opacity-90">
                <circle cx="12" cy="12" r="10" stroke="#590707" strokeWidth="1.5" />
                <path d="M12 8v8M8 12h8" stroke="#590707" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Inscrivez‑vous au réseau alumni
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {alumni.map((a) => (
            <article key={a.name} className="bg-white border border-zinc-100 rounded-2xl overflow-hidden shadow-md">
              <div className="w-full h-80 md:h-96 relative overflow-hidden">
                <Image
                  src={a.photo}
                  alt={a.name}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover object-top"
                />
              </div>

              <div className="p-6">
                <div className="h-1 w-24 bg-gradient-to-r from-[#590707] to-[#A30404] rounded mb-4" />
                <h3 className="text-2xl font-semibold text-[#590707]">{a.name}</h3>
                <div className="text-sm text-[#A30404] font-medium mt-1">{a.title}</div>
                {a.promotion && (
                  <div className="text-sm text-zinc-500 mt-1">Promotion {a.promotion}</div>
                )}
                <p className={`mt-3 text-zinc-700 ${a.desc && a.desc.length > 140 ? 'italic' : ''}`}>{a.desc}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
