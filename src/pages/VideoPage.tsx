import React, { useContext, useEffect, useRef, useState } from 'react';
import Layout from '../templates/Layout.tsx';
import VideoNav from '../organisms/VideoNav.tsx';
import {Ctx} from '../models/context/mainContext.tsx';
import VideoPanel from '../organisms/video/VideoPanel.tsx';
import VideoJS from '../organisms/video/VideoCurrent.tsx';

import CtxVideoNavProvider, { CtxVideoNav } from '../models/context/videoNavContext.tsx';
import CtxVideoListProvider, { CtxVideoList } from '../models/context/videoListContext.tsx';
import VideoPanelWrapper from '../organisms/video/VideoPanelWrapper.tsx';
import { CtxVideoCurrent } from '../models/context/videoCurrentContext.tsx';


const VideoPage: React.FC = () => {

	//const {
	//	videoNavbarOpt: { videoNavBarPosition },
	//	videoNavbarOpt
		//videos: { currentVideo, currentTime, setCurrentTime },
	//} = useContext(CtxVideoNav);

	const MemoCtxVideoNavProvider = React.memo(CtxVideoNavProvider);
	const { currentVideoValue } = useContext(CtxVideoCurrent);
	//const { listVideos } = useContext(CtxVideoList);

	//console.log(listVideos)

	//console.log(videoNavbarOpt.videoNavBarPosition)

	let currentVideoDate: string;

	if(currentVideoValue?.currentVideo != null){
		currentVideoDate = new Date(currentVideoValue?.currentVideo[0]?.date).toDateString();
	}

	const playerRef = useRef(null);

	const videoJsOptions = {
		autoplay: false,
		controls: true,
		responsive: true,
		fluid: true,
		sources: [{
			src: currentVideoValue?.currentVideo != null ? currentVideoValue?.currentVideo[0]?.video_url : '',
			type: 'video/mp4'
		}]
	};

	const handlePlayerReady = (player) => {

		playerRef.current = player;

		player.on('timeupdate', () => {
			sessionStorage.setItem('currentTime', player.currentTime());
		});

		player.on('waiting', () => {
			videojs.log('player is waiting');
		});

		player.on('dispose', () => {
			videojs.log('player will dispose');
		});
	}

	return (
		
		<div>
			<Layout>
				<section className='container-fluid py-3'>
					<div className='row'>
						<div className='col-7 ps-0'>
							<div className='rounded bg-white p-3'>
								{ <VideoJS options={videoJsOptions} onReady={handlePlayerReady} /> }
							</div>
							<header className='p-3 mt-3 bg-white rounded'>
								{ <h1 className='fs-5'>{ currentVideoValue?.currentVideo && currentVideoValue?.currentVideo[0]?.title }</h1>  }
								{ <p style={{fontSize: '.9rem'}}>{ currentVideoValue?.currentVideo && currentVideoDate }</p> }
							</header>
						</div>
						<div className='bg-white rounded col-5 py-4 overflow-hidden' style={{maxHeight: '100vh'}}>
							<div className='row'>
							<MemoCtxVideoNavProvider>
								<div className='col-8'>
									<VideoPanelWrapper videojsref={playerRef}/>
								</div>
								<VideoNav />
							</MemoCtxVideoNavProvider>
							</div>
						</div>
					</div>
				</section>
			</Layout>
		</div>
	)
}

export default React.memo(VideoPage);