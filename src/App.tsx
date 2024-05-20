import React from 'react';
import './App.css';
import VideoPage from './pages/VideoPage.tsx';
import CtxVideoCurrentContext from './models/context/videoCurrentContext.tsx';


function App() {

  sessionStorage.setItem('list_video_loaded', '0');
  sessionStorage.setItem('currentVideo', '');
  sessionStorage.setItem('currentSentences', '');
  sessionStorage.setItem('countSpeakers', '');
  sessionStorage.setItem('currentSpeakerId', '0');

  return (
    <CtxVideoCurrentContext>
      <VideoPage/>
    </CtxVideoCurrentContext>
  );
}

export default App;
