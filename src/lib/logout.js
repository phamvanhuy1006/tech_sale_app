import AsyncStorage from "@react-native-async-storage/async-storage";

export const logout = async () => {
  try {
    await AsyncStorage.removeItem("@user");
  } catch (e) {
    console.log("dang xuat loi", e);
  }
};
