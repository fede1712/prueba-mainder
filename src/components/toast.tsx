export const Toast = ({ isToastOpen }: { isToastOpen: boolean }) => {
  if (!isToastOpen) return null;

  return (
    <div
      className={`fixed bottom-5 right-5 bg-gray-50 flex gap-2 px-10 text-center py-4 rounded shadow-lg transition-opacity duration-1000 ${
        isToastOpen ? "opacity-100" : "opacity-0"
      }`}
    >
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
        className="icon icon-tabler icons-tabler-outline icon-tabler-check"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M5 12l5 5l10 -10" />
      </svg>
      <p className="text-gray-950 font-semibold">Has aplicado con éxito</p>
    </div>
  );
};
