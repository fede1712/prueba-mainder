import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import { Agency } from "@/types/agencies.type";
import Link from "next/link";
import "./css/agencies-list.css";
import { CustomToast } from "./custom-toast";

export const AgencyComponent = async ({ agency }: { agency: Agency }) => {
  const agenciesConfigurationData = await getAgenciesConfiguration(agency.slug);

  return (
    <Link href={`/agency/${agency.slug}`} className="hover:scale-105 transform transition duration-200 carousel-item">
      <div className="flex gap-4 flex-col justify-center items-center bg-gray-200 py-4 px-10 rounded-lg w-72 sm:w-40 h-40 dark:bg-gray-800">
        {agenciesConfigurationData?.logo_url && (
          <img
            src={agenciesConfigurationData?.logo_url}
            alt="Logo de la agencia"
            className="w-24 sm:w-16 object-contain"
          />
        )}
        {!agenciesConfigurationData?.logo_url && (
          <p className="text-center font-semibold bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
            {agency.name}
          </p>
        )}
      </div>
      {agenciesConfigurationData === "error" && (
        <CustomToast text="No hemos podido traer todas las configuraciones de las agencias" />
      )}
    </Link>
  );
};
