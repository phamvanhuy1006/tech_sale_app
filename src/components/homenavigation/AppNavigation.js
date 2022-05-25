import React, { useRef, useState, useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Icon } from "@rneui/themed";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { HomeNavigation } from "../pages/home";
import { Support } from "../pages/support";
import { Wishlist } from "../pages/wishlist";
import { Setting } from "../pages/setting";
import { CartNavigation } from "../pages/cart";
import { Header } from "./Header";
import { Menu } from "./Menu";
import { UserProvider } from "~/context/UserContext";

const Tab = createBottomTabNavigator();

const AppNavigation = ({ navigation }) => {
  const drawer = useRef(null);
  const [user, setUser] = useState({});
  useEffect(() => {
    AsyncStorage.getItem("@user").then((res) => {
      setUser(JSON.parse(res));
    });
  }, []);

  return (
    <UserProvider value={user}>
      <DrawerLayoutAndroid
        ref={drawer}
        drawerWidth={300}
        drawerPosition="left"
        renderNavigationView={() => (
          <Menu navigation={navigation} drawer={drawer} />
        )}
      >
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
            name="homeNavigation"
            component={HomeNavigation}
            options={{
              headerTitle: () => <Header drawer={drawer} />,
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
            name="cartnavigation"
            component={CartNavigation}
            options={{
              title: "Cart",
              headerShown: false,
              tabBarLabelPosition: "below-icon",
              tabBarIcon: () => (
                <Icon name="shopping-cart" type="font-awesome" />
              ),
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
      </DrawerLayoutAndroid>
    </UserProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
});

export { AppNavigation };
