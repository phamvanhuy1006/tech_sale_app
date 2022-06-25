import React from "react";
import { request } from "~/lib";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Alert,
  ImageBackground,
} from "react-native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Loading } from "~/components/Loading";

function Login({ navigation }) {
  const [loading, setLoading] = React.useState(false);

  const storeData = async (value) => {
    try {
      const jsonValue = JSON.stringify(value);
      await AsyncStorage.setItem("@user", jsonValue);
      navigation.navigate("Homenavigate");
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

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <ImageBackground
      style={styles.container}
      source={require("~/assets/background-login.jpg")}
      resizeMode="cover"
    >
      <Text
        style={{
          fontSize: 25,
          fontWeight: "600",
          marginBottom: "5%",
          color: "#fff",
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
        secureTextEntry={true}
        autoCorrect={false}
        password={true}
        onChangeText={(text) => {
          setPassword(text);
        }}
        defaultValue={password}
      />
      <View style={styles.login}>
        <TouchableOpacity
          style={{
            backgroundColor: "green",
            alignItems: "center",
            borderRadius: 5,
          }}
          borderRadius={2}
          onPress={() => {
            return [setLoading(true), handleLogin()];
          }}
        >
          <Text style={{ color: "white", fontSize: 18, paddingVertical: 3 }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{ alignItems: "center" }}
        onPress={() => {
          navigation.navigate("ForgotPass");
        }}
      >
        <Text style={{ textDecorationLine: "underline", color: "yellow" }}>
          ForgotPassword
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.linkregister}>Didn 't have an account?</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Register");
          }}
          style={{ paddingTop: 4 }}
        >
          <Text style={{ color: "orange", textTransform: "uppercase" }}>
            Register Now
          </Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
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
    backgroundColor: "#ccc",
    paddingLeft: 10,
  },

  login: {
    width: "60%",
    marginVertical: 5,
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
