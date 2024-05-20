import React from 'react'
import Speaker from '../../atoms/Speaker.tsx';

const colors: string = [
  'purple',
  'red',
  'blue',
  'green',
  'pink',
  'darkpurple',
  'darkorange',
  'greenyellow',
  'palevioletred',
]

const VideoSpeakers = ({speakersCount}) => {

  const SpeakerList: React.FC = () => {
    return (
      speakersCount && 
        speakersCount?.map( e => (
          <Speaker active={false} id={e} color={colors[e]}/>
      ) )
    )

  }

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