import React from "react";
import { useState, useEffect } from "react";

export const UserContext = React.createContext();

//custom hooks to update the title

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height,
  };
}

export const UserProvider = ({ children }) => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <UserContext.Provider value={{ windowDimensions }}>
      {children}
    </UserContext.Provider>
  );
};
