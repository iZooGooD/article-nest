import { Link } from "react-router-dom";

interface LinkTextProps {
  to: string;
  text: string;
}

const LinkText: React.FC<LinkTextProps> = ({ to, text }) => {
  return (
    <Link className="text-lg text-grey-light hover:text-white" to={to}>
      {text}
    </Link>
  );
};

export default LinkText;
