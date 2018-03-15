import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';

// AppRegistry.registerComponent('rncourse', () => App);

// ==========================================================
// Configure the REDUX Store
// ==========================================================
import { Provider } from 'react-redux';
import configureStore from './src/store/configureStore';

const store = configureStore();

const RNRedux = () => (
	<Provider store={store}>
		<App />
	</Provider>
);

AppRegistry.registerComponent('rncourse', () => RNRedux);
