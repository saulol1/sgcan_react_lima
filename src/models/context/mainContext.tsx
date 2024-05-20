import React, { createContext, useMemo, useState } from "react";

export const Ctx = createContext(null);

const CtxProvider: React.FC = ({ children }) => {
    // States
    //const [videoNavBarPosition, setVideoNavBarPosition] = useState<number>(0);
    //const [currentVideo, setCurrentVideo] = useState(null);
    const [currentTime, setCurrentTime] = useState(0);
    //const [videoList, setVideoList] = useState(null);
    const [sentences, setSentences] = useState(null);

    // NOTA SL: CONSIDERAR METER ESTO EN UN REDUCER

    // Options
    //const videoNavbarOpt = { videoNavBarPosition, setVideoNavBarPosition };
    const videos = { videoList, setVideoList, currentVideo, setCurrentVideo, sentences, setSentences,
      currentTime, setCurrentTime
     };

    const contextValue = useMemo(() => {
      return { videoNavbarOpt, videos }}, []);

    return (
      //<Ctx.Provider value={{ videoNavbarOpt, videos }}>
      <Ctx.Provider value={contextValue}>
        {children}
      </Ctx.Provider>
    );
};

export default React.memo(CtxProvider);