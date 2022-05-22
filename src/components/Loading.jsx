import {
  Button,
  Image,
  View,
  Platform,
  SnapshotViewIOSComponent,
  ActivityIndicator,
  Alert,
  StyleSheet
} from "react-native";
import { Overlay } from "./Overlay";

export const Loading = () => {
  return (
    <View style={styles.loading}>
      <Overlay />
      <ActivityIndicator size="large" color="#000" />
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 2
  }
})
