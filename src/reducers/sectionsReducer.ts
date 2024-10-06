import { sectionAction } from "src/utils/types/actions";
import { SectionType } from "src/utils/types/article";

export function sectionsReducer(
  sections: Array<SectionType>,
  action: sectionAction
) {
  switch (action.type) {
    case "initialize_sections": {
      return action.sections;
    }
    case "add_section": {
      return [
        ...sections,
        { title: "", content: "", image: { alt: "", url: "" } },
      ];
    }
    case "remove_section": {
      return sections.filter((_, i) => i !== action.index);
    }
    case "update_section": {
      const updatedSections = [...sections];
      updatedSections[action.index] = {
        ...updatedSections[action.index],
        [action.field]: action.value,
      };
      return updatedSections;
    }
    default: {
      throw Error("Unknown action");
    }
  }
}
