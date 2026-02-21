'use client';

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";
import { useAppContext } from "@/context/AppContext";

import logo from "../../assets/image/logo/yello.png";

const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Partner With Us", href: "/partnerwithus" }, // Fixed path
  { label: "RFP", href: "/requestproposal" }, // Fixed path
  { label: "Contact", href: "/contact" },
];

const baseLink = "pg-nav-link rounded-full px-3.5 py-2 text-sm font-semibold transition";
const activeLink = "pg-nav-link-active";
const idleLink = "pg-nav-link-idle";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { state, setState } = useAppContext();
  const isDark = state.theme === "dark";

  const onToggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  return (
    <header className="fixed inset-x-0 top-4 z-40 lg:top-8">
      <div className="pg-container pt-2">
        <div className="pg-navbar-shell relative flex h-[74px] items-center justify-between rounded-2xl px-3 backdrop-blur-xl lg:px-4">
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,var(--pg-nav-highlight),transparent)]" />

          <Link href="/" className="flex items-center rounded-xl px-1 py-0.5 transition hover:opacity-90">
            <img src={logo.src} alt="Projects Global Logo" className="h-10 w-auto sm:h-11" />
          </Link>

          <nav className="pg-navbar-chip hidden items-center gap-1 rounded-full p-1 lg:flex">
            {links.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`${baseLink} ${isActive ? activeLink : idleLink}`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              type="button"
              onClick={onToggleTheme}
              className="pg-navbar-toggle inline-flex h-10 w-10 items-center justify-center rounded-full transition hover:-translate-y-0.5"
            >
              {isDark ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.56 6.36-1.56-1.56M6.99 6.99 5.43 5.43m13.13 0-1.56 1.56M6.99 17.01l-1.56 1.56M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
                </svg>
              )}
            </button>
            <Link href="/requestproposal">
              <Button variant="primary" size="sm" className="pg-btn-nav-cta">Request Proposal</Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="pg-navbar-toggle rounded-xl p-2.5 lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <span className={`pg-hamburger-lines ${open ? "open" : ""}`} aria-hidden="true">
              <span />
              <span />
              <span />
            </span>
          </button>
        </div>
      </div>

      {open && (
        <div className="pg-container mt-2 lg:hidden">
          <div className="pg-navbar-shell rounded-2xl p-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="pg-navbar-toggle mb-3 inline-flex h-9 items-center gap-2 rounded-full px-3 text-xs font-semibold"
            >
              {isDark ? (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.56 6.36-1.56-1.56M6.99 6.99 5.43 5.43m13.13 0-1.56 1.56M6.99 17.01l-1.56 1.56M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
                </svg>
              ) : (
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.8" d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z" />
                </svg>
              )}
              <span>{isDark ? "Light Mode" : "Dark Mode"}</span>
            </button>

            <nav className="grid gap-1">
              {links.map((link) => {
                const isActive = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`${baseLink} pg-mobile-nav-link ${isActive ? activeLink : idleLink}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link href="/requestproposal" onClick={() => setOpen(false)} className="mt-3 inline-flex">
              <Button variant="primary" size="sm" className="pg-btn-nav-cta">Request Proposal</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
