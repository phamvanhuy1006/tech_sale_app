import { Icon } from "react-native-elements";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Switch,
} from "react-native";
import React from "react";

const UserInfoProfile = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Icon name={props.name} type={props.type} color="#00aced" />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "flex-end",
        }}
      >
        <Text style={styles.data}>{props.data}</Text>
      </View>
    </View>
  );
};

const MyOrder = (props) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: "row", alignItems: "center", flex: 1 }}>
        <Icon name={props.name} type={props.type} color="#00aced" />
        <Text style={styles.title}>{props.title}</Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "flex-end",
        }}
      >
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("EditProfile");
          }}
        >
          <Text style={styles.buttonText}>{props.data}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const EditTextField = ({
  icon,
  name,
  placeholder,
  defaultValue,
  type,
  onChangeText,
  onFocus,
}) => {
  return (
    <View style={styles.boxTextField}>
      <View style={styles.labelInput}>
        <Icon name={icon.name} type={icon.type} color="#00aced" />
        <Text style={styles.labelText}>{name}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </View>
  );
};

const BirthdayInput = ({
  icon,
  name,
  placeholder,
  defaultValue,
  type,
  onChangeText,
  onFocus,
}) => {
  return (
    <View style={styles.boxTextField}>
      <View style={styles.labelInput}>
        <Icon name={icon.name} type={icon.type} color="#00aced" />
        <Text style={styles.labelText}>{name}</Text>
      </View>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        defaultValue={defaultValue}
        onChangeText={onChangeText}
        onFocus={onFocus}
      />
    </View>
  );
};

const Gender = ({ icon, name, value, onValueChange }) => {
  // const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => setIsEnabled((previousState) => !previousState);

  return (
    <View style={styles.boxTextField}>
      <View style={styles.labelInput}>
        <Icon name={icon.name} type={icon.type} color="#00aced" />
        <Text style={styles.labelText}>{name}</Text>
      </View>
      <View>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={value == 1 ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onValueChange}
          value={value == 0 ? false : true}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    height: 50,
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 15,
    marginLeft: 5,
  },
  data: {
    fontSize: 15,
  },
  button: {
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    padding: 4,
    backgroundColor: "orange",
  },
  buttonText: {
    color: "white",
  },

  boxTextField: {
    marginTop: 20,
  },
  labelInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    borderRadius: 10,
    borderColor: "#666",
    borderWidth: 1,
    padding: 3,
    paddingLeft: 10,
    marginTop: 5,
    height: 50,
  },
  labelText: {
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export { UserInfoProfile, MyOrder, EditTextField, BirthdayInput, Gender };
