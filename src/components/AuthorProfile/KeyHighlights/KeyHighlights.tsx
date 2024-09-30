import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyHighlightsType as KeyHighlightsProps } from "src/utils/types/profile";
import {
  faEye,
  faFileAlt,
  faComments,
} from "@fortawesome/free-solid-svg-icons";

const KeyHighlights: React.FC<KeyHighlightsProps> = ({
  profileViews,
  articlesPublishedMonth,
  articlesEngaged,
}) => {
  return (
    <div className="key-highlights mt-6 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-md">
      <h3 className="text-xl font-bold mb-4 text-neutral-800 dark:text-gray-200">
        Key Highlights
      </h3>
      <ul className="text-lg text-neutral-600 dark:text-gray-400 space-y-4">
        <li className="md:text-lg text-sm">
          <FontAwesomeIcon icon={faEye} className="text-brand mr-3" />
          Eve Black has&nbsp;
          <strong>{profileViews} profile views</strong>
        </li>
        <li className="md:text-lg text-sm">
          <FontAwesomeIcon icon={faFileAlt} className="text-brand mr-3" />
          Eve Black has published&nbsp;
          <strong>{articlesPublishedMonth} article this month</strong>
        </li>
        <li className="md:text-lg text-sm">
          <FontAwesomeIcon icon={faComments} className="text-brand mr-3" />
          Eve Black has engaged and commented on&nbsp;
          <strong>{articlesEngaged} articles</strong>
        </li>
      </ul>
    </div>
  );
};

export default KeyHighlights;
