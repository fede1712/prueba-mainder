import { getAgenciesConfiguration } from "@/lib/get-agencies-configuration";
import Link from "next/link";
import { GoBackArrow } from "./goBackArrow";
import { CustomToast } from "./custom-toast";

export const AgencyHero = async ({ agencySlug }: { agencySlug: string }) => {
  const agencyData = await getAgenciesConfiguration(agencySlug);

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-950 h-screen">
      <GoBackArrow />
      {agencyData.logo_url && (
        <img
          src={agencyData.logo_url}
          alt="Logo de la agencia"
          className="max-w-52 sm:max-w-96 mt-20 sm:mt-0 sm:h-48 object-contain rounded-full"
        />
      )}
      <h1 className="font-bold text-4xl sm:text-7xl text-center p-10 m-10 mt-20 text-gray-50">{agencyData.name}</h1>

      <Link href="#agencies-vacancies">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-arrow-down text-gray-50 animate-bounce cursor-pointer"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M12 5l0 14" />
          <path d="M18 13l-6 6" />
          <path d="M6 13l6 6" />
        </svg>
      </Link>
      {agencyData === "error" && <CustomToast text="No hemos podido traer todas las configuraciones de las agencias" />}
    </div>
  );
};
