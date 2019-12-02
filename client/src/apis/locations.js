import axios from 'axios';

const GET_LOCATIONS = '/code';

export const getLocations = code => (
	axios.get(GET_LOCATIONS)
);

