import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { getJobsAgencies } from "@/lib/get-jobs-agencies";
import { Agency, JobAgency } from "@/types/agencies.type";
import Link from "next/link";

export const AgenciesList = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);
  const jobsAgenciesData = await getJobsAgencies(agency.slug);
  return (
    <>
      {agenciesConfigurationData ? (
        <div className={`flex gap-4 m-2 bg-[${agenciesConfigurationData?.primary_color}] p-4 rounded-lg`}>
          <h2 className="text-2xl font-bold">{agency.name}</h2>
          <img src={agenciesConfigurationData.logo_url} alt={agenciesConfigurationData.name} className="w-32 h-32" />
          {jobsAgenciesData?.items?.map((jobAgency: JobAgency) => (
            <div key={jobAgency.id}>
              <h3 className="text-xl font-bold">{jobAgency.title}</h3>
              <p>{jobAgency.languages && jobAgency.languages.map((language) => language.code).join(", ")}</p>
              {/* <Link href={`/job-details?jobPositionId=${jobAgency.id}/?agencySlug=${agency.slug}`}>
            <p className="text-sm">Ver detalles</p>
            </Link> */}
              {/* <p className="text-sm" dangerouslySetInnerHTML={{ __html: jobAgency.job_description }}></p> */}
            </div>
          ))}
        </div>
      ) : (
        <p>No hemos podido encontrar los datos</p>
      )}
    </>
  );
};
