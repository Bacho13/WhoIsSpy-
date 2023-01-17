import react, { useState, createContext } from "react";

export const WordsContext = createContext();

export const WordProvider = ({ children }) => {
  const [words, setWords] = useState([
    {
      id: 1,
      word: "გაჩერება",
    },
    {
      id: 1,
      word: "მუზეუმი",
    },
    {
      id: 1,
      word: "კინო",
    },
    {
      id: 1,
      word: "თეატრი",
    },
    {
      id: 1,
      word: "სკოლა",
    },
    {
      id: 1,
      word: "ჩრდილოეთ პოლუსი",
    },
    {
      id: 1,
      word: "უდაბნო",
    },
    {
      id: 1,
      word: "ჯუნგლები",
    },
    {
      id: 1,
      word: "ლიფტი",
    },
    {
      id: 1,
      word: "გაჩერება",
    },
  ]);

  return (
    <WordsContext.Provider value={[words, setWords]}>
      {children}
    </WordsContext.Provider>
  );
};

export default WordProvider;
