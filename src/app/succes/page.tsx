import { CustomButton } from "@/components/custom-button";
import Link from "next/link";

export default function SuccesPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-4xl sm:text-6xl font-bold text-gray-900 dark:text-gray-50 text-center">
        ¡Tu aplicación ha sido enviada con éxito!
      </h2>
      <Link href="/" className="mt-10">
        <CustomButton
          text="Volver a la página principal"
          bgColor="bg-gradient-to-r from-blue-700 to-purple-700"
          textColor="text-gray-50"
        />
      </Link>
    </div>
  );
}
