import { Navigation } from 'react-native-navigation';
import AuthScreen from './src/screens/Auth/Auth';

// Register Screens
Navigation.registerComponent('rn-course.AuthScreen', () => AuthScreen);

// Start a App
Navigation.startSingleScreenApp({
   screen: {
    screen: 'rn-course.AuthScreen', // unique ID registered with Navigation.registerScreen
    title: 'Login',                 // title of the screen as appears in the nav bar (optional)
    navigatorStyle: {},             // override the navigator style for the screen, see "Styling the navigator" below (optional)
    navigatorButtons: {}            // override the nav buttons for the screen, see "Adding buttons to the navigator" below (optional)
  },
});