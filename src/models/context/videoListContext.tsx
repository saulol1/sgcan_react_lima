import React, { createContext, useMemo, useState } from "react";

export const CtxVideoList = createContext(null);

const CtxVideoListProvider: React.FC = ({children}) => {

  const [videoList, setVideoList] = useState(null);

  const listVideos = { videoList, setVideoList };

  const contextValue =  useMemo(() => { return { listVideos } }, [ listVideos ]);

  return (
    <CtxVideoList.Provider value={contextValue}>
      {children}
    </CtxVideoList.Provider>
  )

}

export default CtxVideoListProvider;