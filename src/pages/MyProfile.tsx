import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEdit,
  faCheck,
  faEnvelope,
  faBell,
  faUserCircle,
  faUser,
  faCog,
  faCircleExclamation,
} from "@fortawesome/free-solid-svg-icons";
import { PrivateProfileType } from "src/utils/types/profile";
import { API } from "src/services/api";
import Layout from "src/components/Common/Layout/Layout";
import MyProfileSkeleton from "src/components/MyProfile/MyProfileSkeleton";
import { toast } from "react-toastify";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { profileInputSchema } from "src/utils/validations/profileform";
import { z } from "zod";

const MyProfile: React.FC = () => {
  const [profile, setProfile] = useState<PrivateProfileType | null>(null);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  type fieldType = {
    name: string;
    label: string;
    type: string;
    icon: IconDefinition;
  };

  const fields: Array<fieldType> = [
    {
      name: "firstName",
      label: "First Name",
      type: "text",
      icon: faUser,
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      icon: faUser,
    },
    {
      name: "email",
      label: "Email",
      type: "email",
      icon: faEnvelope,
    },
  ];

  // Consolidated formData for inputs and toggles
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isPrivate: false,
    articleUpdates: true,
    emailNotifications: true,
  });

  const [inputErrors, setInputErrors] = useState<string[]>([]);

  const fetchProfile = async () => {
    const profileData = await API.getMyProfile();
    setProfile(profileData);
    setFormData({
      firstName: profileData.firstName,
      lastName: profileData.lastName,
      email: profileData.email,
      isPrivate: profileData.preferences.isPrivate,
      articleUpdates: profileData.preferences.articleUpdatesNotifications,
      emailNotifications: profileData.preferences.emailNotifications,
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleTogglePreference = (pref: string) => {
    setFormData((prevState) => ({
      ...prevState,
      [pref]: !prevState[pref as keyof typeof formData],
    }));
  };

  const handleSave = () => {
    console.log("formData", formData);
    try {
      profileInputSchema.parse({
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
      });
      setInputErrors([]);
    } catch (e) {
      if (e instanceof z.ZodError) {
        setInputErrors(e.errors.map((error) => error.message));
        toast.error("Please check the form for errors");
      }
      return;
    }
    toast.success("Your profile changes has been updated!");
    setEditing(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) return <MyProfileSkeleton />;

  return (
    <Layout>
      <div className="min-h-[75vh] px-4">
        <div className="my-profile-container max-w-5xl mx-auto my-10 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-lg">
          <div className="profile-header flex flex-col items-center md:flex-row gap-8">
            <img
              src={profile.profileUrl}
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-md"
            />
            <div>
              <h2 className="text-3xl font-bold text-neutral-800 dark:text-gray-200">
                {profile.firstName} {profile.lastName}
              </h2>
              <button className="mt-3 py-2 px-4 bg-brand-dark text-neutral-600 dark:text-gray-400 rounded-lg shadow-md hover:bg-brand hover:text-white transition duration-300">
                Change Profile Picture
              </button>
            </div>
          </div>

          <div className="profile-tabs mt-8">
            <div className="flex justify-center gap-6 border-b-2 border-gray-300">
              <button
                onClick={() => setActiveTab("personal")}
                className={`tab-button px-4 py-2 ${
                  activeTab === "personal"
                    ? "border-b-4 border-brand text-brand"
                    : "text-neutral-600"
                }`}
              >
                <FontAwesomeIcon icon={faUserCircle} className="mr-2" />
                Personal Information
              </button>
              <button
                onClick={() => setActiveTab("preferences")}
                className={`tab-button px-4 py-2 ${
                  activeTab === "preferences"
                    ? "border-b-4 border-brand text-brand"
                    : "text-neutral-600"
                }`}
              >
                <FontAwesomeIcon icon={faCog} className="mr-2" />
                Preferences
              </button>
            </div>

            {/* Tab Panels */}
            {activeTab === "personal" && (
              <div className="personal-info-tab mt-6">
                {!editing ? (
                  <>
                    {fields.map((field, i) => (
                      <div
                        key={i}
                        className="info-field mt-4 text-neutral-600 dark:text-gray-400"
                      >
                        <FontAwesomeIcon
                          icon={field.icon}
                          className="mr-2 text-brand"
                        />
                        <strong>{field.label}</strong>
                        {": "}
                        {formData[field.name as keyof typeof formData]}
                      </div>
                    ))}
                    <button
                      onClick={() => setEditing(true)}
                      className="mt-6 py-2 px-4 bg-brand text-white rounded-lg shadow-md hover:bg-brand-dark transition duration-300"
                    >
                      <FontAwesomeIcon icon={faEdit} className="mr-2" />
                      Edit
                    </button>
                  </>
                ) : (
                  <div className="editable-fields mt-6">
                    {/* Handle text inputs */}
                    {fields.map((field, i) => (
                      <div key={i} className="mb-4">
                        <label className="block text-neutral-800 dark:text-gray-200">
                          {field.label}
                        </label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={String(
                            formData[field.name as keyof typeof formData]
                          )}
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 text-neutral-600 dark:text-black dark:bg-gray-300"
                        />
                      </div>
                    ))}
                    {inputErrors.length > 0 && (
                      <div className="mt-4">
                        {inputErrors.map((error, i) => (
                          <p key={i} className="text-red-500 text-sm">
                            <FontAwesomeIcon
                              icon={faCircleExclamation}
                              className="mr-2"
                            />
                            {error}
                          </p>
                        ))}
                      </div>
                    )}
                    <button
                      onClick={handleSave}
                      className="mt-6 py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                    >
                      <FontAwesomeIcon icon={faCheck} className="mr-2" />
                      Save
                    </button>
                  </div>
                )}
              </div>
            )}

            {activeTab === "preferences" && (
              <div className="preferences-tab mt-6">
                {[
                  { name: "isPrivate", icon: faUser, label: "Private Profile" },
                  {
                    name: "articleUpdates",
                    icon: faBell,
                    label: "Article Updates Notifications",
                  },
                  {
                    name: "emailNotifications",
                    icon: faEnvelope,
                    label: "Email Notifications",
                  },
                ].map((pref) => (
                  <div
                    key={pref.name}
                    className="toggle-item mb-4 text-neutral-600 dark:text-gray-400"
                  >
                    <FontAwesomeIcon
                      icon={pref.icon}
                      className="mr-2 text-brand"
                    />
                    <strong>{pref.label}: </strong>
                    <button
                      onClick={() => handleTogglePreference(pref.name)}
                      className={`ml-3 py-1 px-3 rounded-lg shadow-md ${
                        formData[pref.name as keyof typeof formData]
                          ? "bg-green-500 text-white"
                          : "bg-gray-300"
                      }`}
                    >
                      {formData[pref.name as keyof typeof formData]
                        ? "Enabled"
                        : "Disabled"}
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default MyProfile;
