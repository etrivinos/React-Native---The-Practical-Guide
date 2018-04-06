import { ADD_PLACE, DELETE_PLACE } from '../actions/actionTypes';

const initialState = {
	places: []
};

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case ADD_PLACE:
			return {
				...state,
				places: state.places.concat({
			            key: Math.random(), 
			            name: action.placeName,
			            image: {
			              // uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlwIFIXM3b8gS_PLPG0raP33M_jTRFxxhpFP7YcLIF_BtWzeZ"
			              uri: action.image.uri
			            },
			            location: action.location
			          }),
			};

		case DELETE_PLACE: 
      return {
      	...state,
        places: state.places.filter(place => {
        	return place.key !==  action.placeKey;
        })
      };

		default:
			return state;
	}
};

export default reducer;