import type { Faq } from "../types";

interface FaqSectionProps {
  faqs: Faq[];
}

export function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section id="faq" className="space-y-6">
      <div>
        <h2 className="text-3xl font-semibold text-gray-900 dark:text-white">Câu hỏi thường gặp</h2>
        <p className="mt-2 max-w-2xl text-base text-gray-600 dark:text-gray-300">
          Cùng một nền tảng theme giúp rút ngắn thời gian ra mắt, từ landing đến hệ thống quản trị.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-gray-900"
          >
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{faq.question}</h3>
            <p className="mt-3 text-sm text-gray-600 dark:text-gray-300">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
