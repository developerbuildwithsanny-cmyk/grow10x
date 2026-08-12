import { ArrowRightIcon, Container } from "@/components/ui";
import { domains } from "@/lib/data";
import {
  Stethoscope,
  Briefcase,
  Palette,
  GraduationCap,
  Scale,
  Megaphone,
  Code2,
  Sprout,
  Newspaper,
  UserPlus,
  Truck,
  Laptop,
} from "lucide-react";

export function DomainCourses() {
  const getDomainIcon = (domain: string) => {
    switch (domain) {
      case "Healthcare":
        return <Stethoscope className="h-5 w-5 text-green" />;
      case "Business/Finance":
        return <Briefcase className="h-5 w-5 text-green" />;
      case "Design/Creative":
        return <Palette className="h-5 w-5 text-green" />;
      case "Education/Research":
        return <GraduationCap className="h-5 w-5 text-green" />;
      case "Law/Compliance":
        return <Scale className="h-5 w-5 text-green" />;
      case "Marketing/Sales":
        return <Megaphone className="h-5 w-5 text-green" />;
      case "Engineering/Dev":
        return <Code2 className="h-5 w-5 text-green" />;
      case "Agriculture":
        return <Sprout className="h-5 w-5 text-green" />;
      case "Media/Journalism":
        return <Newspaper className="h-5 w-5 text-green" />;
      case "HR/Recruitment":
        return <UserPlus className="h-5 w-5 text-green" />;
      case "Logistics":
        return <Truck className="h-5 w-5 text-green" />;
      case "Freelancers":
        return <Laptop className="h-5 w-5 text-green" />;
      default:
        return <Laptop className="h-5 w-5 text-green" />;
    }
  };

  return (
    <section className="bg-dark py-24">
      <Container className="flex flex-col gap-16">
        <div className="flex flex-col gap-4">
          <p className="font-mono text-sm font-bold uppercase tracking-[0.1em] text-yellow">
            LEARN BY DOMAIN
          </p>
          <h2 className="font-heading text-[48px] font-extrabold leading-[48px] text-white">
            AI Courses for <span className="text-green">Every Field</span>
          </h2>
        </div>
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4">
          {domains.map((domain) => (
            <a
              key={domain}
              href="#"
              className="group flex h-[90px] items-center justify-between rounded-xl border border-border bg-card px-6 py-6 transition-colors hover:border-green"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-10">
                  {getDomainIcon(domain)}
                </div>
                <span className="text-base font-bold text-white">
                  {domain}
                </span>
              </div>
              <ArrowRightIcon className="text-muted opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
