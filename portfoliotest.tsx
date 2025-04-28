import { PortfolioItem } from "../types/portfolio";

export const portfolioItems: PortfolioItem[] = [
  {
    id: "1",
    title: "Personal Website",
    description: "My own responsive portfolio built with React and Tailwind.",
    imageUrl: "https://source.unsplash.com/random/300x200?portfolio",
    link: "https://yourportfolio.com",
  },
  {
    id: "2",
    title: "E-commerce Shop",
    description: "Full-stack shopping app using Next.js and Stripe.",
    imageUrl: "https://source.unsplash.com/random/300x200?ecommerce",
    link: "https://ecommerceexample.com",
  },
  {
    id: "3",
    title: "Blog Platform",
    description: "A beautiful blog platform built with Astro.",
    imageUrl: "https://source.unsplash.com/random/300x200?blog",
    link: "https://astroblog.com",
  },
];
