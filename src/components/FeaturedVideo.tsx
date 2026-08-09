"use client";

import { useState } from "react";
import {
  Container,
  PlayIcon,
  SectionHeading,
  SectionLabel,
} from "@/components/ui";

const CHANNEL_URL = "https://www.youtube.com/@Buildwithsannyai";

const videos = [
  {
    id: "bootcamp",
    title: "AI Startup Builder Bootcamp | Idea to Live App in 60 Minutes",
    description: "Learn how to build and launch an AI-powered SaaS from scratch. Sanny covers database setup, API integrations, and deployment workflows.",
    duration: "60:00",
    tag: "Bootcamp",
    url: "https://www.youtube.com/@Buildwithsannyai",
    bgGradient: "from-green/20 via-black to-green/5 border-green/20",
    glowColor: "shadow-[0_0_30px_rgba(0,230,118,0.25)]",
    tagColor: "bg-green/10 text-green border-green/20",
  },
  {
    id: "vibe-coding",
    title: "From Vibe Coding to Real AI Apps with Codex",
    description: "A complete guide on shifting from simple prompt generation (vibe coding) to building production-ready, scalable AI applications.",
    duration: "24:15",
    tag: "AI Engineering",
    url: "https://www.youtube.com/@Buildwithsannyai",
    bgGradient: "from-coral/20 via-black to-coral/5 border-coral/20",
    glowColor: "shadow-[0_0_30px_rgba(255,91,54,0.2)]",
    tagColor: "bg-coral/10 text-coral border-coral/20",
  },
  {
    id: "chatgpt-clone",
    title: "Build Your Own ChatGPT with React, Node.js & OpenAI",
    description: "A complete full-stack course on building an AI chat assistant with real-time response streaming and persistent message history.",
    duration: "45:30",
    tag: "Full-Stack",
    url: "https://www.youtube.com/@Buildwithsannyai",
    bgGradient: "from-yellow/20 via-black to-yellow/5 border-yellow/20",
    glowColor: "shadow-[0_0_30px_rgba(245,224,59,0.2)]",
    tagColor: "bg-yellow/10 text-yellow border-yellow/20",
  },
  {
    id: "claude-plugins",
    title: "7 Claude Plugins Every AI Engineer Should Know in 2026",
    description: "Boost your AI engineering workflow by integrating advanced Model Context Protocol (MCP) plug-ins with Claude.",
    duration: "15:10",
    tag: "Tools Guide",
    url: "https://www.youtube.com/@Buildwithsannyai",
    bgGradient: "from-blue-500/20 via-black to-blue-500/5 border-blue-500/20",
    glowColor: "shadow-[0_0_30px_rgba(59,130,246,0.2)]",
    tagColor: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  }
];

export function FeaturedVideo() {
  const [activeVideo, setActiveVideo] = useState(videos[0]);

  return (
    <section id="featured" className="border-t border-border bg-black px-6 py-24 lg:px-48">
      <Container className="flex flex-col gap-10">
        <div className="flex flex-col items-center gap-4 text-center">
          <SectionLabel>FEATURED THIS WEEK</SectionLabel>
          <SectionHeading>
            Watch. Learn. Then <span className="text-green">Build.</span>
          </SectionHeading>
          <p className="max-w-2xl text-muted text-base">
            Explore latest tutorials and masterclasses from <a href={CHANNEL_URL} target="_blank" rel="noopener noreferrer" className="text-green hover:underline font-semibold">BuildWithSanny</a> YouTube channel.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
          {/* Main Featured Video Player */}
          <div className="lg:col-span-3 flex flex-col gap-6">
            <div 
              className={`relative overflow-hidden rounded-2xl border bg-card p-1 shadow-card transition-all duration-500 ${activeVideo.glowColor}`}
            >
              <div 
                className={`relative flex min-h-[360px] sm:min-h-[440px] items-center justify-center rounded-xl bg-gradient-to-br ${activeVideo.bgGradient}`}
              >
                <div className="absolute inset-0 bg-black/60" />
                
                {/* Custom Tech Mesh Grid Background Effect */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30" />
                
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Play video on YouTube"
                  className="group relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-green pl-1 transition-all duration-300 hover:scale-110 shadow-play hover:shadow-[0_0_40px_rgba(0,230,118,0.5)]"
                >
                  <PlayIcon className="text-black h-8 w-8 transition-transform group-hover:scale-110" />
                </a>

                {/* Badges */}
                <div className="absolute top-4 left-4">
                  <span className={`rounded-full border px-3 py-1 font-mono text-xs font-bold uppercase tracking-wider ${activeVideo.tagColor}`}>
                    {activeVideo.tag}
                  </span>
                </div>
                
                <div className="absolute bottom-4 right-4 rounded-md bg-black/80 px-3 py-1.5 backdrop-blur-sm border border-white/10">
                  <span className="font-mono text-sm font-semibold text-white">{activeVideo.duration}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-3 px-2">
              <h3 className="font-heading text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                {activeVideo.title}
              </h3>
              <p className="text-muted leading-relaxed text-base sm:text-lg">
                {activeVideo.description}
              </p>
              <div className="mt-2 flex flex-wrap gap-4">
                <a
                  href={activeVideo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg bg-green px-8 py-3.5 font-heading text-base font-bold text-black transition-all duration-200 hover:bg-green/90 hover:scale-[1.02]"
                >
                  Watch on YouTube
                </a>
                <a
                  href={CHANNEL_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center rounded-lg border border-border bg-card-alt px-8 py-3.5 font-heading text-base font-bold text-white transition-all duration-200 hover:bg-white/5 hover:border-white/20"
                >
                  Explore Channel
                </a>
              </div>
            </div>
          </div>

          {/* Video Playlist Sidebar */}
          <div className="lg:col-span-2 flex flex-col gap-4">
            <h4 className="font-heading text-lg font-bold text-white/90 px-1 flex items-center justify-between">
              <span>Select Playlist Video</span>
              <span className="text-xs font-mono font-normal text-muted uppercase">4 Videos</span>
            </h4>
            <div className="flex flex-col gap-3 overflow-y-auto max-h-[560px] pr-1">
              {videos.map((vid) => {
                const isActive = vid.id === activeVideo.id;
                return (
                  <button
                    key={vid.id}
                    onClick={() => setActiveVideo(vid)}
                    className={`flex flex-col gap-3 rounded-xl border p-4 text-left transition-all duration-300 hover:scale-[1.01] ${
                      isActive
                        ? "bg-card-alt border-green/30 shadow-[0_4px_20px_rgba(0,230,118,0.05)]"
                        : "bg-card/40 border-border/80 hover:border-white/15 hover:bg-card-alt/30"
                    }`}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className={`rounded-full border px-2.5 py-0.5 font-mono text-[10px] font-bold uppercase tracking-wider ${vid.tagColor}`}>
                        {vid.tag}
                      </span>
                      <span className="font-mono text-xs text-muted font-medium">{vid.duration}</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <h5 className={`font-heading text-base font-bold leading-snug transition-colors duration-200 ${
                        isActive ? "text-green" : "text-white group-hover:text-green"
                      }`}>
                        {vid.title}
                      </h5>
                      <p className="text-xs text-muted line-clamp-2 leading-relaxed">
                        {vid.description}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
