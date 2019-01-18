import { createAppContainer, createStackNavigator } from 'react-navigation';
import { colors } from '~/styles';

import Main from '~/pages/main';
import Search from '~/pages/search';
import Album from '~/pages/album';

const Routes = createStackNavigator({
  Main: { screen: Main },
  Search: { screen: Search },
  Album: { screen: Album },
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: colors.secondary,
      borderBottomWidth: 0,
    },
    headerTitleContainerStyle: {
      justifyContent: 'center',
    },
    headerTitleStyle: {
      textAlign: 'center',
    },
    headerTintColor: colors.white,
    headerBackTitle: null,
  },
});

export default createAppContainer(Routes);
