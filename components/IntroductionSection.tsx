import React from 'react';

interface IntroductionSectionProps {
  onExploreCheesesClick: () => void;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onExploreCheesesClick }) => {
  return (
    <section className="py-20 lg:py-32 bg-cream-100">
      <div className="container mx-auto px-6 text-center max-w-4xl">
        <h2 className="text-3xl lg:text-5xl font-bold text-brown-800 mb-6 font-serif-display">不僅僅是食物</h2>
        <p className="text-lg lg:text-xl text-brown-800 leading-relaxed mb-10">
          起司是一部活生生的歷史，一門傳承數世紀的工藝，也是文化與風土的生動體現。從法國的青翠田野到義大利的高山牧場，每一塊起司都訴說著一個故事。在這裡，我們邀請您來發現這個故事。
        </p>
        <button
          onClick={onExploreCheesesClick}
          className="bg-accent-green text-white font-bold py-3 px-8 rounded-full text-lg hover:bg-opacity-90 transform hover:scale-105 transition-all duration-300 ease-in-out"
        >
          探索起司種類
        </button>
      </div>
    </section>
  );
};

export default IntroductionSection;
