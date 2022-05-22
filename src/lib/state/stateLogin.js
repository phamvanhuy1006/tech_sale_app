import React from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export function stateLogin() {
  const [login, setLogin] = React.useState(false);

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setLogin(true);
      }
      console.log(value);
    } catch (e) {
      // error reading value
      console.log(e);
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return login;
}
