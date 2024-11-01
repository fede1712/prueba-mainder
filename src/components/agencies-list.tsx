import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { getJobsAgencies } from "@/lib/get-jobs-agencies";
import { Agency, JobAgency } from "@/types/agencies.type";
import { getWorkMode } from "@/utils/getWorkMode";
import Link from "next/link";
import { ErrorComponent } from "./error-component";

export const AgenciesList = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);
  const jobsAgenciesData = await getJobsAgencies(agency.slug);

  return (
    <>
      {agenciesConfigurationData && (
        <>
          {jobsAgenciesData?.items?.map((jobAgency: JobAgency) => (
            <div key={jobAgency.id} className="bg-gray-200 gap-10 m-4 p-4 rounded-lg sm:mx-32 flex justify-between">
              <div className="gap-2 items-center">
                <h3 className="font-semibold text-xl sm:text-6xl sm:font-medium capitalize text-gray-900">
                  {jobAgency.title}
                </h3>
                <div className="flex gap-1 sm:gap-2 items-center mt-2">
                  <p className="font-semibold text-gray-900">{getWorkMode(jobAgency.work_mode)} </p>
                  <span className="flex justify-center items-center text-gray-900"> - </span>
                  <div className="flex gap-1 items-center">
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
                      className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                      <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                      <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
                    </svg>
                    <p className="font-semibold text-gray-900">
                      {jobAgency.locations.map((location) => location.name)}
                    </p>
                  </div>
                </div>
              </div>

              <div className="gap-4 items-center flex flex-col">
                <Link href={`/job-details/${jobAgency.id}/${agency.slug}`}>
                  <button className="bg-gray-200 border border-gray-900 text-gray-900 px-4 sm:px-8 py-2 rounded-full transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50">
                    Aplicar
                  </button>
                </Link>

                <div className={`flex gap-2 items-center bg-[${agenciesConfigurationData.primary_color}]`}>
                  {agenciesConfigurationData.logo_url && (
                    <img
                      src={agenciesConfigurationData.logo_url}
                      alt={agenciesConfigurationData.name}
                      className="h-4 sm:h-6 rounded-full"
                    />
                  )}
                  {agenciesConfigurationData.name && <p className="text-xs font-semibold sm:text-sm">{agency.name}</p>}
                </div>
              </div>
            </div>
          ))}
        </>
      )}
      {agenciesConfigurationData === "error" && <ErrorComponent />}
    </>
  );
};
