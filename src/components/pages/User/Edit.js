import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TextInput,
  Alert,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";

import { UserInfoProfile, MyOrder, EditTextField } from "./UserInfoProfile";

const Edit = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View>
            <Image
              style={styles.avatar}
              source={require("../../../assets/cr7.jpeg")}
            />
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={styles.fullname}>Dinh Quang Tung</Text>
            </View>
            <Text style={styles.username}>tung123</Text>
          </View>
        </View>

        <View style={styles.middle}>
          <EditTextField
            icon={{ name: "user", type: "entypo" }}
            name="Username"
            placeholder=""
            value=""
          />
          <EditTextField
            icon={{ name: "contacts", type: "material-community" }}
            name="Fullname"
            placeholder=""
            value=""
          />
          <EditTextField
            icon={{ name: "phone", type: "font-awesome" }}
            name="Phone"
            placeholder=""
            value=""
          />
          <EditTextField
            icon={{ name: "email", type: "" }}
            name="Email"
            placeholder=""
            value=""
          />
          <EditTextField
            icon={{ name: "birthday-cake", type: "font-awesome" }}
            name="Username"
            placeholder=""
            value=""
          />
          <EditTextField
            icon={{ name: "user", type: "entypo" }}
            name="Username"
            placeholder=""
            value=""
          />

          <MyOrder
            name="newspaper-o"
            title="My Order"
            type="font-awesome"
            data="View"
            navigation={navigation}
          />
        </View>

        <View style={styles.boxButtonEdit}>
          <TouchableOpacity
            style={styles.buttonEdit}
            color="#ffffff"
            onPress={() => {
              navigation.navigate("EditProfile");
            }}
          >
            <Icon name="edit" type="" color="white" />
            <Text style={styles.textEdit}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
    height: "90%",
  },
  top: {
    flexDirection: "row",
    width: "100%",
    height: 180,
    backgroundColor: "orange",
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    paddingLeft: 10,
    paddingRight: 10,
    alignItems: "center",
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 10000,
  },
  fullname: {
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
    width: "100%",
  },
  username: {
    color: "white",
  },
  boxButtonEdit: {
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonEdit: {
    flexDirection: "row",
    justifyContent: "center",
    width: "90%",
    padding: 10,
    // height: 50,
    // marginLeft: 20,
    // marginRight: 20,
    // marginTop: 20,
    borderRadius: 10,
    backgroundColor: "#00aced",
  },
  textEdit: {
    color: "white",
    marginLeft: 10,
  },
});

export { Edit };
