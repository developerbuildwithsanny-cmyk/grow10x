import Image from "next/image"
import { Star } from "lucide-react"

type Feature = {
  title: string
  description: string
  image: string
  alt: string
}

const features: Feature[] = [
  {
    title: "Real Projects",
    description: "Work on real-time industry projects and build your strong portfolio.",
    image: "/home_page_images/why-choose-us/real-projects.png",
    alt: "Two laptops showing colorful analytics dashboards on a bright office desk",
  },
  {
    title: "CPRP Training",
    description: "Learn CPRP skills to enhance your personality and career growth.",
    image: "/home_page_images/why-choose-us/cprp-training.png",
    alt: "A trainer presenting an upward growth chart to a seated audience",
  },
  {
    title: "100% Mentorship",
    description: "Learn directly from experts with 1-on-1 guidance and continuous support.",
    image: "/home_page_images/why-choose-us/mentorship.png",
    alt: "Two professionals having a one-on-one mentoring conversation at a table",
  },
  {
    title: "Resume & Support",
    description: "Get a professional resume review and career support.",
    image: "/home_page_images/why-choose-us/resume-support.png",
    alt: "A printed resume on a wooden desk with a pen, coffee cup and a small plant",
  },
  {
    title: "Until You Get Hired",
    description: "We stay with you always - continuous support until you land your dream job.",
    image: "/home_page_images/why-choose-us/until-hired.png",
    alt: "Two smiling women talking happily in a bright office",
  },
]

export function HomeWhyChooseUs() {
  return (
    <section
      aria-labelledby="why-choose-heading"
      className="bg-background px-4 pt-2 pb-2 sm:pt-4 sm:pb-4"
    >
      <div className="mx-auto max-w-[1380px]">
        {/* Badge */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-brand px-4 py-1.5 text-sm font-medium text-foreground">
            <Star className="size-4 fill-brand text-brand" aria-hidden="true" />
            Why Choose Us
          </span>
        </div>

        {/* Heading */}
        <h2
          id="why-choose-heading"
          className="mx-auto mt-6 max-w-3xl text-balance text-center text-3xl font-bold tracking-tight text-foreground md:text-4xl"
        >
          Everything You Need to{" "}
          <span className="border-b-[3px] border-brand pb-1 text-brand">Succeed</span>
        </h2>

        {/* Cards */}
        <ul
          className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5 md:mt-10"
        >
          {features.map((feature) => (
            <li key={feature.title}>
              <article className="group relative h-[290px] sm:h-[305px] overflow-hidden rounded-2xl">
                {/* Layer 1: Background photo */}
                <Image
                  src={feature.image || "/placeholder.svg"}
                  alt={feature.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                />

                {/* Layer 2: Warm orange tint */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-[rgba(230,120,30,0.12)]"
                />

                {/* Layer 3: Dark bottom-up gradient */}
                <span
                  aria-hidden="true"
                  className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent"
                />

                {/* Layers 4-6: Content */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 text-center">
                  <h3 className="text-base sm:text-lg font-bold text-white">{feature.title}</h3>
                  <p className="mx-auto mt-1.5 max-w-[26ch] text-[12.5px] leading-relaxed text-white/90">
                    {feature.description}
                  </p>
                  <span
                    aria-hidden="true"
                    className="mx-auto mt-2.5 h-[3px] w-8 rounded-full bg-brand transition-all duration-300 group-hover:w-14"
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
