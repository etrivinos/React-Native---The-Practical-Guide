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
			            key: state.places.length, 
			            name: action.placeName,
			            image: {
			              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQdlwIFIXM3b8gS_PLPG0raP33M_jTRFxxhpFP7YcLIF_BtWzeZ"
			            }
			          })
			};

		case DELETE_PLACE: 
			// state.places.splice(state.selectedPlace.key, 1);
      
      return {
      	...state,
        places: state.places
      };

		default:
			return state;
	}
};

export default reducer;