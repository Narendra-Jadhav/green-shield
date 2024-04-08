
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.VITE_RAPID_API_KEY,
		'X-RapidAPI-Host': import.meta.env.VITE_RAPID_API_HOST,
	}
};

export const GEO_API_URL = import.meta.env.VITE_GEO_API_URL;

export const WEATHER_API_URL = import.meta.env.VITE_WEATHER_API_URL;
export const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY;