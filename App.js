import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';

import AuthScreen from './src/screens/Auth/Auth';
import SharePlaceScreen from './src/screens/SharePlace/SharePlace';
import FindPlaceScreen from './src/screens/FindPlace/FindPlace';
import PlaceDetailScreen from './src/screens/PlaceDetail/PlaceDetail';
import SideDrawerScreen from './src/screens/SideDrawer/SideDrawer';

import configureStore from './src/store/configureStore';

const store = configureStore();

// Register Screens
Navigation.registerComponent('rn-course.AuthScreen', 				() => AuthScreen, store, Provider);
Navigation.registerComponent('rn-course.SharePlaceScreen', 	() => SharePlaceScreen, store, Provider);
Navigation.registerComponent('rn-course.FindPlaceScreen', 	() => FindPlaceScreen, store, Provider);
Navigation.registerComponent('rn-course.PlaceDetailScreen', () => PlaceDetailScreen, store, Provider);
Navigation.registerComponent('rn-course.SideDrawerScreen',	() => SideDrawerScreen);

// Start a App
Navigation.startSingleScreenApp({
   screen: {
    screen: 'rn-course.AuthScreen',
    title: 'Login'
  },
});