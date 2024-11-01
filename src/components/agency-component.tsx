import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { Agency } from "@/types/agencies.type";
import Link from "next/link";

export const AgencyComponent = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);

  return (
    <Link href={`/agency/${agency.slug}`} className="hover:scale-110 transform transition duration-200">
      <div className="flex gap-4 flex-col justify-center items-center bg-gray-200 py-4 px-10 rounded-lg w-80 sm:w-48 h-48">
        {agenciesConfigurationData?.logo_url && (
          <img src={agenciesConfigurationData?.logo_url} alt="Logo de la agencia" className="w-12 object-contain" />
        )}
        <p className="text-center font-semibold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
          {agency.name}
        </p>
      </div>
    </Link>
  );
};
