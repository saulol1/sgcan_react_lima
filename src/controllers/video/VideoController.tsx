import axios from 'axios';

async function getAllVideos(): object {
	try {
		const response: object = await axios.get('http://127.0.0.1:8000/api/transcripts/');
		const transcripts = response?.data?.transcripts;
		return transcripts;
	} catch (error) {
		console.error(error);
	}
}

async function getTranscriptById(id: number): object{
	try {
		const response: object = await axios.get(`http://127.0.0.1:8000/api/transcripts/${id}/?include[]=sentences.*`);
		const sentences = response?.data?.sentences;
		const sentencesId = response?.data?.transcript.sentences;
		return {sentences, sentencesId};
	} catch (error) {
		console.error(error);
	}
}

export {
	getAllVideos, getTranscriptById
}