"use client";

import React, { useState, useEffect, Suspense } from "react";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  MessageSquare, 
  Check, 
  Loader2,
  Sparkles,
  ArrowRight
} from "lucide-react";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Container } from "@/components/ui";
import { submitLead } from "@/app/actions";
import { cn } from "@/lib/utils";

function CallbackForm() {
  const searchParams = useSearchParams();
  const [source, setSource] = useState("Callback Page - General Inquiry");

  useEffect(() => {
    const src = searchParams.get("source");
    if (src) {
      setSource(src);
    }
  }, [searchParams]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    degree: "",
    yearOfPassing: "",
    state: "",
    presentStatus: "",
    questions: "",
    consent: true,
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }

    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required";
    } else if (!/^[0-9+\s-]{10,15}$/.test(formData.mobile.replace(/\s+/g, ""))) {
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.degree.trim()) {
      newErrors.degree = "Qualification details are required";
    } else {
      if (!formData.yearOfPassing) {
        newErrors.yearOfPassing = "Year is required";
      }
      if (!formData.state) {
        newErrors.state = "State is required";
      }
      if (!formData.presentStatus) {
        newErrors.presentStatus = "Status is required";
      }
    }

    if (!formData.consent) {
      newErrors.consent = "You must agree to receive communications";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await submitLead({
        ...formData,
        source: source,
      });

      if (response.success) {
        setStatus("success");
      } else {
        setStatus("error");
        setErrorMessage(response.error || "Submission failed. Please try again.");
      }
    } catch (err) {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-12 animate-in fade-in slide-in-from-bottom-4 duration-300">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green/10 border border-green/30 text-green shadow-[0_0_20px_rgba(0,230,118,0.2)]">
          <Check className="h-8 w-8 stroke-[3]" />
        </div>
        <h3 className="mt-6 font-heading text-2xl font-black text-white">
          Slot Booked Successfully!
        </h3>
        <p className="mt-3 max-w-sm text-sm text-zinc-muted">
          Thank you for reaching out. One of our career experts will call or WhatsApp you within the next 24 hours to schedule your counseling session.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <span className="text-xs font-mono uppercase tracking-wider text-green">
          Talk to Our Career Experts
        </span>
        <h2 className="font-heading text-2xl font-black text-white leading-tight">
          Book Your Slot
        </h2>
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-red/20 bg-red/10 p-3 text-xs font-semibold text-red">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
        <label className="block text-xs font-bold text-zinc-300 mb-1">
          Name <span className="text-red">*</span>
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            <User className="h-4 w-4" />
          </div>
          <input
            type="text"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={cn(
              "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green focus:outline-none transition-all",
              errors.name && "border-red focus:border-red"
            )}
          />
        </div>
        {errors.name && <p className="text-[10px] text-red mt-0.5">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
        <label className="block text-xs font-bold text-zinc-300 mb-1">
          E-mail <span className="text-red">*</span>
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
            <Mail className="h-4 w-4" />
          </div>
          <input
            type="email"
            required
            placeholder="Enter your Email Id"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={cn(
              "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green focus:outline-none transition-all",
              errors.email && "border-red focus:border-red"
            )}
          />
        </div>
        {errors.email && <p className="text-[10px] text-red mt-0.5">{errors.email}</p>}
      </div>

      {/* Mobile & Degree */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1">
            Mobile Number <span className="text-red">*</span>
          </label>
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
              <Phone className="h-4 w-4" />
            </div>
            <span className="absolute left-9 text-sm text-zinc-400 font-semibold select-none">
              +91
            </span>
            <input
              type="tel"
              required
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 pl-[72px] pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green focus:outline-none transition-all",
                errors.mobile && "border-red focus:border-red"
              )}
            />
          </div>
          {errors.mobile && <p className="text-[10px] text-red mt-0.5">{errors.mobile}</p>}
        </div>

        <div>
          <label className="block text-xs font-bold text-zinc-300 mb-1">
            Degree Details <span className="text-red">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-zinc-500">
              <GraduationCap className="h-4 w-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Recent qualification"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green focus:outline-none transition-all",
                errors.degree && "border-red focus:border-red"
              )}
            />
          </div>
          {errors.degree && <p className="text-[10px] text-red mt-0.5">{errors.degree}</p>}
        </div>
      </div>

      {/* Dynamic Fields (slide down) */}
      {formData.degree.trim() !== "" && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Year of Passing <span className="text-red">*</span>
            </label>
            <select
              required
              value={formData.yearOfPassing}
              onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 px-3 text-sm text-white focus:border-green focus:outline-none transition-all",
                errors.yearOfPassing && "border-red"
              )}
            >
              <option value="" disabled className="bg-card-dark text-zinc-500">Select Year</option>
              <option value="2028" className="bg-card-dark text-white">2028</option>
              <option value="2027" className="bg-card-dark text-white">2027</option>
              <option value="2026" className="bg-card-dark text-white">2026</option>
              <option value="2025" className="bg-card-dark text-white">2025</option>
              <option value="2024" className="bg-card-dark text-white">2024</option>
              <option value="2023" className="bg-card-dark text-white">2023</option>
              <option value="2022" className="bg-card-dark text-white">2022</option>
              <option value="2021" className="bg-card-dark text-white">2021</option>
              <option value="2020" className="bg-card-dark text-white">2020</option>
              <option value="Before 2020" className="bg-card-dark text-white">Before 2020</option>
            </select>
            {errors.yearOfPassing && <p className="text-[10px] text-red mt-0.5">{errors.yearOfPassing}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              State <span className="text-red">*</span>
            </label>
            <select
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 px-3 text-sm text-white focus:border-green focus:outline-none transition-all",
                errors.state && "border-red"
              )}
            >
              <option value="" disabled className="bg-card-dark text-zinc-500">Select State</option>
              <option value="Andhra Pradesh" className="bg-card-dark text-white">Andhra Pradesh</option>
              <option value="Telangana" className="bg-card-dark text-white">Telangana</option>
              <option value="Karnataka" className="bg-card-dark text-white">Karnataka</option>
              <option value="Maharashtra" className="bg-card-dark text-white">Maharashtra</option>
              <option value="Tamil Nadu" className="bg-card-dark text-white">Tamil Nadu</option>
              <option value="Delhi" className="bg-card-dark text-white">Delhi</option>
              <option value="Uttar Pradesh" className="bg-card-dark text-white">Uttar Pradesh</option>
              <option value="Others" className="bg-card-dark text-white">Others</option>
            </select>
            {errors.state && <p className="text-[10px] text-red mt-0.5">{errors.state}</p>}
          </div>

          <div>
            <label className="block text-xs font-bold text-zinc-300 mb-1">
              Present Status <span className="text-red">*</span>
            </label>
            <select
              required
              value={formData.presentStatus}
              onChange={(e) => setFormData({ ...formData, presentStatus: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-border-dark bg-black/40 py-2.5 px-3 text-sm text-white focus:border-green focus:outline-none transition-all",
                errors.presentStatus && "border-red"
              )}
            >
              <option value="" disabled className="bg-card-dark text-zinc-500">Select Status</option>
              <option value="Student" className="bg-card-dark text-white">Student</option>
              <option value="Job Seeker" className="bg-card-dark text-white">Job Seeker</option>
              <option value="Working Professional" className="bg-card-dark text-white">Working Professional</option>
              <option value="Other" className="bg-card-dark text-white">Other</option>
            </select>
            {errors.presentStatus && <p className="text-[10px] text-red mt-0.5">{errors.presentStatus}</p>}
          </div>
        </div>
      )}

      {/* Questions */}
      <div>
        <label className="block text-xs font-bold text-zinc-300 mb-1">
          Please share questions if you have any?
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3 text-zinc-500">
            <MessageSquare className="h-4 w-4" />
          </div>
          <textarea
            rows={2}
            placeholder="Enter your question"
            value={formData.questions}
            onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
            className="w-full rounded-lg border border-border-dark bg-black/40 py-2.5 pl-10 pr-4 text-sm text-white placeholder:text-zinc-500 focus:border-green focus:outline-none transition-all resize-none"
          />
        </div>
      </div>

      {/* Consent checkbox */}
      <div>
        <label className="flex items-start gap-2.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={formData.consent}
            onChange={(e) => setFormData({ ...formData, consent: e.target.checked })}
            className="mt-1 h-3.5 w-3.5 accent-green rounded border-border-dark bg-black/40"
          />
          <span className="text-[10px] leading-relaxed text-zinc-400">
            I authorize 10xAISchool and its representatives to Call, SMS, Email or WhatsApp me about updates and notifications. This consent overrides any registration for DND/NDNC.
          </span>
        </label>
        {errors.consent && <p className="text-[10px] text-red mt-0.5">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "mt-2 flex w-full items-center justify-center gap-2 rounded-lg bg-green py-3 font-heading text-sm font-bold text-black hover:bg-accent-green transition-all shadow-md cursor-pointer",
          status === "loading" && "cursor-not-allowed opacity-80"
        )}
      >
        {status === "loading" ? (
          <>
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Booking Your Slot...</span>
          </>
        ) : (
          <>
            <span>Book Your Slot</span>
            <ArrowRight className="h-4 w-4" />
          </>
        )}
      </button>
    </form>
  );
}

