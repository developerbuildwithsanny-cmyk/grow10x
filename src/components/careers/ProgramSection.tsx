"use client";

import { useState } from "react";
import { Container } from "@/components/ui";
import { ProgramCard } from "./ProgramCard";

export interface Program {
  slug: string;
  title: string;
  viewDetailsLink: string;
  heroImage?: string;
  programTitle?: string;
  description: string;
  bannerImage: string;
  technologies: string[];
  duration: string;
  projects: string;
  level: string;
}

export function ProgramSection({ programs }: { programs: Program[] }) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  
  const totalPages = Math.ceil(programs.length / itemsPerPage);
  
  const currentPrograms = programs.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <section className="bg-white py-2 sm:py-3" id="our-programs">
      <Container className="max-w-[960px]">
        <div className="text-center mb-4">
          <p className="font-bold text-xs uppercase tracking-widest text-[#f26a21] mb-2">Our Programs</p>
          <h2 className="font-heading text-2xl sm:text-3xl font-extrabold text-black mb-1">
            Choose your path to a tech career
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Industry-aligned programs with real projects, mentor support, and placement assistance.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {currentPrograms.map((program) => (
            <ProgramCard key={program.slug} program={program} />
          ))}
        </div>
        
        {totalPages > 1 && (
          <div className="mt-6 flex justify-center items-center gap-2">
            <button
              onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
              disabled={currentPage === 1}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-[#f1f5f9]"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {Array.from({ length: totalPages }).map((_, idx) => {
              const page = idx + 1;
              return (
                <button
                  key={page}
                  onClick={() => setCurrentPage(page)}
                  className={`w-8 h-8 flex items-center justify-center rounded font-bold text-[13px] transition-colors border ${
                    currentPage === page
                      ? "bg-[#f26a21] text-white border-[#f26a21]"
                      : "border-[#e2e8f0] text-gray-500 hover:bg-gray-50 bg-white"
                  }`}
                >
                  {page}
                </button>
              );
            })}
            
            <button
              onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
              disabled={currentPage === totalPages}
              className="w-8 h-8 flex items-center justify-center rounded border border-gray-200 text-gray-400 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors bg-white"
            >
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        )}
      </Container>
    </section>
  );
}
