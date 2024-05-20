import React from 'react'
import Speaker from '../../atoms/Speaker.tsx';

const VideoSpeakers = ({speakersCount}) => {

/*
  speakersCount?.forEach(e => {
    console.log(e)
  });*/

  const SpeakerList: React.FC = () => {
    return (
      speakersCount && 
        speakersCount?.map( e => (
          <Speaker active={false} id={e} color='red'/>
      ) )
    )

  }
  //<Speaker active={false} id={1} color='red'/>

  console.log(typeof speakersCount)
  console.log(speakersCount)
//  <SpeakerList/>

  return (
    <div className='d-flex gap-1'>
      <SpeakerList/>
      {/*
        speakersCount && 
        speakersCount?.map( e => (
          <Speaker active={false} id={e} color='red'/>
        ) )
      */}
    </div>
  )
}

export default VideoSpeakers;