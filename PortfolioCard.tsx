import React from "react";
import { PortfolioItem } from "../types/portfolio";

interface PortfolioCardProps {
  item: PortfolioItem;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ item }) => {
  return (
    <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300">
      <img src={item.imageUrl} alt={item.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl mb-2">{item.title}</h2>
        <p className="text-gray-600 text-sm">{item.description}</p>
        <a
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 inline-block text-blue-600 hover:underline text-sm"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default PortfolioCard;
