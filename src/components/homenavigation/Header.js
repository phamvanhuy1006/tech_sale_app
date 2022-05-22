import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
} from "react-native";
import { Icon } from "@rneui/themed";

function Header({ drawer }) {
  const [text, onChangeText] = React.useState("Useless Text");
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={() => drawer.current.openDrawer()}>
        <Icon name="reorder" type="" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="search" type="" />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="notifications" type="ionicons" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  input: {
    borderWidth: 1,
    width: "60%",
    padding: 10,
    borderRadius: 20,
  },
});

export { Header };
