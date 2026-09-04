import React from 'react';
import courseThemes from '@/data/courseThemes.json';

interface JobInsightsProps {
  slug: string;
}

// Inline SVG icons
const CalendarIcon = ({ color }: { color: string }) => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
    <line x1="16" y1="2" x2="16" y2="6"/>
    <line x1="8" y1="2" x2="8" y2="6"/>
    <line x1="3" y1="10" x2="21" y2="10"/>
  </svg>
);

const BuildingIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="18" height="18" rx="1"/>
    <path d="M9 22v-8h6v8"/>
    <path d="M9 7h.01M15 7h.01M9 11h.01M15 11h.01"/>
  </svg>
);

const BarChartIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10"/>
    <line x1="12" y1="20" x2="12" y2="4"/>
    <line x1="6" y1="20" x2="6" y2="14"/>
    <line x1="2" y1="20" x2="22" y2="20"/>
  </svg>
);

const WalletIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 12V8H6a2 2 0 0 1 0-4h14v4"/>
    <path d="M4 6v14a2 2 0 0 0 2 2h14v-4"/>
    <path d="M18 12a2 2 0 0 0 0 4h4v-4Z"/>
  </svg>
);

const UsersIcon = ({ color }: { color: string }) => (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
    <circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
);

// Subtle tech-pattern background using SVG
function TechPattern({ color }: { color: string }) {
  const op = 0.14;
  const symbols = [
    { x: 10,   y: 40,  size: 18, text: '</>' },
    { x: 75,   y: 28,  size: 15, text: '⌨' },
    { x: 140,  y: 45,  size: 18, text: '{}' },
    { x: 210,  y: 32,  size: 16, text: '☁' },
    { x: 270,  y: 50,  size: 14, text: '⊞' },
    { x: 335,  y: 30,  size: 20, text: '</>' },
    { x: 405,  y: 46,  size: 15, text: 'PHP' },
    { x: 475,  y: 28,  size: 18, text: '{}' },
    { x: 545,  y: 44,  size: 14, text: '⊟' },
    { x: 610,  y: 34,  size: 20, text: '</>' },
    { x: 680,  y: 48,  size: 15, text: '⌂' },
    { x: 748,  y: 30,  size: 16, text: 'PHP' },
    { x: 818,  y: 46,  size: 18, text: '{}' },
    { x: 888,  y: 28,  size: 14, text: '☁' },
    { x: 955,  y: 44,  size: 20, text: '</>' },
    { x: 1025, y: 32,  size: 15, text: '⊞' },
    { x: 1095, y: 48,  size: 18, text: '{}' },
    { x: 1165, y: 28,  size: 14, text: '⌨' },
    { x: 1230, y: 44,  size: 20, text: '</>' },

    { x: 5,    y: 105, size: 14, text: 'PHP' },
    { x: 70,   y: 92,  size: 18, text: '⊡' },
    { x: 138,  y: 108, size: 16, text: '</>' },
    { x: 208,  y: 94,  size: 14, text: '⌂' },
    { x: 275,  y: 110, size: 20, text: '{}' },
    { x: 345,  y: 90,  size: 15, text: 'PHP' },
    { x: 414,  y: 106, size: 18, text: '⊞' },
    { x: 484,  y: 92,  size: 14, text: '☁' },
    { x: 552,  y: 108, size: 20, text: '</>' },
    { x: 624,  y: 94,  size: 15, text: '{}' },
    { x: 692,  y: 110, size: 18, text: '⌨' },
    { x: 762,  y: 90,  size: 14, text: 'PHP' },
    { x: 832,  y: 106, size: 20, text: '</>' },
    { x: 902,  y: 92,  size: 16, text: '⊟' },
    { x: 970,  y: 108, size: 18, text: '{}' },
    { x: 1040, y: 90,  size: 14, text: '⌂' },
    { x: 1108, y: 106, size: 20, text: 'PHP' },
    { x: 1178, y: 92,  size: 15, text: '☁' },
    { x: 1245, y: 108, size: 18, text: '</>' },

    { x: 20,   y: 165, size: 18, text: '{}' },
    { x: 90,   y: 152, size: 14, text: '⊞' },
    { x: 158,  y: 168, size: 20, text: '</>' },
    { x: 228,  y: 154, size: 15, text: '◈' },
    { x: 296,  y: 170, size: 16, text: 'PHP' },
    { x: 366,  y: 154, size: 18, text: '⌂' },
    { x: 436,  y: 167, size: 14, text: '☁' },
    { x: 504,  y: 153, size: 20, text: '</>' },
    { x: 574,  y: 167, size: 18, text: '{}' },
    { x: 644,  y: 155, size: 14, text: '⊡' },
    { x: 712,  y: 168, size: 16, text: 'PHP' },
    { x: 782,  y: 152, size: 20, text: '⌨' },
    { x: 852,  y: 168, size: 14, text: '</>' },
    { x: 920,  y: 154, size: 18, text: '{}' },
    { x: 990,  y: 167, size: 15, text: '⊞' },
    { x: 1058, y: 154, size: 20, text: '</>' },
    { x: 1128, y: 168, size: 14, text: '{}' },
    { x: 1198, y: 152, size: 18, text: '☁' },
  ];

  return (
    <svg
      className="absolute inset-0 w-full h-full pointer-events-none select-none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      {symbols.map((s, i) => (
        <text
          key={i}
          x={s.x}
          y={s.y}
          fontSize={s.size}
          fill={color}
          fillOpacity={op}
          fontFamily="monospace, sans-serif"
          fontWeight="600"
        >
          {s.text}
        </text>
      ))}
    </svg>
  );
}

