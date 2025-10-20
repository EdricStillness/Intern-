import Link from "next/link";

const features = [
  {
    title: "Shared theme provider",
    description:
      "Root layout keeps the ThemeProvider around every route so dark mode and local storage syncing continue to work with zero extra wiring.",
    meta: "src/app/layout.tsx",
  },
  {
    title: "Design tokens in one place",
    description:
      "Update brand colors, typography, or spacing once inside globals.css and both the dashboard and marketing pages will pick up the new values immediately.",
    meta: "src/app/globals.css",
  },
  {
    title: "Ready-to-use UI pieces",
    description:
      "Reuse components like the ThemeToggleButton or layout primitives anywhere in the project so new sections stay visually consistent.",
    meta: "src/components",
  },
];

export default function SiteLandingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-6">
        <span className="inline-flex items-center rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-300">
          New surface
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Build the rest of your project without losing the TailAdmin theme.
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          This lightweight layout shows how marketing pages, landing flows, or any other non-admin
          routes can stay aligned with the dashboard styling. It shares the same fonts, colors, and
          theme switching as the admin experience.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            View dashboard
          </Link>
          <Link
            href="https://tailadmin.com"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-6 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-500 dark:hover:text-brand-300"
          >
            TailAdmin resources
          </Link>
        </div>
      </section>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">
            Reuse the design system wherever you need it
          </h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            Every component you see in the admin area can live inside any route group. Import only the
            pieces you want and wrap them with custom content to ship new sections faster.
          </p>
          <ul className="mt-6 space-y-3 text-sm text-gray-500 dark:text-gray-400">
            <li>• Layout building blocks from <code className="font-mono text-xs">src/layout</code></li>
            <li>• Form and chart widgets from <code className="font-mono text-xs">src/components</code></li>
            <li>• Icon set from <code className="font-mono text-xs">src/icons</code></li>
          </ul>
        </div>
        <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">Keep tokens in sync</h2>
          <p className="mt-4 text-base text-gray-600 dark:text-gray-300">
            The same CSS variables that drive Tailwind in the dashboard are available here. Adjust
            them once and ship a cohesive experience across admin and customer-facing surfaces.
          </p>
          <div className="mt-6 rounded-xl bg-gray-50 p-4 text-sm text-gray-600 shadow-inner dark:bg-gray-800/60 dark:text-gray-300">
            <p className="font-medium text-gray-900 dark:text-gray-100">Tip</p>
            <p className="mt-2">
              Edit <code className="font-mono text-xs">:root</code> and <code className="font-mono text-xs">.dark</code> token values inside
              <code className="font-mono text-xs"> src/app/globals.css</code> to restyle the entire workspace.
            </p>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white">What stays consistent</h2>
        <p className="mt-3 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          Everything below highlights the pieces you carry over when you keep the existing theme
          wrapper and context providers intact.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="flex h-full flex-col justify-between rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-colors dark:border-gray-800 dark:bg-gray-900"
            >
              <div className="space-y-3">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">{feature.description}</p>
              </div>
              <span className="mt-6 inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {feature.meta}
              </span>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
