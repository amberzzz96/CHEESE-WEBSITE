import React from 'react';
import { Cheese } from '../types';
import CheeseCard from './CheeseCard';

interface CheeseExplorerSectionProps {
  cheeses: Cheese[];
  onSelectCheese: (cheese: Cheese) => void;
}

const CheeseExplorerSection: React.FC<CheeseExplorerSectionProps> = ({ cheeses, onSelectCheese }) => {
  return (
    <section className="py-20 lg:py-24 bg-cream-200">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-brown-800 mb-4 font-serif-display">風味的世界</h2>
          <p className="text-lg text-brown-800 max-w-2xl mx-auto">點擊任一款起司，發現其獨特的個性與故事。</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {cheeses.map(cheese => (
            <CheeseCard key={cheese.id} cheese={cheese} onSelectCheese={onSelectCheese} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CheeseExplorerSection;