export function JobInsights({ slug }: JobInsightsProps) {
  const theme = (courseThemes as Record<string, any>)[slug] ?? {
    color: '#4CAF50',
    colorLight: '#E8F5E9',
    colorMid: '#81C784',
  };

  const { color, colorLight, colorMid } = theme;

  // Derive a slightly darker shade for the gradient start
  const gradientStyle = {
    background: `linear-gradient(110deg, ${color}e0 0%, ${colorMid}cc 60%, ${color}99 100%)`,
  };

  const stats = [
    { icon: <BuildingIcon color={color} />, value: '4',       label: 'Hiring Companies' },
    { icon: <BarChartIcon color={color} />, value: '₹14 LPA', label: 'Highest Package'  },
    { icon: <WalletIcon   color={color} />, value: '₹6.8 LPA',label: 'Average Package'  },
    { icon: <UsersIcon    color={color} />, value: '10',      label: 'Students Placed'  },
  ];

  return (
    <section className="relative w-full overflow-hidden" style={gradientStyle}>
      {/* Tech icon pattern layer */}
      <TechPattern color="#ffffff" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-5 md:px-8 py-5 md:py-6 flex flex-col md:flex-row gap-4 items-center">

        {/* ── LEFT: Text panel ─────────────────────────── */}
        <div className="shrink-0 w-full md:w-[230px] flex flex-col gap-2 text-white">
          {/* Icon square + badge */}
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
              style={{ backgroundColor: 'rgba(255,255,255,0.25)' }}
            >
              <CalendarIcon color="#ffffff" />
            </div>
            <div
              className="flex items-center gap-1 px-3 py-[5px] rounded-full text-[11px] font-bold tracking-widest uppercase"
              style={{ backgroundColor: 'rgba(255,255,255,0.22)', color: '#fff' }}
            >
              JOB INSIGHTS <span className="text-sm">›</span>
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-lg font-bold leading-snug text-white mt-1">
            Jobs Posted Daily for This Role
          </h2>

          {/* Big stat */}
          <p className="text-[44px] font-black leading-none text-white">500+</p>

          {/* Subtext */}
          <p className="text-sm text-white/80 leading-relaxed -mt-1">
            Fresh job opportunities are available every day. Don't miss out!
          </p>

          {/* CTA Button */}
          <button
            className="self-start mt-1 inline-flex items-center gap-2 bg-white rounded-full px-4 py-2 text-xs font-bold shadow-md transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ color }}
          >
            View All Jobs <span className="text-base">→</span>
          </button>
        </div>

        {/* ── RIGHT: 4 stat cards ───────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-3 flex-1 w-full items-stretch">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex-1 h-[145px] md:h-[230px] bg-white rounded-2xl flex flex-col items-center justify-start text-center pt-4 md:pt-6 pb-3 md:pb-5 px-3 md:px-4 shadow-sm"
            >
              {/* Circle icon */}
              <div
                className="w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center border-2 mb-2 md:mb-4"
                style={{ borderColor: colorMid, backgroundColor: colorLight }}
              >
                {stat.icon}
              </div>

              {/* Value */}
              <p
                className="text-2xl md:text-[28px] font-extrabold leading-none mb-1 md:mb-2"
                style={{ color }}
              >
                {stat.value}
              </p>

              {/* Accent divider */}
              <div
                className="w-7 h-[3px] rounded-full mb-2 md:mb-3"
                style={{ backgroundColor: colorMid }}
              />

              {/* Label */}
              <p className="text-xs md:text-sm font-semibold text-gray-700 leading-tight">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
