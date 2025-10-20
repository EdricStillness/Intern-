import type { Testimonial } from "../types";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
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
  );
}
