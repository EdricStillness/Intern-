import Link from "next/link";

import type { Metric } from "../types";

interface HeroSectionProps {
  highlights: readonly string[];
  metrics: Metric[];
}

export function HeroSection({ highlights, metrics }: HeroSectionProps) {
  return (
    <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
      <div className="space-y-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-300">
          Storefront thương mại điện tử
        </span>
        <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
          Bán hàng nhanh chóng, quản trị dễ dàng trên cùng một theme.
        </h1>
        <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
          TailCommerce là storefront được dựng dựa trên TailAdmin. Bạn có thể mở rộng sản phẩm, checkout và các điểm chạm khách hàng mà vẫn kế thừa toàn bộ hệ thống giao diện sẵn có.
        </p>
        <ul className="grid gap-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
          {highlights.map((item) => (
            <li
              key={item}
              className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900/80"
            >
              <span className="mt-1 h-2 w-2 rounded-full bg-brand-500" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-3">
          <Link
            href="/"
            className="inline-flex items-center justify-center rounded-full bg-brand-500 px-7 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
          >
            Xem dashboard demo
          </Link>
          <Link
            href="#pricing"
            className="inline-flex items-center justify-center rounded-full border border-gray-300 px-7 py-3 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
          >
            Bảng giá triển khai
          </Link>
        </div>
      </div>
      <div className="grid gap-4 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg shadow-brand-500/5 dark:border-gray-800 dark:bg-gray-900/70">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Các chỉ số nổi bật</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div
              key={metric.label}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-4 text-center shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <p className="text-2xl font-semibold text-gray-900 dark:text-white">{metric.value}</p>
              <p className="mt-1 text-sm font-medium text-gray-600 dark:text-gray-300">{metric.label}</p>
              <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">{metric.caption}</p>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-brand-200 bg-brand-50/80 p-4 text-sm text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200">
          Dữ liệu cập nhật trực tiếp từ các widget EcommerceMetrics, MonthlySalesChart và RecentOrders trong admin.
        </div>
      </div>
    </section>
  );
}
