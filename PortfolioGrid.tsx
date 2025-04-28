import React from "react";
import PortfolioCard from "./PortfolioCard";
import { portfolioItems } from "../data/portfolioData";

const PortfolioGrid: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">My Portfolio</h1>
      <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {portfolioItems.map((item) => (
          <PortfolioCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default PortfolioGrid;
