import React from "react";

import { StyleSheet, Text, View, Button, TextInput } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: "600",
          marginBottom: "5%",
          color: "#ff3300",
        }}
      >
        Login
      </Text>
      <TextInput style={styles.input} placeholder="Email Address" />

      <TextInput style={styles.input} placeholder="Password" />

      <View style={styles.login}>
        <Button
          color="#339900"
          title="Login"
          onPress={() => {
            navigation.navigate("homenavigate");
            // navigation.navigate("ListProduct");
          }}
        />
      </View>

      <Button
        title="Forgot Password"
        onPress={() => {
          navigation.navigate("ForgotPass");
        }}
      />

      <View>
        <Text style={styles.linkregister}>
          Didn't have an account?
          <Text>Register Now</Text>
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#3399cc",
    alignItems: "center",
    justifyContent: "center",
  },

  input: {
    width: "80%",
    height: "7%",
    // border: 'solid #000 1px',
    borderRadius: 10,
    marginBottom: 2,
    paddingLeft: 10,
  },

  login: {
    width: "60%",
    backgroundColor: "#339900",
    marginTop: 2,
  },

  linkregister: {
    display: "flex",
    fontSize: 15,
    color: "#ccc",
    marginTop: "2%",
  },

  link: {
    // textDecoration: 'none',
  },
});
