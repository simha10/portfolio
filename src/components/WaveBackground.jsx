import React from 'react';

const WaveBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-indigo-900/10 to-gray-900"></div>
      
      {/* Animated waves */}
      <div className="absolute inset-0 opacity-30">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1440 800"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(99, 102, 241, 0.1)" />
              <stop offset="100%" stopColor="rgba(139, 92, 246, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(139, 92, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(59, 130, 246, 0.1)" />
            </linearGradient>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(59, 130, 246, 0.1)" />
              <stop offset="100%" stopColor="rgba(16, 185, 129, 0.1)" />
            </linearGradient>
          </defs>
          
          {/* Wave 1 */}
          <path
            d="M0,400 C300,200 600,600 900,300 C1200,0 1500,400 1800,200 L1800,800 L0,800 Z"
            fill="url(#waveGradient1)"
            className="animate-float"
            style={{ animationDuration: '15s' }}
          />
          
          {/* Wave 2 */}
          <path
            d="M0,500 C300,300 600,700 900,400 C1200,100 1500,500 1800,300 L1800,800 L0,800 Z"
            fill="url(#waveGradient2)"
            className="animate-float"
            style={{ animationDuration: '20s', animationDelay: '2s' }}
          />
          
          {/* Wave 3 */}
          <path
            d="M0,600 C300,400 600,800 900,500 C1200,200 1500,600 1800,400 L1800,800 L0,800 Z"
            fill="url(#waveGradient3)"
            className="animate-float"
            style={{ animationDuration: '25s', animationDelay: '4s' }}
          />
        </svg>
      </div>
      
      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-indigo-500/10"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 60 + 20}px`,
              height: `${Math.random() * 60 + 20}px`,
              animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
              animationDelay: `${Math.random() * 5}s`
            }}
          ></div>
        ))}
      </div>
      
      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/3 right-1/3 w-72 h-72 bg-indigo-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
    </div>
  );
};

export default WaveBackground;