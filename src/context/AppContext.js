import { createContext, useState } from "react";

export const AppContext = createContext({
  rootStyle: {},
  updateRootStyling: () => null,
});

const AppContextProvider = () => {
  const [rootStyle, setRootStyle] = useState({});

  const updateRootStyling = (styles) => {
    setRootStyle((perv) => {
      return { ...perv, ...styles };
    });
  };

  return (
    <AppContext.Provider
      value={(rootStyle, updateRootStyling)}
    ></AppContext.Provider>
  );
};

export default AppContextProvider;
