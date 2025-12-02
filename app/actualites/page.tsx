"use client";
import React, { useState } from "react";

function formatDescription(desc: string) {
  // split on empty lines and wrap paragraphs to avoid relying on whitespace-pre-line
  return desc
    .trim()
    .split(/\n\s*\n/)
    .map((p) => `<p>${p.trim()}</p>`)
    .join("");
}

export default function Actualites() {
  const [openImage, setOpenImage] = useState<string | null>(null);

  const events = [
    /* ------------------------------------------------------- */
    /* 1. COUR DE CASSATION */
    /* ------------------------------------------------------- */
    {
      id: 1,
      title: "Audience Cour de cassation",
      date: "25 Novembre 2025",
      description: `
Invités par le professeur <span class="underline text-[#5a0f19] font-semibold">France DRUMMOND</span>, les étudiants du Master 2 Droit des Affaires, ont eu l’occasion d’assister à l’audience de la <span class="underline text-[#5a0f19] font-semibold">Cour de Cassation</span> du 25 novembre 2025, concernant l’opération de scission de la société <span class="underline text-[#5a0f19] font-semibold">Vivendi</span> (ci-après Vivendi). 

Il s’agissait, en l’espèce, de trancher sur les critères permettant d’apprécier le <span class="underline text-[#5a0f19] font-semibold">contrôle de fait</span> du groupe <span class="underline text-[#5a0f19] font-semibold">Bolloré</span> sur Vivendi. 

Durant l’année 2024, Vivendi, société spécialisée dans les médias et la communication, annonce un projet de scission de ses activités. Ce projet a été contesté par la société <span class="underline text-[#5a0f19] font-semibold">CIAM Fund</span>, un actionnaire minoritaire de Vivendi, devant <span class="underline text-[#5a0f19] font-semibold">l’Autorité des marchés financiers</span> (ci-après l’AMF). La société CIAM estimait, qu’une offre publique de retrait visant les titres des actionnaires minoritaires aurait dû être déposée, au sens de <span class="underline text-[#5a0f19] font-semibold">l’article 236-6 du RGAMF</span>, par le groupe Bolloré, qui d’après elle, contrôlait Vivendi. 

L’AMF a considéré que les conditions de contrôle de <span class="underline text-[#5a0f19] font-semibold">l’article L 233-3 du Code de commerce</span> ne sont pas remplies, de sorte que le groupe Bolloré ne peut pas être considéré comme contrôlant la société litigieuse, écartant alors l’application de l’article L 236-6 du RGAMF. 

La société CIAM a alors formé un recours en annulation de cette décision devant la Cour d’appel de Paris. Le <span class="underline text-[#5a0f19] font-semibold">22 avril 2025</span>, la Cour d’appel annule la décision de l’AMF et juge d’un contrôle de fait du groupe Bolloré sur Vivendi par une interprétation extensive de <span class="underline text-[#5a0f19] font-semibold">l’article L 233-3 du Code de commerce</span>. 

Le <span class="underline text-[#5a0f19] font-semibold">28 novembre</span>, la juridiction suprême rend un arrêt de cassation et de renvoi. Elle fait une interprétation stricte de la notion de contrôle de fait pour conclure à l’absence de contrôle du groupe Bolloré au sens de <span class="underline text-[#5a0f19] font-semibold">l’article L 233-3, I, 3 du Code de commerce</span>, cassant ainsi l’arrêt de la Cour d’appel de Paris, qui s’était fondée sur des faisceaux d’indices tels que la notoriété de Monsieur Bolloré ou son parcours, pour conclure que le groupe exerçait un contrôle de fait. Elle renvoie l’affaire devant une autre Cour d’appel afin d’apprécier à nouveau le contrôle de fait.

Une expérience enrichissante, qui s’est achevée autour d’échanges entre <span class="underline text-[#5a0f19] font-semibold">futurs et actuels praticiens du droit</span>. 

Nous remercions la <span class="underline text-[#5a0f19] font-semibold">Cour de cassation</span> pour l’opportunité offerte aux étudiants du master d’assister à cette joute juridique.
      `,
      image: "./photos_actualites/actualites/Audience Cour de Cassation du 25 novembre 2025.jpg",
    },

    /* ------------------------------------------------------- */
    /* 2. BREDIN PRAT */
    /* ------------------------------------------------------- */
    {
      id: 2,
      title: "Bredin Prat",
      date: "7 Novembre 2025",
      description: `
Le vendredi <span class="underline text-[#5a0f19] font-semibold">7 novembre</span>, les étudiants du Master II Droit des Affaires de l’Université Paris-Panthéon-Assas ont eu l’honneur d’être accueillis par le cabinet <span class="underline text-[#5a0f19] font-semibold">Bredin Prat</span>.

Ils ont ainsi pu découvrir deux des pratiques phares du cabinet — la <span class="underline text-[#5a0f19] font-semibold">fiscalité</span> et le <span class="underline text-[#5a0f19] font-semibold">corporate/M&A</span> — présentées par trois associés.

Cette rencontre s’est terminée par une <span class="underline text-[#5a0f19] font-semibold">séance de questions-réponses</span>, permettant aux étudiants d’échanger avec les avocats sur leurs pratiques et expériences professionnelles.

Nous remercions sincèrement le cabinet Bredin Prat pour son accueil chaleureux, ainsi que 
<span class="underline text-[#5a0f19] font-semibold">Me Anne Robert</span>, 
<span class="underline text-[#5a0f19] font-semibold">Me Jean-Baptiste Frantz</span> 
et <span class="underline text-[#5a0f19] font-semibold">Me Adrien Simon</span>.

Le Master II Droit des Affaires se réjouit de retrouver le cabinet au second semestre pour le 
<span class="underline text-[#5a0f19] font-semibold">Cours de fiscalité des affaires</span>.
      `,
      image: "./photos_actualites/actualites/Bredin Prat.jpg",
    },

    /* ------------------------------------------------------- */
    /* 3. REMISE DES DIPLÔMES */
    /* ------------------------------------------------------- */
    {
      id: 3,
      title: "Remise des diplômes",
      date: "27 Octobre 2025",
      description: `
Le lundi <span class="underline text-[#5a0f19] font-semibold">27 octobre</span> s’est tenue la cérémonie de remise des diplômes de la <span class="underline text-[#5a0f19] font-semibold">promotion 2024-2025</span> du Master 2 - Droit des affaires, au <span class="underline text-[#5a0f19] font-semibold">Centre Panthéon</span>.

Après un discours d’ouverture du Professeur <span class="underline text-[#5a0f19] font-semibold">Daniel COHEN</span>, directeur de la formation, chaque étudiant s'est vu remettre son diplôme avec le concours des nouvelles présidentes du Bureau de l’Association du Master.

La cérémonie s’est poursuivie par un moment d’échanges conviviaux entre les diplômés, leurs parents et le Directeur.

Les nouveaux diplômés tiennent à remercier très sincèrement leur directeur de Master, le Professeur <span class="underline text-[#5a0f19] font-semibold">Daniel COHEN</span>, ainsi que les Professeurs <span class="underline text-[#5a0f19] font-semibold">Marie-Laure COQUELET</span>, 
<span class="underline text-[#5a0f19] font-semibold">France DRUMMOND</span> 
et <span class="underline text-[#5a0f19] font-semibold">Jean-Jacques ANSAULT</span>, pour la qualité de leurs enseignements et leur accompagnement tout au long de l'année passée.
      `,
      image: "./photos_actualites/actualites/Remise des diplomes 2024-2025.jpg",
    },

    /* ------------------------------------------------------- */
    /* 4. WHITE & CASE */
    /* ------------------------------------------------------- */
    {
      id: 4,
      title: "White and Case",
      date: "7 Octobre 2025",
      description: `
Le mardi <span class="underline text-[#5a0f19] font-semibold">7 octobre</span>, les étudiants du Master II Droit des Affaires de l'Université Paris-Panthéon-Assas ont eu l’honneur d'être accueillis par le cabinet <span class="underline text-[#5a0f19] font-semibold">White & Case Paris</span>.

À cette occasion, ils ont pu découvrir les différentes pratiques du cabinet : 
<span class="underline text-[#5a0f19] font-semibold">private equity</span>, 
<span class="underline text-[#5a0f19] font-semibold">marché de capitaux</span>, 
<span class="underline text-[#5a0f19] font-semibold">fusions-acquisitions</span>, 
<span class="underline text-[#5a0f19] font-semibold">contentieux commercial</span> 
et <span class="underline text-[#5a0f19] font-semibold">restructuring</span>, présentées par les associés et collaborateurs du cabinet. 

Une rencontre qui s’est achevée sur une touche de convivialité par des échanges informels entre les étudiants et les membres du cabinet.

Nous remercions sincèrement le cabinet pour son accueil chaleureux, ainsi que 
<span class="underline text-[#5a0f19] font-semibold">Me Pierre Romatet</span>, 
<span class="underline text-[#5a0f19] font-semibold">Me Edouard Le Breton</span>, 
<span class="underline text-[#5a0f19] font-semibold">Me Romain Bruno</span>, 
<span class="underline text-[#5a0f19] font-semibold">Me Gaétan de La Raudière</span> 
et <span class="underline text-[#5a0f19] font-semibold">Me Louis Gibon</span> pour leur disponibilité et leurs conseils.

Nous remercions également 
<span class="underline text-[#5a0f19] font-semibold">Me Jean-François Le Corre</span> 
et <span class="underline text-[#5a0f19] font-semibold">M. Yanis Robin</span> pour l’organisation de cette rencontre.
      `,
      image: "./photos_actualites/actualites/White and case.jpg",
    },
  ];

  return (
    <main className="min-h-screen bg-[#ffffff] py-24">
      <div className="mx-auto max-w-7xl px-8">

        {/* TITRE */}
        <div className="text-center mb-20">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">
            Actualités du Master
          </h1>
          <p className="mt-6 text-lg text-zinc-700 font-light tracking-wide">
            Suivez les temps forts, événements et moments marquants du Master 2 Droit des affaires.
          </p>
        </div>

        {/* TIMELINE */}
        <div className="relative sm:border-l border-zinc-200">
          <div className="hidden sm:block absolute left-0 top-0 bottom-0 w-[3px] bg-[#5a0f19] opacity-60 animate-pulse"></div>

          {events.map((event) => (
            <div key={event.id} className="relative pl-4 sm:pl-12 mb-12 sm:mb-20">

              {/* Pastille */}
              <div className="absolute left-4 sm:-left-[10px] top-2 w-5 h-5 bg-white border-[3px] border-[#5a0f19] rounded-full shadow-sm"></div>

              {/* Card */}
              <div className="bg-white border border-zinc-100 shadow-md hover:shadow-xl transition-all duration-300 rounded-2xl p-6 sm:p-12 flex flex-col sm:flex-row gap-6 sm:gap-10 items-start">

                {/* Image */}
                <div
                  className="w-full sm:w-72 h-48 sm:h-48 flex-shrink-0 rounded-xl overflow-hidden border border-zinc-200 shadow-sm hover:scale-105 transform transition-all duration-300 cursor-pointer"
                  onClick={() => setOpenImage(event.image)}
                >
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
                </div>

                {/* Texte */}
                <div className="flex-1">
                  <div className="inline-block bg-[#5a0f19] text-white text-xs font-semibold px-4 py-1 rounded-full shadow-sm mb-3 sm:mb-0 text-center sm:text-left">
                    {event.date}
                  </div>

                  <h2 className="mt-3 sm:mt-5 text-2xl sm:text-3xl font-semibold text-black text-center sm:text-left">{event.title}</h2>

                  <div
                    className="mt-4 text-zinc-700 leading-relaxed text-base sm:text-lg"
                    dangerouslySetInnerHTML={{ __html: formatDescription(event.description) }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* POPUP IMAGE */}
      {openImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="absolute inset-0 bg-black/60" onClick={() => setOpenImage(null)}></div>

          <div className="relative z-10 max-w-4xl max-h-[90vh] p-4">
            <button
              aria-label="Fermer"
              className="absolute -top-2 -right-2 text-white text-3xl bg-black/30 rounded-full w-10 h-10 flex items-center justify-center"
              onClick={() => setOpenImage(null)}
            >
              ×
            </button>

            <div className="rounded-lg overflow-hidden bg-white">
              <img src={openImage} alt="Agrandie" className="w-full h-auto object-contain max-h-[80vh]" />
            </div>

          </div>
        </div>
      )}
    </main>
  );
}
