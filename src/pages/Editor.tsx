import React, { useEffect, useState } from "react";
import {
  faArrowCircleLeft,
  faCheck,
  faMinusCircle,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import { useSearchParams } from "react-router-dom";
import Button from "src/components/common/_ux/Button/Button";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Layout from "src/components/common/Layout/Layout";
import { SectionType } from "src/utils/types/article";
import { API } from "src/services/api";

export const Editor: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [sections, setSections] = useState<SectionType[]>([]);
  const [searchParams] = useSearchParams();
  const articleid: string | null = searchParams.get("articleid");
  const mode: string | null = searchParams.get("mode");

  useEffect(() => {
    const fetchArticleDetails = async (articleid: string) => {
      const articleResponse = await API.getArticleDetails(articleid);

      setSections(articleResponse.description.sections);
      setTitle(articleResponse.title);
    };
    if (mode === "edit" && articleid) {
      fetchArticleDetails(articleid);
    }
  }, [articleid, mode]);

  const addSection = () => {
    setSections([
      ...sections,
      { title: "", content: "", image: { alt: "", url: "" } },
    ]);
  };

  const removeSection = (index: number) => {
    setSections(sections.filter((_, i) => i !== index));
  };

  const handleSectionChange = (index: number, field: string, value: string) => {
    const updatedSections = [...sections];
    updatedSections[index] = { ...updatedSections[index], [field]: value };
    setSections(updatedSections);
  };

  const handleSubmit = () => {
    console.log({ title, sections });
  };

  const quillModules = {
    toolbar: [
      [{ header: [1, 3, false] }],
      ["bold", "italic", "underline", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <Layout>
      <div className="container mx-auto p-8">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl md:text-3xl font-medium dark:text-white text-black">
            {mode === "create" ? "Create New Article" : "Edit Article"}
          </h2>
          <Button
            text="Back to my articles"
            icon={faArrowCircleLeft}
            size="xs"
            type="secondary"
            redirectTo="/me/articles"
          />
        </div>

        <div className="space-y-8 my-6">
          <div>
            <label className="font-medium dark:text-white text-black mb-2">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-neutral-600 dark:bg-gray-300 p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
            />
          </div>

          <div className="flex justify-end">
            <Button
              text="Add Section"
              size="s"
              type="primary"
              icon={faPlus}
              onClick={addSection}
            />
          </div>

          {sections.map((section, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow-lg dark:bg-black-faded bg-white transition transform hover:shadow-xl"
            >
              <h3 className="font-semibold text-xl text-neutral-800 dark:text-gray-200 mb-4">
                Section {index + 1}
              </h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-md font-medium text-neutral-800 dark:text-gray-200 mb-2">
                    Section Title
                  </label>
                  <input
                    type="text"
                    value={section.title}
                    onChange={(e) =>
                      handleSectionChange(index, "title", e.target.value)
                    }
                    className="text-neutral-600 w-full p-3 dark:bg-gray-300 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-neutral-800 dark:text-gray-200 mb-2">
                    Content
                  </label>
                  <ReactQuill
                    defaultValue={section.content}
                    onChange={(value) =>
                      handleSectionChange(index, "content", value)
                    }
                    modules={quillModules}
                    className="text-black dark:bg-gray-300 rounded-lg border border-gray-300"
                  />
                </div>

                <div>
                  <label className="block text-md font-medium text-neutral-800 dark:text-gray-200 mb-2">
                    Image URL
                  </label>
                  <input
                    type="text"
                    value={section.image?.url}
                    onChange={(e) =>
                      handleSectionChange(index, "image", e.target.value)
                    }
                    className="text-neutral-600 w-full p-3 border border-gray-300 rounded-lg dark:bg-gray-300 focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="flex justify-end mt-4">
                <Button
                  text="Delete Section"
                  size="s"
                  type="danger"
                  icon={faMinusCircle}
                  onClick={() => removeSection(index)}
                />
              </div>
            </div>
          ))}

          <div className="text-center">
            <Button
              text={mode === "edit" ? "Update Article" : "Submit Article"}
              size="md"
              type="primary"
              icon={faCheck}
              onClick={handleSubmit}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};
