import Link from "next/link";

import type { PricingPlan } from "../types";

interface PricingSectionProps {
  plans: PricingPlan[];
}

export function PricingSection({ plans }: PricingSectionProps) {
  return (
    <section id="pricing" className="space-y-10">
      <div className="text-center">
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Gói triển khai phù hợp từng giai đoạn</h2>
        <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
          Từ cửa hàng nhỏ đến doanh nghiệp đa kênh, vẫn dựa trên một theme thống nhất.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex h-full flex-col justify-between rounded-3xl border bg-white p-8 shadow-sm dark:bg-gray-900 ${
              plan.highlighted
                ? "border-brand-300 shadow-lg shadow-brand-500/10 dark:border-brand-400"
                : "border-gray-200 dark:border-gray-800"
            }`}
          >
            <div className="space-y-4">
              <span className="inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600 dark:bg-gray-800 dark:text-gray-300">
                {plan.name}
              </span>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{plan.price}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{plan.description}</p>
              <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Link
              href="/contact"
              className={`mt-6 inline-flex items-center justify-center rounded-full px-5 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 ${
                plan.highlighted
                  ? "bg-brand-500 text-white hover:bg-brand-600"
                  : "border border-gray-300 text-gray-700 hover:border-brand-400 hover:text-brand-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
              }`}
            >
              Liên hệ tư vấn
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
