import { Location, WorkModeType } from "@/types/agencies.type";
import { getWorkMode } from "@/utils/getWorkMode";
import { Button } from "./button";

export const Modal = ({
  isOpen,
  onClose,
  jobDetailsTitle,
  showToast,
  jobDetailsLocations,
  jobDetailsWorMode,
}: {
  isOpen: boolean;
  onClose: () => void;
  jobDetailsTitle: string;
  showToast: () => void;
  jobDetailsLocations: Location[];
  jobDetailsWorMode: WorkModeType;
}) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onClose();
    showToast();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white mx-10 rounded-lg p-6 shadow-lg sm:w-1/3 ">
        <h2 className="text-4xl text-gray-900 font-semibold mb-4 text-center">{jobDetailsTitle}</h2>
        <div className="flex gap-4 mb-4 items-center justify-center">
          <p className="font-semibold text-gray-900">{getWorkMode(jobDetailsWorMode)}</p>
          <span className="flex justify-center items-center text-gray-900 text-2xl"> - </span>
          <div className="flex gap-1">
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
              className="icon icon-tabler icons-tabler-outline icon-tabler-map-pin text-gray-900"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0z" />
            </svg>
            <p className="text-gray-900">{jobDetailsLocations.map((location: Location) => location.name)}</p>
          </div>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Nombre
            </label>
            <input type="text" id="name" required className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="name">
              Apellidos
            </label>
            <input type="text" id="name" required className="border border-gray-300 rounded-md p-2 w-full" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input type="email" id="email" required className="border border-gray-200 rounded-md p-2 w-full" />
          </div>
          <div className="flex justify-center sm:justify-end gap-2">
            <Button onClick={onClose} text="Cancelar" bgColor="bg-red-400" />
            <Button onClick={handleSubmit} text="Enviar" />
          </div>
        </form>
      </div>
    </div>
  );
};
