import { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Welcome from '~/pages/Welcome';
import Organizations from '~/pages/Organizations';
import Repositories from '~/pages/Repositories';

const Routes = createAppContainer(createSwitchNavigator({
  Welcome,
  Repositories,
  Organizations,
}));

export default Routes;
