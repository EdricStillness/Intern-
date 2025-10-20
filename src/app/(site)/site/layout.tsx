import type { ReactNode } from "react";
import Link from "next/link";

import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";

const navLinks = [
  { label: "Sản phẩm", href: "#products" },
  { label: "Tính năng", href: "#features" },
  { label: "Giá", href: "#pricing" },
  { label: "Khách hàng", href: "#testimonials" },
];

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-64 bg-gradient-to-b from-brand-500/10 via-brand-500/5 to-transparent dark:from-brand-400/20"
      />
      <header className="border-b border-gray-200/70 bg-white/80 backdrop-blur dark:border-gray-800/80 dark:bg-gray-950/70">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-6 px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-2 text-base font-semibold tracking-tight text-gray-900 transition-colors hover:text-brand-500 dark:text-gray-100 dark:hover:text-brand-300"
          >
            TailCommerce
          </Link>
          <nav className="hidden items-center gap-6 text-sm font-medium text-gray-600 transition-colors lg:flex dark:text-gray-300">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3 py-1.5 transition-colors hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:hover:text-brand-300"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="hidden rounded-full border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 lg:inline-flex dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
            >
              Vào admin
            </Link>
            <ThemeToggleButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-6xl px-6 pb-16 pt-12 sm:pb-20 lg:pb-24 lg:pt-16">{children}</main>
      <footer className="border-t border-gray-200/70 bg-white/80 px-6 py-8 text-center text-sm text-gray-500 transition-colors dark:border-gray-800/80 dark:bg-gray-950/70 dark:text-gray-400">
        © {new Date().getFullYear()} TailCommerce. Thiết kế đồng bộ với TailAdmin theme.
      </footer>
    </div>
  );
}
