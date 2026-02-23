"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
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
  { label: "Partner With Us", href: "/partnerwithus" }, 
  { label: "RFP", href: "/requestproposal" }, 
  { label: "Contact", href: "/contact" },
];

const baseLink = "rounded-full px-3.5 py-2 text-sm font-semibold transition";
const activeLink =
  "bg-[linear-gradient(135deg,var(--color-primary),var(--color-primary-dark))] !text-white shadow-[0_8px_18px_rgba(15,23,42,0.25)]";
const idleLink = "text-slate-700 hover:bg-slate-100 hover:text-slate-900";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const { state, setState } = useAppContext();
  const isDark = state.theme === "dark";
  const isHome = pathname === "/";

  const onToggleTheme = () => {
    setState((prev) => ({
      ...prev,
      theme: prev.theme === "dark" ? "light" : "dark",
    }));
  };

  return (
    <header className="fixed inset-x-0 top-10 z-40">
      <div className="pg-container pt-1">
        <div
          className={`relative flex h-[74px] items-center justify-between rounded-2xl px-3 backdrop-blur-xl lg:px-4 ${
            isHome
              ? "border border-white/65 bg-white/92 shadow-[0_14px_34px_rgba(2,6,23,0.18)]"
              : "border border-slate-200/80 bg-white/95 shadow-[0_14px_34px_rgba(15,23,42,0.12)]"
          }`}
        >
          <span className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(15,23,42,0.45),transparent)]" />

          <Link href="/" className="flex items-center">
            <Image
              src={logo}
              alt="Projects Global Logo"
              priority
              sizes="160px"
              className="h-10 w-auto"
            />
          </Link>

          <nav
            className={`hidden items-center gap-1 rounded-full p-1 lg:flex ${
              isHome
                ? "border border-slate-200 bg-white/85"
                : "border border-slate-200 bg-white/75"
            }`}
          >
            {links.map((link) => {
               const isActive = pathname === link.href;
               const idleClass = isHome
                 ? "text-slate-800 hover:bg-slate-100 hover:text-slate-900"
                 : idleLink;
               return (
                 <Link
                   key={link.href}
                   href={link.href}
                   className={`${baseLink} ${isActive ? activeLink : idleClass}`}
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
               className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition hover:-translate-y-0.5 hover:border-[var(--color-primary)] hover:text-[var(--color-primary-dark)] ${
                 isHome ? "border border-slate-300 bg-white/90" : "border border-slate-300 bg-white"
               }`}
              >
              {isDark ? (
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.56 6.36-1.56-1.56M6.99 6.99 5.43 5.43m13.13 0-1.56 1.56M6.99 17.01l-1.56 1.56M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
                  />
                </svg>
              )}
            </button>
            <Link href="/requestproposal">
              <Button variant="primary" size="sm">
                Request Proposal
              </Button>
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="rounded-xl border border-slate-300 bg-white p-2.5 text-slate-700 lg:hidden"
          >
            <span className="sr-only">Open menu</span>
            <svg
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="pg-container mt-2 lg:hidden">
          <div className="rounded-2xl border border-slate-200 bg-white p-3 shadow-[0_14px_30px_rgba(15,23,42,0.12)]">
            <button
              type="button"
              onClick={onToggleTheme}
              className="mb-3 inline-flex h-9 items-center gap-2 rounded-full border border-slate-300 bg-white px-3 text-xs font-semibold text-slate-700"
            >
              {isDark ? (
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M12 3v2.2m0 13.6V21m9-9h-2.2M5.2 12H3m15.56 6.36-1.56-1.56M6.99 6.99 5.43 5.43m13.13 0-1.56 1.56M6.99 17.01l-1.56 1.56M16 12a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z"
                  />
                </svg>
              ) : (
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.8"
                    d="M21 12.8A8.8 8.8 0 1 1 11.2 3a7 7 0 1 0 9.8 9.8Z"
                  />
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
                    className={`${baseLink} ${isActive ? activeLink : idleLink}`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>

            <Link
              href="/requestproposal"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex"
            >
              <Button variant="primary" size="sm">
                Request Proposal
              </Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
