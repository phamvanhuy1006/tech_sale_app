import {
  Button,
  Image,
  View,
  Platform,
  SnapshotViewIOSComponent,
  ActivityIndicator,
  Alert,
  StyleSheet,
} from "react-native";

export const Overlay = () => {
  return <View style={styles.overlay}></View>;
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    // backgroundColor: "#696969",
    // width: "100%",
    // height: "100%",
  },
});
