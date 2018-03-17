import { Navigation } from 'react-native-navigation';

const startApp = () => {
	Navigation.startTabBasedApp({
	  tabs: [
	  	{
	      screen: 'rn-course.FindPlaceScreen',
	      label: 'Find Place',
	      title: 'Find Place'
	    },
	    {
	      screen: 'rn-course.SharePlaceScreen',
	      label: 'Share Place',
	      title: 'Shared Place'
	    }
	  ]
	});
}

export default startApp;