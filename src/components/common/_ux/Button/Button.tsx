import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ButtonProps {
  size: "xs" | "s" | "md" | "lg" | "xlg" | "full";
  text: string;
  type: "primary" | "secondary" | "danger" | "success";
  icon?: IconDefinition;
  rounded?: boolean;
  disabled?: boolean;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  size,
  icon,
  text,
  disabled,
  type,
  rounded = true,
  onClick,
}) => {
  const colorClassMap = {
    primary: "bg-brand text-white hover:bg-brand-dark",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
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

  const roundedClasses = `${rounded ? "rounded-md" : ""} `;
  return (
    <button
      className={`${colorClassMap[type]} ${sizeClassMap[size]} ${roundedClasses} transition duration-300 shadow-md`}
      onClick={onClick}
      disabled={disabled}
    >
      {icon && <FontAwesomeIcon icon={icon} className="mr-2" />}
      {text}
    </button>
  );
};

export default Button;
