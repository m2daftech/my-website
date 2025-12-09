import Link from "next/link";
import Image from "next/image";
import styles from "./mentions.module.css";

export default function MentionsPage() {
  const updated = new Date().toLocaleDateString("fr-FR");

  return (
    <main className={styles.container}>
      <div className={styles.card}>
        <header className={styles.header}>
          <div className={styles.logo}>
            <Image src="/logo.png" alt="M214" width={72} height={72} />
          </div>
          <div>
            <div className={styles.title}>Mentions légales</div>
            <div className="muted-beige">Dernière mise à jour : {updated}</div>
          </div>
        </header>

        <div className={styles.grid}>
          <aside className={styles.aside}>
            <div className={styles.sectionTitle}>Éditeur</div>
            <div className={styles.contact}>
              Association « Master 2 Droit des Affaires »<br />
              Université Paris II Panthéon‑Assas<br />
              87, Rue Notre Dame des Champs — 75006 Paris
            </div>

            <div className={styles.sectionTitle} style={{ marginTop: 14 }}>Contact</div>
            <div className={styles.contact}>
              <a href="mailto:m2daf.bureau@gmail.com">m2daf.bureau@gmail.com</a>
            </div>
          </aside>

          <section className={"proseBlock prose prose-invert lg:prose-lg " + styles.proseBlock}>
            <h3 className={styles.sectionTitle}>Droit d’accès / modification / suppression des données</h3>
            <p>
              L’utilisateur de ce site dispose d’un droit d’accès, de modification, de rectification et de suppression
              des données qui le concernent (Loi « informatique et libertés » du 6 janvier 1978 modifiée en 2004).
              Pour l’exercer, l’utilisateur peut s’adresser par courriel à l’éditeur : <br />
              <a className="ml-1" href="mailto:m2daf.bureau@gmail.com">m2daf.bureau@gmail.com</a>.
            </p>

            <h3 className={styles.sectionTitle}>Droits d’auteur – copyrights</h3>
            <p>
              Les textes de ce site relèvent de la législation française et internationale sur le droit d’auteur et
              la propriété intellectuelle. Tous les droits de reproduction sont réservés. Toute reproduction ou
              représentation intégrale ou partielle faite sans le consentement exprès de l’association Master 2
              Droit des Affaires est illicite et constitue une contrefaçon.
            </p>

            <h3 className={styles.sectionTitle}>Fonctionnement et contenu</h3>
            <p>Le contenu du site est susceptible d’être modifié ou mis à jour à tout moment.</p>

            <h3 className={styles.sectionTitle}>Conception graphique et développement</h3>
            <p>Marius C. & Constance W.</p>

            <h3 className={styles.sectionTitle}>Hébergeur</h3>
            <p>
              OVH<br />
              2 rue Kellermann — 59100 Roubaix — France<br />
              SAS au capital de 10 069 020 € — RCS Lille Métropole 424 761 419 00045
            </p>

            <h3 className={styles.sectionTitle}>Cookies</h3>
            <p>
              Dans le cadre de la consultation du site m2-affaires.com, des cookies de navigation peuvent s’installer
              sur votre logiciel de navigation. Un cookie ne permet pas d’identifier le visiteur. En revanche, il
              enregistre des informations relatives à la navigation de l’utilisateur sur le site. L’utilisateur a
              la possibilité de s’opposer à l’enregistrement de cookies au moyen de la bannière mise à disposition.
              Son consentement ou refus peut être en tout temps révoqué et au plus tard un mois après le choix.
            </p>

            <h3 className={styles.sectionTitle}>Crédits photos</h3>
            <p>Association M2 Droit des Affaires</p>

            <p className="mt-8">
              <Link href="/accueil" className="cta">Retour à l'accueil</Link>
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
