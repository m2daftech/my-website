import { allura } from "../layout"; // 🔥 Import OBLIGATOIRE

export default function Actualites() {
  const events = [
    {
      id: 1,
      title: "Cérémonie de remise des diplômes",
      date: "12 Juin 2025",
      description:
        "Moment de célébration réunissant étudiants, professeurs et alumni du Master.",
    },
    {
      id: 2,
      title: "Visite d'entreprise – Cabinet X",
      date: "22 Mars 2025",
      description:
        "Découverte des métiers du droit des affaires au sein d’un grand cabinet parisien.",
    },
    {
      id: 3,
      title: "Rassemblement des anciens élèves",
      date: "10 Novembre 2024",
      description:
        "Retrouvailles inter-promotions autour d’un cocktail organisé à Paris.",
    },
  ];

  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-4xl px-6">

        {/* Titre calligraphique */}
        <div className="text-center mb-20">
          <h1
            className={`${allura.className} text-7xl text-[#5a0f19] drop-shadow-sm`}
          >
            Actualités du Master
          </h1>

          <p className="mt-6 text-lg text-zinc-700 font-light tracking-wide">
            Suivez les temps forts, événements et moments marquants du Master 2 Droit des affaires.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-zinc-200">

          {/* Ligne vin animée */}
          <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#5a0f19] opacity-60 animate-pulse"></div>

          {events.map((event) => (
            <div key={event.id} className="relative pl-12 mb-16">

              {/* Pastille */}
              <div className="absolute -left-[10px] top-1 w-5 h-5 bg-white border-[3px] border-[#5a0f19] rounded-full shadow-sm"></div>

              {/* Card */}
              <div
                className="bg-white border border-zinc-100 shadow-sm
                           hover:shadow-lg transition-all duration-300 
                           rounded-2xl p-8"
              >
                <div className="inline-block bg-[#5a0f19] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm">
                  {event.date}
                </div>

                <h2 className="mt-5 text-2xl font-semibold text-black">
                  {event.title}
                </h2>

                <p className="mt-3 text-zinc-700 leading-relaxed">
                  {event.description}
                </p>

                <button className="mt-5 text-sm font-medium text-[#5a0f19] hover:underline">
                  En savoir plus →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
