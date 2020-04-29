import React from 'react';
import { create } from '@react-navigation/native';

import DrawerNavigator from '../component/DrawerNavigation';

export default createAppContainer(
    createSwitchNavigator({
      // Additional routes such as a login route could
      // be added here:
      // Login: LoginNavigator,
      Main: DrawerNavigator
    })
  );