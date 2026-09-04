import React from 'react';

const color = '#F47B3A';
const colorLight = '#FFF0E8';
const colorMid = '#F6A06D';

interface HiringData {
  count: string;
  description: string;
  bullets: string[];
  companies: string[];
}

/* =========================================================
   COMMON HIRING DATA
   Same for all 18 programs
========================================================= */

const hiringData: HiringData = {
  count: '250+',

  description:
    'Top companies are actively hiring skilled professionals across product, service, and startup teams.',

  bullets: [
    'Roles across product, service & startups',
    'Opportunities in India & worldwide',
    'For freshers & experienced professionals',
  ],

  companies: [
    'Wipro',
    'Webnox',
    'Welldoc',
    'Zebra',
    'Quantela',
    'Casapona',
    'Arista',
    'Kellton',
    'Saara',
    'Infinity',
    'Xilinx',
    'PragmaEdge',
    'Citrix',
    'Extended',
    'Avces',
  ],
};

/* =========================================================
   MARQUEE ROW
========================================================= */

function MarqueeRow({
  companies,
  reverse = false,
}: {
  companies: string[];
  reverse?: boolean;
}) {
  const items = [...companies, ...companies, ...companies];

  return (
    <div className="w-full overflow-hidden">
      <div
        className={`flex w-max gap-3 ${
          reverse
            ? 'companies-marquee-reverse'
            : 'companies-marquee'
        }`}
      >
        {items.map((name, index) => (
          <div
            key={`${name}-${index}`}
            className="
              flex
              h-[58px]
              min-w-[92px]
              shrink-0
              items-center
              justify-center
              rounded-xl
              border
              border-[#EEEEEE]
              bg-white
              px-3
              shadow-[0_3px_12px_rgba(0,0,0,0.05)]
              transition-all
              duration-300
              hover:-translate-y-1
              hover:shadow-md
            "
          >
            <span
              className="
                max-w-[80px]
                truncate
                whitespace-nowrap
                text-center
                text-[10px]
                font-semibold
                text-[#394150]
              "
            >
              {name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* =========================================================
   CHECK ICON
========================================================= */

function CheckIcon({ color }: { color: string }) {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 18 18"
      fill="none"
      className="mt-[2px] shrink-0"
    >
      <circle cx="9" cy="9" r="8.5" fill={color} />

      <path
        d="M5 9.5L7.5 12L13 6.5"
        stroke="#FFFFFF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* =========================================================
   COMPANIES ICON
========================================================= */

function CompaniesIcon({ color }: { color: string }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />

      <path d="M9 22v-8h6v8" />

      <path d="M8 7h.01" />
      <path d="M16 7h.01" />
      <path d="M8 11h.01" />
      <path d="M16 11h.01" />
    </svg>
  );
}

/* =========================================================
   PERSON ICON
========================================================= */

function PersonIcon({ color }: { color: string }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="12" cy="7" r="4" />

      <path d="M4 21v-2a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v2" />
    </svg>
  );
}

/* =========================================================
   MAIN COMPONENT
========================================================= */

export function CompaniesHiring({ slug }: { slug?: string }) {
  void slug;

  const data = hiringData;

  const perRow = Math.ceil(
    data.companies.length / 3
  );

  const row1 = data.companies.slice(
    0,
    perRow
  );

  const row2 = data.companies.slice(
    perRow,
    perRow * 2
  );

  const row3 = data.companies.slice(
    perRow * 2
  );

  return (
    <>
      {/* MARQUEE ANIMATION */}

      <style>{`
        @keyframes companies-marquee {
          from {
            transform: translateX(0);
          }

          to {
            transform: translateX(-33.333%);
          }
        }

        @keyframes companies-marquee-reverse {
          from {
            transform: translateX(-33.333%);
          }

          to {
            transform: translateX(0);
          }
        }

        .companies-marquee {
          animation: companies-marquee 30s linear infinite;
          will-change: transform;
        }

        .companies-marquee-reverse {
          animation: companies-marquee-reverse 30s linear infinite;
          will-change: transform;
        }

        @media (max-width: 768px) {
          .companies-marquee,
          .companies-marquee-reverse {
            animation-duration: 22s;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .companies-marquee,
          .companies-marquee-reverse {
            animation: none;
          }
        }
      `}</style>

      <section
        className="
          relative
          w-full
          overflow-hidden
          border-b
          border-[#E9E0D7]
        "
        style={{
          minHeight: '250px',

          background: `
            linear-gradient(
              90deg,
              #FFF9F3 0%,
              #FFF5EC 45%,
              ${colorLight} 100%
            )
          `,
        }}
      >
        {/* Decorative glow */}

        <div
          className="
            pointer-events-none
            absolute
            -right-32
            -top-32
            h-[320px]
            w-[320px]
            rounded-full
            opacity-[0.08]
            blur-[100px]
          "
          style={{
            backgroundColor: color,
          }}
        />

        <div
          className="
            relative
            mx-auto
            flex
            max-w-[1600px]
            flex-col
            lg:flex-row
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              z-10
              w-full
              px-5
              py-5
              md:px-8
              lg:w-[34%]
              lg:min-w-[430px]
              lg:py-5
            "
          >
            {/* Badge */}

            <div className="mb-3 flex items-center gap-2">
              <div
                className="
                  flex
                  h-8
                  w-8
                  items-center
                  justify-center
                  rounded-lg
                "
                style={{
                  backgroundColor: colorLight,
                }}
              >
                <CompaniesIcon color={color} />
              </div>

              <span
                className="
                  text-[11px]
                  font-bold
                  uppercase
                  tracking-[0.16em]
                "
                style={{
                  color,
                }}
              >
                Companies Hiring
              </span>
            </div>

            {/* Heading */}

            <h2
              className="
                max-w-[320px]
                text-[23px]
                font-bold
                leading-[1.3]
                text-[#202B3D]
              "
            >
              Companies Hiring for This Role
            </h2>

            {/* Underline */}

            <div
              className="mt-3 h-[3px] w-9 rounded-full"
              style={{
                backgroundColor: color,
              }}
            />

            {/* Count */}

            <div className="mt-3">
              <div
                className="
                  text-[32px]
                  font-extrabold
                  leading-none
                "
                style={{
                  color,
                }}
              >
                {data.count}
              </div>

              <p
                className="
                  mt-2
                  text-[13px]
                  font-semibold
                  text-[#3D4654]
                "
              >
                Companies Hiring
              </p>
            </div>

            {/* Description */}

            <p
              className="
                mt-2
                max-w-[430px]
                text-[13px]
                leading-[1.65]
                text-[#626B78]
              "
            >
              {data.description}
            </p>

            {/* Bullets */}

            <ul className="mt-2 space-y-1.5">
              {data.bullets.map((bullet, index) => (
                <li
                  key={index}
                  className="flex items-start gap-2"
                >
                  <CheckIcon color={color} />

                  <span
                    className="
                      text-[12px]
                      font-medium
                      text-[#596270]
                    "
                  >
                    {bullet}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA */}

            <div
              className="
                mt-4
                flex
                flex-wrap
                items-center
                gap-6
              "
            >
              <button
                className="
                  inline-flex
                  items-center
                  gap-3
                  rounded-lg
                  px-5
                  py-2.5
                  text-xs
                  font-bold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-[1px]
                  hover:opacity-95
                "
                style={{
                  backgroundColor: color,
                  boxShadow: `0 7px 18px ${color}40`,
                }}
              >
                View All Hiring Partners

                <span className="text-base">
                  →
                </span>
              </button>

              <div className="flex items-center gap-2">
                <PersonIcon color={color} />

                <span
                  className="
                    text-[12px]
                    font-medium
                    text-[#56606E]
                  "
                >
                  Your dream company could be hiring you!
                </span>
              </div>
            </div>
          </div>

          {/* ================= RIGHT MARQUEE ================= */}

          <div
            className="
              flex
              min-h-[250px]
              flex-1
              flex-col
              justify-center
              gap-2
              overflow-hidden
              py-4
            "
          >
            <MarqueeRow
              companies={row1}
              reverse={false}
            />

            <MarqueeRow
              companies={row2}
              reverse={true}
            />

            <MarqueeRow
              companies={row3}
              reverse={false}
            />
          </div>
        </div>
      </section>
    </>
  );
}