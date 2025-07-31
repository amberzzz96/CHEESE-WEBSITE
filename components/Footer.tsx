import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-brown-800 text-cream-200 py-12">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-2xl font-bold text-white mb-4 font-serif-display">繼續您的旅程</h3>
        <p className="max-w-xl mx-auto mb-8">
          起司的世界既廣闊又美味。我們鼓勵您造訪當地的起司專賣店，多問、多學，並以開放的心態品嚐。
        </p>
        <div className="flex justify-center space-x-6 mb-8">
          <a href="#" className="hover:text-accent-orange transition-colors">選購起司</a>
          <a href="#" className="hover:text-accent-orange transition-colors">尋找食譜</a>
          <a href="#" className="hover:text-accent-orange transition-colors">了解更多</a>
        </div>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} 起司之旅. 版權所有. 僅供展示用途.</p>
      </div>
    </footer>
  );
};

export default Footer;
