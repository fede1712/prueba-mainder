import Link from "next/link";
import { CustomButton } from "./custom-button";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-950 h-screen w-screen m-0 p-0">
      <h1 className="font-bold text-4xl sm:text-8xl text-center p-10  rounded-lg text-gray-50 ">
        El trabajo que mereces está a un click de distancia.
      </h1>

      <Link href="#vacancies" className="flex flex-col justify-center items-center">
        <CustomButton text="Ver ofertas" />
      </Link>
    </div>
  );
};
