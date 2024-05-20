const VideoTranscriptsReducer = (state: object, action: object) => {
	switch (action.type) {
		case 'currentSentenceTime':
			return action.payload;
		default:
			return state;
	}
}
// const VideoTranscriptsReducer = (state: object, action: object) => {
// 	switch (action.type) {
// 		case 'currentSpeaker':
// 			return state.currentSpeaker = action.payload.currentSpeaker;
// 		case 'currentText':
// 			return state.text = action.payload.text;
// 		case 'startTime':
// 			return state.start_time = action.payload.start_time;
// 		case 'endTime':
// 			return state.end_time = action.payload.end_time;
// 		default:
// 			return state;
// 	}
// }

export default VideoTranscriptsReducer;