"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
// removed `allura` font import to use the site's default typography for page titles

const promotions = [
  {
    id: "p24",
    title: "Promotion 2024-2025",
    // short: "Promotion 2024-2025 — une belle cohorte engagée.",
   
    img: "/photos_actualites/promotions/promo_24_25.jpeg",
  },
  {
    id: "p23",
    title: "Promotion 2023-2024",
    //short: "Promotion 2023-2024 — professionnalisme et rigueur.",
    img: "/photos_actualites/promotions/promo_23_24.jpg",
  },
  {
    id: "p22",
    title: "Promotion 2022-2023",
    //short: "Promotion 2022-2023 — en réseau et curieuse.",
    img: "/photos_actualites/promotions/promo_22_23.jpeg",
  },
  {
    id: "p21",
    title: "Promotion 2021-2022",
    //short: "Promotion 2021-2022 — expérience et mentoring.",
    img: "/photos_actualites/promotions/promo_21_23.jpg",
  },
  {
    id: "p20",
    title: "Promotion 2020-2021",
    //short: "Promotion 2020-2021 — résiliente et ambitieuse.",
    img: "/photos_actualites/promotions/promo_20_21.jpg",
  },

  {
    id: "p25",
    title: "Promotion 2025-2026",
    //short: "Promotion 2025-2026 — l'équipe actuelle, dynamique et engagée.",
    img: "/photos_actualites/promotions/promo_25_26.JPG",
    members: [
      {
        name: "Alice Dupont",
        role: "Présidente",
        desc: "Coordonne l'association et supervise les projets partenaires.",
        photo: "/photos_actualites/promotions_membre/exemple.png",
      },
      {
        name: "Karim Ben",
        role: "Trésorier",
        desc: "Gère le budget et les partenariats financiers.",
        photo: "/photos_actualites/promotions_membre/exemple.png",
      },
      {
        name: "Sophie Martin",
        role: "Responsable communication",
        desc: "S'occupe des réseaux et de la promotion des événements.",
        photo: "/photos_actualites/promotions_membre/exemple.png",
      },
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
                    <p className="text-sm text-zinc-500 mt-1">Rôles et courtes descriptions</p>

                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {selected.members.map((m) => (
                        <div key={m.name} className="flex items-start gap-4 bg-slate-50 p-4 rounded-md">
                          <div className="w-16 h-16 rounded-full overflow-hidden border border-zinc-200 shadow-sm flex-shrink-0">
                            <Image src={m.photo} alt={m.name} width={64} height={64} className="object-cover" />
                          </div>
                          <div>
                            <div className="font-semibold text-black">{m.name}</div>
                            <div className="text-sm text-[#5a0f19]">{m.role}</div>
                            <div className="text-sm text-zinc-600 mt-1">{m.desc}</div>
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
    </main>
  );
}
