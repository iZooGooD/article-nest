/* eslint-disable @typescript-eslint/no-explicit-any */
// File: src/pages/MyProfile.tsx

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
import Layout from "src/components/common/Layout/Layout";
import MyProfileSkeleton from "src/components/MyProfile/MyProfileSkeleton";
import { toast } from "react-toastify";
import { profileInputSchema } from "src/utils/validations/profileform";
import { z } from "zod";
import Button from "src/components/common/_ux/Button/Button";

const MyProfile: React.FC = () => {
  const [profile, setProfile] = useState<PrivateProfileType | null>(null);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

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
    toast.success("Your profile changes have been updated!");
    setEditing(false);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  if (!profile) return <MyProfileSkeleton />;

  return (
    <Layout>
      <div className="min-h-[75vh] px-4">
        <div className="max-w-5xl mx-auto my-10 p-6 bg-gray-100 dark:bg-black-faded rounded-lg shadow-lg">
          <ProfileHeader profile={profile} />

          <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

          {activeTab === "personal" ? (
            <PersonalInfo
              editing={editing}
              formData={formData}
              handleInputChange={handleInputChange}
              setEditing={setEditing}
              handleSave={handleSave}
              inputErrors={inputErrors}
            />
          ) : (
            <Preferences
              formData={formData}
              handleTogglePreference={handleTogglePreference}
            />
          )}
        </div>
      </div>
    </Layout>
  );
};

const ProfileHeader: React.FC<{ profile: PrivateProfileType }> = ({
  profile,
}) => (
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
      <Button size="s" text="Change Profile Picture" type="secondary" />
    </div>
  </div>
);

const Tabs: React.FC<{
  activeTab: string;
  setActiveTab: (tab: string) => void;
}> = ({ activeTab, setActiveTab }) => (
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
  </div>
);

const PersonalInfo: React.FC<{
  editing: boolean;
  formData: any;
  handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setEditing: (editing: boolean) => void;
  handleSave: () => void;
  inputErrors: string[];
}> = ({
  editing,
  formData,
  handleInputChange,
  setEditing,
  handleSave,
  inputErrors,
}) => {
  const fields = [
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

  return (
    <div className="personal-info-tab mt-6">
      {!editing ? (
        <>
          {fields.map((field, i) => (
            <div
              key={i}
              className="info-field mt-4 text-neutral-600 dark:text-gray-400"
            >
              <FontAwesomeIcon icon={field.icon} className="mr-2 text-brand" />
              <strong>{field.label}</strong>
              {": "}
              {formData[field.name]}
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
          {fields.map((field, i) => (
            <div key={i} className="mb-4">
              <label className="block text-neutral-800 dark:text-gray-200">
                {field.label}
              </label>
              <input
                type={field.type}
                name={field.name}
                value={formData[field.name]}
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
  );
};

// Preferences Component
const Preferences: React.FC<{
  formData: any;
  handleTogglePreference: (pref: string) => void;
}> = ({ formData, handleTogglePreference }) => {
  const preferences = [
    {
      name: "isPrivate",
      icon: faUser,
      label: "Keep Profile Private",
    },
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
  ];

  return (
    <div className="preferences-tab mt-6">
      {preferences.map((pref) => (
        <div
          key={pref.name}
          className="toggle-item mb-4 text-neutral-600 dark:text-gray-400"
        >
          <FontAwesomeIcon icon={pref.icon} className="mr-2 text-brand" />
          <strong>{pref.label}</strong>
          <ToggleButton
            enabled={formData[pref.name]}
            onToggle={() => handleTogglePreference(pref.name)}
          />
        </div>
      ))}
    </div>
  );
};

const ToggleButton: React.FC<{ enabled: boolean; onToggle: () => void }> = ({
  enabled,
  onToggle,
}) => (
  <button
    onClick={onToggle}
    className={`ml-3 py-1 px-3 rounded-full shadow-md transition-colors duration-300 ${
      enabled ? "bg-green-500" : "bg-gray-300"
    }`}
  >
    <div
      className={`w-4 h-4 bg-white rounded-full transition-transform duration-300 ${
        enabled ? "translate-x-[10px]" : "translate-x-[-10px]"
      }`}
    />
  </button>
);

export default MyProfile;
