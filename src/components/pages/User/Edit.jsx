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
  Switch,
} from "react-native";
import { Icon } from "@rneui/themed";
import React from "react";
import {
  UserInfoProfile,
  MyOrder,
  EditTextField,
  BirthdayInput,
  Gender,
} from "./UserInfoProfile";
import DateTimePicker from "@react-native-community/datetimepicker";
import { formatDate } from "~/util/commonFunction";
import ImageSelect from "./ImageSelect";
import { avatarName } from "~/util/commonFunction";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { request } from "~/lib";
const Edit = ({ navigation }) => {
  const [userId, setUserId] = React.useState("");
  const [password, setPass] = React.useState("");
  const [username, setUsername] = React.useState("");
  const [fullname, setFullname] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");
  // const [address, setAddress] = React.useState('')
  const [birthday, setBirthday] = React.useState("");
  const [gender, setGender] = React.useState(0);
  const [address, mainAddress] = React.useState("");

  const [date, setDate] = React.useState(new Date());
  const [mode, setMode] = React.useState("date");
  const [show, setShow] = React.useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate;
    setShow(false);
    setDate(formatDate(currentDate));
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const getData = async () => {
    try {
      const value = await AsyncStorage.getItem("@user");
      if (value !== null) {
        const data = JSON.parse(value);
        setUserId(data.id);
        setPass(data.password);
        setUsername(data.user_name);
        setFullname(data.full_name);
        setEmail(data.email);
        setPhone(data.phone);
        setBirthday(data.birthday);
        setGender(data.gender);
        mainAddress(data.main_address);
      }
    } catch (e) {
      console.log(e);
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
            <ImageSelect
              avatar={avatarName(userId)}
              style={styles.avatar}
              userId={userId}
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
            onChangeText={(newText) => setUsername(newText)}
            defaultValue={username}
          />

          <EditTextField
            icon={{ name: "contacts", type: "material-community" }}
            name="Fullname"
            placeholder=""
            onChangeText={(newText) => setFullname(newText)}
            defaultValue={fullname}
          />
          <EditTextField
            icon={{ name: "phone", type: "font-awesome" }}
            name="Phone"
            placeholder=""
            onChangeText={(newText) => setPhone(newText)}
            defaultValue={phone}
          />
          <EditTextField
            icon={{ name: "address", type: "entypo" }}
            name="Address"
            placeholder=""
            onChangeText={(newText) => mainAddress(newText)}
            defaultValue={address}
          />
          <EditTextField
            icon={{ name: "email", type: "" }}
            name="Email"
            placeholder=""
            onChangeText={(newText) => setEmail(newText)}
            defaultValue={email}
          />
          <BirthdayInput
            icon={{ name: "birthday-cake", type: "font-awesome" }}
            name="Birthday"
            placeholder=""
            defaultValue={date.toLocaleString()}
            onFocus={showDatepicker}
          />

          <View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                onChange={onChange}
              />
            )}
          </View>

          <Gender
            icon={{ name: "transgender", type: "font-awesome" }}
            name="Gender"
            onValueChange={() =>
              setGender((previousState) => (previousState == 0 ? 1 : 0))
            }
            value={gender}
          />
        </View>

        <View style={styles.boxButtonEdit}>
          <TouchableOpacity
            style={styles.buttonEdit}
            color="#ffffff"
            onPress={async () => {
              const dataRequest = {
                id: userId,
                password: password,
                avatar: avatarName(userId),
                full_name: fullname ? fullname : "",
                phone: phone ? phone : "",
                birthday: birthday,
                gender: gender,
                email: email ? email : "",
                user_name: username ? username : "",
                main_address: address ? address : "",
              };
              const res = await request.put("/api/user", dataRequest);
              if (res.data.status === 200) {
                Alert.alert("Upload thành công!");
              } else {
                Alert.alert(res.data.data);
              }
            }}
          >
            <Icon name="edit" type="" color="white" />
            <Text style={styles.textEdit}>Submit</Text>
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
    borderRadius: 10,
    backgroundColor: "#00aced",
  },
  textEdit: {
    color: "white",
    marginLeft: 10,
  },
});

export { Edit };
