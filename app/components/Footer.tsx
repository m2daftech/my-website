"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  // hide footer on the homepage
  if (pathname === "/") return null;
  return (
    <footer className="site-footer">
      <div className="site-footer__inner mx-auto max-w-6xl px-6 py-10 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="footer-left flex items-center gap-4">
          <div className="footer-logo">
            <Image src="/logo.png" alt="M214" width={56} height={56} />
          </div>
          <div>
            <p className="text-sm muted-beige">Association M2 Droit des affaires — Recherche</p>
            <Link href="/mentions" className="nav-legal">
              Mentions légales
            </Link>
          </div>
        </div>

        <nav className="footer-nav flex flex-wrap justify-center gap-4">
          <Link href="/accueil" className="nav-link">Accueil</Link>
          <Link href="/formation" className="nav-link">La formation</Link>
          <Link href="/association" className="nav-link">L'association</Link>
          <Link href="/partenaires" className="nav-link">Nos partenaires</Link>
          <Link href="/actualites" className="nav-link">Nos événements</Link>
          <Link href="/etudiants/promotions" className="nav-link">Promotions</Link>
          <Link href="/etudiants/que-sont-ils-devenues" className="nav-link">Que sont-ils devenues</Link>
          <Link href="/contact" className="nav-link">Contact</Link>
        </nav>

        <div className="footer-right flex items-center gap-4">
          <div className="socials footer-socials">
            <a href="https://www.facebook.com/m2affaires" aria-label="facebook">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.13 8.44 9.93v-7.03H7.9v-2.9h2.54V9.41c0-2.51 1.49-3.9 3.77-3.9 1.09 0 2.23.2 2.23.2v2.46h-1.26c-1.24 0-1.62.77-1.62 1.56v1.86h2.76l-.44 2.9h-2.32V22c4.78-.8 8.44-4.94 8.44-9.93z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/m2affaires" aria-label="instagram">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" role="img" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" stroke="currentColor" strokeWidth="1.6" fill="none" />
                <circle cx="12" cy="12" r="3.2" fill="currentColor" />
                <circle cx="17.6" cy="6.4" r="0.95" fill="currentColor" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/master2affaires" aria-label="linkedin">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.2 8.98h4.56V24H.2zM9.64 8.98h4.38v2.07h.06c.61-1.15 2.1-2.36 4.33-2.36 4.62 0 5.47 3.04 5.47 6.99V24h-4.56v-7.13c0-1.7-.03-3.89-2.37-3.89-2.37 0-2.73 1.85-2.73 3.77V24H9.64z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="site-footer__bottom border-t border-white/6 mt-6 pt-6">
        <div className="mx-auto max-w-6xl px-6 text-sm muted-beige">
          © {new Date().getFullYear()} Association M2 Affaires Recherche — Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
