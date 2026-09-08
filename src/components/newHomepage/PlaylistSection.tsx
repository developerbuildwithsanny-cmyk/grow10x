"use client";

// ─────────────────────────────────────────────────────────────────────────────
// PlaylistSection.tsx
// CHANGES:
// - Sidebar shows title + date from JSON (not just "Session 24")
// - Thumbnail: fallback chain maxres -> hq -> sd -> mq
// - Full width (max-width: 1280px)
// - Pill play button on hero
// ─────────────────────────────────────────────────────────────────────────────

import { useRef, useState, useEffect } from "react";
import playlistData from "@/data/playlistData.json";

const { playlistId: PLAYLIST_ID, sessions: PLAYLIST_VIDEOS } = playlistData;

type Session = typeof PLAYLIST_VIDEOS[number];

function getVideoUrl(id: string, index: number) {
  return `https://www.youtube.com/watch?v=${id}&list=${PLAYLIST_ID}&index=${index}`;
}

// Returns best available thumbnail — hqdefault is the most reliable
function getThumbSrc(id: string) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`;
}

// Fallback chain on error: hq -> sd -> mq -> default
const FALLBACKS: Record<string, string[]> = {};
function buildFallbacks(id: string) {
  return [
    `https://img.youtube.com/vi/${id}/maxresdefault.jpg`,
    `https://img.youtube.com/vi/${id}/hqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/sddefault.jpg`,
    `https://img.youtube.com/vi/${id}/mqdefault.jpg`,
    `https://img.youtube.com/vi/${id}/default.jpg`,
  ];
}

function handleThumbError(e: React.SyntheticEvent<HTMLImageElement>, id: string) {
  if (!FALLBACKS[id]) FALLBACKS[id] = buildFallbacks(id);
  const img = e.target as HTMLImageElement;
  const idx = FALLBACKS[id].findIndex(u => img.src.includes(u.split("/vi/")[1]?.split("/")[1] || "NONE"));
  const next = FALLBACKS[id][idx + 1];
  if (next && img.src !== next) img.src = next;
}

// Format date: "2024-01-15" -> "Jan 15, 2024"
function formatDate(dateStr: string) {
  try {
    return new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric", month: "short", year: "numeric"
    });
  } catch {
    return dateStr;
  }
}

// ── Hero card ────────────────────────────────────────────────────────────────
function HeroCard({ video }: { video: Session }) {
  return (
    <a
      href={getVideoUrl(video.id, video.index)}
      target="_blank"
      rel="noopener noreferrer"
      className="ps-hero-card"
      aria-label={`Watch ${video.title} on YouTube (opens in new tab)`}
    >
      <div className="ps-hero-thumb-wrap">
        <img
          src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
          alt={video.title}
          className="ps-hero-thumb"
          onError={(e) => handleThumbError(e, video.id)}
        />
        <div className="ps-hero-overlay" />

        {/* Pill play button */}
        <div className="ps-hero-play-wrap" aria-hidden="true">
          <div className="ps-hero-play-btn">
            <svg viewBox="0 0 20 20" fill="none" width="16" height="16">
              <polygon points="4,2 18,10 4,18" fill="white" />
            </svg>
            <span>Watch Session</span>
          </div>
        </div>

        <div className="ps-hero-badge">{video.label}</div>
        <div className="ps-hero-hint">↗ Opens on YouTube</div>
      </div>
    </a>
  );
}

// ── Sidebar row — shows title + date from JSON ───────────────────────────────
function SideCard({ video }: { video: Session }) {
  return (
    <a
      href={getVideoUrl(video.id, video.index)}
      target="_blank"
      rel="noopener noreferrer"
      className="ps-side-card"
      aria-label={`Watch ${video.title} on YouTube (opens in new tab)`}
    >
      {/* Thumbnail */}
      <div className="ps-side-thumb-wrap">
        <img
          src={getThumbSrc(video.id)}
          alt={video.title}
          className="ps-side-thumb"
          loading="lazy"
          onError={(e) => handleThumbError(e, video.id)}
        />
        <div className="ps-side-overlay" />
        <div className="ps-side-play" aria-hidden="true">
          <svg viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="white" fillOpacity="0.92" />
            <polygon points="14,11 26,18 14,25" fill="url(#side-pg)" />
            <defs>
              <linearGradient id="side-pg" x1="14" y1="11" x2="26" y2="25" gradientUnits="userSpaceOnUse">
                <stop stopColor="#E8518A" />
                <stop offset="1" stopColor="#F26C2A" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>

      {/* Text: title + date */}
      <div className="ps-side-info">
        <p className="ps-side-title">{video.title}</p>
        <p className="ps-side-date">{formatDate(video.date)}</p>
      </div>
    </a>
  );
}

