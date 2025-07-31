import React from 'react';
import { ArrowDownIcon } from './icons';

interface HeroSectionProps {
  onExploreClick: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({ onExploreClick }) => {
  return (
    <section className="h-screen w-full flex flex-col items-center justify-center relative text-white bg-cover bg-center" style={{ backgroundImage: "url('https://i.meee.com.tw/9xBX4Z7.jpg')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 text-center flex flex-col items-center animate-fade-in-up">
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-serif-display mb-4 tracking-wider">
          一場起司的壯遊
        </h1>
        <p className="text-lg md:text-xl max-w-2xl mb-8 text-cream-200">
          探索世界上最受喜愛食物背後的故事、風味與藝術。
        </p>
        <button
          onClick={onExploreClick}
          className="bg-accent-orange text-brown-800 font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          開始探索
        </button>
      </div>
      <div className="absolute bottom-10 z-10 animate-bounce">
        <ArrowDownIcon className="w-8 h-8 text-white" />
      </div>
    </section>
  );
};

export default HeroSection;
