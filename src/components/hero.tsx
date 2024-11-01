import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-blue-950 to-purple-950 h-screen">
      <h1 className="font-bold text-7xl text-center  border-2 border-gray-50 p-10 m-10 mt-20 rounded-lg bg-gradient-to-r from-purple-700 to-blue-700 text-transparent bg-clip-text">
        Encuentra tu próximo desafío: el trabajo que mereces está a un clic de distancia.
      </h1>

      <Link href="#vacancies">
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
    </div>
  );
};
