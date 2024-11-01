import { JobList } from "@/components/jobs-list";
import { Hero } from "@/components/hero";
import { getAgencies } from "@/lib/get-agencies";
import { Agency } from "@/types/agencies.type";
import { AgenciesList } from "@/components/agencies-list";
import { CustomToast } from "@/components/custom-toast";

export default async function Home() {
  const agencies = await getAgencies();

  return (
    <main className="bg-gray-50">
      <Hero />
      <h2 className="text-center font-bold text-5xl my-12 text-gray-900 mt-20" id="vacancies">
        Posiciones abiertas
      </h2>
      <div className="my-20 bg-gray-50">
        {agencies && agencies.map((agency: Agency) => <JobList key={agency.id} agency={agency} />)}
      </div>
      <h2 className="text-center font-bold text-5xl my-12 text-gray-900">Nuestras Agencias</h2>
      <div className="my-10 bg-gray-50 flex justify-center items-center">
        <AgenciesList agencies={agencies} />
      </div>
      {agencies === "error" && <CustomToast text="No hemos podido traer todas las agencias" />}
    </main>
  );
}
