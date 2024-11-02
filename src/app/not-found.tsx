import { CustomButton } from "@/components/custom-button";
import Link from "next/link";

export default function NotFoundPage() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-6xl font-bold text-gray-900 dark:text-gray-50">Página no encontrada</h2>
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
