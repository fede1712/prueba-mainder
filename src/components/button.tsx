export const Button = ({
  onClick,
  text,
  bgColor,
  textColor,
}: {
  onClick?: () => void;
  text: string;
  bgColor?: string;
  textColor?: string;
}) => {
  return (
    <button
      onClick={onClick && onClick}
      className={`mt-10 sm:mt-0 rounded-full
        ${bgColor ? bgColor : "bg-gray-200"}
        ${
          textColor ? textColor : "text-gray-950"
        } px-4 py-2 sm:px-10 sm:py-4 transition-all duration-200 hover:scale-105 ${
        bgColor === "bg-red-400" ? "bg-red-400" : "hover:bg-gradient-to-r"
      } hover:from-blue-700 hover:to-purple-700 hover:text-gray-50`}
    >
      {text}
    </button>
  );
};
