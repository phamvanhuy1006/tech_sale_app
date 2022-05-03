import React, { useRef, useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
import { Icon } from "@rneui/themed";
import { Button, DrawerLayoutAndroid, Text, StyleSheet, View } from "react-native";

import { Home } from '../pages/home';
import { Support } from "../pages/support";
import { Wishlist } from "../pages/wishlist";
import { Setting } from "../pages/setting";
import { Cart } from "../pages/cart";
import { Header } from "./Header";
import { Menu } from "./Menu";

const Tab = createBottomTabNavigator()

const HomeNavigation = ({ navigation }) => {

  const drawer = useRef(null);

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={() => <Menu navigation={navigation} drawer={drawer} />}
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
          name="home"
          component={Home}
          options={{
            headerTitle: () => <Header drawer={drawer}/>,
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
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16
  },
  navigationContainer: {
    backgroundColor: "#ecf0f1"
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center"
  }
});

export { HomeNavigation }
