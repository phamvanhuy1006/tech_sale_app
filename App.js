import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeNavigation from './src/components/homenavigation/HomeNavigation';

import Login from "./src/auth/Login";
import Welcome from "./src/auth/Welcome";
import Register from "./src/auth/Register";
import ForgotPassword from "./src/auth/ForgotPassword";
import Profile from "./src/pages/User/Profile";
import Home from "./src/pages/home/Home";

const Stack = createNativeStackNavigator()

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
          component={HomeNavigation}
          options={{
            title: "Profile",
            headerShown: false
          }}
        />

      </Stack.Navigator>
      {/* <NativeRouter>
          <Routes>
            <Route exact path="/" element={HomeNavigation} />
          </Routes>
        </NativeRouter> */}
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
