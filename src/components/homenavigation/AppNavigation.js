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
  TouchableOpacity,
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

function MyTabBar({ state, descriptors, navigation }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={{ flexDirection: "row" }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          setLoading(!loading);

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, { loading: loading });
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 }}
          >
            <Text style={{ color: isFocused ? "#673ab7" : "#222" }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

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
        <Tab.Navigator>
          <Tab.Screen
            name="homeNavigation"
            component={HomeNavigation}
            options={{
              headerTitle: () => <Header drawer={drawer} navigation={navigation} />,
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
              tabBarStyle: { display: "none" },
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
