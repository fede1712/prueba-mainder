import Link from "next/link";

export const Navbar = () => {
  return (
    <nav className="flex justify-center items-center p-4 bg-gray-50">
      <Link href="/">
        <img src="./Mainder_logo_black_wide.png" alt="Mainder logo" className="h-8 sm:h-12" />
      </Link>
    </nav>
  );
};
