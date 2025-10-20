export type Metric = {
  label: string;
  value: string;
  caption: string;
};

export type Product = {
  name: string;
  price: string;
  description: string;
  badge: string;
};

export type Operation = {
  title: string;
  description: string;
  meta: string;
};

export type PricingPlan = {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export type Testimonial = {
  quote: string;
  author: string;
  role: string;
};

export type Faq = {
  question: string;
  answer: string;
};
