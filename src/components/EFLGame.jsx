import React, { useState, useEffect } from 'react';
import { CheckCircle, XCircle, RefreshCw, Trophy, Star, Heart, Sparkles } from 'lucide-react';

const EFLGame = () => {
  // Game questions based on the lesson
  const allQuestions = [
    // Letter recognition questions
    {
      id: 1,
      type: 'letter-start',
      question: 'Does cookie start with the letter C?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '🍪',
      word: 'cookie',
      encouragement: 'Yummy cookies start with C!'
    },
    {
      id: 2,
      type: 'letter-start',
      question: 'Does cookie start with the letter G?',
      options: ['Yes', 'No'],
      correct: 'No',
      icon: '🍪',
      word: 'cookie',
      encouragement: 'Cookie starts with C, not G!'
    },
    {
      id: 3,
      type: 'letter-start',
      question: 'Does car start with the letter C?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '🚗',
      word: 'car',
      encouragement: 'Cars go vroom and start with C!'
    },
    {
      id: 4,
      type: 'letter-start',
      question: 'Does goat start with the letter G?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '🐐',
      word: 'goat',
      encouragement: 'Goats say "baa" and start with G!'
    },
    {
      id: 5,
      type: 'letter-start',
      question: 'Does yes start with the letter C?',
      options: ['Yes', 'No'],
      correct: 'No',
      icon: '✅',
      word: 'yes',
      encouragement: 'Yes starts with the letter Y!'
    },
    {
      id: 6,
      type: 'letter-start',
      question: 'Does yes start with the letter Y?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '✅',
      word: 'yes',
      encouragement: 'Y-E-S spells YES!'
    },
    // Sentence completion questions
    {
      id: 7,
      type: 'sentence-completion',
      question: 'Is this a boy?',
      options: ['Yes', 'No'],
      correct: 'No',
      icon: '👧',
      context: 'Look at this happy girl!',
      encouragement: 'This is a girl, not a boy!'
    },
    {
      id: 8,
      type: 'sentence-completion',
      question: 'Is this a girl?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '👧',
      context: 'Look at this happy girl!',
      encouragement: 'Yes! This is a wonderful girl!'
    },
    {
      id: 9,
      type: 'sentence-completion',
      question: 'Is this a car?',
      options: ['Yes', 'No'],
      correct: 'Yes',
      icon: '🚗',
      context: 'Beep beep! What is this?',
      encouragement: 'Beep beep! This is a car!'
    },
    {
      id: 10,
      type: 'sentence-completion',
      question: 'Is this a goat?',
      options: ['Yes', 'No'],
      correct: 'No',
      icon: '🚗',
      context: 'Beep beep! What is this?',
      encouragement: 'This is a car, not a goat!'
    },
    // Article questions
    {
      id: 11,
      type: 'article-choice',
      question: 'Is this ___ C?',
      options: ['A', 'An'],
      correct: 'A',
      icon: '🌈C',
      context: 'The letter C is colorful!',
      encouragement: 'We say "A" before the letter C!'
    },
    {
      id: 12,
      type: 'article-choice',
      question: 'Is this ___ G?',
      options: ['A', 'An'],
      correct: 'A',
      icon: '🌈G',
      context: 'The letter G is great!',
      encouragement: 'We say "A" before the letter G!'
    }
  ];

  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [questionsPool, setQuestionsPool] = useState([]);
  const [missedQuestions, setMissedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [totalAnswered, setTotalAnswered] = useState(0);
  const [gamePhase, setGamePhase] = useState('initial');
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);
  const [celebrating, setCelebrating] = useState(false);

  // Fun celebration messages
  const celebrationMessages = [
    "🎉 Fantastic job! 🎉",
    "⭐ You're a superstar! ⭐",
    "🌟 Amazing work! 🌟",
    "🎊 Wonderful! 🎊",
    "💫 You did it! 💫",
    "🏆 Excellent! 🏆"
  ];

  const encouragementMessages = [
    "Keep trying! You're learning! 📚",
    "That's okay! Let's try again! 💪",
    "Good effort! Learning is fun! 🌈",
    "Don't worry! You're doing great! ⭐"
  ];

  // Initialize game
  useEffect(() => {
    startGame();
  }, []);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const startGame = () => {
    const shuffledQuestions = shuffleArray(allQuestions);
    setQuestionsPool(shuffledQuestions);
    setCurrentQuestion(shuffledQuestions[0]);
    setScore(0);
    setTotalAnswered(0);
    setMissedQuestions([]);
    setGamePhase('initial');
    setShowResult(false);
    setSelectedAnswer('');
  };

  const handleAnswer = (answer) => {
    setSelectedAnswer(answer);
    const correct = answer === currentQuestion.correct;
    setIsCorrect(correct);
    setShowResult(true);

    if (correct) {
      setScore(score + 1);
      setCelebrating(true);
      setTimeout(() => setCelebrating(false), 2000);
    } else {
      // Add to missed questions if not already there
      if (!missedQuestions.find(q => q.id === currentQuestion.id)) {
        setMissedQuestions([...missedQuestions, currentQuestion]);
      }
    }
    
    setTotalAnswered(totalAnswered + 1);
  };

  const nextQuestion = () => {
    setShowResult(false);
    setSelectedAnswer('');

    const remainingQuestions = questionsPool.slice(1);
    
    if (remainingQuestions.length === 0) {
      if (missedQuestions.length > 0 && gamePhase === 'initial') {
        setGamePhase('review');
        const shuffledMissed = shuffleArray(missedQuestions);
        setQuestionsPool(shuffledMissed);
        setCurrentQuestion(shuffledMissed[0]);
        setMissedQuestions([]);
      } else {
        setGamePhase('complete');
        setCurrentQuestion(null);
      }
    } else {
      setQuestionsPool(remainingQuestions);
      setCurrentQuestion(remainingQuestions[0]);
    }
  };

  const getQuestionTypeLabel = (type) => {
    switch (type) {
      case 'letter-start':
        return '🔤 Letter Fun Time!';
      case 'sentence-completion':
        return '📝 Sentence Adventure!';
      case 'article-choice':
        return '🎯 Word Magic!';
      default:
        return '🎮 Question Time!';
    }
  };

  const getProgressPercentage = () => {
    const totalQuestions = allQuestions.length;
    const answered = totalAnswered;
    return Math.min((answered / totalQuestions) * 100, 100);
  };

  if (gamePhase === 'complete') {
    const percentage = Math.round((score / totalAnswered) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
        <div className="max-w-2xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-yellow-300">
            <div className="text-center">
              <div className="text-8xl mb-4">🎉</div>
              <h2 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-6">
                WOW! You Did It!
              </h2>
              
              <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-8 rounded-2xl shadow-lg mb-6 border-4 border-orange-200">
                <div className="text-6xl font-bold text-orange-600 mb-4">{score}/{totalAnswered}</div>
                <div className="text-2xl text-orange-700 font-bold mb-4">{percentage}% Super Smart!</div>
                
                <div className="flex justify-center space-x-2 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="relative">
                      <Star 
                        className={`w-12 h-12 ${percentage >= (i + 1) * 20 ? 'text-yellow-400 fill-current' : 'text-gray-300'}`}
                      />
                      {percentage >= (i + 1) * 20 && (
                        <Sparkles className="w-4 h-4 text-yellow-300 absolute -top-1 -right-1 animate-pulse" />
                      )}
                    </div>
                  ))}
                </div>
                
                <div className="text-xl font-bold text-purple-600">
                  {percentage === 100 ? "🏆 PERFECT SCORE! You're AMAZING! 🏆" :
                   percentage >= 80 ? "⭐ Fantastic Job! You're a Star! ⭐" :
                   percentage >= 60 ? "🌟 Great Work! Keep Learning! 🌟" :
                   "💪 Good Try! Practice Makes Perfect! 💪"}
                </div>
              </div>
              
              <button
                onClick={startGame}
                className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 text-white font-bold py-4 px-8 rounded-full text-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center mx-auto transform hover:scale-105"
              >
                <RefreshCw className="w-6 h-6 mr-3" />
                🎮 Play Again! 🎮
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200 p-4">
      <div className="max-w-2xl mx-auto">
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 text-4xl animate-bounce">🌈</div>
        <div className="absolute top-20 right-10 text-3xl animate-pulse">⭐</div>
        <div className="absolute bottom-20 left-20 text-3xl animate-bounce delay-1000">🎈</div>

        {/* Header */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 mb-6 border-8 border-yellow-300">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                🎪 Learning Circus! 🎪
              </h1>
              <div className="text-lg font-bold text-orange-600">Letters C & G Adventure!</div>
            </div>
            <div className="text-right bg-gradient-to-r from-blue-100 to-purple-100 p-4 rounded-2xl border-4 border-blue-300">
              <div className="text-lg font-bold text-blue-700">Score: {score}/{totalAnswered} 🏆</div>
              <div className="text-sm text-purple-600 font-semibold">
                {gamePhase === 'review' ? '🔄 Practice Time!' : '🌟 Learning Time!'}
              </div>
            </div>
          </div>
          
          {/* Fun Progress Bar */}
          <div className="relative w-full bg-gray-200 rounded-full h-6 mb-2 border-4 border-white shadow-inner">
            <div 
              className="bg-gradient-to-r from-green-400 to-blue-500 h-full rounded-full transition-all duration-500 flex items-center justify-end pr-2"
              style={{ width: `${getProgressPercentage()}%` }}
            >
              {getProgressPercentage() > 15 && <span className="text-white font-bold text-sm">🚀</span>}
            </div>
          </div>
          
          <div className="text-center">
            <div className="inline-block bg-gradient-to-r from-pink-100 to-purple-100 px-4 py-2 rounded-full border-4 border-pink-300">
              <span className="font-bold text-purple-700">
                {getQuestionTypeLabel(currentQuestion.type)}
              </span>
            </div>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 border-8 border-orange-300 relative overflow-hidden">
          {/* Celebration overlay */}
          {celebrating && (
            <div className="absolute inset-0 bg-gradient-to-r from-yellow-200 to-orange-200 opacity-90 flex items-center justify-center z-10 animate-pulse">
              <div className="text-4xl font-bold text-orange-700">
                {celebrationMessages[Math.floor(Math.random() * celebrationMessages.length)]}
              </div>
            </div>
          )}

          {/* Icon/Visual */}
          <div className="text-center mb-6">
            <div className="text-8xl mb-4 animate-bounce">{currentQuestion.icon}</div>
            {currentQuestion.context && (
              <div className="text-lg font-semibold text-purple-600 bg-purple-100 px-6 py-3 rounded-full border-4 border-purple-300 inline-block">
                {currentQuestion.context}
              </div>
            )}
          </div>

          {/* Question */}
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8 bg-gradient-to-r from-blue-100 to-green-100 p-6 rounded-2xl border-4 border-green-300">
            {currentQuestion.question}
          </h2>

          {/* Answer Options */}
          {!showResult ? (
            <div className="space-y-4">
              {currentQuestion.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-6 text-2xl font-bold rounded-2xl border-4 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl ${
                    index === 0 
                      ? 'bg-gradient-to-r from-green-200 to-blue-200 border-green-400 hover:from-green-300 hover:to-blue-300 text-green-800'
                      : 'bg-gradient-to-r from-pink-200 to-purple-200 border-pink-400 hover:from-pink-300 hover:to-purple-300 text-purple-800'
                  }`}
                >
                  <span className="mr-3">{index === 0 ? '✨' : '🌟'}</span>
                  {option}
                  <span className="ml-3">{index === 0 ? '✨' : '🌟'}</span>
                </button>
              ))}
            </div>
          ) : (
            <div className="space-y-6">
              {/* Result Display */}
              <div className="text-center">
                {isCorrect ? (
                  <div className="bg-gradient-to-r from-green-100 to-blue-100 p-6 rounded-2xl border-4 border-green-400">
                    <div className="flex items-center justify-center text-green-700 text-2xl font-bold mb-3">
                      <CheckCircle className="w-10 h-10 mr-3" />
                      🎉 HOORAY! 🎉
                    </div>
                    <div className="text-lg font-semibold text-green-600 mb-2">
                      {currentQuestion.encouragement}
                    </div>
                    <div className="text-4xl">🌟⭐🌟</div>
                  </div>
                ) : (
                  <div className="bg-gradient-to-r from-orange-100 to-red-100 p-6 rounded-2xl border-4 border-orange-400">
                    <div className="flex items-center justify-center text-orange-700 text-2xl font-bold mb-3">
                      <Heart className="w-10 h-10 mr-3" />
                      Oops! Let's Learn!
                    </div>
                    <div className="text-lg font-semibold text-orange-600 mb-2">
                      {encouragementMessages[Math.floor(Math.random() * encouragementMessages.length)]}
                    </div>
                    <div className="text-base text-gray-700 mb-2">
                      You picked: <span className="font-bold text-orange-600">{selectedAnswer}</span>
                    </div>
                    <div className="text-base text-gray-700 mb-3">
                      The answer is: <span className="font-bold text-green-600">{currentQuestion.correct}</span>
                    </div>
                    <div className="text-lg text-purple-600 font-semibold">
                      {currentQuestion.encouragement}
                    </div>
                    <div className="text-3xl mt-2">💪📚💪</div>
                  </div>
                )}
              </div>

              {/* Next Button */}
              <div className="text-center">
                <button
                  onClick={nextQuestion}
                  className="bg-gradient-to-r from-purple-400 to-pink-500 hover:from-purple-500 hover:to-pink-600 text-white font-bold py-4 px-8 rounded-full text-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  <span className="mr-3">🚀</span>
                  {questionsPool.length > 1 ? 'Next Fun Question!' : 
                   (missedQuestions.length > 0 && gamePhase === 'initial') ? 'Practice Time!' : 'See My Results!'}
                  <span className="ml-3">🚀</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Encouraging Message */}
        {missedQuestions.length > 0 && gamePhase === 'initial' && !showResult && (
          <div className="mt-6 text-center">
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-4 rounded-2xl border-4 border-yellow-400 inline-block">
              <span className="text-lg font-bold text-orange-700">
                💡 Don't worry if you make mistakes! We'll practice together! 🤗
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EFLGame;
