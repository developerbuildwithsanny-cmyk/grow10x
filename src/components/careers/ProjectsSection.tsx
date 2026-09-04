import React from 'react';
import * as LucideIcons from 'lucide-react';
import projectsData from '@/data/projects.json';
import roadmapsData from '@/data/roadmaps.json';

interface ProjectsSectionProps {
  slug: string;
}

export function ProjectsSection({ slug }: ProjectsSectionProps) {
  const projects = (projectsData as Record<string, any>)[slug];
  const roadmap = (roadmapsData as Record<string, any>)[slug];

  if (!projects || projects.length === 0) {
    return null;
  }

  return (
    
      
    <section className="bg-[#FFF7F2] py-8 sm:py-10 px-4 md:px-8 w-full relative z-0">
      <div className="max-w-[1400px] mx-auto">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-6">
          {/* Portfolio Builds Badge */}
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-[2px] bg-orange-200"></div>
            <span className="text-orange-400 font-bold text-[11px] tracking-widest uppercase bg-[#FFF3EA] px-3 py-1 rounded-full">
              PORTFOLIO BUILDS
            </span>
            <div className="w-10 h-[2px] bg-orange-200"></div>
          </div>
          
          <h2 className="text-2xl md:text-4xl font-bold text-[#1e1b4b] mb-3">
            Projects You'll Build
          </h2>
          
          {/* Capstone Badge */}
          <div className="inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full border border-orange-100 shadow-sm">
            <LucideIcons.Star className="w-3.5 h-3.5 text-orange-400 fill-orange-400" />
            <span className="text-orange-500 font-medium text-xs">
              Capstone: AI-powered Live Projects
            </span>
          </div>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project: any, index: number) => {
            const IconComponent = (LucideIcons as any)[project.icon] || LucideIcons.Box;
            return (
              <div 
                key={index} 
                className="bg-white rounded-3xl p-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 flex gap-3 h-[190px] relative overflow-hidden group hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300"
              >
                {/* Top-left blob shape */}
                <div className="absolute top-0 left-0 w-24 h-24 bg-[#FFF3EA] rounded-br-[60px] -z-0"></div>
                
                {/* Icon */}
                <div className="absolute top-5 left-5 text-[#f97316] z-10">
                  <IconComponent className="w-6 h-6 stroke-[2]" />
                </div>

                {/* Left Text Content */}
                <div className="flex flex-col w-[35%] z-10 mt-[62px] pr-2">
                  <h3 className="font-bold text-[#1e1b4b] text-sm leading-snug mb-1 break-words">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-xs leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>

                {/* Right Image */}
                <div className="w-[65%] h-full flex flex-col justify-center relative z-10 pl-1">
                  <div className="w-full h-[84%] relative rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-50">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover object-left-top" 
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View More Button */}
        <div className="mt-6 text-center">
          <button className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-gradient-to-r from-[#f43f5e] to-[#fb923c] text-white font-semibold text-sm shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 active:scale-95">
            View More <LucideIcons.ArrowRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}
