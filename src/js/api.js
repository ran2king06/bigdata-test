import axios from 'axios';

const api = axios.create({
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJ0ZXN0X3VzZXIxIiwiZXhwIjoxNzE2NjIzODY0fQ.N7ZLHiwARPLjDsPE1jCbSeUs2O03kFI36B6l9rQNMTs`
    },
});

// Request body
// "start_time": String,
// "end_time": String
// "category": Array of Strings,
// "chunk": Number
export const getDummyData = async (data) => {
    try {
        const response = await api.post('/api/get-data', data);
        return response.data;
    } catch (error) {
        console.error(error);
    }
}