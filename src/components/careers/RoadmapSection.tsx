import React from 'react';
import * as LucideIcons from 'lucide-react';
import roadmapsData from '@/data/roadmaps.json';

interface RoadmapSectionProps {
  slug: string;
}

export function RoadmapSection({ slug }: RoadmapSectionProps) {
  const roadmap = (roadmapsData as Record<string, any>)[slug];

  if (!roadmap) {
    return null;
  }

  return (
    <section className="bg-[#FFF1E8] py-8 sm:py-10 overflow-hidden relative w-full z-0">
    

      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <div className="text-center mb-6 px-4 md:px-8">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white text-[#f97316] font-semibold text-xs tracking-wider mb-4 shadow-[0_2px_10px_rgba(0,0,0,0.03)] border border-orange-100">
             <span className="w-1.5 h-1.5 rounded-full bg-[#f97316]"></span>
             LEARNING PATH
          </div>
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e1b4b] mb-2 tracking-tight">
            {roadmap.title}
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-base">
            {roadmap.subtitle}
          </p>
        </div>

        {/* Roadmap Timeline Container */}
        <div className="relative max-w-full overflow-x-auto pb-5 pt-1 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          
          {/* Inner container to hold cards horizontally */}
          <div className="flex w-max gap-3 px-4 md:px-8">
            {roadmap.stages.map((stage: any, index: number) => {
              const IconComponent = (LucideIcons as any)[stage.icon] || LucideIcons.Box;
              
              return (
                <div 
                  key={index} 
                    className="flex flex-col items-center relative snap-center w-[220px] md:w-[210px] shrink-0"
                >
                  {/* Horizontal line to next node (omitted for the last node) */}
                  {index < roadmap.stages.length - 1 && (
                    <div className="absolute top-[15px] left-1/2 w-[calc(100%+1.5rem)] h-[2px] bg-[#f97316]"></div>
                  )}

                  {/* Node / Timeline Circle */}
                  <div className="w-8 h-8 rounded-full bg-[#f97316] text-white flex items-center justify-center font-bold text-sm shadow-md ring-4 ring-[#FFF3EA] z-10 mb-0 relative">
                    {stage.id}
                  </div>
                  
                  {/* Vertical connecting line */}
                  <div className="w-[1px] h-8 bg-orange-300"></div>
                  
                  {/* Small colored dot above card */}
                  <div 
                    className="w-1.5 h-1.5 rounded-full mb-6"
                    style={{ backgroundColor: stage.accentColor }}
                  ></div>

                  {/* Card */}
                    <div className="w-full bg-white rounded-2xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100/60 flex flex-col relative min-h-[230px] transition-transform duration-300 hover:-translate-y-1">
                    <div className="flex flex-col items-center text-center mb-3">
                      <div 
                        className="w-9 h-9 rounded-xl flex items-center justify-center mb-2 bg-gray-50"
                      >
                        <IconComponent 
                          className="w-5 h-5" 
                          style={{ color: stage.accentColor }} 
                        />
                      </div>
                      <h3 className="font-bold text-[#1e1b4b] text-base leading-snug">
                        {stage.title}
                      </h3>
                    </div>
                    
                    <ul className="space-y-1.5 mt-auto">
                      {stage.bullets.map((bullet: string, bIdx: number) => (
                        <li key={bIdx} className="flex items-start gap-2 text-[11px] text-gray-500 font-medium leading-relaxed">
                          <span 
                            className="w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: stage.accentColor }}
                          ></span>
                          <span className="leading-tight text-left break-words">{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Bottom accent border (centered) */}
                    <div className="absolute bottom-0 left-0 right-0 flex justify-center">
                      <div 
                        className="h-1 w-3/4 rounded-t-md"
                        style={{ backgroundColor: stage.accentColor }}
                      ></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
