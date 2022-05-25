import {
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  View,
  TextInput,
  ScrollView,
  Alert
} from "react-native";
import { Icon } from "react-native-elements";
import { useEffect, useState } from "react";
import axios from "axios";
import { Picker } from "@react-native-picker/picker";
import { useForm } from "react-hook-form";

const RegisterAddress = () => {
  const [provinceId, setProvinceId] = useState(null);
  const [districtId, setDistrictId] = useState(null);
  const [wardId, setWardId] = useState(null);
  const [detailAddress, setDetailAddress] = useState(null);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

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
      "https://vapi.vnappmob.com/api/province/district/" + provinceId;

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
    let urlWard = "https://vapi.vnappmob.com/api/province/ward/" + districtId;

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
    if (provinceId) {
      getDistricts();
    }
  }, [provinceId]);

  useEffect(() => {
    if (provinceId && districtId) {
      getWards();
    }
  }, [districtId]);

  const { register, handleSubmit, control } = useForm({ shouldUseNativeValidation: true });
  const onSubmit = (data) => Alert.alert(JSON.stringify(data))
  // useEffect(() => {
  //   console.log(1)
  // },[])
  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Province</Text>
          <Picker
            selectedValue={provinceId}
            onValueChange={(itemValue, itemIndex) => setProvinceId(itemValue)}
            mode="dropdown"
            control={control}
            
          >
            {provinces.map((province) => (
              <Picker.Item
                key={province.province_id}
                label={province.province_name}
                value={province.province_id}
              />
            ))}
          </Picker>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>District</Text>
          <Picker
            selectedValue={districtId}
            onValueChange={(itemValue, itemIndex) => setDistrictId(itemValue)}
            mode="dropdown"
          >
            {districts.map((district) => (
              <Picker.Item
                key={district.district_id}
                label={district.district_name}
                value={district.district_id}
              />
            ))}
          </Picker>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Ward</Text>
          <Picker
            selectedValue={wardId}
            onValueChange={(itemValue, itemIndex) => setWardId(itemValue)}
            mode="dropdown"
          >
            {wards.map((ward) => (
              <Picker.Item
                key={ward.ward_id}
                label={ward.ward_name}
                value={ward.ward_id}
              />
            ))}
          </Picker>
        </View>
        <View style={{ marginBottom: 10 }}>
          <Text style={styles.label}>Detail</Text>
          <TextInput
            style={styles.input}
            onChangeText={setDetailAddress}
            value={detailAddress}
          />
        </View>
        <View>
          <TouchableOpacity style={styles.btnRegister} onPress={handleSubmit(onSubmit)}>
            <Text style={styles.txtRegister}>REGISTER ADDRESS</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  label: {
    fontWeight: "bold",
    fontSize: 15,
    paddingBottom: 10,
  },
  input: {
    height: 40,
    borderWidth: 1,
    padding: 10,
    marginBottom: 40,
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
});

export { RegisterAddress };
