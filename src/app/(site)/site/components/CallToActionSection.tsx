import Link from "next/link";

export function CallToActionSection() {
  return (
    <section className="overflow-hidden rounded-3xl border border-brand-200 bg-gradient-to-r from-brand-500 via-brand-500 to-brand-600 p-8 text-white shadow-xl shadow-brand-500/20 dark:border-brand-400">
      <div className="flex flex-col gap-6 text-center lg:flex-row lg:items-center lg:justify-between lg:text-left">
        <div className="space-y-3">
          <h2 className="text-3xl font-semibold">Sẵn sàng kết nối storefront với TailAdmin?</h2>
          <p className="text-sm text-brand-100">
            Duy trì theme thống nhất cho toàn bộ sản phẩm, đo lường chính xác mọi chiến dịch từ một nơi.
          </p>
        </div>
        <div className="flex flex-wrap justify-center gap-3 lg:justify-end">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand-600 transition-colors hover:bg-brand-100"
          >
            Bắt đầu miễn phí
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Nói chuyện với chuyên gia
          </Link>
        </div>
      </div>
    </section>
  );
}
