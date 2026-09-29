
export function AnimatedAC() {
  return (
    <div className="relative w-full max-w-[420px] mx-auto rounded-3xl overflow-hidden bg-gradient-to-b from-[#E6F4FF] to-[#bfe1ff] dark:from-gray-800 dark:to-gray-900 shadow-[0_24px_60px_-15px_rgba(11,94,215,0.3)] dark:shadow-none"
         style={{ aspectRatio: '4/5', animation: 'ac-ambient 8s ease-in-out infinite' }}>
      
      <style>{`
        /* Global Ambient Tint */
        @keyframes ac-ambient {
          0%, 15% { filter: sepia(0.4) saturate(1.4) hue-rotate(-15deg); }
          40%, 100% { filter: none; }
        }

        /* The Sun fading out */
        @keyframes ac-sun {
          0%, 15% { opacity: 1; transform: scale(1); }
          40%, 100% { opacity: 0; transform: scale(0.6); }
        }

        /* Flap opening */
        @keyframes ac-flap {
          0%, 15% { transform: rotate(0); }
          25%, 100% { transform: rotate(-25deg); }
        }

        /* Temperature changing 30 to 22 */
        @keyframes ac-temp {
          0%, 20% { content: "30°"; }
          22% { content: "28°"; }
          24% { content: "26°"; }
          26% { content: "24°"; }
          28%, 100% { content: "22°"; }
        }

        /* LED Blink */
        @keyframes ac-led {
          0%, 15% { fill: #475569; }
          16%, 100% { fill: #38bdf8; }
        }

        /* Airflow lines */
        @keyframes ac-airflow {
          0%, 25% { opacity: 0; transform: translateY(-5%) scaleX(0.5); }
          40% { opacity: 1; }
          90%, 100% { opacity: 0; transform: translateY(180px) scaleX(1.4); }
        }

        /* Snowflakes */
        @keyframes ac-snow {
          0%, 25% { transform: translateY(0) rotate(0); opacity: 0; }
          35% { opacity: 1; }
          90%, 100% { transform: translateY(350px) rotate(360deg); opacity: 0; }
        }

        .temp-display::after {
          content: "30°";
          animation: ac-temp 8s steps(1) infinite;
        }
      `}</style>

      {/* Sun (Warm state) */}
      <div className="absolute top-[8%] right-[8%] w-[60px] h-[60px] rounded-full"
           style={{
             background: 'radial-gradient(circle, #FF7A1A, #ffd35a)',
             boxShadow: '0 0 50px 15px rgba(255,122,26,0.4)',
             animation: 'ac-sun 8s ease-in-out infinite'
           }}></div>

      {/* Living Room Illustration (Bottom) */}
      <div className="absolute bottom-0 left-0 w-full h-[40%] flex items-end justify-center px-8 opacity-80 dark:opacity-40">
        <svg viewBox="0 0 400 200" className="w-full h-auto">
          {/* Wall Baseboard */}
          <rect x="0" y="190" width="400" height="10" fill="#cbd5e1" />
          
          {/* Plant */}
          <path d="M 320 190 L 320 140 Q 300 120 320 100 Q 340 120 320 140" fill="#0B5ED7" opacity="0.6" />
          <path d="M 320 190 L 320 150 Q 340 140 350 110 Q 330 130 320 150" fill="#0A2A5E" opacity="0.4" />
          <rect x="300" y="160" width="40" height="30" rx="4" fill="#FF7A1A" opacity="0.8" />
          
          {/* Sofa */}
          <rect x="50" y="140" width="200" height="50" rx="10" fill="#0B5ED7" opacity="0.8" />
          <rect x="40" y="120" width="30" height="70" rx="8" fill="#0A2A5E" opacity="0.9" />
          <rect x="230" y="120" width="30" height="70" rx="8" fill="#0A2A5E" opacity="0.9" />
          <rect x="70" y="100" width="160" height="60" rx="10" fill="#0B5ED7" opacity="0.6" />
          
          {/* Pillow */}
          <path d="M 80 140 Q 95 120 110 140 Z" fill="#FF7A1A" opacity="0.9" />
        </svg>
      </div>

      {/* Snowflakes */}
      <div className="absolute top-[28%] left-0 w-full h-[60%] pointer-events-none overflow-hidden z-20">
        {[
          { l: '15%', s: 22, d: 4.5, del: 0.2 },
          { l: '30%', s: 16, d: 5.0, del: 1.1 },
          { l: '45%', s: 28, d: 4.0, del: 0.5 },
          { l: '60%', s: 18, d: 5.5, del: 1.8 },
          { l: '75%', s: 24, d: 4.8, del: 0.8 },
          { l: '85%', s: 14, d: 6.0, del: 1.5 },
        ].map((snow, i) => (
          <div key={i} className="absolute -top-[10%] text-white"
               style={{
                 left: snow.l, 
                 fontSize: `${snow.s}px`,
                 textShadow: '0 0 10px rgba(255,255,255,0.8)',
                 animation: `ac-snow ${snow.d}s linear ${snow.del}s infinite`
               }}>❄</div>
        ))}
      </div>

      {/* Airflow Waves */}
      <div className="absolute top-[26%] left-[15%] w-[70%] h-[40%] pointer-events-none z-10">
        {[0, 0.4, 0.8, 1.2, 1.6, 2.0].map((del, i) => (
          <div key={i} className="absolute w-full h-[8px] rounded-full blur-[2px]"
               style={{
                 top: `${i * 12}%`,
                 background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                 opacity: 0,
                 animation: `ac-airflow 3s ease-out ${del}s infinite`
               }}></div>
        ))}
      </div>

      {/* Detailed Split AC Unit (Top 85% width) */}
      <div className="absolute top-[6%] left-[7.5%] w-[85%] z-30">
        <svg viewBox="0 0 340 110" className="w-full h-auto drop-shadow-[0_15px_25px_rgba(10,42,94,0.15)]">
          {/* Main Body Chassis */}
          <rect x="10" y="10" width="320" height="85" rx="18" fill="#ffffff" />
          
          {/* Side curves for depth */}
          <path d="M 10 28 L 10 77 Q 10 95 28 95 L 312 95 Q 330 95 330 77 L 330 28 Z" fill="#f8fafc" />

          {/* Top Air Intake Grill */}
          <g stroke="#e2e8f0" strokeWidth="2.5" strokeLinecap="round">
            <line x1="40" y1="20" x2="300" y2="20" />
            <line x1="35" y1="26" x2="305" y2="26" />
            <line x1="30" y1="32" x2="310" y2="32" />
          </g>
          
          {/* Horizontal sleek design line */}
          <path d="M 10 65 Q 170 75 330 65" fill="none" stroke="#f1f5f9" strokeWidth="2" />
          
          {/* Brand/Logo Placeholder */}
          <rect x="25" y="55" width="24" height="4" rx="2" fill="#cbd5e1" />

          {/* Digital Display Area */}
          <rect x="260" y="45" width="45" height="24" rx="6" fill="#0A2A5E" />
          {/* Glass glare */}
          <path d="M 260 45 L 280 45 L 265 69 L 260 69 Z" fill="#ffffff" opacity="0.1" />
          {/* Temperature text injected via CSS */}
          <foreignObject x="260" y="45" width="45" height="24">
            <div className="w-full h-full flex items-center justify-center">
              <span className="temp-display text-[#38bdf8] font-mono font-bold text-[14px]" style={{ textShadow: '0 0 5px #38bdf8' }}></span>
            </div>
          </foreignObject>

          {/* Status LED */}
          <circle cx="250" cy="57" r="3" style={{ animation: 'ac-led 8s steps(1) infinite' }} />

          {/* Bottom Flap Area (Background cavity) */}
          <rect x="30" y="85" width="280" height="12" rx="6" fill="#1e293b" />

          {/* Animated Flap */}
          <g style={{ transformOrigin: '170px 85px', animation: 'ac-flap 8s ease-in-out infinite' }}>
            <rect x="30" y="85" width="280" height="12" rx="6" fill="#e2e8f0" />
            <rect x="30" y="85" width="280" height="6" rx="3" fill="#ffffff" />
          </g>
        </svg>
      </div>

    </div>
  );
}
