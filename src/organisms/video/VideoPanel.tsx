import React, { useContext } from 'react';
import VideoList from '../../molecules/video/VideoList.tsx';
import CtxVideoListProvider from '../../models/context/videoListContext.tsx';
import VideoTranscriptionWrapper from './VideoTranscriptionWrapper.tsx';
import { CtxVideoCurrent } from '../../models/context/videoCurrentContext.tsx';

const VideoPanel: React.FC = (props) => {

	const MemoCtxVideoListProvider = React.memo(CtxVideoListProvider);

	const { currentVideoValue } = useContext(CtxVideoCurrent);

	console.log("Video panel montado")

	const {optPanelNav, videojsref} = props;

	let component = <div></div>;

	switch (optPanelNav) {
		case 0:
			component =
				<MemoCtxVideoListProvider>
					<VideoList montado={currentVideoValue}/>
				</MemoCtxVideoListProvider>;
			break;

		case 1:
			component = <VideoTranscriptionWrapper videojsref={videojsref} video_url={ currentVideoValue?.currentVideo && currentVideoValue?.currentVideo[0]?.video_url}/>
			break;

		default:
			break;
	}


	return component;
}


export default React.memo(VideoPanel);