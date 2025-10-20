import Link from "next/link";

import type { Product } from "../types";

interface ProductsSectionProps {
  products: Product[];
}

export function ProductsSection({ products }: ProductsSectionProps) {
  return (
    <section id="products" className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Sản phẩm nổi bật</h2>
          <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Bộ sưu tập đồng bộ với bảng inventory trong admin. Bất kỳ thay đổi nào về giá, tồn kho sẽ phản ánh ngay trên landing.
          </p>
        </div>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full border border-gray-300 px-5 py-2 text-sm font-semibold text-gray-700 transition-colors hover:border-brand-400 hover:text-brand-500 dark:border-gray-700 dark:text-gray-200 dark:hover:border-brand-400 dark:hover:text-brand-300"
        >
          Quản lý danh mục
        </Link>
      </div>
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {products.map((product) => (
          <article
            key={product.name}
            className="group relative flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg dark:border-gray-800 dark:bg-gray-900"
          >
            <div className="space-y-3">
              <span className="inline-flex w-fit items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-gray-600 transition-colors group-hover:bg-brand-500 group-hover:text-white dark:bg-gray-800 dark:text-gray-300">
                {product.badge}
              </span>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">{product.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300">{product.description}</p>
            </div>
            <div className="mt-6 flex items-center justify-between">
              <span className="text-lg font-semibold text-gray-900 dark:text-white">{product.price}</span>
              <Link
                href="/checkout"
                className="inline-flex items-center justify-center rounded-full bg-brand-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white transition-colors hover:bg-brand-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
              >
                Mua ngay
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
