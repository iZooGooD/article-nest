import { Link } from "react-router-dom";

interface LinkTextProps {
  to: string;
  text: string;
}

const LinkText: React.FC<LinkTextProps> = ({ to, text }) => {
  return (
    <li className="mx-4 list-none">
      <Link className="text-lg text-grey-light hover:text-white" to={to}>
        {text}
      </Link>
    </li>
  );
};

export default LinkText;
