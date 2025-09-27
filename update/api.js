const API_URL = 'https://dummyapi.io/data/api/product'; // Replace with actual API URL

export const fetchProducts = async () => {
    try {
        const response = await fetch(API_URL, {
            method: 'GET',
            headers: {
                'app-id': 'YOUR_APP_ID' // Replace with your actual app ID
            }
        });
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data.products; // Adjust based on the actual structure of the response
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
};