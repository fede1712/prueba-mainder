export interface Agency {
  id: string;
  name: string;
  slug: string;
  web_url: string;
  linkedin_url: string;
}

export interface AgencyConfiguration {
  name: string;
  logo_url: string;
  primary_color: string;
  agency_id: string;
  slug: string;
}

export interface JobAgency {
  id: string;
  title: string;
  recruiting_type: string;
  hiring_number: number;
  job_description: string;
  years_experience: { from: number; to: number };
  work_mode: WorkModeType;
  contract_type: string;
  locations: Location[];
  languages: { code: Languages; proficiency: string }[];
  hard_skills: { id: string; name: string; description: string }[];
  soft_skills: { id: string; name: string; description: string }[];
  benefits: string[];
  expected_salary: { currency: string; amount: null };
  published_at: string;
}

export type WorkModeType = "ON-SITE" | "HYBRID" | "REMOTE";

export type Languages = "es" | "en" | "fr" | "de" | "it";
export interface Location {
  id: string;
  name: string;
  address: string;
  country: string;
}
