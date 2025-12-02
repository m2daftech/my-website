'use client';

// removed `allura` font import to use the site's default typography for page titles

export default function FormationPage() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-5xl px-6">
        <header className="text-center mb-12">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-[#5a0f19] mb-4">La Formation en Master 2 <br /> Droit des affaires</h1>
        </header>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
        <h2 className="text-2xl font-semibold mb-4">Mot du professeur Daniel Cohen</h2>
        
        <p className="text-zinc-700 leading-relaxed">
          <strong>
            Le Master 2 Droit des affaires (Recherche) forme des juristes capables d’aborder des problématiques complexes du droit des affaires, tant sur le plan national qu’international. 
            Les débouchés sont variés : carrières en cabinets d’avocats spécialisés, services juridiques d’entreprises, institutions financières, postes dans la recherche et l’enseignement. 
            La sélection vise à réunir des étudiants de haut niveau et une forte motivation pour la recherche.
          </strong>
        </p>

        <p className="mt-4 text-zinc-700">
          <strong>
            Mémoire de fin d’études : oui — chaque étudiant rédige un mémoire de recherche en fin de Master 2. 
            Le mémoire a pour but de développer une problématique précise, de mobiliser une méthode de recherche juridique 
            (doctrine, jurisprudence, droit comparé, analyse doctrinale) et d’apporter une contribution argumentée à un domaine du droit des affaires.
          </strong>
        </p>
      </section>


        {/* Nos objectifs section (moved from Accueil) */}
        <section className="mt-6 mb-8">
          <div className="text-center mb-4">
            <h3 className="text-3xl sm:text-4xl font-semibold text-[#5a0f19] mb-2 tracking-wide">Nos objectifs</h3>
            <div className="mx-auto w-20 h-1 bg-[#5a0f19] rounded" />
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6 mt-6">
            <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm text-center flex items-center justify-center min-h-[140px] transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#fff7f7] hover:to-white">
              <p className="font-semibold text-lg text-zinc-800 transition-colors">Former des juristes de haut niveau pour les préparer à leur vie professionnelle</p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm text-center flex items-center justify-center min-h-[140px] transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#fff7f7] hover:to-white">
              <p className="font-semibold text-lg text-zinc-800 transition-colors">Former les candidats désireux de rejoindre l’enseignement supérieur</p>
            </div>

            <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm text-center flex items-center justify-center min-h-[140px] transition-transform transform hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:bg-gradient-to-r hover:from-[#fff7f7] hover:to-white">
              <p className="font-semibold text-lg text-zinc-800 transition-colors">Faire de l’étudiant un ingénieur du droit</p>
            </div>
          </div>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Cours fondamentaux</h3>
          <p className="text-zinc-700">Deux cours magistraux (2 × 25 h) et deux enseignements méthodologiques (EM, 2 × 50 h) obligatoires correspondant à :</p>
          <ul className="list-disc list-inside mt-3 text-zinc-700">
            <li>Activités des entreprises</li>
            <li>Droit des sociétés</li>
          </ul>

          <div className="mt-6">
            <h4 className="text-center text-lg font-semibold mb-6">Les professeurs des enseignements obligatoires</h4>

            <div className="flex flex-col lg:flex-row gap-8 items-start">
              <article className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/4 gap-4">
                <img
                  src="/director.jpg"
                  alt="Monsieur le Professeur Daniel Cohen"
                  className="w-36 h-36 rounded-full object-cover border border-zinc-200 shadow-sm"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/president.jpg'; }}
                />
                <h5 className="text-xl font-semibold">Monsieur le Professeur Daniel Cohen</h5>
                <div className="text-sm text-zinc-500 mb-1">Droit des sociétés</div>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Agrégé des facultés de droit, le Professeur Daniel Cohen enseigne à l’Université Paris‑Panthéon‑Assas
                  le droit des affaires, et plus spécialement le droit des sociétés, le droit du commerce international,
                  l’arbitrage et le droit des contrats appliqué aux affaires. Il est membre du Comité français de droit
                  international privé et du Bureau du Comité français de l’arbitrage. Il dirige également le Master 2
                  Droit des affaires internationales.
                </p>
              </article>

              <article className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/4 gap-4">
                <img
                  src="/professors/DRUMMOND_France.jpg"
                  alt="Madame le Professeur France Drummond"
                  className="w-36 h-36 rounded-full object-cover border border-zinc-200 shadow-sm"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/president.jpg'; }}
                />
                <h5 className="text-xl font-semibold">Madame le Professeur France Drummond</h5>
                <div className="text-sm text-zinc-500 mb-1">Droit des sociétés</div>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Docteur en droit et agrégée des facultés de droit, le Professeur France Drummond enseigne le droit
                  commercial et le droit des marchés financiers à l’Université Paris‑Panthéon‑Assas. Elle a dirigé, pendant
                  de nombreuses années, des formations en droit des affaires et fiscalité et est l’auteure de nombreux
                  ouvrages et publications en droit financier. Elle a présidé la Section 01 (Droit privé et sciences criminelles)
                  du Conseil national des universités et siège au Haut Comité Juridique de Place depuis 2015.
                </p>
              </article>

              <article className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/4 gap-4">
                <img
                  src="/professors/jean_jacques-ansault.jpg"
                  alt="Monsieur le Professeur Jean-Jacques Ansault"
                  className="w-36 h-36 rounded-full object-cover border border-zinc-200 shadow-sm"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/president.jpg'; }}
                />
                <h5 className="text-xl font-semibold">Monsieur le Professeur Jean-Jacques Ansault</h5>
                <div className="text-sm text-zinc-500 mb-1">Activités des entreprises</div>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Normalien, agrégé de droit privé et de sciences criminelles, il est spécialiste de droit des affaires.
                  Au-delà des interactions entre le droit civil et le droit commercial, ses travaux portent principalement
                  sur le droit des sociétés, le droit des sûretés et le droit des entreprises en difficulté qu’il enseigne
                  à l’Université Paris‑Panthéon‑Assas. Il a consacré un ouvrage au droit des procédures civiles d’exécution
                  et participe activement à la vie scientifique (membre du Cercle K2). Il co-dirige également des formations
                  en ingénierie contractuelle et droit civil économique.
                </p>
              </article>

              <article className="flex flex-col items-center text-center lg:text-left lg:items-start lg:w-1/4 gap-4">
                <img
                  src="/professors/ML-Coquelet.jpg"
                  alt="Madame le Professeur Marie-Laure Coquelet"
                  className="w-36 h-36 rounded-full object-cover border border-zinc-200 shadow-sm"
                  onError={(e) => { (e.target as HTMLImageElement).src = '/president.jpg'; }}
                />
                <h5 className="text-xl font-semibold">Madame le Professeur Marie‑Laure Coquelet</h5>
                <div className="text-sm text-zinc-500 mb-1">Activités des entreprises</div>
                <p className="text-zinc-700 leading-relaxed text-sm">
                  Docteur en droit et agrégée, Marie‑Laure Coquelet est l’auteure de nombreux articles en droit des sociétés,
                  droit des entreprises en difficulté et droit financier. Elle a co-dirigé des ouvrages de référence et
                  intervient dans des masters consacrés aux techniques de restructuration des entreprises. Ancienne vice‑chancelière
                  des universités, elle préside aujourd’hui le département de droit privé et de sciences criminelles.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Enseignements optionnels</h3>
          <ul className="list-inside list-disc text-zinc-700 space-y-1">
            <li>Droit des opérations financières : France DRUMMOND</li>
            <li>Droit bancaire, financier et monétaire international : Stéphane TORCK</li>
            <li>Droit européen des affaires : Marie-Hélène MONSÈRIÉ-BON</li>
            <li>Droit fiscal des affaires : Me Anne ROBERT (Cabinet Bredin Prat)</li>
            <li>Droit pénal des affaires : Didier REBUT</li>
            <li>Droit de la concurrence et de la distribution : Emmanuelle CLAUDEL</li>
            <li>Comptabilité de l’entreprise privée : Matthieu DUBERTRET</li>
            <li>Droit des assurances : Laurent LEVENEUR</li>
            <li>Propriété industrielle : Jean-Christophe GALLOUX / Jérôme PASSA</li>
            <li>Droit international privé : Sabine CORNELOUP</li>
            <li>Entreprises et commerce international : Louis D’AVOUT</li>
            <li>Droit des affaires et relations de travail : Julien ICARD</li>
          </ul>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Dimension internationale</h3>
          <p className="text-zinc-700">Les enseignements dispensés au sein du Master s’attachent à présenter une importante dimension internationale et communautaire : de nombreux éléments de droit comparé enrichissent ces enseignements et l’étude des directives communautaires est un aspect majeur de la formation. 
            <br />De nombreux enseignements optionnels sont très largement orientés vers l’international (ex. droit bancaire, financier et monétaire international, entreprises et commerce international).</p>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Langues</h3>
          <p className="text-zinc-700">Langue (facultatif, 37h30) — choix entre :</p>
          <ul className="list-disc list-inside mt-3 text-zinc-700">
            <li>Anglais</li>
            <li>Allemand</li>
            <li>Espagnol</li>
            <li>Italien</li>
            <li>Russe</li>
          </ul>
          <p className="text-zinc-700 mt-3">Chaque année, pas moins de 10% des étudiants proviennent d’universités étrangères, apportant une dimension internationale supplémentaire aux cours.</p>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-8">
          <h3 className="text-xl font-semibold mb-3">Cadre et ressources</h3>
          <p className="text-zinc-700">Au cœur du Quartier Latin, face au Panthéon et à deux pas du Jardin du Luxembourg, l’Université Paris‑Panthéon‑Assas offre un cadre d’études privilégié. Les étudiants du Master ont accès aux bibliothèques spécialisées de la faculté, à un catalogue collectif et à un important réseau de ressources électroniques, ainsi qu’à la Bibliothèque Interuniversitaire Cujas.</p>
        </section>

        <section className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md mb-16">
          <h3 className="text-xl font-semibold mb-3">Candidatures et sélection</h3>
          <p className="text-zinc-700">Le parcours Droit des affaires (Recherche) est ouvert aux titulaires d’une Licence en droit (ou équivalent), privilégiant les candidats ayant suivi des cours de droit des obligations et droit des sociétés. La sélection est exigeante : plus de 1 400 candidatures pour environ 30 places — la sélection est opérée par le professeur Daniel Cohen, qui retient des candidats de haut niveau et très motivés. La maîtrise des langues et les expériences (stages) sont appréciées.</p>
          <p className="text-zinc-700 mt-3">Conditions administratives : l’autorisation d’inscription est accordée par le Président de l’Université, sur proposition du responsable de la formation, après examen du dossier du candidat.</p>
        </section>
      </div>
    </main>
  );
}
