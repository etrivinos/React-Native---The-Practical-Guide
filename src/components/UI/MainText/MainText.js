import React from 'react';
import { StyleSheet, Text } from 'react-native';

const mainText = (props) => {
	return (
    <Text 
      {...props}
      style={[styles.mainText, props.style]}>
        {props.children}
    </Text>
	)
}

const styles = StyleSheet.create({
  mainText: {
    color: "black",
    backgroundColor: "transparent"
  }
});

export default mainText;