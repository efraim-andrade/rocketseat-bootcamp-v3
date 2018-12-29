import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Organizations from '~/pages/Organizations';
import Repositories from '~/pages/Repositories';

const Routes = (userLogged = false) => createAppContainer(
  createSwitchNavigator({
    Welcome,
    Repositories,
    Organizations,
  }, {
    initialRouteName: userLogged ? 'Repositories' : 'Welcome',
  }),
);

export default Routes;
