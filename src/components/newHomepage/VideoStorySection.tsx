"use client";

// ─────────────────────────────────────────────────────────────────────────────
// VideoStorySection.tsx
// CHANGES:
// - Heading stays on 1 line (no em dash)
// - Full width layout
// - Description text moved BELOW the video card
// - Video height increased (16/7 ratio)
// - Thumbnail: tries maxresdefault → hqdefault → sddefault fallback chain
// - Pill play button (no circle icons)
// ─────────────────────────────────────────────────────────────────────────────

const VIDEO_ID = "7COKSENDhTo";
const VIDEO_URL = `https://www.youtube.com/watch?v=${VIDEO_ID}`;

// Try highest quality first, fall through on error
const THUMB_URLS = [
  `https://img.youtube.com/vi/${VIDEO_ID}/maxresdefault.jpg`,
  `https://img.youtube.com/vi/${VIDEO_ID}/hqdefault.jpg`,
  `https://img.youtube.com/vi/${VIDEO_ID}/sddefault.jpg`,
  `https://img.youtube.com/vi/${VIDEO_ID}/mqdefault.jpg`,
];

export default function VideoStorySection() {
  return (
    <section className="vss-section">
      <div className="vss-inner">

        {/* Top: heading and label centered */}
        <div className="vss-topbar">
          <div className="vss-topbar-left">
            <p className="vss-label">THE FOUNDER'S STORY</p>
            <h2 className="vss-heading">
              Why I Built This{" "}
              <span className="vss-heading-accent">In His Own Words</span>
            </h2>
          </div>
        </div>

        {/* Description text ABOVE video, BELOW heading */}
        <p className="vss-subtext">
          Before the curriculum, before the system, there was a pattern
          Chaitanya kept seeing. Talented students, held back not by ability,
          but by access. Watch the full story.
        </p>

        {/* Full-width video card */}
        <a
          href={VIDEO_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="vss-card"
          aria-label="Watch the founder's story on YouTube (opens in new tab)"
        >
          <div className="vss-thumb-wrap">
            <img
              src={THUMB_URLS[0]}
              alt="Chaitanya explains why he built 10xAISchool"
              className="vss-thumb"
              loading="eager"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                const current = THUMB_URLS.indexOf(img.src.split("?")[0]);
                if (current < THUMB_URLS.length - 1) {
                  img.src = THUMB_URLS[current + 1];
                }
              }}
            />
            <div className="vss-overlay" />

            {/* Centered pill play button */}
            <div className="vss-play-wrap" aria-hidden="true">
              <div className="vss-play-btn">
                <svg viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                  <polygon points="4,2 18,10 4,18" fill="white" />
                </svg>
                <span>Watch Now</span>
              </div>
            </div>

            {/* Bottom right hint */}
            <div className="vss-hint">↗ Opens on YouTube</div>
          </div>
        </a>

      </div>

      <style>{`
        .vss-section {
          width: 100%;
          padding: 72px 32px;
          background: #fbf5ea;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }

        .vss-inner {
          max-width: 1280px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 24px;
        }

        /* Top bar */
        .vss-topbar {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 16px;
        }

        .vss-topbar-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }

        .vss-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.18em;
          text-transform: uppercase;
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          margin: 0;
        }

        /* Single line heading — centered */
        .vss-heading {
          font-size: clamp(26px, 3.2vw, 44px);
          font-weight: 700;
          color: #111;
          line-height: 1.15;
          margin: 0;
          white-space: nowrap;
          text-align: center;
        }

        .vss-heading-accent {
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        /* Full width card */
        .vss-card {
          display: block;
          width: 100%;
          border-radius: 18px;
          overflow: hidden;
          text-decoration: none;
          position: relative;
          box-shadow: 0 8px 40px rgba(232, 81, 138, 0.14);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          border: 2px solid transparent;
          background:
            linear-gradient(#fbf5ea, #fbf5ea) padding-box,
            linear-gradient(135deg, #E8518A, #F26C2A) border-box;
        }

        .vss-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 18px 56px rgba(232, 81, 138, 0.22);
        }

        /* Taller video: 16/7 ratio fills more screen */
        .vss-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 7;
          background: #1a1a1a;
          overflow: hidden;
        }

        .vss-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center top;
          display: block;
        }

        .vss-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.06) 0%,
            rgba(0,0,0,0.52) 100%
          );
          transition: background 0.25s ease;
        }

        .vss-card:hover .vss-overlay {
          background: linear-gradient(
            to bottom,
            rgba(0,0,0,0.12) 0%,
            rgba(0,0,0,0.62) 100%
          );
        }

        /* Pill play button */
        .vss-play-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          transition: transform 0.25s ease;
        }

        .vss-card:hover .vss-play-wrap {
          transform: translate(-50%, -50%) scale(1.06);
        }

        .vss-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          color: #fff;
          font-size: 16px;
          font-weight: 700;
          padding: 14px 30px;
          border-radius: 100px;
          letter-spacing: 0.02em;
          box-shadow: 0 4px 24px rgba(0,0,0,0.3);
          white-space: nowrap;
        }

        /* Bottom right hint */
        .vss-hint {
          position: absolute;
          bottom: 16px;
          right: 20px;
          z-index: 3;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.22);
        }

        /* Description above video */
        .vss-subtext {
          font-size: 15px;
          color: #666;
          line-height: 1.7;
          margin: 0 auto;
          max-width: 640px;
          text-align: center;
        }

        /* Responsive */
        @media (max-width: 860px) {
          .vss-heading {
            white-space: normal;
            font-size: clamp(22px, 5vw, 34px);
          }
          .vss-thumb-wrap {
            aspect-ratio: 16 / 8;
          }
        }

        @media (max-width: 540px) {
          .vss-section { padding: 52px 16px; }
          .vss-thumb-wrap { aspect-ratio: 16 / 9; }
          .vss-play-btn { font-size: 13px; padding: 11px 22px; }
        }
      `}</style>
    </section>
  );
}
