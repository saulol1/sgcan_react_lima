import React, { createContext, useMemo, useState } from 'react';

export const CtxVideoCurrent = createContext(null);

const CtxVideoCurrentContext: React.FC = ({children}) => {

  const [currentVideo, setCurrentVideo] = useState(null);
  //const [currentTime, setCurrentTime] = useState(0);
//  const [sentences, setSentences] = useState(null);


  const currentVideoValue = { currentVideo, setCurrentVideo// currentTime, setCurrentTime, 
  //  sentences,   setSentences
};

  const contextValue = useMemo(() => { return {currentVideoValue, setCurrentVideo} }, 
  [currentVideo]);

    //, currentTime, setCurrentTime, sentences, setSentences

  return (
    <CtxVideoCurrent.Provider value={contextValue}>
      {children}
    </CtxVideoCurrent.Provider>
  )
}

export default CtxVideoCurrentContext;