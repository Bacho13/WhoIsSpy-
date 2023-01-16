import react, { useState, createContext } from "react";

export const NameContext = createContext();

export const NameProvider = ({ children }) => {
  const [persons, setPersons] = useState([
    {
      id: 0,
      name: "ბაჩ",
    },
    {
      id: 0,
      name: "მარი",
    },
    {
      id: 0,
      name: "სკ",
    },
  ]);
  return (
    <NameContext.Provider value={[persons, setPersons]}>
      {children}
    </NameContext.Provider>
  );
};

export default NameProvider;