// ── Main ─────────────────────────────────────────────────────────────────────
export default function PlaylistSection() {
  const [heroVideo, ...sideVideos] = PLAYLIST_VIDEOS;
  const sideRef = useRef<HTMLDivElement>(null);
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    const el = sideRef.current;
    if (!el) return;
    const onScroll = () => {
      setShowArrow(el.scrollTop + el.clientHeight < el.scrollHeight - 8);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const scrollDown = () => {
    sideRef.current?.scrollBy({ top: 200, behavior: "smooth" });
  };

  return (
    <section className="ps-section">
      <div className="ps-inner">

        {/* Top bar */}
        <div className="ps-topbar">
          <div className="ps-topbar-left">
            <p className="ps-label">LIVE FROM THE CLASSROOM</p>
            <h2 className="ps-heading">
              Real Sessions.{" "}
              <span className="ps-heading-accent">Real Learning.</span>
            </h2>
          </div>
          <p className="ps-hero-subtext">
            These are actual recorded sessions from the 10xAISchool program,
            not demos, not highlights. See exactly what learning looks like
            inside the system before you commit.
          </p>
        </div>

        {/* Body */}
        <div className="ps-body">

          {/* Left: hero */}
          <div className="ps-hero-col">
            <HeroCard video={heroVideo} />
          </div>

          {/* Right: scrollable sidebar */}
          <div className="ps-side-wrapper">
            <div className="ps-side-header">
              <span className="ps-side-header-title">MORE SESSIONS</span>
              <a
                href={`https://www.youtube.com/playlist?list=${PLAYLIST_ID}`}
                target="_blank"
                rel="noopener noreferrer"
                className="ps-explore-btn"
              >
                View full playlist ↗
              </a>
            </div>
            <div className="ps-side-col" ref={sideRef}>
              {sideVideos.map((video) => (
                <SideCard key={video.id} video={video} />
              ))}
            </div>

            {showArrow && (
              <button
                className="ps-scroll-arrow"
                onClick={scrollDown}
                aria-label="Scroll down to see more sessions"
              >
                <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
                  <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2.5"
                    strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>

      <style>{`
        .ps-section {
          width: 100%;
          padding: 72px 32px;
          background: #f2e6d0;
          display: flex;
          justify-content: center;
          box-sizing: border-box;
        }

        .ps-inner {
          max-width: 1280px;
          width: 100%;
          display: flex;
          flex-direction: column;
          gap: 28px;
        }

        /* Top bar */
        .ps-topbar {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          gap: 14px;
        }

        .ps-topbar-left {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 8px;
        }

        .ps-label {
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

        .ps-heading {
          font-size: clamp(28px, 3.8vw, 46px);
          font-weight: 700;
          color: #111;
          line-height: 1.2;
          margin: 0;
          text-align: center;
        }

        .ps-heading-accent {
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .ps-side-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 10px;
          gap: 12px;
        }

        .ps-side-header-title {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #777;
        }

        .ps-explore-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          font-weight: 600;
          color: #111;
          text-decoration: none;
          border: 1.5px solid #111;
          padding: 6px 14px;
          border-radius: 6px;
          white-space: nowrap;
          flex-shrink: 0;
          transition: background 0.2s ease, color 0.2s ease, border-color 0.2s ease;
        }

        .ps-explore-btn:hover {
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          border-color: transparent;
          color: #fff;
        }

        /* Body */
        .ps-body {
          display: grid;
          grid-template-columns: 1fr 450px;
          gap: 24px;
          align-items: start;
        }

        /* Hero */
        .ps-hero-col {
          display: flex;
          flex-direction: column;
          gap: 14px;
        }

        .ps-hero-card {
          display: block;
          text-decoration: none;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
          box-shadow: 0 6px 28px rgba(0,0,0,0.16);
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }

        .ps-hero-card:hover {
          transform: translateY(-3px);
          box-shadow: 0 14px 44px rgba(232,81,138,0.22);
        }

        .ps-hero-thumb-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 16 / 9;
          background: #1a1a1a;
        }

        .ps-hero-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ps-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to bottom, rgba(0,0,0,0.04), rgba(0,0,0,0.54));
          transition: background 0.25s ease;
        }

        .ps-hero-card:hover .ps-hero-overlay {
          background: linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,0,0,0.64));
        }

        .ps-hero-play-wrap {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 3;
          transition: transform 0.25s ease;
        }

        .ps-hero-card:hover .ps-hero-play-wrap {
          transform: translate(-50%, -50%) scale(1.07);
        }

        .ps-hero-play-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: linear-gradient(90deg, #E8518A, #F26C2A);
          color: #fff;
          font-size: 14px;
          font-weight: 700;
          padding: 12px 24px;
          border-radius: 100px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.28);
          white-space: nowrap;
        }

        .ps-hero-badge {
          position: absolute;
          bottom: 14px;
          left: 16px;
          z-index: 2;
          font-size: 12px;
          font-weight: 700;
          color: #fff;
          background: rgba(0,0,0,0.5);
          backdrop-filter: blur(6px);
          padding: 4px 12px;
          border-radius: 20px;
        }

        .ps-hero-hint {
          position: absolute;
          bottom: 14px;
          right: 16px;
          z-index: 2;
          font-size: 11px;
          font-weight: 600;
          color: rgba(255,255,255,0.88);
          background: rgba(255,255,255,0.12);
          backdrop-filter: blur(6px);
          padding: 4px 10px;
          border-radius: 20px;
          border: 1px solid rgba(255,255,255,0.22);
        }

        .ps-hero-subtext {
          font-size: 15px;
          color: #555;
          line-height: 1.65;
          margin: 0 auto;
          max-width: 640px;
          text-align: center;
        }

        /* Sidebar wrapper */
        .ps-side-wrapper {
          position: relative;
          display: flex;
          flex-direction: column;
        }

        .ps-side-col {
          display: flex;
          flex-direction: column;
          border-radius: 12px;
          overflow-y: auto;
          overflow-x: hidden;
          background: rgba(255,255,255,0.62);
          border: 1px solid rgba(0,0,0,0.08);
          max-height: 480px;
          scrollbar-width: thin;
          scrollbar-color: rgba(232,81,138,0.3) transparent;
        }

        .ps-side-col::-webkit-scrollbar { width: 4px; }
        .ps-side-col::-webkit-scrollbar-track { background: transparent; }
        .ps-side-col::-webkit-scrollbar-thumb {
          background: rgba(232,81,138,0.35);
          border-radius: 4px;
        }

        /* Sidebar row */
        .ps-side-card {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 12px;
          text-decoration: none;
          border-bottom: 1px solid rgba(0,0,0,0.06);
          transition: background 0.18s ease;
          flex-shrink: 0;
        }

        .ps-side-card:last-child { border-bottom: none; }
        .ps-side-card:hover { background: rgba(232,81,138,0.06); }

        .ps-side-thumb-wrap {
          position: relative;
          flex-shrink: 0;
          width: 130px;
          aspect-ratio: 16 / 9;
          border-radius: 8px;
          overflow: hidden;
          background: #1a1a1a;
        }

        .ps-side-thumb {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .ps-side-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.28);
          transition: background 0.18s ease;
        }

        .ps-side-card:hover .ps-side-overlay { background: rgba(0,0,0,0.4); }

        .ps-side-play {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 2;
          transition: transform 0.18s ease;
        }

        .ps-side-card:hover .ps-side-play {
          transform: translate(-50%, -50%) scale(1.12);
        }

        .ps-side-play svg { width: 30px; height: 30px; }

        /* Text info: title + date */
        .ps-side-info {
          display: flex;
          flex-direction: column;
          gap: 4px;
          min-width: 0;
          padding-top: 2px;
        }

        .ps-side-title {
          font-size: 13.5px;
          font-weight: 600;
          color: #111;
          margin: 0;
          line-height: 1.4;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .ps-side-date {
          font-size: 11px;
          color: #999;
          margin: 0;
          line-height: 1.3;
        }

        /* Bounce arrow */
        .ps-scroll-arrow {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%) translateY(50%);
          z-index: 10;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: #fff;
          border: 1.5px solid rgba(232,81,138,0.4);
          color: #E8518A;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          box-shadow: 0 2px 10px rgba(0,0,0,0.12);
          animation: ps-bounce 1.6s ease-in-out infinite;
          transition: background 0.18s ease, border-color 0.18s ease;
        }

        .ps-scroll-arrow:hover {
          background: linear-gradient(135deg, #E8518A, #F26C2A);
          border-color: transparent;
          color: #fff;
          animation: none;
        }

        @keyframes ps-bounce {
          0%, 100% { transform: translateX(-50%) translateY(50%); }
          50%       { transform: translateX(-50%) translateY(62%); }
        }

        /* Responsive */
        @media (max-width: 900px) {
          .ps-body { grid-template-columns: 1fr; }
          .ps-side-col { max-height: 340px; }
        }

        @media (max-width: 540px) {
          .ps-section { padding: 52px 16px; }
          .ps-side-col { max-height: 300px; }
          .ps-hero-play-btn { font-size: 13px; padding: 10px 18px; }
        }
      `}</style>
    </section>
  );
}
