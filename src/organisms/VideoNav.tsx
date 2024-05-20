import React, { useCallback, useContext } from 'react';
import { Ctx } from '../models/context/mainContext.tsx';
import { CtxVideoNav } from '../models/context/videoNavContext.tsx';

const VideoNav: React.FC = () => {

	//const { videoNavbarOpt: { videoNavBarPosition, setVideoNavBarPosition } } = useContext(Ctx);
	const { videoNavbarOpt } = useContext(CtxVideoNav);

	//console.log('render nav')
	function handleVideoTab(pos: number) {
		videoNavbarOpt.setVideoNavBarPosition(pos);
		//console.log(videoNavbarOpt.videoNavBarPosition)
	//	console.log(videoNavBarPosition);
	}

	//useCallback(handleVideoTab, [videoNavbarOpt.videoNavBarPosition]);

	// NOTA SL: MODULAR EL MENU
	return (
		<div className='col-4 list-group'>
			<ul className=''>
				<button onClick={() => handleVideoTab(0)} className='list-group-item list-group-item-action active'>Videos</button>
				<button onClick={() => handleVideoTab(1)} className='list-group-item list-group-item-action'>Transcripcion</button>
				<button onClick={() => handleVideoTab(2)} className='list-group-item list-group-item-action'>Otro</button>
			</ul>
		</div>
	)
}

//export default React.memo(VideoNav);
export default VideoNav;