import type { Operation } from "../types";

interface OperationsSectionProps {
  operations: Operation[];
}

export function OperationsSection({ operations }: OperationsSectionProps) {
  return (
    <section id="features" className="space-y-8">
      <div className="grid gap-6 rounded-3xl border border-gray-200 bg-white p-8 shadow-lg dark:border-gray-800 dark:bg-gray-900/70 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="space-y-4">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">
            Một hệ sinh thái chung cho storefront và admin
          </h2>
          <p className="text-base text-gray-600 dark:text-gray-300">
            Sử dụng cùng component library, token và context nên bạn chỉ tập trung xây dựng trải nghiệm. Không còn nỗi lo lệch thiết kế giữa các nhóm sản phẩm.
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {operations.map((operation) => (
              <div
                key={operation.title}
                className="rounded-2xl border border-gray-200 bg-gray-50 p-5 shadow-sm dark:border-gray-800 dark:bg-gray-900"
              >
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
  );
}
