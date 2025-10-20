import type { Faq, Metric, Operation, PricingPlan, Product, Testimonial } from "./types";

export const heroHighlights = [
  "Giao diện đồng bộ với TailAdmin",
  "Hiển thị sản phẩm, đơn hàng và hành trình khách hàng",
  "Tối ưu cho dark mode và thiết bị di động",
] as const;

export const metrics: Metric[] = [
  { label: "Tăng trưởng GMV", value: "+38%", caption: "Sau khi triển khai storefront" },
  {
    label: "Tỉ lệ chuyển đổi",
    value: "4.7%",
    caption: "Nhờ landing tối ưu theo dashboard insights",
  },
  {
    label: "Thời gian xử lý",
    value: "-32%",
    caption: "Đồng bộ admin giúp giảm thao tác thủ công",
  },
];

export const products: Product[] = [
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

export const operations: Operation[] = [
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

export const pricingPlans: PricingPlan[] = [
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

export const testimonials: Testimonial[] = [
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

export const faqs: Faq[] = [
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
