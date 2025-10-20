import type { ReactNode } from "react";
import Link from "next/link";

import { ThemeToggleButton } from "@/components/common/ThemeToggleButton";

export default function SiteLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="flex min-h-screen flex-col bg-white text-gray-900 transition-colors duration-300 dark:bg-gray-950 dark:text-gray-100">
      <header className="border-b border-gray-200 bg-white/80 backdrop-blur dark:border-gray-800 dark:bg-gray-950/80">
        <div className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-lg font-semibold tracking-tight text-gray-900 transition-colors hover:text-brand-500 dark:text-gray-100 dark:hover:text-brand-400">
            TailAdmin Theme
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/"
              className="text-sm font-medium text-gray-600 transition-colors hover:text-brand-500 dark:text-gray-300 dark:hover:text-white"
            >
              Back to dashboard
            </Link>
            <ThemeToggleButton />
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-5xl flex-1 px-6 py-12">{children}</main>
      <footer className="border-t border-gray-200 bg-white/80 px-6 py-6 text-center text-sm text-gray-500 transition-colors dark:border-gray-800 dark:bg-gray-950/80 dark:text-gray-400">
        Built with the shared TailAdmin theme system.
      </footer>
    </div>
  );
}
