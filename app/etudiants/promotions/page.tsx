"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
// removed `allura` font import to use the site's default typography for page titles

const promotions = [
  {
    id: "p24",
    title: "Promotion 2024-2025",
    // short: "Promotion 2024-2025 — une belle cohorte engagée.",
   
    img: "/photos_actualites/promotions/promo_24_25.jpeg",
    members: [
      { name: "Yasmine Sebou", role: "Co‑Présidente", photo: "/photos_actualites/promotions_membre/image_1.png", linkedin: "https://www.linkedin.com/in/yasmine-sebou/", bio: "Yasmine est spécialisée en droit des affaires et communications. Parcours: Master 1 Droit, stages en cabinet international, co-présidente de la promotion." },
      { name: "Maud Cohen", role: "Co‑Présidente", photo: "/photos_actualites/promotions_membre/image_2_1.png", linkedin: "https://www.linkedin.com/in/maud-cohen/", bio: "Maud travail sur les questions de conformité et de gouvernance. Parcours: cursus bilingue, expérience en entreprise et associations étudiantes." },
    ],
  },
  {
    id: "p23",
    title: "Promotion 2023-2024",
    //short: "Promotion 2023-2024 — professionnalisme et rigueur.",
    img: "/photos_actualites/promotions/promo_23_24.jpg",
    members: [
      { name: "Savana Abbal", role: "Secrétaire Générale", photo: "/photos_actualites/promotions_membre/image_3.png", linkedin: "https://www.linkedin.com/in/savana-abbal/", bio: "Savana a un goût prononcé pour le contentieux et la procédure. Elle a effectué des stages en cabinets et dans des institutions publiques." },
      { name: "Youssef Sayarh", role: "Trésorier", photo: "/photos_actualites/promotions_membre/image_7.png", linkedin: "https://www.linkedin.com/in/youssef-sayarh/", bio: "Youssef s'intéresse au droit financier et à la réglementation bancaire. Il a travaillé en audit et en cabinet." },
    ],
  },
  {
    id: "p22",
    title: "Promotion 2022-2023",
    //short: "Promotion 2022-2023 — en réseau et curieuse.",
    img: "/photos_actualites/promotions/promo_22_23.jpeg",
    members: [
      { name: "Mathilde Daumas", role: "Chargée partenariats", photo: "/photos_actualites/promotions_membre/image_4.png", linkedin: "https://www.linkedin.com/in/mathilde-daumas/", bio: "Mathilde travaille les partenariats universitaires et entreprises. Elle a coordonné des projets associatifs et des événements." },
      { name: "Victor Schneider", role: "Chargé communication", photo: "/photos_actualites/promotions_membre/image_5_2.png", linkedin: "https://www.linkedin.com/in/victor-schneider/", bio: "Victor est passionné par la communication digitale et l'UX. Il a créé des campagnes de visibilité pour plusieurs associations." },
    ],
  },
  {
    id: "p21",
    title: "Promotion 2021-2022",
    //short: "Promotion 2021-2022 — expérience et mentoring.",
    img: "/photos_actualites/promotions/promo_21_23.jpg",
    members: [
      { name: "Paola Piendjio", role: "Chargée communication", photo: "/photos_actualites/promotions_membre/image_6.png", linkedin: "https://www.linkedin.com/in/paola-piendjio/", bio: "Paola s'intéresse aux relations publiques et au marketing juridique. Elle a animé des ateliers et représenté la promotion lors d'événements." },
    ],
  },
  {
    id: "p20",
    title: "Promotion 2020-2021",
    //short: "Promotion 2020-2021 — résiliente et ambitieuse.",
    img: "/photos_actualites/promotions/promo_20_21.jpg",
    members: [
      { name: "Ancien Étudiant", role: "Membre", photo: "/photos_actualites/promotions_membre/image_placeholder.png", linkedin: "", bio: "Ancien membre de la promotion 2020-2021 — bio disponible prochainement." },
    ],
  },

  {
    id: "p25",
    title: "Promotion 2025-2026",
    //short: "Promotion 2025-2026 — l'équipe actuelle, dynamique et engagée.",
    img: "/photos_actualites/promotions/promo_25_26.JPG",
    members: [
      { name: "Yasmine Sebou", role: "Co-Présidente", photo: "/photos_actualites/promotions_membre/image_1.png", linkedin: "https://www.linkedin.com/in/yasmine-sebou/", bio: "Yasmine est spécialisée en droit des affaires et communications. Parcours: Master 1 Droit, stages en cabinet international, co-présidente de la promotion." },
      { name: "Maud Cohen", role: "Co-Présidente", photo: "/photos_actualites/promotions_membre/image_2_1.png", linkedin: "https://www.linkedin.com/in/maud-cohen/", bio: "Maud travail sur les questions de conformité et de gouvernance. Parcours: cursus bilingue, expérience en entreprise et associations étudiantes." },
      { name: "Savana Abbal", role: "Secrétaire Générale", photo: "/photos_actualites/promotions_membre/image_3.png", linkedin: "https://www.linkedin.com/in/savana-abbal/", bio: "Savana a un goût prononcé pour le contentieux et la procédure. Elle a effectué des stages en cabinets et dans des institutions publiques." },
      { name: "Youssef Sayarh", role: "Trésorier", photo: "/photos_actualites/promotions_membre/image_7.png", linkedin: "https://www.linkedin.com/in/youssef-sayarh/", bio: "Youssef s'intéresse au droit financier et à la réglementation bancaire. Il a travaillé en audit et en cabinet." },
      { name: "Mathilde Daumas", role: "Chargée partenariats", photo: "/photos_actualites/promotions_membre/image_4.png", linkedin: "https://www.linkedin.com/in/mathilde-daumas/", bio: "Mathilde travaille les partenariats universitaires et entreprises. Elle a coordonné des projets associatifs et des événements." },
      { name: "Victor Schneider", role: "Chargé communication", photo: "/photos_actualites/promotions_membre/image_5_2.png", linkedin: "https://www.linkedin.com/in/victor-schneider/", bio: "Victor est passionné par la communication digitale et l'UX. Il a créé des campagnes de visibilité pour plusieurs associations." },
      { name: "Paola Piendjio", role: "Chargée communication", photo: "/photos_actualites/promotions_membre/image_6.png", linkedin: "https://www.linkedin.com/in/paola-piendjio/", bio: "Paola s'intéresse aux relations publiques et au marketing juridique. Elle a animé des ateliers et représenté la promotion lors d'événements." },
    ],
  },
];

