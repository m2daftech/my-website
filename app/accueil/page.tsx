import Link from "next/link";
import Image from "next/image";
import { allura } from "../lib/fonts";
import GoogleMapEmbed from "../components/GoogleMapEmbed";
import { FiMail } from "react-icons/fi";
import AnimatedCounters from "../components/AnimatedCounters";
import StatsCharts from "../components/StatsCharts";
import PartnersMarquee from "../components/PartnersMarquee";



export default function Accueil() {
  return (
    <main className="min-h-screen bg-white py-24">
      <div className="mx-auto max-w-screen-xl px-8">
        <div className="text-center mb-20">
          <h1 className={`${allura.className} text-7xl text-[#5a0f19] drop-shadow-sm`}>
            Master 2 — Accueil
          </h1>

          <p className="mt-6 text-lg text-zinc-700 font-light tracking-wide">
            Présentation, mot du directeur, distinctions et chiffres clés du Master.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          <div className="col-span-1 lg:col-span-3">
            <div className="space-y-6">
              <div className="bg-white border border-zinc-100 shadow-md rounded-2xl p-10">
                <div className="flex gap-6 items-start">
                  <div className="w-40 h-40 rounded-full overflow-hidden border border-zinc-200 shadow-sm flex-shrink-0">
                    <Image src="/director.jpg" alt="Photo du directeur" width={160} height={160} className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-black">Mot du directeur</h2>
                    <div className="mt-4 text-zinc-700 leading-relaxed text-lg space-y-4">
                      <p>
                        « C’est un honneur et une responsabilité que d’assurer dorénavant la direction du Master 2
                        Droit des Affaires de l’Université Paris II (Panthéon-Assas) et de s’inscrire ainsi dans la
                        lignée de ses aînés, grands professeurs qui l’ont brillamment dirigé : Paul Didier, Bruno
                        Oppetit, Hervé Synvet. Chacun aura, à sa façon et de sa riche personnalité, marqué cette
                        formation et assuré son éclat et son devenir.
                      </p>

                      <p>
                        Ce Master 2 (autrefois Diplôme d’études approfondies) peut en effet s’enorgueillir d’un riche
                        passé : talentueux professeurs, nombreuses promotions, succès continu de ses diplômés – attesté
                        dans tous les pans de la vie juridique (cabinets d’avocats, entreprises, magistrature,
                        université) et au-delà -, et formation juridique solide mêlant théorie et pratique. L’alliance
                        d’une équipe soudée et motivée d’enseignants et d’étudiants sélectionnés pour leurs qualités
                        permet d’assurer, année après année, la continuité d’un diplôme qui a fait ses preuves.
                      </p>

                      <p>
                        Mieux vaut une tête bien faite qu’une tête bien pleine. Nul doute que ce Master 2 continuera à
                        bien former en droit des affaires, à permettre de bien penser, de relier les connaissances et de
                        développer un sens critique, car tel est son but, plutôt que d’emmagasiner sans réflexion ni recul
                        des solutions hétéroclites. Les lois, la jurisprudence, la pratique, la doctrine changeront, de
                        nouvelles questions apparaîtront mais l’esprit juridique acquis saura évoluer dans l’environnement
                        différent de demain. Les enseignements passés, la formation restera, les méthodes seront acquises,
                        les réflexions fondamentales permettront de maîtriser les difficultés nouvelles. Cette formation ne
                        s’arrête pas à l’année universitaire, elle constitue un tremplin pour la vie.
                      </p>

                      <p>
                        L’Association des étudiants permet aussi par son dynamisme d’enrichir la formation, notamment par
                        les liens tissés avec le monde professionnel et avec les promotions anciennes et à venir, assurant
                        la transmission du flambeau par les étudiants eux‑mêmes et créant ainsi une véritable communauté.
                      </p>

                      <p className="mt-4 font-semibold">— Daniel Cohen</p>
                      <p className="text-sm text-zinc-600">Professeur Agrégé de Droit Privé</p>
                      <p className="text-sm text-zinc-600">Directeur du Master 2 Droit des Affaires Recherche</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-zinc-100 shadow-md rounded-2xl p-10">
                <div className="flex gap-6 items-start">
                  <div className="w-40 h-40 rounded-full overflow-hidden border border-zinc-200 shadow-sm flex-shrink-0">
                    <Image src="/president.jpg" alt="Photo du président" width={160} height={160} className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-2xl font-semibold text-black">Mot du président</h2>
                    <div className="mt-4 text-zinc-700 leading-relaxed text-lg space-y-4">
                      <p>
                        « Reconnue, en France et à l’étranger, pour l’excellence de ses formations juridiques,
                        la qualité de sa recherche, la réussite et l’insertion professionnelle des étudiants,
                        l’Université Panthéon-Assas est un acteur de premier plan dans la structuration et le
                        développement de la filière juridique dans le domaine du droit des affaires.
                      </p>

                      <p>
                        Créé il y a plus de 30 ans, le Master de droit des Affaires est aujourd’hui l’un des diplômes
                        les mieux reconnus par les milieux professionnels et le monde de la recherche juridique. Ouvert
                        aux enjeux économiques et juridiques de demain, le Master forme, chaque année, 25 à 30 jeunes
                        professionnels qui deviennent avocats dans les grands cabinets de la place de Paris ou juristes
                        dans de grandes entreprises ou qui font le choix d’une carrière universitaire. Tout cela est
                        conforme à l’ambition de l’Université : former d’excellents professionnels, immédiatement
                        opérationnels, experts dans leur domaine de compétence, inventifs et rigoureux dans leur approche
                        du droit.
                      </p>

                      <p>
                        La confiance que témoignent, depuis de longues années, les partenaires du Master, les
                        sollicitations dont font preuve les jeunes diplômés chaque année ou le succès qu’ils rencontrent
                        dans les concours de recrutement de l’enseignement supérieur, constituent de puissants
                        encouragements. En conjuguant une forte tradition du savoir et un vrai talent de l’innovation,
                        le Master de droit des Affaires de l’Université Panthéon – Assas offre de réelles et belles
                        perspectives à tous ses diplômés, en particulier à ceux qui choisissent la voie de la recherche.
                        Nous leur souhaitons pleine réussite dans leur cursus. »
                      </p>
                      <p className="mt-4 font-semibold">— Stéphane Braconnier</p>
                      <p className="text-sm text-zinc-600">Président de l’Université Paris‑Panthéon‑Assas</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="bg-white border border-zinc-100 rounded-2xl p-8 shadow-md">
                <h3 className="text-2xl font-semibold text-black mb-4">Nos statistiques</h3>

                <div className="max-w-3xl mx-auto">
                  <AnimatedCounters
                    items={[
                      { label: "Année de création", value: 1973 },
                      { label: "Taux d'admission", value: 4, suffix: "%" },
                    ]}
                  />
                </div>

                <div className="mt-6">
                  <StatsCharts />
                </div>
              </div>
            </div>

            <div className="mt-6">
              <div className="text-center mb-4">
                <h3 className="text-3xl sm:text-4xl font-semibold text-[#5a0f19] mb-2 tracking-wide">Ils nous font confiance</h3>
                <div className="mx-auto w-20 h-1 bg-[#5a0f19] rounded" />
              </div>
              <PartnersMarquee height={72} />
            </div>
          </div>

        
        </div>

        <div className="bg-white border border-zinc-100 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-semibold">Où nous trouver</h3>
          <div className="mt-4">
            <GoogleMapEmbed query={`Université Paris II Panthéon-Assas 12, place Panthéon 75005 Paris`} zoom={16} height={480} />
            <div className="mt-6 flex justify-center">
              <a
                href="mailto:m2daf@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full border border-[#5a0f19] text-[#5a0f19] bg-white transition-transform duration-200 transform hover:-translate-y-0.5 hover:scale-101 hover:shadow-lg hover:bg-gradient-to-r hover:from-[#5a0f19] hover:to-[#7a1a21] hover:text-white focus:outline-none focus:ring-2 focus:ring-[#5a0f19]"
              >
                <FiMail className="text-xl" />
                Contactez-nous
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
