import React from 'react';
import { Cheese } from '../types';
import { CloseIcon } from './icons';

interface CheeseDetailModalProps {
  cheese: Cheese | null;
  onClose: () => void;
}

const CheeseDetailModal: React.FC<CheeseDetailModalProps> = ({ cheese, onClose }) => {
  if (!cheese) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center p-4 transition-opacity duration-300"
      onClick={onClose}
    >
      <div 
        className="bg-cream-100 rounded-lg shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto relative transform transition-all duration-300 scale-95 animate-fade-in-scale"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-4 right-4 text-brown-800 hover:text-accent-orange z-10">
          <CloseIcon className="w-8 h-8" />
        </button>
        <div className="grid grid-cols-1 md:grid-cols-2">
            <div className="md:h-full h-64">
                 <img src={cheese.mainImage} alt={cheese.name} className="w-full h-full object-cover md:rounded-l-lg" />
            </div>
            <div className="p-8 md:p-10">
                <h2 className="text-3xl lg:text-4xl font-bold text-brown-800 font-serif-display">{cheese.name}</h2>
                <p className="text-lg text-gray-500 mb-6">{cheese.pronunciation}</p>
                <div className="space-y-4 text-brown-800">
                    <p><strong className="font-semibold">產地:</strong> {cheese.region}, {cheese.country}</p>
                    <p><strong className="font-semibold">種類:</strong> {cheese.type}</p>
                    <p><strong className="font-semibold">風味:</strong> {cheese.flavor}</p>
                    <p><strong className="font-semibold">口感:</strong> {cheese.texture}</p>
                    <p><strong className="font-semibold">完美搭配:</strong> {cheese.pairing}</p>
                </div>
            </div>
        </div>
        <div className="p-8 md:p-10 bg-cream-200 rounded-b-lg">
             <h3 className="text-2xl font-bold text-brown-800 mb-4 font-serif-display">故事</h3>
             <p className="text-base leading-relaxed text-brown-800 mb-6">{cheese.story}</p>
             <div className="grid grid-cols-2 gap-4">
                {cheese.gallery.map((img, index) => (
                    <img key={index} src={img} alt={`${cheese.name} gallery ${index+1}`} className="w-full h-40 object-cover rounded-md shadow-sm"/>
                ))}
             </div>
        </div>
      </div>
    </div>
  );
};

export default CheeseDetailModal;
