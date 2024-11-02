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
      className={`rounded-full  px-4 py-2 ${bgColor ? bgColor : "bg-gray-200"} ${
        textColor ? textColor : "text-gray-900"
      } sm:mt-0 sm:px-10 sm:py-4 transition-all duration-200 hover:scale-105 hover:bg-gradient-to-r hover:from-blue-700 hover:to-purple-700 hover:text-gray-50`}
    >
      {text}
    </button>
  );
};
