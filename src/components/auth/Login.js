import React from "react";
import { request } from "~/lib";
import { StyleSheet, Text, View, Button, TextInput, Alert } from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "~/components/Loading";

function Login({ navigation }) {
  const [loading, setLoading] = React.useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      console.log(value)
      navigation.navigate("Homenavigate");
      console.log("da dang nhap");
    } catch (e) {
      // saving error
    }
  };

  // email: "admin@gmail.com",
  // password: "123",

  const handleLogin = async () => {
    await request
      .post(`/api/login`, {
        email: email,
        password: password,
      })
      .then((res) => {
        storeData(res.data.data);
      })
      .then(setLoading(false))
      .catch((err) => {
        [setLoading(false), Alert.alert(err.response.data.data)];
      });
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        
      }
    } catch (e) {
    }
  };
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <View style={styles.container}>
      {loading ? <Loading /> : <View></View>}

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
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        onChangeText={(text) => setEmail(text)}
        defaultValue={email}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        onChangeText={(text) => setPassword(text)}
        defaultValue={password}
      />
      <View style={styles.login}>
        <Button
          color="#339900"
          title="Login"
          onPress={() => {
            return [setLoading(true), handleLogin()];
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
          Didn 't have an account? <Text> Register Now </Text>
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

export { Login };
