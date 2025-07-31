import React, { useState, useCallback } from 'react';
import { QUIZ_QUESTIONS } from '../constants';
import { getCheeseRecommendation } from '../services/geminiService';
import { LoadingSpinner } from './icons';

const QuizSection: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [recommendation, setRecommendation] = useState('');
  const [error, setError] = useState('');
  const [isCompleted, setIsCompleted] = useState(false);

  const handleAnswer = useCallback(async (optionValue: string) => {
    const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];
    const newAnswers = { ...answers, [currentQuestion.key]: optionValue };
    setAnswers(newAnswers);

    if (currentQuestionIndex < QUIZ_QUESTIONS.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setIsLoading(true);
      setError('');
      try {
        const result = await getCheeseRecommendation(newAnswers);
        setRecommendation(result);
      } catch (e) {
        setError("發生錯誤，請再試一次。");
        console.error(e);
      } finally {
        setIsLoading(false);
        setIsCompleted(true);
      }
    }
  }, [currentQuestionIndex, answers]);

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers({});
    setIsLoading(false);
    setRecommendation('');
    setError('');
    setIsCompleted(false);
  };

  const currentQuestion = QUIZ_QUESTIONS[currentQuestionIndex];

  return (
    <section className="py-20 lg:py-24 bg-cream-200">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl lg:text-5xl font-bold text-brown-800 mb-4 font-serif-display">你的風味探險</h2>
        <p className="text-lg text-brown-800 max-w-2xl mx-auto mb-12">
          回答幾個問題，為您的味蕾找到最完美的起司。
        </p>
        
        <div className="bg-cream-100 rounded-xl shadow-lg p-8 md:p-12 min-h-[30rem] flex flex-col justify-center items-center transition-all duration-500">
          {!isCompleted && !isLoading && (
            <div className="w-full animate-fade-in">
              <img src={currentQuestion.image} alt="Quiz visual" className="w-full h-48 object-cover rounded-lg mb-8 shadow-md" />
              <h3 className="text-2xl font-semibold text-brown-800 mb-8">{currentQuestion.question}</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.value}
                    onClick={() => handleAnswer(option.value)}
                    className="bg-white text-brown-800 font-semibold py-4 px-6 rounded-lg shadow hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
                  >
                    {option.text}
                  </button>
                ))}
              </div>
            </div>
          )}

          {isLoading && <LoadingSpinner className="w-16 h-16 text-accent-orange" />}

          {isCompleted && (
            <div className="animate-fade-in text-left">
              <h3 className="text-2xl font-bold text-accent-orange mb-4">您的完美起司正等待著...</h3>
              {error ? (
                <p className="text-red-500">{error}</p>
              ) : (
                <p className="text-brown-800 whitespace-pre-line leading-relaxed">{recommendation}</p>
              )}
              <button
                onClick={restartQuiz}
                className="mt-8 bg-accent-green text-white font-bold py-2 px-6 rounded-full hover:bg-opacity-90 transition-transform duration-200"
              >
                重新開始
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default QuizSection;
