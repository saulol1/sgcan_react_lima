import axios from 'axios';

async function getAllVideos() {
	try {
		const response = await axios.get('http://127.0.0.1:8000/api/transcripts/');
		const transcripts = response?.data?.transcripts;
		//console.log("INVOCADOS")
		return transcripts;
	} catch (error) {
		console.error(error);
	}
}

async function getTranscriptById(id: number){
	try {
		const response = await axios.get(`http://127.0.0.1:8000/api/transcripts/${id}/?include[]=sentences.*`);
		const sentences = response?.data?.sentences;
		const sentencesId = response?.data?.transcript.sentences;
		//console.log("INVOCADOS")
		return {sentences, sentencesId};
	} catch (error) {
		console.error(error);
	}
}

export {
	getAllVideos, getTranscriptById
}