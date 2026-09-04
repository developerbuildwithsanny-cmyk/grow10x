import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui";

export function ExpertCTA() {
  return (
    <section className="bg-white pb-6 pt-4 sm:pb-8">
      <Container>
        <div className="relative rounded-3xl overflow-hidden bg-[#e05610] shadow-xl">
          {/* Background Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#f26a21] via-[#e55914] to-transparent z-10 w-full md:w-2/3"></div>
          
          <div className="flex flex-col md:flex-row items-center relative z-20">
            {/* Content Left */}
            <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-7 text-white z-20">
              <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl font-bold leading-tight mb-2">
                Learn from Experts<br />
                Who Walk the Talk
              </h2>
              <p className="text-white/90 mb-3 max-w-md text-xs md:text-sm leading-relaxed">
                Our mentors are industry professionals with real-world experience. Get personalized guidance, build in-demand skills, and accelerate your career growth.
              </p>
              <Link
                href="/requestcallback?source=Careers Expert CTA"
                className="inline-flex items-center gap-2 bg-white text-black font-bold py-2 px-4 rounded-md hover:bg-gray-100 transition-colors"
              >
                Request a Callback
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </Link>
            </div>
            
            {/* Image Right */}
            <div className="w-full md:w-1/2 h-44 md:h-full min-h-[220px] relative">
              <Image
                src="/images/careers/experts.webp"
                alt="Expert Mentors"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#e55914] hidden md:block"></div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
