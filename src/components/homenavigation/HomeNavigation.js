import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { BlurView } from "expo-blur";
// import { Icon } from "@rneui/themed";
import { StyleSheet, Text, View } from "react-native";

import Home from "../../pages/home/Home";
import Cart from "../../pages/cart/Cart";
import Support from "../../pages/support/Support";
import Wishlist from "../../pages/wishlist/Wishlist";
import Setting from "../../pages/setting/Setting";

const Tab = createBottomTabNavigator()

const HomeNavigate = ({ navigation }) => {
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
          // tabBarIcon: () => <Icon name="house" />,
        }}
      />
      <Tab.Screen
        name="support"
        component={Support}
        options={{
          title: "Support",
          tabBarLabelPosition: "below-icon",
          // tabBarIcon: () => <Icon name="support" type="MaterialIcons" />,
        }}
      />

      <Tab.Screen
        name="cart"
        component={Cart}
        options={{
          title: "Cart",
          tabBarLabelPosition: "below-icon",
          // tabBarIcon: () => <Icon name="shopping-cart" type="font-awesome" />,
        }}
      />

      <Tab.Screen
        name="wishlist"
        component={Wishlist}
        options={{
          title: "Wishlist",
          tabBarLabelPosition: "below-icon",
          // tabBarIcon: () => <Icon name="heart-o" type="font-awesome" />,
        }}
      />

      <Tab.Screen
        name="setting"
        component={Setting}
        options={{
          title: "Setting",
          tabBarLabelPosition: "below-icon",
          // tabBarIcon: () => <Icon name="settings" type="feather" />,
        }}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigate
