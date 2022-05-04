import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import { Icon } from "@rneui/themed";

const MenuNavigation = ({ icon, name, onPress }) => {
  return (
    <TouchableOpacity 
      style={styles.menuElement}
      onPress={onPress}    
    >
      <Icon name={icon.name} type={icon.type} color="#fff" />
      <Text style={styles.textElement}>{name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  menuElement: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 30
  },
  textElement: {
    color: "#fff",
    marginLeft: 20,
    fontSize: 16,
    fontWeight: "600"
  }
});

export { MenuNavigation };
