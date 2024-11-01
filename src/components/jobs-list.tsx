import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { getJobsAgencies } from "@/lib/get-jobs-agencies";
import { Agency, JobAgency } from "@/types/agencies.type";
import { getWorkMode } from "@/utils/getWorkMode";
import Link from "next/link";
import { Button } from "./button";
import { CustomToast } from "./custom-toast";

export const JobList = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);
  const jobsAgenciesData = await getJobsAgencies(agency.slug);

  return (
    <>
      {agenciesConfigurationData && (
        <>
          {jobsAgenciesData &&
            jobsAgenciesData?.items?.map((jobAgency: JobAgency) => (
              <div
                key={jobAgency.id}
                className="bg-gray-200 gap-10 m-4 p-4 rounded-lg sm:mx-32 flex justify-between items-center "
              >
                <div className="gap-2 items-center">
                  <h3 className="font-semibold text-xl h-fit sm:text-6xl sm:font-medium capitalize bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
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
                <Link href={`/job-details/${jobAgency.id}/${agency.slug}`}>
                  <Button
                    text="Aplicar"
                    bgColor="bg-gradient-to-r from-blue-700 to-purple-700"
                    textColor="text-gray-50"
                  />
                </Link>
              </div>
            ))}
        </>
      )}
      {agenciesConfigurationData === "error" && (
        <CustomToast text="No hemos podido traer todas las configuraciones de las agencias" />
      )}
      {jobsAgenciesData === "error" && <CustomToast text="No hemos podido traer todos los trabajos de las agencias" />}
    </>
  );
};
