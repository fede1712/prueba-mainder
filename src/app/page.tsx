import { AgenciesList } from "@/components/agencies-list";
import { Hero } from "@/components/hero";
import { getAgencies } from "@/lib/get-agencies";
import { Agency } from "@/types/agencies.type";

export default async function Home() {
  const data = await getAgencies();
  return (
    <main className="bg-gray-50">
      <Hero />
      <h2 className="text-center font-bold text-5xl my-12 text-gray-900" id="vacancies">
        Posiciones abiertas
      </h2>
      <div className="my-20 bg-gray-50">
        {data && data.map((agency: Agency) => <AgenciesList key={agency.id} agency={agency} />)}
      </div>
    </main>
  );
}
