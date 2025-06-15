import { createContext, useContext, useState, useEffect } from "react";
import problemList from "../assets/450DSA.json";

const ProblemContext = createContext();

export const ProblemProvider = ({ children }) => {
  const localStorageKey = "dsa_problems";

  // Initialize from localStorage or fallback to JSON file
  const [problems, setProblems] = useState(() => {
    const storedData = localStorage.getItem(localStorageKey);
    return storedData ? JSON.parse(storedData) : problemList.Sheet1;
  });

  // Update localStorage whenever problems state changes
  useEffect(() => {
    localStorage.setItem(localStorageKey, JSON.stringify(problems));
  }, [problems]);

  return (
    <ProblemContext.Provider value={{ problems, setProblems }}>
      {children}
    </ProblemContext.Provider>
  );
};

export const useProblems = () => useContext(ProblemContext);
