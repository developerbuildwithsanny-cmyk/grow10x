"use client";

import React, { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { 
  User, 
  Mail, 
  Phone, 
  GraduationCap, 
  MessageSquare, 
  Loader2,
  ArrowRight
} from "lucide-react";
import { submitLead } from "@/app/actions";
import { cn } from "@/lib/utils";
import { HomeNavbar } from "@/components/home/HomeNavbar";
import BookingSuccess from "./BookingSuccess";


function CallbackForm() {
  const searchParams = useSearchParams();
  const [source] = useState(
    () => searchParams.get("source") || "Callback Page - General Inquiry",
  );

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
    } catch {
      setStatus("error");
      setErrorMessage("An unexpected error occurred. Please try again.");
    }
  };

  if (status === "success") {
    return <BookingSuccess />;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <span className="font-heading text-xs uppercase tracking-wider text-[#e8672e]">
        Join the 10xAISchool Community        
        </span>
        
      </div>

      {errorMessage && (
        <div className="rounded-lg border border-red-200 bg-red-50 p-3 text-xs font-semibold text-red-700">
          {errorMessage}
        </div>
      )}

      {/* Name */}
      <div>
          <label className="mb-1 block text-xs font-bold text-[#1b1812]">
           Name <span className="text-red-600">*</span>
        </label>
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#9a8d7c]">
            <User className="h-4 w-4" />
          </div>
          <input
            type="text"
            required
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] py-2.5 pl-10 pr-4 text-sm text-[#1b1812] placeholder:text-[#9a8d7c] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.name && "border-red-500 focus:border-red-500"
            )}
          />
        </div>
        {errors.name && <p className="mt-0.5 text-[10px] text-red-600">{errors.name}</p>}
      </div>

      {/* Email */}
      <div>
          <label className="mb-1 block text-xs font-bold text-[#1b1812]">
           E-mail <span className="text-red-600">*</span>
        </label>
        <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#9a8d7c]">
            <Mail className="h-4 w-4" />
          </div>
          <input
            type="email"
            required
            placeholder="Enter your Email Id"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] py-2.5 pl-10 pr-4 text-sm text-[#1b1812] placeholder:text-[#9a8d7c] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.email && "border-red-500 focus:border-red-500"
            )}
          />
        </div>
        {errors.email && <p className="mt-0.5 text-[10px] text-red-600">{errors.email}</p>}
      </div>

      {/* Mobile & Degree */}
      <div className="grid gap-4 sm:grid-cols-2">
        <div>
          <label className="mb-1 block text-xs font-bold text-[#1b1812]">
            Mobile Number <span className="text-red-600">*</span>
          </label>
          <div className="relative flex items-center">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#9a8d7c]">
              <Phone className="h-4 w-4" />
            </div>
            <span className="absolute left-9 select-none text-sm font-semibold text-[#9a8d7c]">
              +91
            </span>
            <input
              type="tel"
              required
              placeholder="Enter Mobile Number"
              value={formData.mobile}
              onChange={(e) => setFormData({ ...formData, mobile: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] py-2.5 pl-[72px] pr-4 text-sm text-[#1b1812] placeholder:text-[#9a8d7c] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.mobile && "border-red-500 focus:border-red-500"
              )}
            />
          </div>
          {errors.mobile && <p className="mt-0.5 text-[10px] text-red-600">{errors.mobile}</p>}
        </div>

        <div>
          <label className="mb-1 block text-xs font-bold text-[#1b1812]">
            Degree Details <span className="text-red-600">*</span>
          </label>
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-[#9a8d7c]">
              <GraduationCap className="h-4 w-4" />
            </div>
            <input
              type="text"
              required
              placeholder="Recent qualification"
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] py-2.5 pl-10 pr-4 text-sm text-[#1b1812] placeholder:text-[#9a8d7c] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.degree && "border-red-500 focus:border-red-500"
              )}
            />
          </div>
          {errors.degree && <p className="mt-0.5 text-[10px] text-red-600">{errors.degree}</p>}
        </div>
      </div>

      {/* Dynamic Fields (slide down) */}
      {formData.degree.trim() !== "" && (
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 animate-in fade-in slide-in-from-top-2 duration-300">
          <div>
            <label className="mb-1 block text-xs font-bold text-[#1b1812]">
              Year of Passing <span className="text-red-600">*</span>
            </label>
            <select
              required
              value={formData.yearOfPassing}
              onChange={(e) => setFormData({ ...formData, yearOfPassing: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] px-3 py-2.5 text-sm text-[#1b1812] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.yearOfPassing && "border-red-500"
              )}
            >
              <option value="" disabled className="bg-white text-[#9a8d7c]">Select Year</option>
              <option value="2028" className="bg-white text-[#1b1812]">2028</option>
              <option value="2027" className="bg-white text-[#1b1812]">2027</option>
              <option value="2026" className="bg-white text-[#1b1812]">2026</option>
              <option value="2025" className="bg-white text-[#1b1812]">2025</option>
              <option value="2024" className="bg-white text-[#1b1812]">2024</option>
              <option value="2023" className="bg-white text-[#1b1812]">2023</option>
              <option value="2022" className="bg-white text-[#1b1812]">2022</option>
              <option value="2021" className="bg-white text-[#1b1812]">2021</option>
              <option value="2020" className="bg-white text-[#1b1812]">2020</option>
              <option value="Before 2020" className="bg-white text-[#1b1812]">Before 2020</option>
            </select>
            {errors.yearOfPassing && <p className="mt-0.5 text-[10px] text-red-600">{errors.yearOfPassing}</p>}
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-[#1b1812]">
              State <span className="text-red-600">*</span>
            </label>
            <select
              required
              value={formData.state}
              onChange={(e) => setFormData({ ...formData, state: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] px-3 py-2.5 text-sm text-[#1b1812] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.state && "border-red-500"
              )}
            >
              <option value="" disabled className="bg-white text-[#9a8d7c]">Select State</option>
              <option value="Andhra Pradesh" className="bg-white text-[#1b1812]">Andhra Pradesh</option>
              <option value="Telangana" className="bg-white text-[#1b1812]">Telangana</option>
              <option value="Karnataka" className="bg-white text-[#1b1812]">Karnataka</option>
              <option value="Maharashtra" className="bg-white text-[#1b1812]">Maharashtra</option>
              <option value="Tamil Nadu" className="bg-white text-[#1b1812]">Tamil Nadu</option>
              <option value="Delhi" className="bg-white text-[#1b1812]">Delhi</option>
              <option value="Uttar Pradesh" className="bg-white text-[#1b1812]">Uttar Pradesh</option>
              <option value="Others" className="bg-white text-[#1b1812]">Others</option>
            </select>
            {errors.state && <p className="mt-0.5 text-[10px] text-red-600">{errors.state}</p>}
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold text-[#1b1812]">
              Present Status <span className="text-red-600">*</span>
            </label>
            <select
              required
              value={formData.presentStatus}
              onChange={(e) => setFormData({ ...formData, presentStatus: e.target.value })}
              className={cn(
                "w-full rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] px-3 py-2.5 text-sm text-[#1b1812] focus:border-[#e8672e] focus:outline-none transition-all",
                errors.presentStatus && "border-red-500"
              )}
            >
              <option value="" disabled className="bg-white text-[#9a8d7c]">Select Status</option>
              <option value="Student" className="bg-white text-[#1b1812]">Student</option>
              <option value="Job Seeker" className="bg-white text-[#1b1812]">Job Seeker</option>
              <option value="Working Professional" className="bg-white text-[#1b1812]">Working Professional</option>
              <option value="Other" className="bg-white text-[#1b1812]">Other</option>
            </select>
            {errors.presentStatus && <p className="mt-0.5 text-[10px] text-red-600">{errors.presentStatus}</p>}
          </div>
        </div>
      )}

      {/* Questions */}
      <div>
        <label className="mb-1 block text-xs font-bold text-[#1b1812]">
          Please share questions if you have any?
        </label>
        <div className="relative">
          <div className="pointer-events-none absolute left-3 top-3 text-[#9a8d7c]">
            <MessageSquare className="h-4 w-4" />
          </div>
          <textarea
            rows={2}
            placeholder="Enter your question"
            value={formData.questions}
            onChange={(e) => setFormData({ ...formData, questions: e.target.value })}
            className="w-full resize-none rounded-lg border border-[#e4d6bb] bg-[#fbf5ea] py-2.5 pl-10 pr-4 text-sm text-[#1b1812] placeholder:text-[#9a8d7c] focus:border-[#e8672e] focus:outline-none transition-all"
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
            className="mt-1 h-3.5 w-3.5 rounded border-[#e4d6bb] accent-[#e8672e]"
          />
          <span className="text-[10px] leading-relaxed text-[#6e6252]">
            I authorize 10xAISchool and its representatives to Call, SMS, Email or WhatsApp me about updates and notifications. This consent overrides any registration for DND/NDNC.
          </span>
        </label>
        {errors.consent && <p className="mt-0.5 text-[10px] text-red-600">{errors.consent}</p>}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={status === "loading"}
        className={cn(
          "mt-2 flex w-full cursor-pointer items-center justify-center gap-2 rounded-lg bg-[#e8672e] py-3 font-heading text-sm font-bold text-white shadow-md transition-all hover:bg-[#d1541f]",
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
    <div className="min-h-screen bg-[#fbf5ea] text-[#1b1812]">
      <HomeNavbar />

      <main className="flex min-h-[calc(100vh-68px)] items-center justify-center px-4 py-6 sm:px-6 ">
        <div className="w-full max-w-2xl">
          <div className="mb-4 text-center sm:mb-5">
            <p className="mb-3 font-figtree text-xs font-bold uppercase tracking-[0.18em] text-[#e8672e] sm:text-sm">
              Congrats! You are just one step away
            </p>
            <h1 className=" text-3xl font-black leading-tight text-[#1b1812] sm:text-4xl">
              To Join the AI Builders Community
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-base text-[#6e6252] sm:text-lg">
              Anyone from any field can join.
            </p>
          </div>

          <div className="rounded-2xl border border-[#e4d6bb] bg-white p-5 shadow-[0_20px_60px_rgba(82,54,28,0.12)] sm:p-8">
            <Suspense fallback={
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <Loader2 className="h-8 w-8 animate-spin text-[#e8672e]" />
                <p className="mt-4 text-sm text-[#6e6252]">Loading form...</p>
              </div>
            }>
              <CallbackForm />
            </Suspense>
          </div>
        </div>
      </main>
    </div>
  );
}
