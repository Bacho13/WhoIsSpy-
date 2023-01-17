import react, { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  return (
    <NameContext.Provider value={[persons, setPersons]}>
      {children}
    </NameContext.Provider>
  );
};

export default NameProvider;
