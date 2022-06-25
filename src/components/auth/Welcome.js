import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, ImageBackground } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { useTranslation } from "react-i18next";
import { stateLogin } from "~/lib/state";

function Welcome({ navigation }) {
  const { t } = useTranslation();

  // if (stateLogin) {
  //   navigation.navigate("Homenavigate");
  // }

  return (
    <ImageBackground
      style={styles.container}
      source={require("~/assets/background-welcome.jpg")}
      resizeMode="cover"
    >
      <Text style={{ fontSize: 24, fontWeight: "600", color: "#fff" }}>
        Welcome!
      </Text>

      <View style={styles.signin}>
        <Button
          color="#339900"
          title="Đăng nhập"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View>
      <View style={styles.signin}>
        <Button
          color="#ff33cc"
          title="Đăng ký"
          onPress={() => {
            navigation.navigate("Register");
            // handleLanguage('vi')
          }}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // width: '100%',
    // backgroundColor: "#9966ff",
    alignItems: "center",
    justifyContent: "center",
  },

  signin: {
    width: "60%",
    backgroundColor: "#339900",
    marginTop: "2%",
  },
});

export { Welcome };
