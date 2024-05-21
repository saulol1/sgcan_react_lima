import React, { useCallback, useContext, useEffect, useState } from 'react';
import { getAllVideos } from '../../controllers/video/VideoController.tsx';
import { Ctx } from '../../models/context/mainContext.tsx';
import { CtxVideoNav } from '../../models/context/videoNavContext.tsx';
import { CtxVideoList } from '../../models/context/videoListContext.tsx';
import { CtxVideoCurrent } from '../../models/context/videoCurrentContext.tsx';

const VideoList: React.FC = (props) => {

	const { currentVideoValue } = useContext(CtxVideoCurrent);

	const { listVideos } = useContext(CtxVideoList);

	const handleClickVideo = (id) => {
		const videoFilter = JSON.parse(sessionStorage?.getItem('list_videos')).filter( e  => e.id == id);
		sessionStorage.setItem('currentVideo',JSON.stringify(videoFilter));
		currentVideoValue.setCurrentVideo(videoFilter);
	}

	const videoCallback = useCallback(async () => {
    if( listVideos?.videoList == null ) {
			if(!sessionStorage.getItem('list_video_loaded') || sessionStorage.getItem('list_video_loaded') == '0'){
				const result = await getAllVideos();
				listVideos?.setVideoList(result);
				sessionStorage.setItem('list_videos', JSON.stringify(result));
				sessionStorage.setItem('list_video_loaded', '1');
			}
		}
  }, []);

	useEffect(() => {
		videoCallback()
	}, [videoCallback]);

	return (
		<div>
			<h2 style={{ color:'goldenrod' }} className='fw-normal fs-5 ms-3 mb-4 text-decoration-underline'>Videos</h2>
			{ 
				sessionStorage?.getItem('list_videos') &&
				( 
				<ul className='list-video'>
					{
						JSON.parse(sessionStorage?.getItem('list_videos')).map(e => (
							<li className='mb-3' onClick={ () => handleClickVideo(e.id) } id={`title-${e.id}`}>{e.title}</li>
						))
					}
				</ul>
				)
			}
		</div>
	)
};

export default React.memo(VideoList, (prevProps: Readonly, nextProps: Readonly) => {
	return true;
});