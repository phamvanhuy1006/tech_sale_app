import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Icon } from "@rneui/themed";
import { TAgender } from "~/constant/index";
import React from "react";

import { UserInfoProfile, MyOrder } from "./UserInfoProfile";
import { formatDate } from "~/util/commonFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";

const Show = ({ navigation }) => {
  const [user, setUser] = React.useState();

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        setUser(JSON.parse(value));
      }
    } catch (e) {}
  };
  const getGender = (value) => {
    const gender = TAgender.find((item) => item.value === value);
    if (gender) {
      return gender.content;
    } else {
      return "";
    }
  };

  React.useEffect(() => {
    getData();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.top}>
          <View>
            <Image style={styles.avatar} source={{ uri: user?.avatar }} />
          </View>
          <View style={{ marginLeft: 10 }}>
            <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
              <Text style={styles.fullname}>{user?.full_name}</Text>
            </View>
            <Text style={styles.username}>{user?.user_name}</Text>
          </View>
        </View>

        <View style={styles.middle}>
          <UserInfoProfile
            name="user"
            type="entypo"
            title="Username"
            data={user?.user_name}
          />
          <UserInfoProfile
            name="contacts"
            type="material-community"
            title="Fullname"
            data={user?.full_name}
          />
          <UserInfoProfile
            name="phone"
            type="font-awesome"
            title="Phone"
            data={user?.phone}
          />
          <UserInfoProfile
            name="email"
            type=""
            title="Email"
            data={user?.email}
          />
          <UserInfoProfile
            name="address"
            type="entypo"
            title="Address"
            data={user?.main_address}
          />
          <UserInfoProfile
            name="birthday-cake"
            type="font-awesome"
            title="Birthday"
            data={formatDate(new Date(user?.birthday))}
          />
          <UserInfoProfile
            name="transgender"
            type="font-awesome"
            title="Gender"
            data={getGender(user?.gender)}
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
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
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
    borderRadius: 10,
    backgroundColor: "#00aced",
  },
  textEdit: {
    color: "white",
    marginLeft: 10,
  },
});

export { Show };
