import { Navigation } from 'react-native-navigation';
import Icon from 'react-native-vector-icons/Ionicons'

const startApp = () => {
	Promise.all([
			Icon.getImageSource('md-map', 30),
			Icon.getImageSource('ios-share-alt', 30)
	])
	.then(sources => {
		Navigation.startTabBasedApp({
		  tabs: [
		  	{
		      screen: 'rn-course.FindPlaceScreen',
		      label: 'Find Place',
		      title: 'Find Place',
		      icon: sources[0]
		    },
		    {
		      screen: 'rn-course.SharePlaceScreen',
		      label: 'Share Place',
		      title: 'Shared Place',
		      icon: sources[1]
		    }
		  ]
		});
	})
}

export default startApp;