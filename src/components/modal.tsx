export const Modal = ({
  isOpen,
  onClose,
  jobDetailsTitle,
  showToast,
}: {
  isOpen: boolean;
  onClose: () => void;
  jobDetailsTitle: string;
  showToast: () => void;
}) => {
  if (!isOpen) return null;

  const handleSubmit = () => {
    onClose();
    showToast();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-6 shadow-lg w-1/3">
        <h2 className="text-4xl text-gray-950 font-semibold mb-4 text-center">{jobDetailsTitle}</h2>
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
          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={onClose}
              className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50"
            >
              Cancelar
            </button>
            <button
              type="submit"
              className="mt-10 rounded-full bg-gray-200 px-10 py-4 transition-all duration-300 hover:bg-blue-950 hover:text-gray-50 hover:border-gray-50"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
