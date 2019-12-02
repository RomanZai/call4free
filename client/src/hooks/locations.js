import { useState, useEffect } from "react";
import { getLocations } from "../apis/locations";

export const useLocations = searchString => {
	const [locations, setLocations] = useState([]);
	const [isLoading, setLoading] = useState(true);

	// page load
	useEffect(() => {
		setLoading(true);
		getLocations().then(({ data }) => {
				setLocations(data);
				setLoading(false);
			})
			.catch(e => {
				setLoading(false);
			});
	}, []);


	return { locations, isLoading };
};
