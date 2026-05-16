import { useEffect, useState } from "react";
import { profile } from "../data/profile";
// import { asset, profile } from "../data/profile";
import ThemeToggle from "./ThemeToggle";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  // { href: "#dashboard", label: "Dashboard" },
  { href: "#resume", label: "Resume" },
  { href: "#recommendations", label: "Recommendations" },
  { href: "#blog", label: "Blog" },
  { href: "#contact", label: "Contact" }
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? "is-scrolled" : ""}`}>
      <nav className="nav container" aria-label="Main navigation">
        <a className="brand" href="#home" onClick={() => setOpen(false)}>
          {/* <span className="brand-mark">PV</span> */}
          <img
            className="brand-photo"
            // src={asset(profile.photos.hero)}
            src="/images/profile/patricia-navbar.jpg"
            alt={`${profile.name} portrait`}
          />
          <span>
            <strong>{profile.name}</strong>
            <small>{profile.role}</small>
          </span>
        </a>

        <div className="nav-tools">
          <ThemeToggle />
          <button
            className="menu-toggle"
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={open}
            onClick={() => setOpen((value) => !value)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>

        <div className={`nav-links ${open ? "open" : ""}`}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a className="nav-cta" href={profile.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </nav>
    </header>
  );
}
