import { Agency } from "@/types/agencies.type";
import { AgencyComponent } from "./agency-component";
import "./css/agencies-list.css";

export const AgenciesList = async ({ agencies }: { agencies: Agency[] }) => {
  return (
    <div className="container carousel-container md:w-[80%]">
      <div className="flex carousel h-56 items-center">
        {agencies.map((agency: Agency) => (
          <AgencyComponent agency={agency} key={agency.id} />
        ))}
      </div>
    </div>
  );
};
