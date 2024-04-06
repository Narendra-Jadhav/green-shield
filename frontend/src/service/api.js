
export const geoApiOptions = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': import.meta.env.RAPID_API_KEY,
		'X-RapidAPI-Host': import.meta.env.RAPID_API_HOST,
	}
};

export const GEO_API_URL = import.meta.env.GEO_API_URL;

export const WEATHER_API_URL = import.meta.env.WEATHER_API_URL;
export const WEATHER_API_KEY = import.meta.env.WEATHER_API_KEY;