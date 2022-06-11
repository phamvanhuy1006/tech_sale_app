import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import { ToPay } from './ToPay';
import { WaitingForHandling } from './WaitingForHandling';
import { ToProcess } from './ToProcess';

const Tab = createMaterialTopTabNavigator();

const OrderNavigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="To Pay" component={ToPay} />
      <Tab.Screen name="Waiting For Handling" component={WaitingForHandling} />
      <Tab.Screen name="To Process" component={ToProcess} />
    </Tab.Navigator>
  );
}

export {OrderNavigation}
