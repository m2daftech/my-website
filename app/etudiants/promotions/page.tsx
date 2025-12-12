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
      { name: "Gabrielle Andrea", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/gabrielleandrea.jpg", linkedin: "https://www.linkedin.com/in/gabrielle-andrea-a3b42a1a5/", bio: "" },
      { name: "Héloise Anselin", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/heloiseanselin.jpg", linkedin: "https://www.linkedin.com/in/héloïse-anselin-85a848226/", bio: "" },
      { name: "Juliette Caniard", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/juliettecaniard.jpg", linkedin: "https://www.linkedin.com/in/juliette-caniard-38588122b/", bio: "" },
      { name: "Eloise Dugdale", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/eloisedugdale.jpg", linkedin: "https://www.linkedin.com/in/eloise-dugdale/", bio: "" },
      { name: "Adel Ferrad", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/adelferrad.jpg", linkedin: "https://www.linkedin.com/in/adel-ferrad-1a7695281/", bio: "" },
      { name: "Gaspard Fribourg", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/gaspardfribourg.jpg", linkedin: "https://www.linkedin.com/in/gaspard-fribourg-5763641ba/", bio: "" },
      { name: "Elias Kamouche", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/eliaskamouche.jpg", linkedin: "https://www.linkedin.com/in/elias-alexandre-kamouche/", bio: "" },
      { name: "Marius Michaux", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/mariusmichaux.jpg", linkedin: "https://www.linkedin.com/in/marius-michaux-045a311a8/", bio: "" },
      { name: "Arthur Neau", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/arthurneau.jpg", linkedin: "https://www.linkedin.com/in/arthur-neau-869b98274/", bio: "" },
      { name: "Camille Rousseau", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/camillerousseau.jpg", linkedin: "https://www.linkedin.com/in/camille-rousseau-a68542287/", bio: "" },
      { name: "Alice Terra", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/aliceterra.jpg", linkedin: "https://www.linkedin.com/in/alice-terra-b43030237/", bio: "" },
      { name: "Constance Bisognin", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/constancebisognin.jpg", linkedin: "https://www.linkedin.com/in/constance-bisognin-218367243/", bio: "" },
      { name: "Emma Collomb-Rocher", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/emmacollombrocher.jpg", linkedin: "https://www.linkedin.com/in/emma-collomb-rocher-754237239/", bio: "" },
      { name: "Amine El-Harouchi", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/amineelharouchi.jpg", linkedin: "https://www.linkedin.com/in/amine-el-harouchi-5b7539213/", bio: "" },
      { name: "Sasha Fleury-Fridlander", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/sashafleuryfridlander.jpg", linkedin: "https://www.linkedin.com/in/sasha-fleury-fridlander-897a68220/", bio: "" },
      { name: "Selma Jdiaoui", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/selmajdiaoui.jpg", linkedin: "https://www.linkedin.com/in/selma-jdiaoui-23254a287/", bio: "" },
      { name: "Rémi Leroy", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/remileroy.jpg", linkedin: "https://www.linkedin.com/in/rémi-leroy-44b362193/", bio: "" },
      { name: "Martin Namiech", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/martinnamiech.jpg", linkedin: "https://www.linkedin.com/in/martin-namiech-921ab42b1/", bio: "" },
      { name: "Alix Peenaert", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/alixpeenaert.jpg", linkedin: "https://www.linkedin.com/in/alix-peenaert-94010937a/", bio: "" },
      { name: "Selma Taarji", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/selmataarji.jpg", linkedin: "https://www.linkedin.com/in/selma-taarji-32412b21a/", bio: "" },
      { name: "Iman Vandenbon", role: "Membre", photo: "/photos_actualites/promotions_membre/p24/imanvandenbon.jpg", linkedin: "https://www.linkedin.com/in/iman-vandenbon-a1aa951b6/", bio: "" },
    ],
  },
  {
    id: "p25",
    title: "Promotion 2025-2026",
    img: "/photos_actualites/promotions/promo_25_26.JPG",
    members: [
      { name: "Savana Abbal", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_3.png", linkedin: "https://www.linkedin.com/in/savana-abbal-211587335/", bio: "" },
      { name: "Gabriel Alvarez", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/gabrielalvarez.jpg", linkedin: "https://www.linkedin.com/in/gabriel-alvarez-229250230/", bio: "" },
      { name: "Inès Bader", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/inesbader.jpg", linkedin: "https://www.linkedin.com/in/in%C3%A8s-b-92a253247/", bio: "" },
      { name: "Emmanuel Bangoura", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/emmanuelbangoura.jpg", linkedin: "https://www.linkedin.com/in/emmanuel-bangoura/", bio: "" },
      { name: "Maud Cohen", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_2_1.png", linkedin: "https://www.linkedin.com/in/maud-cohen-90a718221/", bio: "" },
      { name: "Océane Dahan", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/oceanedahan.jpg", linkedin: "https://www.linkedin.com/in/oc%C3%A9ane-dahan-86b006268/", bio: "" },
      { name: "Mathilde Damas", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_4.png", linkedin: "https://www.linkedin.com/in/mathilde-daumas-26916627b/", bio: "" },
      { name: "Camille Delcourt", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/camilledelcourt.jpg", linkedin: "https://www.linkedin.com/in/camille-delcourt-3341bb2b4/", bio: "" },
      { name: "Julie Dequatre", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/juliedequatre.jpg", linkedin: "https://www.linkedin.com/in/julie-dequatre-161697214/", bio: "" },
      { name: "Philippine Gauthier", role: "Membre", photo: "/photos_actualites/promotions_membre/philippinegauthier.jpg", linkedin: "https://www.linkedin.com/in/philippine-gauthier-5b464a23b/", bio: "" },
      { name: "Hélène Guérin", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/heleneguerin.jpg", linkedin: "https://www.linkedin.com/in/h%C3%A9l%C3%A8ne-gu%C3%A9rin-90535b2b2/", bio: "" },
      { name: "Nina Judkiewicz", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/ninajudkiewicz.jpg", linkedin: "https://www.linkedin.com/in/nina-judkiewicz-9b85b72ab/", bio: "" },
      { name: "Cécile Junca", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/cecilejunca.jpg", linkedin: "https://www.linkedin.com/in/c%C3%A9cile-junca-quintero/", bio: "" },
      { name: "Noémie Lombardy", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/noemielombardy.jpg", linkedin: "https://www.linkedin.com/in/no%C3%A9mie-l-138003271/", bio: "" },
      { name: "Julie Marquier", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/juliemarquier.jpg", linkedin: "https://www.linkedin.com/in/julie-marquier-1ab9b4107/", bio: "" },
      { name: "Ludivine Mathieu", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/ludivinemathieu.jpg", linkedin: "https://www.linkedin.com/in/ludivine-mathieu-56a228302/", bio: "" },
      { name: "Diane Mazloum", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/dianemazloum.jpg", linkedin: "https://www.linkedin.com/in/diane-mazloum/", bio: "" },
      { name: "Paola Piendjio", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_6.png", linkedin: "https://www.linkedin.com/in/paola-piendjio-11636b1b4/", bio: "" },
      { name: "Selma Roudi", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/selmaroudi.jpg", linkedin: "https://www.linkedin.com/in/selma-roudi-6908a61bb/", bio: "" },
      { name: "Youssef Sayarh", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_7.png", linkedin: "https://www.linkedin.com/in/youssef-sayarh-610652241/", bio: "" },
      { name: "Victor Schneider", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_5_2.png", linkedin: "https://www.linkedin.com/in/victor-schneider-5985a026a/", bio: "" },
      { name: "Yasmine Sebou", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/image_1.png", linkedin: "https://www.linkedin.com/in/yasmine-sebou-977b36264/", bio: "" },
      { name: "Marie Sie", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/mariesie.jpg", linkedin: "https://www.linkedin.com/in/marie-si%C3%A9-159a50226/", bio: "" },
      { name: "Anne-Sophie Wisser", role: "Membre", photo: "/photos_actualites/promotions_membre/p25/annesophiewisser.jpg", linkedin: "https://www.linkedin.com/in/anne-sophie-wisser-775101301/", bio: "" },
    ],
  },
  {
    id: "p23",
    title: "Promotion 2023-2024",
    //short: "Promotion 2023-2024 — professionnalisme et rigueur.",
    img: "/photos_actualites/promotions/promo_23_24.jpg",
    members: [
      { name: "Capucine Laurent", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/capucinelaurent.jpg", linkedin: "https://www.linkedin.com/in/capucine-laurent-a67b62202/", bio: "" },
      { name: "Amelie Dutruel", role: "Membre", photo: "/logo.png", linkedin: "https://www.linkedin.com/in/am%C3%A9lie-dutruel-9b8b5b264/", bio: "" },
      { name: "Lucas Archambeau", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/lucasarchambeau.jpg", linkedin: "https://www.linkedin.com/in/lucas-a-051aa022b/", bio: "" },
      { name: "Pauline Lesdos", role: "Membre", photo: "/photos_actualites/promotions_membre/paulinelesdos.jpg", linkedin: "https://www.linkedin.com/in/pauline-lesdos-9909b51a0/", bio: "" },
      { name: "Louna Laissac", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/lounalaissac.jpg", linkedin: "https://www.linkedin.com/in/louna-laissac-3834621b4/", bio: "" },
      { name: "Hakim Naciri", role: "Membre", photo: "/logo.png", linkedin: "https://www.linkedin.com/in/hakim-naciri-549a23252/", bio: "" },
      { name: "Tom Guerin", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/tomguerin.jpg", linkedin: "https://www.linkedin.com/in/tomguerin/", bio: "" },
      { name: "Agathe Holly", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/agatheholly.jpg", linkedin: "https://www.linkedin.com/in/agathe-holly-aa20472a4/", bio: "" },
      { name: "Delphine Giraudin", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/delphinegiraudin.jpg", linkedin: "https://www.linkedin.com/in/delphine-giraudin-899368220/", bio: "" },
      { name: "Thibaud Pont-Nourat", role: "Membre", photo: "/logo.png", linkedin: "https://www.linkedin.com/in/thibaud-pont-nourat-362b31235/", bio: "" },
      { name: "Marie Brifflot", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/mariebrifflot.jpg", linkedin: "https://www.linkedin.com/in/marie-brifflot-5911271bb/", bio: "" },
      { name: "Marine de Riberolles", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/marineriberolles.jpg", linkedin: "https://www.linkedin.com/in/marine-de-riberolles-04974a216/", bio: "" },
      { name: "Marine Coulibaly", role: "Membre", photo: "/photos_actualites/promotions_membre/p23/marinecoulibaly.jpg", linkedin: "https://www.linkedin.com/in/marine-coulibaly-9927b2205/", bio: "" },
      { name: "Cédric Aland", role: "Membre", photo: "/logo.png", linkedin: "https://www.linkedin.com/in/c%C3%A9dric-aland-70975a180/", bio: "" },
      { name: "Clarisse Castet", role: "Membre", photo: "/logo.png", linkedin: "https://www.linkedin.com/in/clarisse-castet-2853aa2ba/", bio: "Mémoire de recherche : « Les protections accordées à l’entrepreneur individuel sont-elles excessives ? »" }
    ],
  },
  {
    id: "p22",
    title: "Promotion 2022-2023",
    //short: "Promotion 2022-2023 — en réseau et curieuse.",
    img: "/photos_actualites/promotions/promo_22_23.jpeg",
    members: [
      { name: "Yazid Azrine", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Yazid-scaled.jpeg", linkedin: "https://www.linkedin.com/in/yazid-azrine-742113208/", bio: "Mémoire : « Pactes et statuts dans la SAS » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 5%' },
      { name: "Hortense Bonnet", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/hortense.jpg", linkedin: "https://www.linkedin.com/in/hortense-bonnet-33bb05211/", bio: "Mémoire : « La clause de bad leaver » sous la direction de Monsieur le Professeur Daniel Cohen" },
      { name: "Jean‑François Bourgade", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Jean-Francois.jpeg", linkedin: "https://www.linkedin.com/in/jean-fran%C3%A7ois-bourgade-22a823119/", bio: "Mémoire : « L’entrepreneur individuel surendetté » sous la direction de Madame le Professeur Marie-Laure Coquelet", photoPosition: '50% 5%' },
      { name: "Colomba Calzarelli", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/colomba.jpg", linkedin: "https://www.linkedin.com/in/colomba-calzarelli-409780255/", bio: "Mémoire : « La saisie de droits sociaux par le créancier social » sous la direction de Monsieur le Professeur Jean-Jacques Ansault", photoPosition: '50% 55%' },
      { name: "Antoine Clin‑Deffarges", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/antoine-clin.jpg", linkedin: "https://www.linkedin.com/in/antoine-clin/", bio: "Mémoire : « Les évolutions de la responsabilité pénale de la personne morale au regard de la jurisprudence récente » sous la direction de Madame le Professeur Marie-Laure Coquelet" },
      { name: "Emma Cugini", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Emma-scaled.jpg", linkedin: "https://www.linkedin.com/in/emma-cugini-ba96b4234/", bio: "Mémoire : « L’activité de lobbying au regard du droit pénal » sous la direction de Monsieur le Professeur Didier Rebut", photoPosition: '50% 5%' },
      { name: "Candice Da Cruz Gomes", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/candice.jpg", linkedin: "https://www.linkedin.com/in/candice-da-cruz-gomes-52944719b/", bio: "Mémoire : « L’obligation de coopération en matière d’enquête de concurrence » sous la direction de Madame le Professeur Emmanuelle Claudel", photoPosition: '50% 85%' },
      { name: "Maëva Da Silva", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Maeva.jpg", linkedin: "https://www.linkedin.com/in/ma%C3%ABva-da-silva-22a043189/", bio: "Mémoire : « Le principe du libre jeu des offres et des surenchères en droit des marchés financiers » sous la direction de Madame le Professeur France Drummond" },
      { name: "Océane Demajean", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Oceane-scaled.jpeg", linkedin: "https://www.linkedin.com/in/oc%C3%A9ane-demajean-5550791b9/", bio: "Mémoire : « Les présomptions de recel » sous la direction de Monsieur le Professeur Philippe Conte" },
      { name: "Thibault Émé", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Thibault-scaled.jpeg", linkedin: "https://www.linkedin.com/in/thibault-%C3%A9m%C3%A9-765b1b255/", bio: "Mémoire : « La clause de réserve de propriété en droit des procédures collectives » sous la direction de Monsieur le Professeur Jean-Jacques Ansault" },
      { name: "Agathe Evesque", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/agathe.jpg", linkedin: "https://www.linkedin.com/in/agathe-evesque-97568314b/", bio: "Mémoire : « La consécration d’un devoir européen de vigilance des sociétés mères » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 5%' },
      { name: "Anne‑Sophie Faivre", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/anne-sophie.jpg", linkedin: "https://www.linkedin.com/in/anne-sophie-faivre-a35336207/", bio: "Mémoire : « Les SPAC, une invention bienvenue ? » sous la direction de Monsieur le Professeur Daniel Cohen", photoPosition: '50% 5%' },
      { name: "Timothée Guitteaud", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/timothee.jpg", linkedin: "https://www.linkedin.com/in/timoth%C3%A9e-guitteaud-330261167/", bio: "Mémoire : « Les causes de nullité des décisions sociales » sous la direction de Monsieur le Professeur Jean-Jacques Ansault" },
      { name: "Marie Halimi", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/marie-halimi.jpg", linkedin: "https://www.linkedin.com/in/marie-halimi-07200417a/", bio: "Mémoire : « La rémunération des dirigeants sociaux de SAS et SARL » sous la direction de Madame le Professeur France Drummond" },
      { name: "Julia Koeffer", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/julia.jpg", linkedin: "", bio: "Mémoire : « La place des droits fondamentaux en droit des sociétés » sous la direction de Monsieur le Professeur Jean-Jacques Ansault", photoPosition: '50% 95%' },
      { name: "Jenna Ktorza", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Jenna.jpeg", linkedin: "https://www.linkedin.com/in/jenna-ktorza-74b328232/", bio: "Mémoire : « La digitalisation du droit des sociétés » sous la direction de Madame le professeur Marie-Laure Coquelet" },
      { name: "Neil Lalami", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/neil.jpg", linkedin: "https://www.linkedin.com/in/neil-lalami-986495194/", bio: "Mémoire : « Actions de préférence et SAS » sous la direction de Madame le Professeur France Drummond" },
      { name: "Alexandre Letranchant", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/alexandre-letranchant.jpg", linkedin: "https://www.linkedin.com/in/alexandre-letranchant-458487183/", bio: "Mémoire : « L’adaptation du droit des sociétés aux titres financiers tokenisés » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 5%' },
      { name: "Sébastien Martin", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Photo-MARTIN-Sebastien.jpg", linkedin: "https://www.linkedin.com/in/s%C3%A9bastien-martin-2a3097194/", bio: "Mémoire : « Le contentieux de l’esport » sous la direction de Madame le Professeur Marie-Laure Coquelet", photoPosition: '50% 65%' },
      { name: "Aliénor Nin", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Alienor-2.png", linkedin: "https://www.linkedin.com/in/ali%C3%A9nor-nin/", bio: "Mémoire : « La conservation des crypto-actifs » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 85%' },
      { name: "Hadi Noureddine", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/hadi.jpg", linkedin: "https://www.linkedin.com/in/hadi-noureddine/", bio: "Mémoire : « L’adaptation du droit des sociétés à l’émission des titres en blockchain » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 5%' },
      { name: "Pierre Pauwels", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/Pierre-scaled.jpeg", linkedin: "https://www.linkedin.com/in/pierre-pauwels-8b616a1a1/", bio: "Mémoire : « L’adaptation du droit des instruments financiers aux titres numériques » sous la direction de Madame le Professeur France Drummond", photoPosition: '50% 15%' },
      { name: "Antony Rodrigues", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/antony.jpg", linkedin: "https://www.linkedin.com/in/antony-rodrigues-533318250/", bio: "Mémoire : « Le règlement intérieur de société » sous la direction de Monsieur le Professeur Daniel Cohen" },
      { name: "Cheickna Hamala Tounkara", role: "Membre", photo: "/photos_actualites/promotions_membre/p22/cheickna.jpg", linkedin: "https://www.linkedin.com/in/cheickna-hamala-tounkara-501455232/", bio: "Mémoire : « Les dangers de la réforme de statut de l’entrepreneur individuel sur le fractionnement du droit de gage des créanciers » sous la direction de Monsieur le Professeur Jean-Jacques Ansault", photoPosition: '50% 5%' },
    ],
  },
  {
    id: "p21",
    title: "Promotion 2021-2022",
    //short: "Promotion 2021-2022 — expérience et mentoring.",
    img: "/photos_actualites/promotions/promo_21_23.jpg",
    members: [
      { name: "Narindo Chiv", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Narindo-CHIV-Président-scaled.jpg", linkedin: "https://www.linkedin.com/in/narindo-chiv-5300a114a/", bio: "•\tMémoire : “Les classes de créanciers” sous la direction de Monsieur le Professeur Jean-Jacques Ansault\n•\tDiplôme universitaire : Droit des entreprises en difficulté – sous la direction de Monsieur le Professeur François-Xavier Lucas\n•\tMaster 1 Droit des affaires – Paris II Panthéon-Assas\n•\tLicence en droit privé – Paris II Panthéon-Assas\n•\tDiplôme du collège de droit, économie-gestion – Paris II Panthéon-Assas" },
      { name: "Claire Ramadan", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Claire-RAMADAN-Vice-Présidente.jpeg", linkedin: "https://www.linkedin.com/in/claire-ramadan/", bio: "•  Mémoire : « Violation de l’intérêt social comme cause de nullité : entre passé et avenir ? » sous la direction de Madame la Professeure Marie-Laure Coquelet.\n•  Admission au Barreau de Beyrouth.\n•  Master 1 Droit privé général, Université Saint-Joseph de Beyrouth.\n•  Licence en Droit privé – Université Saint-Joseph de Beyrouth" },
      { name: "Christophe Hennico", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Christophe-HENNICO-Trésorier-scaled.jpg", linkedin: "https://www.linkedin.com/in/christophe-hennico-89a633226/", bio: "•\tMémoire : « Les SPAC, une alternative à l’introduction en bourse classique ? » sous la direction de Madame le Professeur Marie-Laure Coquelet\n•\tMaster 1 Droit des affaires – Université Paris I Panthéon-Sorbonne\n•\tDouble Licence Droit-Economie – Université Paris I Panthéon-Sorbonne" },
      { name: "Celia De Egea Menéndez", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Celia-De-Egea-Menendez-Secrétaire-générale-scaled.jpg", linkedin: "https://www.linkedin.com/in/celia-de-egea-menendez/", bio: "•  Mémoire : « Les abus de position dominante dans les marchés connexes », sous la direction de Madame le Professeur Emmanuelle Claudel.\n•  Master 1 Droit des affaires – Université Paris X Nanterre La Défense (mention assez bien)\n•  Cursus intégré en droit franco-espagnol – Université Comillas ICADE et Université Paris X Nanterre La Défense." },
      { name: "Ambroise Hellot", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Ambroise-HELLOT-Responsable-Pôle-Communication-scaled.jpg", linkedin: "https://www.linkedin.com/in/ambroise-hellot-877362208/", bio: "•  Mémoire : « Fonds d’investissement et transformation RSE des sociétés » sous la direction de Madame le Professeur France Drummond\n•  Master 1 Droit international des affaires – Université Paris I Panthéon-Sorbonne\n•  Classe préparatoire D1 – Lycée Notre Dame Sainte‑Croix de Neuilly\n•  Licence de droit – Université Paris X Nanterre" },
      { name: "Marion Hannelaïs", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Marion-HANNELAIS-Membre-Pôle-Communication-scaled.jpg", linkedin: "https://www.linkedin.com/in/marion-hannelais/", bio: "•  Mémoire : « L’avocat et la LCB-FT », sous la direction de Monsieur le Professeur Philippe Conte.\n•  Master 2 Droit pénal financier, Université Cergy Paris – Mention bien\n•  Master 1 Droit des affaires, Université Paris Nanterre – Mention bien\n•  Licence de Droit, Université Paris Nanterre – Mention assez bien" },
      { name: "Roger Welter", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Roger-WELTER-Membre-Pôle-Communication-scaled.jpg", linkedin: "https://www.linkedin.com/in/roger-welter-69a4ba1b7/", bio: "•  Mémoire : « La notion de durabilité des sociétés », sous la direction de Madame le Professeur France Drummond\n•  Master 1 Droit des affaires – Université Paris II Panthéon-Assas (mention assez bien)\n•  Certificat de droit bancaire et financier, sous la direction de Monsieur le Professeur Thierry Bonneau\n•  Licence de droit privé – Université Paris II Panthéon-Assas (mention bien)\n•  Licence d’histoire – Université Paris I Panthéon-Sorbonne (mention bien)" },
      { name: "Laura David", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/laura-david.jpg", linkedin: "https://www.linkedin.com/in/laura-david-b943521b4/", bio: "•  Mémoire : « La lutte contre les cartels », sous la direction de Madame la Professeure Emmanuelle Claudel\n•  Master 1 Droit privé général, Université Paris-Saclay – Mention bien\n•  Licence en Droit privé, Université de Nîmes – Mention bien" },
      { name: "Sarah Limame", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Sarah-Limame-Responsble-Pôle-Partenariats-scaled.jpg", linkedin: "https://www.linkedin.com/in/sarah-l-586077201/", bio: "•  Mémoire : « Les fonds activistes et l’auto-initiation », sous la direction de Madame le Professeur France Drummond.\n•  Master 1 Droit des affaires – Université Paris X (mention bien)\n•  Licence de droit privé – Université Sophia Antipolis (mention bien)" },
      { name: "Constance Lesdos", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Constance-LESDOS-Membre-Pôle-Partenariats-scaled.jpg", linkedin: "https://www.linkedin.com/in/constance-lesdos-7380221a4/", bio: "•  Mémoire en droit comparé droit suisse-droit français : « Le transfert du siège social à l’étranger » sous la direction de Madame la Professeure Marie-Laure Coquelet\n•  Licence en droit privé à l’Université Paris II Panthéon-Assas (Double-diplôme)\n•  Bachelor of Law à l’Université de Fribourg avec mention en droit européen (Suisse) (Double-diplôme)\n•  Master 1 Droit des affaires à l’Université Paris II Panthéon-Assas" },
      { name: "Julie Lavaure", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Julie-LAVAURE-Membre-Pôle-Partenariats-scaled.jpg", linkedin: "https://www.linkedin.com/in/julie-lavaure-77a8a6223/", bio: "•  Mémoire : « Le détenteur de capital et l’insolvabilité », sous la direction de madame la Professeure Marie-Hélène Monsèrié-Bon\n•  Master 1 Droit des affaires – Université Paris II Panthéon-Assas\n•  Licence de droit privé – Université Paris II Panthéon-Assas" },
      { name: "Marie Albietz", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Marie-ALBIETZ-Responsable-Pôle-Évènementiel-scaled.jpg", linkedin: "https://www.linkedin.com/in/marie-albietz-23b593223/", bio: "•  Mémoire : « La responsabilité pénale de la personne morale ou la mise à l’épreuve des principes du droit pénal », sous la direction de Madame la Professeure Marie-Laure Coquelet.\n•  Master 1 Droit des affaires, université Paris II\n•  Licence en Droit Privé, université Paris II (Double-diplôme)\n•  Bachelor en Droit, Université de Fribourg – Suisse (Double-diplôme)" },
      { name: "Myriam Berrada", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Myriam-BERRADA-Membre-Pôle-Évènementiel-scaled.jpg", linkedin: "https://www.linkedin.com/in/myriam-berrada-1a3971124/", bio: "•  Mémoire : « la réponse des multinationales françaises tirée de la commission des crimes internationaux et du terrorisme », sous la direction de Monsieur le Professeur Didier Rebut.\n•  Université Panthéon Assas – Master 1 Droit comparé\n•  Essec Business School – Bachelor business administration" },
      { name: "Théo Leguebe", role: "Membre", photo: "/photos_actualites/promotions_membre/p21/Théo-LEGUEBE-Membre-Pôle-Évènementiel-scaled.jpg", linkedin: "https://www.linkedin.com/in/th%C3%A9o-leguebe-b43a28179/", bio: "•  Mémoire : « Les NFT ou Non-fungible token » sous la direction de Madame la Professeure France Drummond.\n•  Master 2 Analyse et Pratique du droit des affaires – Paris Nanterre (mention Bien – major)\n•  Master 1 Droit des affaires – Paris Nanterre (mention Très bien)\n•  Licence de droit – Paris Nanterre (mention Assez bien)" },
      
    ],
  },
  {
    id: "p20",
    title: "Promotion 2020-2021",
    //short: "Promotion 2020-2021 — résiliente et ambitieuse.",
    img: "/photos_actualites/promotions/promo_20_21.jpg",
    members: [
      { name: "Audrey Bardet", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Audrey-BARDET-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/audrey-bardet-a485a090", bio: "•\tMémoire : « Le devoir de vigilance des sociétés mères et entreprises donneuses d’ordres » sous la direction du Professeur Daniel Cohen •\tMsc Law, Finance, and Accounting, London School of Economics and Political Science •\tMaster 1 Droit international, Université Paris 1 Panthéon-Sorbonne"},
      { name: "Juliana-Camila Barrera-Pedraza", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Juliana-Camila-BARRERA-PEDRAZA-2020-2021-scaled-1.jpg", linkedin: "https://co.linkedin.com/in/juliana-camila-barrera-pedraza-070265159/", bio: "•\tMémoire : “L’intérêt social comme condition de validité des engagements sociaux: une exigence à promouvoir?” sous la direction du Professeur Marie-Laure Coquelet •\tAvocate au Barreau Colombien •\tMaster 1 Droit Privé, Double-Diplôme l’université Externado de Colombie et Université Paris II Panthéon-Assas •\tDiplôme en Droit et Sciences Juridiques – Université Externado de Colombie" },
      { name: "Diane Baudin", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Diane-BAUDIN-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/diane-baudin-le-voyer-ba2333144/", bio: "•\tMémoire : « Les clauses material adverse change« , sous la direction du Professeur Philippe Théry •\tMaster 1 Droit des Affaires Parcours Juriste d’Affaires Franco-Britannique, Université de Rennes 1 (mention Très Bien) •\tLLM in Commercial Law, University of Exeter (With Merit) •\tDiplôme d’Université Magistère Juriste d’Affaire Franco-Britannique, Université Rennes 1 •\tLicence en Droit, Université Rennes 1 (Mention Assez Bien)" },
      { name: "Alina Bologan", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Alina-BOLOGAN-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/alina-bologan-19b1511bb/", bio: "•\tMémoire : « Les atouts de la création d’une société européenne à la suite d’une fusion transfrontalière », sous la direction du Professeur Marie-Hélène Monsièrié-Bon •\tDiplôme Supérieur d’université Droit des Affaires et de l’entreprise, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tMaster Droit Financier-fiscal, École de maitrise d’excellence dans les affaires et l’économie, Moldavie •\tLicence en Finance et banque, académie d’études économiques de Moldavie •\tLicence en droit, Académie d’études économique de Moldavie (étudiant d’honneur)" },
      { name: "Drusilla Bret Robertson", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Drusilla-BRET-ROBERTSON-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/drusilla-bret-cunynghame-robertson", bio: "•\tMémoire : « Étude de droit comparé : la responsabilité extraterritoriale des entreprises en droits français et suisse en cas de violation des droits de l’Homme », sous la direction du Professeur Didier Rebut •\tMaster 1 Droit international, Université Panthéon-Assas Paris II et Master of Law, Université de Fribourg (Mention Assez Bien) •\tLicence droit public, Université Paris II Panthéon-Assas et Bachelor of Law Université de Fribourg" },
      { name: "Antoine Briot", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Antoine-BRIOT-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/antoine-briot-51855b1ab", bio: "•\tMémoire : « L’influence du droit souple sur l’encadrement des rémunérations additionnelles des dirigeants de sociétés par actions » sous la direction du Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université Paris Nanterre (Mention Bien) •\tDouble-licence Droit/économie-Gestion, Université Paris Nanterre (Mention Assez Bien)" },
      { name: "Mathilde Carrez", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Vice-tresoriere-Mathilde-Carrez.jpg", linkedin: "https://www.linkedin.com/in/mathilde-carrez-397498175/", bio: "•\tMémoire : « Faut-il contrôler les positions dominantes dans le secteur du numérique ? » sous la direction du Professeur Emmanuelle Claudel •\tMaster 1 Droit des Affaires et Fiscalité, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDouble Licence Droit et Économie-Gestion, Université d’Évry-Val-d’Essonne, Paris Saclay (Mention Bien)" },
      { name: "Sarah Chemouny", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-reponsable-partenariats-Sarah-Chemouny.jpg", linkedin: "https://www.linkedin.com/in/sarah-chemouny-157001175/", bio: "•\tMémoire : « L’articulation entre les procédures collectives et les procédures d’arbitrage » sous la direction du Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Bien) •\tInstitut de Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Aurélien Cohen", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Vice-president-Aurelien-Cohen-.png", linkedin: "https://www.linkedin.com/in/aur%C3%A9lien-cohen/", bio: "•\tMémoire : « L’incidence de la loi PACTE sur les stratégies de défense anti-OPA », sous la direction du Professeur France Drummond •\tMaster 1 Droit des Affaires, Université Paris Est Créteil •\tMaster 1 Droit fiscal général, Université Paris 1 Panthéon-Sorbonne •\tLicence de Droit, Université Paris Est Créteil (Mention Bien)" },
      { name: "Lucie De Montredon De Scorraille", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Lucie-DE-MONTREDON-DE-SCORRAILLE-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/lucie-de-montredon-de-scorraille-ba21881a8/", bio: "•\tMémoire : « L’évolution du mécanisme de continuation des contrats en droit des entreprises en difficulté » sous la direction du Professeur Marie-Hélène Monsèrié-Bon •\tMaster 1 Droit des Affaires Université Toulouse 1 Capitole (Mention Bien) •\tLicence de Droit parcours Droit Privé, Université de Montpellier et Toulouse 1 Capitole (mention Bien) •\tCollège Supérieur de Droit de Toulouse (mention Très Bien) •\tCollège de Droit de Montpellier (Mention Très Bien)" },
      { name: "Stanislas De Reboul", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Stanislas-DE-REBOUL-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/stanislas-de-reboul", bio: "•\tMémoire : « Les sanctions négociées en droit financier » sous la direction du Professeur France Drummond •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Bien) •\tLicence Lettres Modernes, Université Paris III Sorbonne-Nouvelle •\tLicence Droit, Université Panthéon-Assas" },
      { name: "Lisa Demri", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Lisa-DEMRI-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/lisa-demri-90741b158/", bio: "•\tMémoire : « Les mécanismes de défense des entreprises en difficulté face à la crise sanitaire du Covid-19 », sous la direction du Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas" },
      { name: "Léa Dubois", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Secretaire-generale-Lea-Dubois.jpeg", linkedin: "https://www.linkedin.com/in/l%C3%A9a-dubois-327aa21a2/?originalSubdomain=fr", bio: "•\tMémoire : « Les droits de la défense lors d’une procédure de contrôle de l’Agence Française Anticorruption » sous la direction du Professeur Philippe Conte •\tMaster 1 Droit des Affaires Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Contentieux des Entreprises – Chaire Bredin Prat, Université Paris II Panthéon-Assas (Mention Très Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Collège de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Grégoire Farez", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Gregoire-FAREZ-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/gregoire-farez", bio: "•\tMémoire : « Le contrat de naming » sous la direction du Professeur Daniel Cohen •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence de Droit Européen, Faculté Libre de Droit, Université Catholique de Lille (Mention Bien)" },
      { name: "Camille Fermon", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Camille-FERMON-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/camille-fermon-aa09a8229/", bio: "•\tMémoire : « Les exceptions personnelles que la Cour cassation refuse à la caution », sous la direction du Professeur Philippe Théry •\tMaster 1 droit privé général, Université Paris I Panthéon Sorbonne •\tLicence de Droit, Université Paris I Panthéon Sorbonne" },
      { name: "Marie Forte", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Marie-FORTE-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/marie-forte/", bio: "•\tMémoire : « Liberté de la presse et réglementation des abus de marchés », sous la direction du Professeur France Drummond •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas •\tCertificat de Droit bancaire et financier, Université Paris II Panthéon-Assas •\tLicence Droit Privé, Université Paris II Panthéon-Assas •\tCollège de Droit, Université Paris II Panthéon-Assas" },
      { name: "Anne-Sophie Ghosn", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Anne-Sophie-GHOSN-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/anne-sophie-g-66a974137/", bio: "•\tMémoire : « Finance durable et droit des sociétés » sous la direction du Professeur France Drummond •\tMsc & Bachelor in Management, ESSEC Business School, Programme Grande École •\tMaster 1 Droit des Affaires, Université Paris 1 Panthéon-Sorbonne, CAVEJ (Mention Bien) •\tLicence 3 Droit, Université de Cergy-Pontoise •\tCPGE Saint Louis-de-Gonzague (Franklin)" },
      { name: "Marion Gosse", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Marion-GOSSE-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/marion-gosse-2022a5160/", bio: "•\tMémoire : « Le repreneur de l’entreprise en difficulté » sous la direction du Professeur Marie-Hélène Monsèrié-Bon •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Yousra Hadji", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Yousra-HADJI-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/yousra-hadji-2100b2132/", bio: "•\tMémoire : « Les devoirs des dirigeants sociaux : quelles évolutions à la lumière de la décision Scor c/ Covéa ? » sous la direction de Madame le Professeur Marie-Laure Coquelet •\tMsc in Management, Programme Grande École Essec Business School •\tMBA Program, IPADE Business School •\tMaster 1 Droit des Affaires, Université Paris I Panthéon-Sorbonne – CAVEJ (mention Assez Bien) •\tLicence 3 Droit, Université Cergy-Pontoise •\tCPGE voie économique, Lycée la Résidence, Maroc" },
      { name: "Corentin Lavat", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Vice-tresorier-Corentin-Lavat.jpg", linkedin: "https://www.linkedin.com/in/corentin-lavat-820637168/", bio: "•\tMémoire : « Vers un droit de l’insolvabilité ? », sous la direction du Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Taqwa Lidghi", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-responsable-evenementiel-Taqwa-Lidghi.png", linkedin: "https://www.linkedin.com/in/taqwa-lidghi-a7b031177/", bio: "•\tMémoire : « Le droit de critique de l’actionnaire », sous la direction de Madame le Professeure France Drummond •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Contentieux des Entreprises, Université Paris II Panthéon-Assas – Chaire Bredin Prat •\tLicence de droit, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Droits de Common Law, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Louise Mauger", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Louise-MAUGER-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/louise-mauger-02b328131/", bio: "•\tMémoire : « Analyse critique de la procédure de clémence » sous la direction du Professeur Emmanuelle Claudel •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tCertificat d’Analyse économique du Droit et École du Droit, Université Paris II Panthéon-Assas (Metion Assez Bien) •\tLicence Droit Privé (Metion Assez Bien) •\tDU Collège de Droit, Université Paris II Panthéon-Assas (Mention Bien)" },
      { name: "Clara Montillet", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Presidente-Clara-Montillet.jpg", linkedin: "https://www.linkedin.com/in/clara-montillet-1693a8128/", bio: "•\tMémoire : « Le droit de retrait de l’actionnaire minoritaire d’une société cotée », sous la direction du Professeur France Drummond •\tMaster 1 Droit Intégré – Droit Anglais, University College London – Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Collège de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Cléa Pamukçu", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Clea-PAMUKCU-2020-2021-scaled-1.jpg", linkedin: "https://www.linkedin.com/in/clea-pamuk%C3%A7u-594520129/", bio: "•\tMémoire : « Lutte contre le blanchiment et crypto-actifs », sous la direction du Professeur Stéphane Torck •\tLLM Banking, Corporate and Finance Law, Fordham University (New York) •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas •\tCertificat de Droit Bancaire et Financier, Université Paris II Panthéon-Assas •\tLicence de Droit Privé, Université Paris II Panthéon-Assas" },
      { name: "Albane Périnet-Marquet", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-responsable-Communication-Albane-Perinet-Marquet.jpeg", linkedin: "https://www.linkedin.com/in/albane-perinet-marquet-43ab76150/", bio: "•\tMémoire : « Réflexions sur le passif du débiteur en procédure collective » sous la direction de Madame le Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tCertificat de Droit Bancaire et Financier, Université Paris II Panthéon-Assas •\tDU Collège de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas" },
      { name: "Uranie Pouyat", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-responsable-communication-Uranie-Pouyat.jpg", linkedin: "https://www.linkedin.com/in/uranie-pouyat-15862b193/", bio: "•\tMémoire : « Les sanctions du dol en droit français et en droit suisse » sous la direction du Professeur Daniel Cohen •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas et Master of Law, Université de Fribourg (Double-Diplôme) •\tLicence en Droit Privé, Université Paris II Panthéon-Assas et Bachelor of Law, Université de Fribourg (Double-Diplôme)" },
      { name: "Victoire Relet", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Victoire-RELET-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/victoire-relet-4a00181b2/", bio: "•\tMémoire : « La place du salarié dans les procédures collectives », sous la direction du Professeur Marie-Laure Coquelet •\tMaster 1 Droit des Affaires, Université de Bordeaux (Mention Bien) •\tLicence de Droit judiciaire, Université de Bordeaux (Mention Assez Bien)" },
      { name: "Matthieu Sayag-Leprince", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-responsable-Partenariats-Matthieu-Sayag-leprince.jpg", linkedin: "https://www.linkedin.com/in/matthieu-sayag-leprince-852111141/", bio: "•\tMémoire : « Procédures collectives et sociétés cotées » sous la direction de Madame le Professeur Marie-Hélène Monsèrié-Bon •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tCertificat Droit Bancaire et Financier, Université Paris II Panthéon-Assas •\tLicence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tCPGE D1 (Droit et Économie), Lycée Blomet" },
      { name: "Narimane Singh", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Narimane-SINGH-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/narimane-singh-5192421a4/", bio: "•\tMémoire : « Appréciation critique du plafonnement des droits de vote » sous la direction du Professeur Daniel Cohen •\tMaster 1 Droit des Affaires, Université Paris I Panthéon-Sorbonne •\tDouble licence droit et économie, Université Sorbonne Paris Nord" },
      { name: "Rudy Tordjman", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Rudy-TORDJMAN-2020-2021-scaled.jpg", linkedin: "https://www.linkedin.com/in/rudy-t-5760a8181/", bio: "•\tMémoire : « Protection des données personnelles (RGPD) et supervision financière » sous la direction de Madame le Professeur France Drummond •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tCertificat Droit Bancaire et Financier, Université Paris II Panthéon-Assas •\tLicence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien) •\tDU Collège de Droit, Université Paris II Panthéon-Assas (Mention Assez Bien)" },
      { name: "Dune Vazeux", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Vice-presidente-Dune-Vazeux.jpeg", linkedin: "https://www.linkedin.com/in/dune-vazeux/", bio: "•\tMémoire : « L’articulation des procédures principales et secondaires dans le « Règlement insolvabilité » » sous la direction du Professeur Jean-Jacques Ansault •\tMaster 1 Droit des Affaires, Université Paris II Panthéon-Assas Paris II (Mention Assez Bien) •\tLicence Droit Privé, Université Paris II Panthéon-Assas Paris II (Mention Assez Bien) •\tCPGE (ECS), Prépa Commerciale" },
      { name: "Matthew Wu", role: "Membre", photo: "/photos_actualites/promotions_membre/p20/Co-responsable-partenariats-Matthew-WU.jpg", linkedin: "https://www.linkedin.com/in/matthewwuu/", bio: "•	Mémoire : « Pactes extrastatutaires et liberté contractuelle », sous la direction du Professeur Jean-Jacques Ansault •	Master 1 Droit des Affaires, Université Paris II Panthéon-Assas (Mention Assez Bien) •	Licence Droit Privé, Université Paris II Panthéon-Assas (Mention Assez Bien)" }
    ],
  },
];

export default function PromotionsPage() {
  // sort promotions by starting year (newest first)
  const getLastName = (fullName: string) => {
    return (fullName || "").toString().trim().split(/\s+/).pop() || "";
  };

  const sortByLastName = (x: any, y: any) => {
    const lx = getLastName(x.name).toLowerCase();
    const ly = getLastName(y.name).toLowerCase();
    return lx.localeCompare(ly, 'fr', { sensitivity: 'base' });
  };

  const sortedPromotions = [...promotions]
    .map((p) => ({
      ...p,
      members: p.members ? [...p.members].sort(sortByLastName) : p.members,
    }))
    .sort((a, b) => {
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
                            <Image
                              src={m.photo}
                              alt={m.name}
                              width={64}
                              height={64}
                              className="object-cover w-full h-full"
                              style={{ objectPosition: (m as any).photoPosition || '50% 25%' }}
                            />
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
                <Image
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  width={144}
                  height={144}
                  className="object-cover w-full h-full"
                  style={{ objectPosition: (selectedMember as any).photoPosition || '50% 20%' }}
                />
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-semibold">{selectedMember.name}</h3>
                <div className="text-sm text-[#5a0f19] mb-4">{selectedMember.role}</div>
                {selectedMember.bio && (
                  selectedMember.bio.split(/•\s*/).filter(Boolean).map((line: string, idx: number) => (
  <p key={idx} className="text-zinc-700 leading-relaxed">{line}</p>
))
                )}
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
