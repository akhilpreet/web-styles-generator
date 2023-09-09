import { createContext, useCallback, useState } from "react";

export const AppContext = createContext({
  colors: [],
  textTypes: [],
  updateColors: () => null,
  updateTextTypes: () => null,
});

const AppContextProvider = ({ children }) => {
  const [colors, setColors] = useState([]);
  const [textTypes, setTextTypes] = useState([]);

  const updateColors = useCallback((styles) => {
    setColors((perv) => {
      return [...styles];
    });
  }, []);

  const updateTextTypes = useCallback((styles) => {
    setTextTypes((perv) => {
      return [...styles];
    });
  }, []);

  return (
    <AppContext.Provider
      value={{ colors, textTypes, updateColors, updateTextTypes }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
