import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization': `Bearer ${process.env.REACT_APP_BEARER_TOKEN}`
    },
});

export const getDummyData = async (data) => {
    try {
        const response = await api.post('/api/get-data', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}
