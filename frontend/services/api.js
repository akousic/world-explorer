// src/services/api.js
const API_BASE_URL = process.env.REACT_APP_API_URL;

export const api = {
    async getContinents(searchTerm = '') {
        try {
            const response = await fetch(
                `${API_BASE_URL}/continents?search=${encodeURIComponent(searchTerm)}`
            );
            if (!response.ok) throw new Error('Failed to fetch continents');
            return await response.json();
        } catch (error) {
            console.error('Error fetching continents:', error);
            throw error;
        }
    },

    async getCountries(searchTerm = '') {
        try {
            const response = await fetch(
                `${API_BASE_URL}/countries?search=${encodeURIComponent(searchTerm)}`
            );
            if (!response.ok) throw new Error('Failed to fetch countries');
            return await response.json();
        } catch (error) {
            console.error('Error fetching countries:', error);
            throw error;
        }
    },

    async getContinent(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/continents/${id}`);
            if (!response.ok) throw new Error('Failed to fetch continent');
            return await response.json();
        } catch (error) {
            console.error('Error fetching continent:', error);
            throw error;
        }
    },

    async getCountry(id) {
        try {
            const response = await fetch(`${API_BASE_URL}/countries/${id}`);
            if (!response.ok) throw new Error('Failed to fetch country');
            return await response.json();
        } catch (error) {
            console.error('Error fetching country:', error);
            throw error;
        }
    }
};