import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('rn-course.AuthScreen', 				() => AuthScreen, store, Provider);
Navigation.registerComponent('rn-course.SharePlaceScreen', 	() => SharePlaceScreen, store, Provider);
Navigation.registerComponent('rn-course.FindPlaceScreen', 	() => FindPlaceScreen, store, Provider);
Navigation.registerComponent('rn-course.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider);

// Start a App
Navigation.startSingleScreenApp({
   screen: {
    screen: 'rn-course.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login',                 // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {},             // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {}            // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});