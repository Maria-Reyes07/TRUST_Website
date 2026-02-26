import { useEffect, useState } from 'react';

export function LionLogo() {
  const [glitchIntensity, setGlitchIntensity] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setGlitchIntensity(Math.random());
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      {/* Glitch overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          opacity: glitchIntensity > 0.9 ? 0.5 : 0,
          background: 'repeating-linear-gradient(0deg, rgba(255,255,255,0.1) 0px, transparent 2px)',
        }}
      />
      
      {/* Logo container */}
      <div className="relative p-8">
        {/* Scanlines */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-20"
          style={{
            background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.05) 2px, rgba(255,255,255,0.05) 4px)',
          }}
        />
        
        {/* --- IMAGE SECTION --- */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <img 
              src="./src/assets/trust-logo.png" // Update this path!
              alt="Lion Logo"
              className="w-full h-auto max-w-[550px] mx-auto object-contain transition-transform duration-75"
                style={{
                  transform: glitchIntensity > 0.9 ? `translate(${Math.random() * 6 - 3}px, ${Math.random() * 6 - 3}px)` : 'none',
                }}
            />
            {/* Image Glow Effect */}
            <div className="absolute inset-0 bg-white opacity-5 blur-2xl rounded-full -z-10" />
          </div>
        </div>
        {/* --------------------- */}

        {/* Title */}
        <h1 
          className="text-7xl md:text-9xl font-bold text-center mb-4 tracking-wider"
          style={{
            textShadow: glitchIntensity > 0.85 ? '5px 5px 0 rgba(255,255,255,0.3), -5px -5px 0 rgba(255,255,255,0.3)' : 'none',
          }}
        >
          T.R.U.S.T.
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-center text-gray-300 tracking-widest mb-8">
          THE REALITY UNTIL SIGHT TRANSFORM
        </p>

        {/* Static effect */}
        {glitchIntensity > 0.95 && (
          <div 
            className="absolute inset-0 pointer-events-none opacity-50"
            style={{
              background: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' /%3E%3C/svg%3E")`,
            }}
          />
        )}
      </div>
    </div>
  );
}