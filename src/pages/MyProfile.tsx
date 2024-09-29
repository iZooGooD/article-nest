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
} from "@fortawesome/free-solid-svg-icons";
import { PrivateProfileType } from "src/utils/types/profile";
import { API } from "src/services/api";
import Layout from "src/components/Common/Layout/Layout";
import MyProfileSkeleton from "src/components/MyProfile/MyProfileSkeleton";

const MyProfile: React.FC = () => {
  const [profile, setProfile] = useState<PrivateProfileType | null>(null);
  const [editing, setEditing] = useState(false);
  const [activeTab, setActiveTab] = useState("personal");

  // Consolidated formData for inputs and toggles
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    isPrivate: false,
    articleUpdates: true,
    emailNotifications: true,
  });

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
    setEditing(false);
    // Implement the save logic here, potentially making an API call to update the user's info.
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
                {formData.firstName} {formData.lastName}
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
                    {["firstName", "lastName", "email"].map((field) => (
                      <div
                        key={field}
                        className="info-field mt-4 text-neutral-600 dark:text-gray-400"
                      >
                        <FontAwesomeIcon
                          icon={faUser}
                          className="mr-2 text-brand"
                        />
                        <strong>{`${
                          field.charAt(0).toUpperCase() + field.slice(1)
                        }:`}</strong>{" "}
                        {formData[field as keyof typeof formData]}
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
                    {["firstName", "lastName", "email"].map((field) => (
                      <div key={field} className="mb-4">
                        <label className="block text-neutral-800 dark:text-gray-200">
                          {`${field.charAt(0).toUpperCase() + field.slice(1)}:`}
                        </label>
                        <input
                          type={field === "email" ? "email" : "text"}
                          name={field}
                          value={
                            formData[field as keyof typeof formData] as string
                          }
                          onChange={handleInputChange}
                          className="w-full px-4 py-2 rounded-lg border border-gray-300 text-neutral-600 dark:text-black dark:bg-gray-300"
                        />
                      </div>
                    ))}
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
