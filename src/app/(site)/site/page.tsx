import Link from "next/link";

const heroHighlights = [
  "Giao diện đồng bộ với TailAdmin",
  "Hiển thị sản phẩm, đơn hàng và hành trình khách hàng",
  "Tối ưu cho dark mode và thiết bị di động",
];

const products = [
  {
    name: "Bộ hoodie TailCommerce",
    price: "1.290.000đ",
    description: "Chất liệu cotton tái chế, thể hiện thương hiệu ở mọi điểm chạm.",
    badge: "Mới",
  },
  {
    name: "Áo thun hiệu suất",
    price: "690.000đ",
    description: "Quick-dry, phối màu theo palette brand hiện tại để chạy campaign.",
    badge: "Bán chạy",
  },
  {
    name: "Gói quà tặng premium",
    price: "2.190.000đ",
    description: "Combo phụ kiện + thẻ thành viên cho khách hàng doanh nghiệp.",
    badge: "Pre-order",
  },
  {
    name: "Thẻ quà tặng điện tử",
    price: "Tùy chọn",
    description: "Kích hoạt qua email, tự động sync về bảng doanh thu trong admin.",
    badge: "Digital",
  },
];

const operations = [
  {
    title: "Đồng bộ dữ liệu",
    description:
      "Mọi đơn hàng từ storefront đẩy thẳng vào bảng Recent Orders, cho phép team vận hành xử lý tức thì.",
    meta: "Tự động cập nhật biểu đồ doanh thu",
  },
  {
    title: "Tối ưu marketing",
    description:
      "Các campaign trong admin chuyển thành banner ngoài site. Giữ palette brand để không phải thiết kế lại từ đầu.",
    meta: "Quản lý tài sản marketing tập trung",
  },
  {
    title: "Cổng khách hàng",
    description:
      "Khách đăng nhập xem lịch sử mua sắm, điểm thưởng. Admin vẫn theo dõi pipeline và chăm sóc hậu mãi.",
    meta: "CRM nhẹ tích hợp sẵn",
  },
];

const metrics = [
  { label: "Tăng trưởng GMV", value: "+38%", caption: "Sau khi triển khai storefront" },
  { label: "Tỉ lệ chuyển đổi", value: "4.7%", caption: "Nhờ landing tối ưu theo dashboard insights" },
  { label: "Thời gian xử lý", value: "-32%", caption: "Đồng bộ admin giúp giảm thao tác thủ công" },
];

const pricing = [
  {
    name: "Starter",
    price: "0đ",
    description: "Catalog đơn giản + đồng bộ đơn hàng với dashboard.",
    features: ["Tối đa 20 sản phẩm", "Theo dõi KPI chuẩn", "Tích hợp cổng thanh toán"],
  },
  {
    name: "Growth",
    price: "1.990.000đ/tháng",
    description: "Bổ sung chương trình thành viên và automation marketing.",
    features: [
      "Không giới hạn sản phẩm",
      "Automation email từ dữ liệu KPI",
      "Phân quyền team và báo cáo nâng cao",
    ],
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "Liên hệ",
    description: "Tích hợp ERP, CRM nâng cao và hỗ trợ triển khai theo yêu cầu.",
    features: ["Tư vấn triển khai", "Onboarding đa chi nhánh", "SLA 99.9%"],
  },
];

const testimonials = [
  {
    quote:
      "Từ lúc dựng storefront với theme TailAdmin, team marketing và vận hành thống nhất ngôn ngữ thiết kế, báo cáo thì cập nhật real-time.",
    author: "Nguyễn Minh Anh",
    role: "CMO, Lumina Retail",
  },
  {
    quote:
      "Không cần xây lại dashboard, chỉ mở rộng thêm landing và checkout theo token sẵn có là đủ để ra mắt chiến dịch mới.",
    author: "Trần Quốc Huy",
    role: "Product Lead, NextWave",
  },
];

