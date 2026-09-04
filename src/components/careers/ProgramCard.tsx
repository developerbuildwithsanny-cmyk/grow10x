import Image from "next/image";
import Link from "next/link";
import { Program } from "./ProgramSection";

export function ProgramCard({ program }: { program: Program }) {
  return (
    <div className="flex flex-col rounded-xl bg-[#FFF8F2] border border-[#fceee6] border-t-2 border-t-[#f26a21] shadow-sm overflow-hidden transition-transform hover:-translate-y-1">
      <div className="p-3 md:p-4 flex flex-col h-full">
        {/* Header: Icon + Title */}
        <div className="flex flex-row gap-2.5 mb-2">
          <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-[#f8fafc]">
            <Image
              src={program.bannerImage}
              alt={`${program.title} icon`}
              width={48}
              height={48}
              className="w-full h-full object-contain"
            />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-[13px] leading-tight text-black mb-1">{program.title}</h3>
            <p className="text-xs text-gray-600 line-clamp-3">
              {program.description}
            </p>
          </div>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {program.technologies.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="text-[10px] font-semibold text-[#d45815] bg-[#fff5ef] px-2 py-0.5 rounded-full"
            >
              {tech}
            </span>
          ))}
          {program.technologies.length > 4 && (
            <span className="text-[10px] font-semibold text-gray-600 bg-gray-50 px-2 py-0.5 rounded-full">
              +{program.technologies.length - 4}
            </span>
          )}
        </div>
        
        {/* Meta Info */}
        <div className="mt-auto grid grid-cols-2 gap-y-1 gap-x-2 pt-2 border-t border-gray-100">
          <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
            <svg className="w-4 h-4 text-[#d45815]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            {program.duration}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500">
            <svg className="w-4 h-4 text-[#d45815]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 002-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
            {program.projects}
          </div>
          <div className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 col-span-2">
            <svg className="w-4 h-4 text-[#d45815]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
            {program.level}
          </div>
        </div>
        
        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-2">
          <Link
          
            href={program.viewDetailsLink}
            className="w-full sm:flex-1 py-1 text-center text-[11px] font-bold text-[#f26a21] border border-[#f26a21] rounded-md hover:bg-[#fff5ef] transition-colors"
          >
            View Details
          </Link>
          <Link
            href={`/careers/${program.slug}`}
            className="w-full sm:flex-1 py-1 px-2 text-center text-[11px] font-bold text-white bg-[#f26a21] rounded-md hover:bg-[#d95514] transition-colors flex items-center justify-center gap-1"
          >
            Explore Program &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}
