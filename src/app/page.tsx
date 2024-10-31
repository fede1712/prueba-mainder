import { AgenciesList } from "@/components/agencies-list";
import { getAgencies } from "@/lib/get-agencies";
import { Agency } from "@/types/agencies.type";

export default async function Home() {
  const data = await getAgencies();
  return (
    <main className="m-auto">
      <h1>MAINDER</h1>
      {data && data.map((agency: Agency) => <AgenciesList key={agency.id} agency={agency} />)}
    </main>
  );
}
