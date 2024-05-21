import React, { createContext, useMemo, useState } from 'react';

export const CtxVideoCurrent = createContext(null);

const CtxVideoCurrentContext: React.FC = ({children}) => {

  const [currentVideo, setCurrentVideo] = useState(null);

  const currentVideoValue = { currentVideo, setCurrentVideo };

  const contextValue = useMemo(() => { return {currentVideoValue, setCurrentVideo} }, [currentVideo]);

  return (
    <CtxVideoCurrent.Provider value={contextValue}>
      {children}
    </CtxVideoCurrent.Provider>
  )
}

export default CtxVideoCurrentContext;