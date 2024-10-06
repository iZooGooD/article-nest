import { SectionType } from "./article";

export type sectionAction =
  | { type: "initialize_sections"; sections: Array<SectionType> }
  | { type: "add_section" }
  | { type: "remove_section"; index: number }
  | { type: "update_section"; index: number; field: string; value: string };
