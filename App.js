import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Icon } from "@rneui/themed";

import Home from "./src/pages/home/Home";
import Cart from "./src/pages/cart/Cart";
import Support from "./src/pages/support/Support";
import Wishlist from "./src/pages/wishlist/Wishlist";
import Setting from "./src/pages/setting/Setting";
import Login from "./src/auth/Login";
import Welcome from "./src/auth/Welcome";
import Register from "./src/auth/Register";
import ForgotPassword from "./src/auth/ForgotPassword";
import Profile from "./src/pages/User/Profile";

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const HomeNavigate = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarStyle: { position: "absolute" },
        tabBarBackground: () => (
          <BlurView
            tint="light"
            intensity={100}
            style={StyleSheet.absoluteFill}
          />
        ),
      }}
    >
      <Tab.Screen
          name="home"
          component={Home}
          options={{
            title: "Home",
            tabBarLabelPosition: "below-icon",
            tabBarIcon: () => <Icon name="house" />,
          }}
        />
      <Tab.Screen
        name="support"
        component={Support}
        options={{
          title: "Support",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: () => <Icon name="support" type="MaterialIcons" />,
        }}
      />

      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: () => <Icon name="shopping-cart" type="font-awesome" />,
        }}
      />

      <Tab.Screen
        name="wishlist"
        component={Wishlist}
        options={{
          title: "Wishlist",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: () => <Icon name="heart-o" type="font-awesome" />,
        }}
      />

      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          title: "Setting",
          tabBarLabelPosition: "below-icon",
          tabBarIcon: () => <Icon name="settings" type="feather" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Welcome"
          component={Welcome}
          options={{
            title: "Welcome",
          }}
        />

        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: "Login",
          }}
        />

        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: "Register",
          }}
        />

        <Stack.Screen
          name="ForgotPass"
          component={ForgotPassword}
          options={{
            title: "Reset Password",
          }}
        />

        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            title: "Profile",
          }}
        />

        <Stack.Screen
          name="homenavigate"
          component={HomeNavigate}
          options={{
            title: "Home",
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
