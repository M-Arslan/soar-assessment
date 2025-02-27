import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useProfile } from "../context/ProfileContext";

const Settings = () => {

  const [activeTab, setActiveTab] = useState("Profile");

  const { profile, updateProfile } = useProfile();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    updateProfile(data);
    console.log("Updated Profile Data:", data);
  };

  return (
    <div className="bg-white p-8 rounded-lg shadow-md  mx-auto">
      <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 mb-6">
        <ul className="flex flex-wrap -mb-px">
          {["Profile", "Preferences", "Security"].map((tab) => (
            <li key={tab} className="me-2">
              <button
                onClick={() => setActiveTab(tab)}
                className={`inline-block p-4 border-b-2 rounded-t-lg ${
                  activeTab === tab
                    ? "text-black border-black font-semibold"
                    : "border-transparent hover:text-gray-600 hover:border-gray-300"
                }`}
              >
                {tab}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {activeTab === "Profile" && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-1 bg-white p-6 rounded-lg flex flex-col items-center">
            <img
              src={profile.avatar}
              alt="Profile"
              className="w-24 h-24 rounded-full object-cover mb-3"
            />
            <button className="bg-gray-200 p-2 rounded-full shadow">✎</button>
          </div>
      
          <div className="col-span-3 bg-white p-6 rounded-lg ">
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600">Your Name</label>
                  <input
                    type="text"
                    {...register("name", { required: "Name is required" })}
                    defaultValue={profile.name}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Email</label>
                  <input
                    type="email"
                    {...register("email", { required: "Email is required" })}
                    defaultValue={profile.email}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Date of Birth</label>
                  <input
                    type="date"
                    {...register("dob", { required: "Date of Birth is required" })}
                    defaultValue={profile.dob}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.dob && <p className="text-red-500 text-sm">{errors.dob.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Permanent Address</label>
                  <input
                    type="text"
                    {...register("address", { required: "Address is required" })}
                    defaultValue={profile.address}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.address && <p className="text-red-500 text-sm">{errors.address.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Postal Code</label>
                  <input
                    type="text"
                    {...register("postal", { required: "Postal Code is required" })}
                    defaultValue={profile.postal}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.postal && <p className="text-red-500 text-sm">{errors.postal.message}</p>}
                </div>
              </div>
      
              <div className="space-y-4">
                <div>
                  <label className="block text-gray-600">User Name</label>
                  <input
                    type="text"
                    {...register("username", { required: "Username is required" })}
                    defaultValue={profile.username}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Password</label>
                  <input
                    type="password"
                    {...register("password", { required: "Password is required" })}
                    defaultValue={profile.password}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Present Address</label>
                  <input
                    type="text"
                    {...register("presentAddress", { required: "Present Address is required" })}
                    defaultValue={profile.presentAddress}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.presentAddress && (
                    <p className="text-red-500 text-sm">{errors.presentAddress.message}</p>
                  )}
                </div>
      
                <div>
                  <label className="block text-gray-600">City</label>
                  <input
                    type="text"
                    {...register("city", { required: "City is required" })}
                    defaultValue={profile.city}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.city && <p className="text-red-500 text-sm">{errors.city.message}</p>}
                </div>
      
                <div>
                  <label className="block text-gray-600">Country</label>
                  <input
                    type="text"
                    {...register("country", { required: "Country is required" })}
                    defaultValue={profile.country}
                    className="w-full p-2.5 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500"
                  />
                  {errors.country && <p className="text-red-500 text-sm">{errors.country.message}</p>}
                </div>
              </div>
            </div>
          </div>
        </div>
      
        <div className="text-right">
          <button type="submit" className="bg-black text-white px-6 py-3 rounded-lg">
            Save
          </button>
        </div>
      </form>
      
      )}
    </div>
  );
};

export default Settings;
