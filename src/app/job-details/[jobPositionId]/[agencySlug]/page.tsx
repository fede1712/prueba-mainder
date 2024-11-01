import { JobDescription } from "@/components/job-description";
import { getJobDetails } from "@/lib/get-job-details";
import { Location } from "@/types/agencies.type";
import { getWorkMode } from "@/utils/getWorkMode";
import Link from "next/link";

export default async function JobDetailsPage({ params }: { params: { jobPositionId: string; agencySlug: string } }) {
  const { agencySlug, jobPositionId } = await params;

  const jobDetails = await getJobDetails(agencySlug, jobPositionId);

  return (
    <div>
      <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-950 h-screen">
        <div className="flex gap-4 mb-4 items-center">
          <p className="font-semibold text-gray-50">{getWorkMode(jobDetails.work_mode)}</p>
          <span className="flex justify-center items-center text-gray-50 font-bold text-2xl"> - </span>
          <div className="flex gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-gray-50"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="text-gray-50">{jobDetails.locations.map((location: Location) => location.name)}</p>
          </div>
        </div>
        <h2 className="font-bold text-7xl text-gray-50 text-center">{jobDetails.title}</h2>
        <button className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50">
          ¡Aplica!
        </button>
        <Link href="#details" className="pt-20">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down text-gray-50 animate-bounce cursor-pointer"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M12 5l0 14" />
            <path d="M18 13l-6 6" />
            <path d="M6 13l6 6" />
          </svg>
        </Link>
      </div>
      <JobDescription job={jobDetails} />
      <div className="flex justify-center items-center my-10">
        <button className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50">
          ¡Aplica!
        </button>
      </div>
    </div>
  );
}
