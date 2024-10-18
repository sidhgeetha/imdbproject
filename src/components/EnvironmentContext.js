import React from "react";

const EnvironmentContext = React.createContext();

export const EnvironmentProvider = ({ children }) => {
  const envKey = process.env.IMDB_API_KEY; // or any other environment variable
  return (
    <EnvironmentContext.Provider value={envKey}>
      {children}
    </EnvironmentContext.Provider>
  );
};

export default EnvironmentContext;
