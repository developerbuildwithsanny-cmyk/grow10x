import Image from "next/image";
import { Container } from "@/components/ui";

const features = [
  {
    title: "Real Projects",
    description: "Work on real-time industry projects and build your strong portfolio.",
    image: "/images/careers/real-projects.webp",
  },
  {
    title: "CPRP Training",
    description: "Learn CPRP skills to enhance your personality and career growth.",
    image: "/images/careers/cprp-training.webp",
  },
  {
    title: "100% Mentorship",
    description: "Learn directly from experts with 1-on-1 guidance and continuous support.",
    image: "/images/careers/mentorship.webp",
  },
  {
    title: "Resume & Support",
    description: "Get a professional resume review and career support.",
    image: "/images/careers/resume-support.webp",
  },
  {
    title: "Until You Get Hired",
    description: "We stay with you always - continuous support until you land your dream job.",
    image: "/images/careers/hired-support.webp",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-white py-10 sm:py-12">
      <Container>
        <div className="text-center mb-8">
          <p className="font-bold text-xs uppercase tracking-widest text-[#f26a21] mb-3 flex items-center justify-center gap-2">
            <span className="text-[#f26a21]">★</span> Why Choose Us
          </p>
          <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-black mb-3">
            Everything You Need to <span className="text-[#f26a21] underline decoration-[#f26a21] decoration-4 underline-offset-4">Succeed</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {features.map((feature, idx) => (
            <div 
              key={idx} 
              className="group relative rounded-2xl overflow-hidden h-[240px] sm:h-[260px] shadow-md transition-transform hover:-translate-y-1"
            >
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                <h3 className="font-bold text-white text-base mb-1">{feature.title}</h3>
                <p className="text-xs text-gray-300 line-clamp-3">{feature.description}</p>
                <div className="h-0.5 w-8 bg-[#f26a21] mx-auto mt-3 rounded-full"></div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
