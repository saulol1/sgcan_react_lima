import React, { useCallback, useContext, useRef } from 'react';
import { CtxVideoNav } from '../models/context/videoNavContext.tsx';

const VideoNav: React.FC = () => {

	const { videoNavbarOpt } = useContext(CtxVideoNav);

	const ref = useRef(null);
	//console.log('render nav')
	function handleVideoTab(pos: number, e) {
		
		document.querySelectorAll('.menu-item').forEach(j => {
			console.log(j.classList)
			if(j.classList.contains('active')) { 
				j.classList.remove('active'); 
			};
		});
		e.target.classList.add('active');
		videoNavbarOpt.setVideoNavBarPosition(pos);
	}

	useCallback(handleVideoTab, [videoNavbarOpt.videoNavBarPosition]);

	// NOTA SL: MODULAR EL MENU
	return (
		<div className='col-4 list-group'>
			<ul className=''>
				<button onClick={(e) => handleVideoTab(0, e)} className='menu-item list-group-item list-group-item-action active'>Videos</button>
				<button onClick={(e) => handleVideoTab(1, e)} className='menu-item list-group-item list-group-item-action'>Transcripción</button>
			</ul>
		</div>
	)
}

//export default React.memo(VideoNav);
export default VideoNav;