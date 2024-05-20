import React, { useContext, useEffect, useReducer, useRef, useState } from 'react';
import { Ctx } from '../../models/context/mainContext.tsx';
import { getTranscriptById } from '../../controllers/video/VideoController.tsx';
import VideoTranscriptsReducer from '../../controllers/video/reducers/VideoTranscriptsReducer.tsx';
import { CtxVideoCurrent } from '../../models/context/videoCurrentContext.tsx';
import {CtxVideoCurrentSentences} from '../../models/context/videoCurrentSentencesContext.tsx';
import VideoSpeakers from './VideoSpeakers.tsx';

const VideoTranscription: React.FC = React.memo((props) => {

  const { currentVideoValue } = useContext(CtxVideoCurrent);
  const { currentVideoSentencesValue } = useContext(CtxVideoCurrentSentences);

  const sentenceRef: any = useRef(null);

  const init = {
    currentSpeaker: '0',
    text: '0',
    start_time: '0',
    end_time: '0',
  }

  // ELIMINAR REDUCER
  const [transcription, dispatchTranscription] = useReducer(VideoTranscriptsReducer, init);

  const allSpeakers: number = [];

  const obtenerValoresUnicos: object = (array) => {
    return array.filter((item, index) => array.indexOf(item) === index);
  }
  
  const setSpeakers = (data: object) => {
    data.map( ({speaker_id}) => {
      allSpeakers.push(speaker_id)
    });

    const speakers = obtenerValoresUnicos(allSpeakers);

    sessionStorage.setItem('countSpeakers', JSON.stringify(speakers.sort()));
  }

  useEffect(() => {

    if(currentVideoValue.currentVideo != null){
      if(
      !sessionStorage.getItem('currentSentences') || 
        JSON.parse(sessionStorage.getItem('currentVideo'))[0]?.id != 
        JSON.parse(sessionStorage.getItem('currentSentences'))?.sentences[0]?.transcript
    ){
        const fetchData = async () => {
          const data: object = await getTranscriptById(currentVideoValue.currentVideo[0]?.id);
          currentVideoSentencesValue.setSentences(data);
          sessionStorage.setItem('currentSentences', JSON.stringify(data));
          setSpeakers(data?.sentences);
        }
        fetchData();

      }
    }
  }, []);

  if(props.videojsref.current != null){
    props.videojsref.current.on('timeupdate', (player) => {

      JSON.parse(sessionStorage.getItem('currentSentences'))?.sentences.filter( e => {
        if(
          Number(sessionStorage.getItem('currentTime')) >= Number(e.start_time)
          && Number(sessionStorage.getItem('currentTime')) <= Number(e.end_time)
        ){
          sessionStorage.setItem('currentSpeakerId', e.speaker_id);
          document.querySelectorAll('.speaker').forEach(j => {

            if(j.getAttribute('data-speaker-id') == `${e.speaker_id}`){
              j.classList.add('speaker-active')
            }else{
              if(j?.classList.contains('speaker-active')){
                j?.classList.remove('speaker-active');
              }
            }
          })

          document.querySelector(`#sentence-${e.id}`)?.classList.add('sentence-active');
          //document.querySelector(`#sentence-${e.id}`).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
        }else{
          if(document.querySelector(`#sentence-${e.id}`)?.classList.contains('sentence-active')){
            document.querySelector(`#sentence-${e.id}`)?.classList.remove('sentence-active');
          }
        }

      });

    });
  }
  
  const searchTranscript = ({target}) => {
    JSON.parse(sessionStorage.getItem('currentSentences'))?.sentences?.filter( j => {
      if(j.text.includes(target?.value) && target?.value != ''){
        document.querySelector(`#sentence-${j.id}`).classList.add('word-search');
        document.querySelector(`#sentence-${j.id}`).scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
        //console.log(`sentence-${j.id}`);
        //console.log(j.id);
        //console.log(j.text);
        //document.querySelector
        //word-search
      }else{
        if(document.querySelector(`#sentence-${j.id}`).classList.contains('word-search')){
          document.querySelector(`#sentence-${j.id}`).classList.remove('word-search');
        }
      }
    })
  }

  const transcriptOnFocus = (id) => {
    const sentence = id.target.getAttribute('data-sentence-id');
    const filtrado = JSON.parse(sessionStorage.getItem('currentSentences'))?.sentences.filter( e => e.id == sentence );

    props.videojsref.current.currentTime(Number(filtrado[0]?.start_time));
    id.target.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center' });
  }

  return (
    <>
      <input onInput={searchTranscript} type="text" className='form-control mb-4' placeholder='Buscar en la transcripción...' />

      <div className='px-1'>
        <VideoSpeakers speakersCount={sessionStorage.getItem('countSpeakers') && JSON.parse(sessionStorage.getItem('countSpeakers'))}/>
      </div>

      <div className='overflow-y-scroll py-3 my-4 px-1' style={{maxHeight:'50vh'}}>
      {
          //currentVideoValue?.sentences && 
          sessionStorage.getItem('currentSentences') && 
          JSON.parse(sessionStorage.getItem('currentSentences'))?.sentences?.map( e => (
          //currentVideoValue?.sentences?.sentences?.map( e => (
            <p onClick={transcriptOnFocus} className='sentence' data-sentence-id={e?.id} id={`sentence-${e?.id}`}>{e?.text}</p>
          ))
        }
      </div>
    </>
  )
}, (prevProps: Readonly, nextProps: Readonly) => {
});

export default VideoTranscription;