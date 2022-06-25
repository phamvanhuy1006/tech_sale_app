import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";
import { Icon } from "@rneui/themed";
import { Avatar, Badge, withBadge } from "react-native-elements";

const { width: screenWidth } = Dimensions.get("window");

function Header({ drawer, navigation }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.header}>
      <TouchableOpacity
        onPress={() => drawer.current.openDrawer()}
        style={{ flex: 3, alignItems: "flex-start" }}
      >
        <Icon name="reorder" type="" />
      </TouchableOpacity>
      <View style={{ flexDirection: "row", flex: 1 }}>
        <TouchableOpacity style={{ flex: 1, alignItems: "flex-end" }}>
          <Icon name="search" type="" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("cartnavigation", {
              screen: "OrderNavigation",
              params: {
                cart: 1,
              },  
            });
          }}
          style={{ flex: 3 }}
        >
          <Icon name="cart-outline" color="#f94f30" type="material-community" />
          <Badge
            value="99+"
            status="error"
            d5
            containerStyle={{ position: "absolute", top: -4, right: -4 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    width: screenWidth - 20,
  },

  input: {
    borderWidth: 1,
    width: "60%",
    padding: 10,
    borderRadius: 20,
  },
});

export { Header };
