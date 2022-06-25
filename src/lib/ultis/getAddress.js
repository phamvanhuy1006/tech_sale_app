import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "~/lib";
import { Alert } from "react-native";

export const getAddress = async () => {
  const jsonAddress = await AsyncStorage.getItem("@address");
  const address = JSON.parse(jsonAddress);

  return address;
};
