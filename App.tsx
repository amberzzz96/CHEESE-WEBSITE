
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Cheese } from './types';
import { CHEESE_DATA } from './constants';
import HeroSection from './components/HeroSection';
import IntroductionSection from './components/IntroductionSection';
import CheeseExplorerSection from './components/CheeseExplorerSection';
import ProductionSection from './components/ProductionSection';
import QuizSection from './components/QuizSection';
import Footer from './components/Footer';
import CheeseDetailModal from './components/CheeseDetailModal';
import { CloseIcon } from './components/icons';

const AnimatedSection: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <div ref={ref} className={`transition-all duration-1000 ease-in-out transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'} ${className || ''}`}>
      {children}
    </div>
  );
};

export default function App() {
  const [selectedCheese, setSelectedCheese] = useState<Cheese | null>(null);
  const introRef = useRef<HTMLDivElement>(null);
  const explorerRef = useRef<HTMLDivElement>(null);

  const handleSelectCheese = useCallback((cheese: Cheese) => {
    setSelectedCheese(cheese);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedCheese(null);
  }, []);

  const handleScrollTo = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-cream-100 text-brown-800 antialiased">
      <main>
        <HeroSection onExploreClick={() => handleScrollTo(introRef)} />
        
        <div ref={introRef}>
          <AnimatedSection>
            <IntroductionSection onExploreCheesesClick={() => handleScrollTo(explorerRef)} />
          </AnimatedSection>
        </div>

        <div ref={explorerRef}>
          <AnimatedSection>
            <CheeseExplorerSection cheeses={CHEESE_DATA} onSelectCheese={handleSelectCheese} />
          </AnimatedSection>
        </div>

        <AnimatedSection>
          <ProductionSection />
        </AnimatedSection>

        <AnimatedSection>
          <QuizSection />
        </AnimatedSection>

        <Footer />
      </main>

      <CheeseDetailModal cheese={selectedCheese} onClose={handleCloseModal} />
    </div>
  );
}
