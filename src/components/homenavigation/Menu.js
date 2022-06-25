import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground
} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MenuNavigation } from "./MenuNavigation";
import { logout } from "~/lib";

const Stack = createNativeStackNavigator();

const Menu = ({ navigation, drawer }) => {
  return (
    <ImageBackground
      source={require("~/assets/background-menu.jpg")}
      resizeMode="cover"
      style={[styles.container, styles.navigationContainer]}
    >
      <View style={styles.borderImage}>
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={styles.image}
        />
      </View>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />

      <View style={styles.menuNavigation}>
        <MenuNavigation
          icon={{ name: "account-circle", type: "MaterialIcons" }}
          name="My Profile"
          onPress={() => {
            [navigation.navigate("ShowProfile"), drawer.current.closeDrawer()];
          }}
        />
        <MenuNavigation
          icon={{ name: "notifications", type: "MaterialIcons" }}
          name="Notification"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <MenuNavigation
          icon={{ name: "lock", type: "EvilIcons" }}
          name="ChangePass"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <MenuNavigation
          icon={{ name: "newspaper-o", type: "font-awesome" }}
          name="My orders"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <MenuNavigation
          icon={{ name: "settings", type: "MaterialIcons" }}
          name="Settings"
          onPress={() => {
            navigation.navigate("Register");
          }}
        />
        <MenuNavigation
          icon={{ name: "sign-out", type: "font-awesome" }}
          name="Sign Out"
          onPress={() => {
            return [logout(), navigation.navigate("Login")];
          }}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: "center",
    padding: 16,
  },
  navigationContainer: {
    backgroundColor: "#0066FF",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    textAlign: "center",
  },
  image: {
    width: 100,
    height: 100,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    backgroundColor: "grey",
  },
  borderImage: {
    alignItems: "center",
  },
});

export { Menu };
