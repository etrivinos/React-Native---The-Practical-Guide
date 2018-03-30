import React from 'react';
import DefaultInput from '../../components/UI/DefaultInput/DefaultInput';

const PlaceInput = (props) =>  (
			<DefaultInput 
				placeholder="Place Name" 
				value={props.placeName} 
				style={[props.style]}
				onChangeText={(val) => { props.onChangeText(val, props.name)}} />
);

export default PlaceInput;