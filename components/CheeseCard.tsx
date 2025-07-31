
import React from 'react';
import { Cheese } from '../types';

interface CheeseCardProps {
  cheese: Cheese;
  onSelectCheese: (cheese: Cheese) => void;
}

const CheeseCard: React.FC<CheeseCardProps> = ({ cheese, onSelectCheese }) => {
  return (
    <div
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer group transform hover:-translate-y-2 transition-all duration-300 ease-in-out"
      onClick={() => onSelectCheese(cheese)}
    >
      <div className="relative h-48">
        <img src={cheese.mainImage} alt={cheese.name} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
      </div>
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-brown-800">{cheese.name}</h3>
        <p className="text-sm text-gray-500">{cheese.country}</p>
      </div>
    </div>
  );
};

export default CheeseCard;
