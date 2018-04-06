import { ADD_PLACE, DELETE_PLACE } from './actionTypes';

export const addPlace = (placeName, location, image) => {
	/* 
	// Default action type without thunk middleware
	return {
		type: 			ADD_PLACE,
		placeName: 	placeName,
		location: 	location,
		image: 			image
	};
	*/

	return dispatch => {

		const placeData = {
			placeName: 	placeName,
			location: 	location,
			image: 			image
		};

		return fetch('https://react-native-cou-1522393067826.firebaseio.com/places.json', {
			method: 'POST',
			body: JSON.stringify(placeData)
		})
		.then((response) => response.json())
		.then((parseResponse) => {
			console.log('image');
			console.log(image);	
			console.log(parseResponse);

			return {
				type: 			ADD_PLACE,
				placeName: 	placeName,
				location: 	location,
				image: 			image
			};
		})
		.catch((error) => {
			console.error(error);
		});

	};
};

export const deletePlace = (key) => {
	return {
		type: DELETE_PLACE,
		placeKey: key
	};
};