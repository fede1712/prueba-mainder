import { Agency } from "@/types/agencies.type";
import { AgencyComponent } from "./agency-component";

export const AgenciesList = async ({ agencies }: { agencies: Agency[] }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-6 gap-8 items-center sm:mx-32 px-10 py-4 justify-center">
      {agencies.map((agency: Agency) => {
        return <AgencyComponent agency={agency} key={agency.id} />;
      })}
    </div>
  );
};
