import React, { useContext } from 'react';
import VideoPanel from './VideoPanel.tsx';
import CtxVideoNavProvider, { CtxVideoNav } from '../../models/context/videoNavContext.tsx';
//import CtxVideoCurrentContext from '../../models/context/videoCurrentContext.tsx';

const VideoPanelWrapper = ({videojsref}) => {

  const { videoNavbarOpt } = useContext(CtxVideoNav);

  return (
    //<CtxVideoCurrentContext>
      <VideoPanel videojsref={videojsref} optPanelNav={videoNavbarOpt.videoNavBarPosition}/>
    //</CtxVideoCurrentContext>
  )
}


export default React.memo(VideoPanelWrapper)