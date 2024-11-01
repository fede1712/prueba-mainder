import { AgencyHero } from "@/components/agency-hero";
import { CustomToast } from "@/components/custom-toast";
import { JobList } from "@/components/jobs-list";
import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { getJobsAgencies } from "@/lib/get-jobs-agencies";

export default async function AgencyPage({ params }: { params: Promise<{ agencySlug: string }> }) {
  const jobsByAgency = await getJobsAgencies((await params).agencySlug);
  const agencyData = await getAgenciesConfiguration((await params).agencySlug);

  return (
    <>
      <AgencyHero agencySlug={(await params).agencySlug} />

      <h2 className="text-center font-bold text-5xl my-12 text-gray-900" id="agencies-vacancies">
        {jobsByAgency?.items?.length ? "Posiciones abiertas" : "No hay posiciones disponibles"}
      </h2>
      <JobList agency={agencyData} />
      {agencyData === "error" && <CustomToast text="No hemos podido traer todas las configuraciones de las agencias" />}
      {jobsByAgency === "error" && <CustomToast text="No hemos podido traer todos los trabajos de las agencias" />}
    </>
  );
}
