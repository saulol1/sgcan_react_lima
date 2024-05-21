import React, { useContext } from 'react';
import VideoPanel from './VideoPanel.tsx';
import { CtxVideoNav } from '../../models/context/videoNavContext.tsx';

const VideoPanelWrapper: React.FC = ({videojsref}) => {

  const { videoNavbarOpt } = useContext(CtxVideoNav);

  return (
    <VideoPanel videojsref={videojsref} optPanelNav={videoNavbarOpt.videoNavBarPosition}/>
  )
}

export default React.memo(VideoPanelWrapper);