export default function PromotionsPage() {
  // sort promotions by starting year (newest first)
  const sortedPromotions = [...promotions].sort((a, b) => {
    const ya = (a.title.match(/\d{4}/) || ["0"])[0];
    const yb = (b.title.match(/\d{4}/) || ["0"])[0];
    return parseInt(yb, 10) - parseInt(ya, 10);
  });

  const [selectedId, setSelectedId] = useState(sortedPromotions[0].id);
  const selected = sortedPromotions.find((p) => p.id === selectedId) || sortedPromotions[0];
  const [selectedMember, setSelectedMember] = useState<any>(null);
  
    useEffect(() => {
      const onKey = (e: KeyboardEvent) => {
        if (e.key === 'Escape') setSelectedMember(null);
      };
      if (selectedMember) {
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
      }
      return;
    }, [selectedMember]);

  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="text-left mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">Promotions</h1>
          <p className="mt-3 text-lg text-zinc-700 font-light tracking-wide">Accédez aux fiches des promotions — cliquez pour naviguer.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2">
            <div className="bg-white border border-zinc-100 shadow-md rounded-2xl overflow-hidden">
              <div className="w-full bg-gray-100 overflow-hidden flex items-center justify-center">
                <Image
                  src={selected.img}
                  alt={selected.title}
                  width={1600}
                  height={900}
                  className="w-full h-auto object-contain max-h-[480px] md:max-h-[600px]"
                />
              </div>

              <div className="p-8">
                <h2 className="text-2xl font-semibold text-black">{selected.title}</h2>
                {/* <p className="mt-3 text-zinc-700 leading-relaxed">{selected.short}</p> */}

                {selected.members && (
                  <div className="mt-6">
                    <h3 className="text-lg font-semibold text-black">Membres de la promotion</h3>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selected.members.map((m) => (
                        <div key={m.name} onClick={() => setSelectedMember(m)} className="group cursor-pointer flex items-start gap-4 bg-slate-50 p-4 rounded-md hover:shadow-md transition">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 shadow-sm flex-shrink-0">
                            <Image src={m.photo} alt={m.name} width={64} height={64} className="object-cover w-full h-full" />
                          </div>
                          <div className="flex-1">
                            <div className="font-semibold text-black">{m.name}</div>
                            <div className="text-sm text-[#5a0f19]">{m.role}</div>
                          </div>
                          <div className="flex-shrink-0">
                                      {m.linkedin ? (
                                        <a href={m.linkedin} target="_blank" rel="noopener noreferrer" onClick={(e) => e.stopPropagation()} className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white border border-zinc-200 shadow-sm hover:bg-slate-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2] text-[#0A66C2]">
                                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                                            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2zM9.64 8.98h4.38v2.07h.06c.61-1.15 2.1-2.36 4.33-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24H9.64z" />
                                          </svg>
                                        </a>
                                      ) : null}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              </div>
            </div>
          </div>

          <aside className="col-span-1">
            <div className="sticky top-24 bg-white border border-zinc-100 p-6 rounded-2xl shadow-md">
              <h4 className="text-base font-semibold text-zinc-800">Sommaire des promotions</h4>
              <p className="text-sm text-zinc-500 mt-1">Cliquez pour afficher la fiche</p>

              <nav className="mt-4">
                <ul className="space-y-3">
                  {sortedPromotions.map((p) => (
                    <li key={p.id}>
                      <button
                        onClick={() => setSelectedId(p.id)}
                        className={
                          "w-full text-left px-3 py-2 rounded-md transition-colors flex items-center gap-3 " +
                          (p.id === selectedId
                              ? "bg-[#CDC7BD] ring-1 ring-[#590707]"
                            : "hover:bg-slate-50 focus-visible:ring-2 focus-visible:ring-sky-200")
                        }
                      >
                          <span className="flex-1 font-semibold text-[#590707]">{p.title}</span>
                        <span className="text-sm text-gray-400">›</span>
                      </button>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </aside>
        </div>
      </div>
      {selectedMember && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/50" onClick={() => setSelectedMember(null)} />
          <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full mx-4 p-6 z-10">
            <button onClick={() => setSelectedMember(null)} aria-label="Fermer" className="absolute top-3 right-3 text-zinc-600 hover:text-zinc-900 cursor-pointer">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row gap-6">
              <div className="w-36 h-36 rounded-full overflow-hidden border border-zinc-200 shadow-sm flex-shrink-0 mx-auto md:mx-0">
                <Image src={selectedMember.photo} alt={selectedMember.name} width={144} height={144} className="object-cover w-full h-full" />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
                <div className="text-sm text-[#5a0f19] mb-4">{selectedMember.role}</div>
                <p className="text-zinc-700 leading-relaxed">{selectedMember.bio}</p>
                {selectedMember.linkedin ? (
                  <div className="mt-4">
                    <a
                      href={selectedMember.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`Ouvrir le profil LinkedIn de ${selectedMember.name}`}
                      className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-[#0A66C2]/10 text-[#0A66C2] border border-[#0A66C2]/20 font-medium shadow-sm hover:bg-[#0A66C2]/15 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0A66C2]"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden>
                        <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2zM9.64 8.98h4.38v2.07h.06c.61-1.15 2.1-2.36 4.33-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24H9.64z" />
                      </svg>
                      <span>Voir le profil LinkedIn</span>
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
