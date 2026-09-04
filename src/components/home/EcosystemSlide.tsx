import { Lightbulb, Code2, Rocket, GraduationCap, Network } from "lucide-react"
import type { LucideIcon } from "lucide-react"

type NodeVariant = "orange" | "gray"

type EcosystemNode = {
  id: string
  label: string
  sub: string
  icon: LucideIcon
  variant: NodeVariant
  // Anchor point as a percentage of the diagram box (matches the SVG coordinates below).
  x: number
  y: number
}

const CENTER = { x: 50, y: 57 }

const NODES: EcosystemNode[] = [
  {
    id: "brand-building",
    label: "Brand Building",
    sub: "Idea, product, clients & model",
    icon: Lightbulb,
    variant: "gray",
    x: 14,
    y: 36,
  },
  {
    id: "job-readiness",
    label: "Job Readiness",
    sub: "Language, DSA, SQL & AI/ML",
    icon: Code2,
    variant: "orange",
    x: 86,
    y: 35,
  },
  {
    id: "independent-income",
    label: "Independent Income",
    sub: "A brand that runs on its own",
    icon: Rocket,
    variant: "orange",
    x: 14,
    y: 80,
  },
  {
    id: "placed-career",
    label: "Placed Career",
    sub: "A placement-ready profile",
    icon: GraduationCap,
    variant: "gray",
    x: 86,
    y: 81,
  },
]

// SVG uses a 16:9 viewBox so the dashed circle renders as a true circle.
const VB_W = 960
const VB_H = 540
const toX = (pct: number) => (pct / 100) * VB_W
const toY = (pct: number) => (pct / 100) * VB_H

export function EcosystemSlide() {
  return (
    <section
      aria-labelledby="ecosystem-title"
      className="relative w-full max-w-none overflow-hidden text-black border-b border-landing-border
                 md:aspect-[21/9]
                 px-6 py-5 sm:px-8 sm:py-6 md:px-10 md:py-6 mt-0 mb-0"
      style={{
        background:
          "linear-gradient(180deg, #FFF1EA 0%, #FFF8F5 55%, #FFF5F1 100%)",
      }}
    >
      <div className="mx-auto h-full max-w-6xl relative">
        {/* Header */}
        <header className="relative z-10">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slide-orange sm:text-xs">
            How It All Connects
          </p>
          <h1
            id="ecosystem-title"
            className="mt-2 font-serif font-bold leading-tight text-balance text-black
                       text-2xl sm:text-3xl md:text-4xl md:whitespace-nowrap"
          >
            One Ecosystem, Two Outcomes
          </h1>
        </header>

        {/* Mobile / stacked layout (connectors hidden) */}
        <div className="mt-8 md:hidden">
          <div className="flex flex-col items-center">
            <span className="flex size-16 items-center justify-center rounded-full bg-slide-orange">
              <Network className="size-7 text-white" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="mt-1.5 text-xs font-bold tracking-wide text-black">YOU</span>
          </div>
          <ul className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {NODES.map((node) => (
              <li key={node.id} className="group flex items-start gap-4">
                <span
                  className={[
                    "flex size-12 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ease-out group-hover:scale-110",
                    node.variant === "orange" ? "bg-slide-orange" : "bg-slide-gray-node",
                  ].join(" ")}
                >
                  <node.icon className="size-5 text-white" strokeWidth={2} aria-hidden="true" />
                </span>
                <div>
                  <h2 className="text-sm font-bold text-slide-orange">{node.label}</h2>
                  <p className="mt-1 text-xs leading-relaxed text-gray-600">{node.sub}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        {/* Diagram (desktop radial) */}
        <div
          role="img"
          aria-label="You sit at the center of the ecosystem, connected to four outcomes: Brand Building, Job Readiness, Independent Income, and Placed Career."
          className="absolute inset-0 hidden md:block"
        >
          {/* Connector lines + dashed orbit */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full"
            viewBox={`0 0 ${VB_W} ${VB_H}`}
            preserveAspectRatio="none"
          >
            <circle
              cx={toX(CENTER.x)}
              cy={toY(CENTER.y)}
              r={150}
              fill="none"
              stroke="var(--color-slide-dashed)"
              strokeWidth={1}
              strokeDasharray="6 4"
              vectorEffect="non-scaling-stroke"
            />
            {NODES.map((node) => (
              <line
                key={node.id}
                x1={toX(node.x)}
                y1={toY(node.y)}
                x2={toX(CENTER.x)}
                y2={toY(CENTER.y)}
                stroke="var(--color-slide-orange)"
                strokeWidth={1.5}
                vectorEffect="non-scaling-stroke"
              />
            ))}
          </svg>

          {/* Corner nodes */}
          {NODES.map((node) => {
            const alignRight = node.x > 50
            return (
              <article
                key={node.id}
                aria-label={`${node.label}: ${node.sub}`}
                className="group absolute z-20 flex w-40 -translate-x-1/2 -translate-y-1/2 flex-col
                           sm:w-48 md:w-56"
                style={{ left: `${node.x}%`, top: `${node.y}%` }}
              >
                <span
                  className={[
                    "flex size-12 items-center justify-center rounded-full transition-transform duration-200 ease-out",
                    "group-hover:scale-110 sm:size-14 md:size-[72px]",
                    node.variant === "orange" ? "bg-slide-orange" : "bg-slide-gray-node",
                    alignRight ? "self-end" : "self-start",
                  ].join(" ")}
                >
                  <node.icon
                    className="size-5 text-white sm:size-6 md:size-8"
                    strokeWidth={2}
                    aria-hidden="true"
                  />
                </span>
                <div className={alignRight ? "text-right" : "text-left"}>
                  <h2 className="mt-2.5 text-xs font-bold text-slide-orange sm:text-sm">
                    {node.label}
                  </h2>
                  <p className="mt-1 text-[11px] leading-relaxed text-gray-600 sm:text-xs">
                    {node.sub}
                  </p>
                </div>
              </article>
            )
          })}

          {/* Center YOU node */}
          <div
            aria-label="You, at the center of the ecosystem"
            className="group absolute z-30 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center"
            style={{ left: `${CENTER.x}%`, top: `${CENTER.y}%` }}
          >
            <span
              className="flex size-16 items-center justify-center rounded-full bg-slide-orange
                         transition-transform duration-200 ease-out group-hover:scale-105
                         sm:size-20 md:size-24"
            >
              <Network className="size-7 text-white sm:size-9 md:size-10" strokeWidth={2} aria-hidden="true" />
            </span>
            <span className="mt-1.5 text-[11px] font-bold tracking-wide text-black sm:text-xs">
              YOU
            </span>
          </div>
        </div>

        {/* Page number */}
        <span
          aria-hidden="true"
          className="absolute bottom-4 right-4 z-10 text-xs font-bold text-slide-orange sm:bottom-6 sm:right-6"
        >
          09
        </span>
      </div>
    </section>
  )
}