export default function RequestCallBackPage() {
  return (
    <div className="bg-page-dark min-h-screen text-white flex flex-col justify-between">
      <Navbar />

      <main className="flex-grow py-20 relative overflow-hidden flex items-center">
        {/* Decorative background glows */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-green-10 blur-[128px] pointer-events-none" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-[#ff5b36]/5 blur-[128px] pointer-events-none" />

        <Container className="relative z-10 w-full">
          <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between">
            
            {/* Left Side: Information & Advisors Photo */}
            <div className="flex-1 flex flex-col gap-6 max-w-xl">
              <div className="inline-flex w-fit items-center gap-2 rounded-full border border-green-20 bg-green-10 px-4 py-1.5 text-xs font-bold text-green uppercase tracking-wider">
                <Sparkles className="h-3 w-3" />
                <span>Expert Guidance</span>
              </div>
              
              <h1 className="font-heading text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-5xl">
                Talk to Our Advisor & <br />
                <span className="text-green">Unlock Your Career Potential!</span>
              </h1>

              <p className="text-zinc-muted text-base">
                Get a personalized roadmap, clear your doubts, and discover the exact steps to transition into high-paying AI builder roles.
              </p>

              <ul className="space-y-4 my-2">
                {[
                  {
                    title: "Personalized Career Roadmap",
                    desc: "Tailored to your skills, background, and career aspirations."
                  },
                  {
                    title: "Free Career Counseling",
                    desc: "1-on-1 counseling call to help you make informed decisions."
                  },
                  {
                    title: "Dedicated Placement Support",
                    desc: "Direct access to hiring partners, resume reviews, and interview prep."
                  }
                ].map((item, i) => (
                  <li key={i} className="flex gap-3 items-start">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green/10 border border-green/30 text-green mt-0.5">
                      <Check className="h-3.5 w-3.5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{item.title}</h4>
                      <p className="text-xs text-zinc-muted mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>

              {/* Advisors Portrait */}
              <div className="relative mt-4 overflow-hidden rounded-2xl border border-border-dark bg-card-dark/40 p-4 backdrop-blur-sm max-w-md">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-black/40">
                  <Image
                    src="/images/career-advisors.png"
                    alt="Career Advisors"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div>
                    <p className="text-sm font-bold text-white">10xAISchool Career Advisors</p>
                    <p className="text-xs text-zinc-muted">Helping you bridge the gap between intent and mastery</p>
                  </div>
                  <span className="rounded-full bg-green/10 border border-green-20 px-2.5 py-0.5 text-[10px] font-mono text-green uppercase">
                    Active
                  </span>
                </div>
              </div>
            </div>

            {/* Right Side: Glassmorphism Form Card */}
            <div className="w-full lg:max-w-xl shrink-0">
              <div className="rounded-2xl border border-border-dark bg-card-dark/80 p-8 shadow-card backdrop-blur-md">
                <Suspense fallback={
                  <div className="flex flex-col items-center justify-center text-center py-12">
                    <Loader2 className="h-8 w-8 animate-spin text-green" />
                    <p className="mt-4 text-sm text-zinc-muted">Loading form...</p>
                  </div>
                }>
                  <CallbackForm />
                </Suspense>
              </div>
            </div>

          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}
