"use server";

import { createClient } from "@supabase/supabase-js";

const supabaseUrl = (process.env.NEXT_PUBLIC_SUPABASE_URL || "").trim();
const supabaseAnonKey = (process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || "").trim();

const supabase = supabaseUrl && supabaseAnonKey ? createClient(supabaseUrl, supabaseAnonKey) : null;

export async function submitLead(formData: {
  name: string;
  email: string;
  mobile: string;
  degree: string;
  yearOfPassing?: string;
  state?: string;
  presentStatus?: string;
  questions?: string;
  consent: boolean;
  source: string;
}) {
  console.log("Submitting lead data:", formData);

  // Validate fields
  if (!formData.name.trim()) {
    return { success: false, error: "Name is required." };
  }
  if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
    return { success: false, error: "A valid email is required." };
  }
  if (!formData.mobile.trim()) {
    return { success: false, error: "Mobile number is required." };
  }
  if (!formData.degree.trim()) {
    return { success: false, error: "Degree/Qualification details are required." };
  }
  // If degree has content, validate yearOfPassing, state, presentStatus
  if (formData.degree.trim()) {
    if (!formData.yearOfPassing?.trim()) {
      return { success: false, error: "Year of Passing is required." };
    }
    if (!formData.state?.trim()) {
      return { success: false, error: "State is required." };
    }
    if (!formData.presentStatus?.trim()) {
      return { success: false, error: "Present Status is required." };
    }
  }
  if (!formData.consent) {
    return { success: false, error: "Consent checkbox must be checked to continue." };
  }

  // Simulate network delay for better UX
  await new Promise((resolve) => setTimeout(resolve, 1500));

  if (!supabase) {
    console.warn("Supabase credentials not configured in environment variables. Simulating success.");
    return { 
      success: true, 
      simulated: true, 
      message: "Lead simulated successfully. Configure NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to store in database." 
    };
  }

  try {
    const { error } = await supabase.from("lead_submissions").insert([
      {
        name: formData.name,
        email: formData.email,
        mobile_number: formData.mobile,
        degree_details: formData.degree,
        year_of_passing: formData.yearOfPassing || "",
        state: formData.state || "",
        present_status: formData.presentStatus || "",
        questions: formData.questions || "",
        consent: formData.consent,
        source: formData.source,
      },
    ]);

    if (error) {
      console.error("Supabase insert error:", error);
      return { success: false, error: error.message };
    }

    return { success: true };
  } catch (err: any) {
    console.error("Submission exception:", err);
    return { success: false, error: err.message || "An unexpected error occurred." };
  }
}

