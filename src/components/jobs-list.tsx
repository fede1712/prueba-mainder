import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { getJobsAgencies } from "@/lib/get-jobs-agencies";
import { Agency, JobAgency } from "@/types/agencies.type";
import { CustomToast } from "./custom-toast";
import { JobComponent } from "./job-component";

export const JobList = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);
  const jobsAgenciesData = await getJobsAgencies(agency.slug);

  return (
    <>
      {agenciesConfigurationData && (
        <>
          {jobsAgenciesData &&
            jobsAgenciesData?.items?.map((jobAgency: JobAgency) => (
              <JobComponent key={jobAgency.id} job={jobAgency} agency={agency} />
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
