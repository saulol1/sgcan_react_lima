import React from 'react';
import VideoTranscription from '../../molecules/video/VideoTranscript.tsx';
import CtxVideoCurrentSentencesContext from '../../models/context/videoCurrentSentencesContext.tsx';

const VideoTranscriptionWrapper = ({video_url, videojsref}) => {

  const MemoCtxVideoCurrentSentences = React.memo(CtxVideoCurrentSentencesContext);
  
  return (
    <MemoCtxVideoCurrentSentences>
      <VideoTranscription videojsref={videojsref} currentVideo={ video_url && video_url}/>
    </MemoCtxVideoCurrentSentences>
  )
}

export default React.memo(VideoTranscriptionWrapper);