import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  size: "xs" | "s" | "md" | "lg" | "xlg" | "full";
  text: string;
  type: "primary" | "secondary" | "danger" | "success";
  icon?: IconDefinition;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ size, icon, text, type, onClick }) => {
  const colorClassMap = {
    primary: "bg-brand text-white",
    secondary: "bg-gray-500 text-white",
    danger: "bg-red-500 text-white",
    success: "bg-green-500 text-white",
  };
  const sizeClassMap = {
    xs: "py-1 px-2",
    s: "py-2 px-4",
    md: "py-3 px-6",
    lg: "py-4 px-8",
    xlg: "py-5 px-10",
    full: "py-3 px-6 w-full",
  };
  const defaultClass = "rounded-md";
  return (
    <button
      className={`${colorClassMap[type]} ${sizeClassMap[size]} ${defaultClass} hover:bg-brand-dark transition duration-300 shadow-md`}
      onClick={onClick}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  );
};

export default Button;
