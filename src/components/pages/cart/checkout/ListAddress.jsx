import {
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  View
} from "react-native";
import { Icon } from "react-native-elements";
import { AddressLine } from "./AddressLine";
import { request } from "~/lib";
import { useEffect, useState } from "react";
import { useContext } from "react";
import UserContext from "~/context/UserContext";

const ListAddress = ({ navigation, route }) => {
  const [listAddress, setListAddress] = useState();
  const user = useContext(UserContext);

  useEffect(() => {
    request
      .get(`/api/address/param?id_user=${user.id}`)
      .then((res) => setListAddress(res.data.data));
  }, [route?.params?.loading]);

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        style={styles.btnAddNew}
        onPress={() => {
          navigation.navigate("RegisterAddress");
        }}
      >
        <Icon name="plus" type="antdesign" color="#2529c5" />
        <Text style={styles.txtAddNew}>Add new to Shipping Address</Text>
      </TouchableOpacity>

      <View style={{ flex: 5 }}>
        <ScrollView>
          {listAddress?.map((address) => {
            return <AddressLine key={address?.id} {...address} />;
          })}
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 10,
    flex: 1,
  },
  btnAddNew: {
    flexDirection: "row",
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderStyle: "dotted",
    borderColor: "#2529c5",
    width: "100%",
    flex: 1,
    borderWidth: 1,
  },
  txtAddNew: {
    color: "#2529c5",
    marginLeft: 5,
    fontSize: 20,
  },
});

export { ListAddress };
