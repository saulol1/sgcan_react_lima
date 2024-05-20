import React, { createContext, useMemo, useState } from "react";

export const CtxVideoNav = createContext(null);

const CtxVideoNavProvider: React.FC = ({ children }) => {

  const [videoNavBarPosition, setVideoNavBarPosition] = useState<number>(0);
  const videoNavbarOpt = { videoNavBarPosition, setVideoNavBarPosition };

  const contextValue = useMemo(() => {
    return { videoNavbarOpt }
  }, [videoNavBarPosition, setVideoNavBarPosition]);

  return (
    <CtxVideoNav.Provider value={ contextValue }>
      {children}
    </CtxVideoNav.Provider>
  );

}

export default CtxVideoNavProvider;