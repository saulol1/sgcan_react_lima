import React from 'react';
import VideoTranscription from '../../molecules/video/VideoTranscript.tsx';
import { CtxVideoCurrent } from '../../models/context/videoCurrentContext.tsx';
import CtxVideoCurrentSentencesContext from '../../models/context/videoCurrentSentencesContext.tsx';

const VideoTranscriptionWrapper = ({video_url, videojsref}) => {

  console.log(video_url)

  const MemoCtxVideoCurrentSentences = React.memo(CtxVideoCurrentSentencesContext);
  
  return (
    <MemoCtxVideoCurrentSentences>
      <VideoTranscription videojsref={videojsref} currentVideo={ video_url && video_url}/>
    </MemoCtxVideoCurrentSentences>
  )
}

export default React.memo(VideoTranscriptionWrapper, (prevProps: Readonly, nextProps: Readonly)  => {
  console.log("AWDASODASODASMOASJDPASDASPDWA")

});