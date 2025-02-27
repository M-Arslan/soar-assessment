import React, { createContext, useState, useContext } from "react";


const ProfileContext = createContext();

export const ProfileProvider = ({ children }) => {

  const [profile, setProfile] = useState({
    name: "Charlene Reed",
    email: "charlenereed@gmail.com",
    dob: "1990-01-25",
    address: "San Jose, California, USA",
    postal: "45962",
    username: "Charlene Reed",
    password: "********",
    presentAddress: "San Jose, California, USA",
    city: "San Jose",
    country: "USA",
    avatar: "https://randomuser.me/api/portraits/women/50.jpg",
  });

  const updateProfile = (updatedData) => {
    setProfile((prev) => ({ ...prev, ...updatedData }));
  };

  return (
    <ProfileContext.Provider value={{ profile, updateProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = () => useContext(ProfileContext);
