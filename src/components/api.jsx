import axios from 'axios';

const API_KEY = '42633230-038735307d7a30593a43e4bc7';

export const fetchPhotos = async (query, page) => {
  try {
    const response = await axios.get(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
};