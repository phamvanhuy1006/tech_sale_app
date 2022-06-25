import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert,
  ImageBackground,
} from "react-native";
import { Icon } from "react-native-elements";
import { useEffect, useState } from "react";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { useForm, Controller } from "react-hook-form";
import { getMainAddress } from "~/lib/ultis";
import { createAddress } from "~/lib/api";
import { useNavigation } from "@react-navigation/native";
import { useContext } from "react";
import UserContext from "~/context/UserContext";
import AsyncStorage from "@react-native-async-storage/async-storage";

const RegisterAddress = () => {
  const [loading, setLoading] = useState(false);
  const navigation = useNavigation();
  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);
  const user = useContext(UserContext);

  const {
    handleSubmit,
    control,
    getValues,
    formState: { errors },
    register,
  } = useForm({
    defaultValues: {
      province_id: "",
      district_id: "",
      ward_id: "",
      address_detail: "",
    },
  });
  const onSubmit = async (data) => {
    let value = {
      address_detail: data.address_detail,
      district_id: JSON.parse(data.district_id).id,
      province_id: JSON.parse(data.province_id).id,
      ward_id: JSON.parse(data.ward_id).id,
      id_user: 1,
      name: "nha rieng",
      phone: user.phone,
      main_address: getMainAddress(
        JSON.parse(data.ward_id).name,
        JSON.parse(data.district_id).name,
        JSON.parse(data.province_id).name
      ),
      id: 0,
    };

    const res = await createAddress(value);
    setLoading(!loading);
    navigation.navigate("cartnavigation", {
      screen: "ListAddress",
      params: {
        loading: loading,
      },
    });
  };

  const getProvinces = async () => {
    let urlProvince = "https://vapi.vnappmob.com/api/province";
    try {
      const response = await axios({
        method: "get",
        url: urlProvince,
      });

      if (response.status == 200) {
        setProvinces(response.data.results);
      }
    } catch (error) {}
  };

  const getDistricts = async () => {
    let urlDistrict =
      "https://vapi.vnappmob.com/api/province/district/" +
      JSON.parse(getValues("province_id")).id;

    try {
      const response = await axios({
        method: "get",
        url: urlDistrict,
      });

      if (response.status == 200) {
        setDistricts(response.data.results);
      }
    } catch (error) {}
  };

  const getWards = async () => {
    let urlWard =
      "https://vapi.vnappmob.com/api/province/ward/" +
      JSON.parse(getValues("district_id")).id;

    try {
      const response = await axios({
        method: "get",
        url: urlWard,
      });

      if (response.status == 200) {
        setWards(response.data.results);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getProvinces();
  }, []);

  useEffect(() => {
    if (getValues("province_id")) {
      getDistricts();
    }
  }, [getValues("province_id")]);

  useEffect(() => {
    if (getValues("province_id") && getValues("district_id")) {
      getWards();
    }
  }, [getValues("district_id")]);

  return (
    <ImageBackground
      source={require("~/assets/background-address.jpg")}
      resizeMode="cover"
      style={styles.image}
    >
      <SafeAreaView>
        <ScrollView style={styles.container}>
          <View style={[{ marginBottom: 10 }, styles.box]}>
            <Text style={[styles.title]}>Chọn địa chỉ của bạn</Text>
          </View>
          <View style={[{ marginBottom: 10 }, styles.box]}>
            <Text style={styles.label}>Province</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(value) => [
                    onChange(value),
                    setLoading(!loading),
                  ]}
                  mode="dropdown"
                  onBlur={onBlur}
                >
                  {provinces.map((province) => (
                    <Picker.Item
                      key={province.province_id}
                      label={province.province_name}
                      value={JSON.stringify({
                        id: province.province_id,
                        name: province.province_name,
                      })}
                      // onFocus={()=> {setLoading(value.name)}}
                    />
                  ))}
                </Picker>
              )}
              {...register("province_id")}
              rules={{ required: true }}
            />
          </View>
          <View style={[{ marginBottom: 10 }, styles.box]}>
            <Text style={styles.label}>District</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(value) => [
                    onChange(value),
                    setLoading(!loading),
                  ]}
                  mode="dropdown"
                  onBlur={onBlur}
                >
                  {districts.map((district) => (
                    <Picker.Item
                      key={district.district_id}
                      label={district.district_name}
                      value={JSON.stringify({
                        id: district.district_id,
                        name: district.district_name,
                      })}
                    />
                  ))}
                </Picker>
              )}
              {...register("district_id")}
              rules={{ required: true }}
            />
          </View>
          <View style={[{ marginBottom: 10 }, styles.box]}>
            <Text style={styles.label}>Ward</Text>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(value) => onChange(value)}
                  mode="dropdown"
                  onBlur={onBlur}
                >
                  {wards.map((ward) => (
                    <Picker.Item
                      key={ward.ward_id}
                      label={ward.ward_name}
                      value={JSON.stringify({
                        id: ward.ward_id,
                        name: ward.ward_name,
                      })}
                    />
                  ))}
                </Picker>
              )}
              {...register("ward_id")}
              rules={{ required: true }}
            />
          </View>
          <View style={[{ marginBottom: 10 }, styles.box]}>
            <Text style={styles.label}>Detail</Text>

            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <TextInput
                  style={styles.input}
                  onBlur={onBlur}
                  onChangeText={(value) => onChange(value)}
                  value={value}
                />
              )}
              {...register("address_detail")}
              rules={{ required: true }}
            />
          </View>

          <View>
            <TouchableOpacity
              style={styles.btnRegister}
              onPress={handleSubmit(onSubmit)}
            >
              <Text style={styles.txtRegister}>REGISTER ADDRESS</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  title: {
    fontSize: 20,
    fontStyle: "italic",
    fontWeight: "bold",
    color: "blue",
  },
  label: {
    fontWeight: "bold",
    fontSize: 18,
    fontStyle: "italic",
    color: "green",
  },
  image: {
    flex: 1,
    justifyContent: "center",
  },
  input: {
    height: 50,
    borderWidth: 1,
    padding: 10,
    marginBottom: 40,
    borderRadius: 10,
    marginTop: 10,
  },
  btnRegister: {
    width: 200,
    height: 50,
    backgroundColor: "#307dc3",
    borderRadius: 30,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 50,
    marginLeft: "auto",
    marginRight: "auto",
  },
  txtRegister: {
    color: "#fff",
  },
  box: {
    borderRadius: 10,
    padding: 10,
  },
});

export { RegisterAddress };
