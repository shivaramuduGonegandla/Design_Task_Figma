import axios from 'axios';

const API_URL = 'https://fakestoreapi.com';

// Fetching all products
export async function getProducts() {
	try {
		const response = await axios.get(`${API_URL}/products`);
		return response.data;
	} catch (error) {
		console.error('Error fetching products:', error);
		return [];
	}
}

// Fetching a single product by ID
export async function getProduct(id) {
	try {
		const response = await axios.get(`${API_URL}/products/${id}`);
		return response.data;
	} catch (error) {
		console.error('Error fetching product:', error);
		return null;
	}
}
