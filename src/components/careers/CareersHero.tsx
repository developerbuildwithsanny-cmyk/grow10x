import Image from "next/image";
import { Container } from "@/components/ui";

export function CareersHero() {
  return (
    <section className="bg-[#FFFFFF] overflow-hidden py-4 sm:py-5 lg:py-2">
      <Container className="max-w-none px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-6">
          <div className="w-full lg:w-[45%]">
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-[28px] font-extrabold leading-tight tracking-tight text-black">
              Programs that build <span className="text-[#f26a21]">skills, careers</span> & confidence
            </h1>
            <p className="mt-2 text-[13px] sm:text-sm text-gray-700 max-w-lg leading-relaxed">
              Industry-focused programs designed with real projects, expert mentorship, and 100% placement support to launch your dream career.
            </p>
          </div>
          <div className="w-full lg:w-[50%] relative rounded-[20px] overflow-hidden shadow-md">
            <Image
              src="/images/careers/hero.webp"
              alt="Students and mentor collaborating"
              width={1000}
              height={500}
              className="w-full h-full object-cover aspect-[16/8] lg:aspect-[3.1/1]"
              priority
            />
          </div>
        </div>
        
        <div className="mt-4 lg:mt-[-20px] lg:w-[58%] relative z-10 grid grid-cols-2 lg:grid-cols-4 gap-1 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 py-2 px-2 md:px-3">
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left p-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#f26a21]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-black text-[11px] md:text-xs">Real Projects</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">Work on industry projects</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left p-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#f26a21]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-black text-[11px] md:text-xs">CPRP Clearance</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">Career readiness guaranteed</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left p-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#f26a21]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-black text-[11px] md:text-xs">1:1 Mentorship</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">Learn from industry experts</p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center gap-1 text-center sm:text-left p-1">
            <div className="w-8 h-8 flex items-center justify-center shrink-0">
              <svg className="w-5 h-5 text-[#f26a21]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </div>
            <div>
              <h3 className="font-bold text-black text-[11px] md:text-xs">Placement Support</h3>
              <p className="text-[10px] text-gray-500 mt-0.5">End-to-end placement help</p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
