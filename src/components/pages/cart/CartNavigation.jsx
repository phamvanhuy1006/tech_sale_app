import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./Cart";
import { Checkout, ListAddress, RegisterAddress } from "./checkout";

const Stack = createNativeStackNavigator();

const CartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="cart"
        component={Cart}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="ListAddress"
        component={ListAddress}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="RegisterAddress"
        component={RegisterAddress}
        // options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

export { CartNavigation };
