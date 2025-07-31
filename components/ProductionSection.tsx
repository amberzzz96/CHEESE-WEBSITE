import React from 'react';

const ProductionSection: React.FC = () => {
  return (
    <section className="py-20 lg:py-24 bg-cream-100">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="lg:w-1/2">
            <img 
              src="https://i.meee.com.tw/wqXoYjU.jpg" 
              alt="Cheese making process" 
              className="rounded-lg shadow-xl w-full h-auto object-cover"
            />
          </div>
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-3xl lg:text-5xl font-bold text-brown-800 mb-6 font-serif-display">熟成的藝術</h2>
            <p className="text-lg text-brown-800 leading-relaxed mb-4">
              「Affinage」是法文中起司熟成工藝的術語。這是一場由溫度、濕度和時間交織而成的細膩之舞，並由技藝精湛的熟成師（affineur）悉心引導。
            </p>
            <p className="text-lg text-brown-800 leading-relaxed">
              這個關鍵步驟將簡單的凝乳轉化為複雜的傑作，發展出細膩的風味、質地和香氣，使每款起司都獨一無二。正是在這裡，起司真正找到了它的靈魂。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionSection;
