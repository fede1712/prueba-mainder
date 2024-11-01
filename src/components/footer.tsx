import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="h-52 border-t-2 p-4 text-center flex justify-between items-center bg-gray-50 px-20">
      <img src="./Mainder_logo_black_wide.png" alt="Mainder logo" className="h-8" />
      <Link href="https://www.linkedin.com/company/mainder-ai/" target="_blank" rel="noreferrer">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M8 11v5" />
          <path d="M8 8v.01" />
          <path d="M12 16v-5" />
          <path d="M16 16v-3a2 2 0 1 0 -4 0" />
          <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
        </svg>
      </Link>
    </footer>
  );
};