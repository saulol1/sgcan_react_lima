import React, { useCallback, useContext } from 'react';
import { CtxVideoNav } from '../models/context/videoNavContext.tsx';

const VideoNav: React.FC = () => {

	const { videoNavbarOpt } = useContext(CtxVideoNav);

	function handleVideoTab(pos: number, e) {
		
		document.querySelectorAll('.menu-item').forEach(j => {
			if(j.classList.contains('active')) { 
				j.classList.remove('active'); 
			};
		});
		e.target.classList.add('active');
		videoNavbarOpt.setVideoNavBarPosition(pos);
	}

	useCallback(handleVideoTab, [videoNavbarOpt.videoNavBarPosition]);

	return (
		<div className='col-xl-4 list-group mb-xl-0 mb-4'>
			<ul className='d-flex d-xl-block d-xl-flex-column'>
				<button onClick={(e) => handleVideoTab(0, e)} className='menu-item border-start mb-2 list-group-item list-group-item-action active'>Videos</button>
				<button onClick={(e) => handleVideoTab(1, e)} className='menu-item border-start mb-2 list-group-item list-group-item-action'>Transcripción</button>
			</ul>
		</div>
	)
}

export default VideoNav;