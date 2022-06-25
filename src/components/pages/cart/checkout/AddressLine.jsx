import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { Icon } from "react-native-elements";
import { useEffect } from "react";
import { useContext } from "react";
import UserContext from "~/context/UserContext";
import { deleteAddress } from "~/lib/api";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

const AddressLine = (props) => {
  const { address_detail, id, id_user, main_address, name, phone } = props;
  const user = useContext(UserContext);
  const navigation = useNavigation();

  const selectAddress = async () => {
    await AsyncStorage.setItem("@address", JSON.stringify(props));
  };

  return (
    <View style={styles.container}>
      <View style={styles.detail}>
        <View style={styles.address}>
          <Text style={styles.txtAddress}>{main_address}</Text>
        </View>
        <View style={styles.detailAddress}>
          <Text>{address_detail}</Text>
        </View>
      </View>

      <View style={styles.options}>
        <View>
          <TouchableOpacity
            style={styles.btnSelect}
            onPress={() => {
              selectAddress();
            }}
          >
            <Text style={styles.btnTxt}>Select</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity
            onPress={() => {
              [
                deleteAddress(id),
                navigation.navigate("cartnavigation", {
                  screen: "ListAddress",
                  params: {
                    loading: { loading: 1 },
                  },
                }),
              ];
            }}
            style={styles.btnDelete}
          >
            <Text style={styles.btnTxt}>Delete</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity style={styles.btnEdit}>
            <Text style={styles.btnTxt}>Edit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "column",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted",
    borderColor: "#2529c5",
    width: "100%",
    height: 120,
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    backgroundColor: "#ffffff",
  },
  detail: {
    justifyContent: "flex-start",
    flexDirection: "column",
    width: "80%",
    // justifyContent: "center",
  },
  address: {
    // width: 350,
    // height: 20,
  },
  txtAddress: {
    fontWeight: "bold",
  },
  detailAddress: {
    // width: 350,
    // height: 20,
  },
  options: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 10,
  },
  btnSelect: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#307dc3",
    width: 70,
    height: 30,
    borderRadius: 30,
  },
  btnDelete: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f00",
    width: 70,
    height: 30,
    borderRadius: 30,
  },
  btnEdit: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#27fb00",
    width: 70,
    height: 30,
    borderRadius: 30,
  },
  btnTxt: {
    fontWeight: "bold",
    color: "#fff",
  },
});

export { AddressLine };
