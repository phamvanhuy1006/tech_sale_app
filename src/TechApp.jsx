import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AppNavigation } from './components/homenavigation';
import { Login } from "./components/auth";
import { Welcome } from "./components/auth";
import { Register } from "./components/auth";
import { ForgotPassword } from "./components/auth";
import { Profile } from "./components/pages/User";

const Stack = createNativeStackNavigator()
const TechApp = () => {
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
            headerShown: false
          }}
        />

        <Stack.Screen
          name="Homenavigate"
          component={AppNavigation}
          options={{
            title: "Profile",
            headerShown: false
          }}
        />

        <Stack.Screen
          name="ListProduct"
          component={Login}
          options={{
            title: "product"
          }}
        />

      </Stack.Navigator>
      {/* <NativeRouter>
          <Routes>
            <Route exact path="/" element={HomeNavigation} />
          </Routes>
        </NativeRouter> */}
    </NavigationContainer>

    // <Cart />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export { TechApp }