const faqs = [
  {
    question: "Theme storefront có đồng bộ dark mode với admin?",
    answer:
      "Có. ThemeToggleButton và ThemeProvider dùng chung nên người dùng chuyển chế độ ở bất kỳ đâu cũng áp dụng cho toàn bộ trải nghiệm.",
  },
  {
    question: "Có thể tùy chỉnh màu sắc cho thương hiệu riêng?",
    answer:
      "Chỉ cần sửa token trong src/app/globals.css. Dashboard và storefront sẽ nhận ngay màu mới, không phải chỉnh từng component.",
  },
  {
    question: "Storefront có hỗ trợ dữ liệu đa ngôn ngữ?",
    answer:
      "Có thể cấu hình i18n ở Next.js và tái sử dụng component layout, mọi card và bảng vẫn giữ style TailAdmin.",
  },
];

export default function TailCommerceStorefront() {
  return (
    <div className="space-y-24">
      <section className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand-200 bg-brand-50 px-4 py-1 text-sm font-medium text-brand-600 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-300">
            Storefront thương mại điện tử
          </span>
          <h1 className="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white sm:text-5xl">
            Bán hàng nhanh chóng, quản trị dễ dàng trên cùng một theme.
          </h1>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-300">
            TailCommerce là storefront được dựng dựa trên TailAdmin. Bạn có thể mở rộng sản phẩm, checkout và các điểm chạm khách
            hàng mà vẫn kế thừa toàn bộ hệ thống giao diện sẵn có.
          </p>
          <ul className="grid gap-3 text-sm text-gray-600 dark:text-gray-300 sm:grid-cols-2">
            {heroHighlights.map((item) => (
              <li key={item} className="flex items-start gap-2 rounded-xl border border-gray-200 bg-white p-3 shadow-sm dark:border-gray-800 dark:bg-gray-900/80">
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

      <section id="features" className="space-y-8">
        <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900/70 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-4">
            <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Một hệ sinh thái chung cho storefront và admin</h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Sử dụng cùng component library, token và context nên bạn chỉ tập trung xây dựng trải nghiệm. Không còn nỗi lo lệch thiết kế giữa các nhóm sản phẩm.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {operations.map((operation) => (
                <div key={operation.title} className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{operation.title}</h3>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{operation.description}</p>
                  <p className="mt-3 text-xs font-medium uppercase tracking-wide text-brand-600 dark:text-brand-300">
                    {operation.meta}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4 rounded-2xl border border-dashed border-brand-200 bg-brand-50/60 p-6 text-sm text-brand-700 dark:border-brand-500/40 dark:bg-brand-500/10 dark:text-brand-200">
            <p className="font-semibold">Kết nối với dashboard</p>
            <p>
              Widget MonthlySalesChart và DemographicCard trong admin dùng chung nguồn dữ liệu với trang này, đảm bảo mọi team nhìn vào cùng một con số.
            </p>
            <p>
              Tạo thêm blog, trang onboarding hay trung tâm tài liệu? Chỉ cần thêm route group mới và tái sử dụng layout này.
            </p>
          </div>
        </div>
      </section>

      <section id="pricing" className="space-y-10">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Gói triển khai phù hợp từng giai đoạn</h2>
          <p className="mt-3 text-base text-gray-600 dark:text-gray-300">
            Từ cửa hàng nhỏ đến doanh nghiệp đa kênh, vẫn dựa trên một theme thống nhất.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {pricing.map((plan) => (
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

      <section id="testimonials" className="space-y-8">
        <div className="flex flex-col gap-3 text-center">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Khách hàng nói gì</h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Những đội ngũ đã dùng chung theme cho cả storefront và admin.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.author}
              className="flex h-full flex-col justify-between rounded-3xl border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900"
            >
              <blockquote className="text-base text-gray-600 dark:text-gray-300">“{testimonial.quote}”</blockquote>
              <figcaption className="mt-6">
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{testimonial.author}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section id="faq" className="space-y-6">
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Câu hỏi thường gặp</h2>
          <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-300">
            Cùng một nền tảng theme giúp rút ngắn thời gian ra mắt, từ landing đến hệ thống quản trị.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {faqs.map((faq) => (
            <div key={faq.question} className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
              <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>

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
    </div>
  );
}
