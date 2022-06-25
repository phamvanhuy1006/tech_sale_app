import { request } from "~/lib";
import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Icon } from "@rneui/themed";

export const Shop = (props) => {
  const { shop_id } = props;
  const [shop, setShop] = useState();
  useEffect(() => {
    request.get("/api/shop/" + shop_id).then((res) => setShop(res.data.data));
  }, [shop_id]);

  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <TouchableOpacity style={{ marginRight: 2 }}>
        <Text style={{ color: "red" }}>Yêu thích</Text>
      </TouchableOpacity>
      <Text style={{marginRight: 2}}>{shop?.shop_name}</Text>
      <TouchableOpacity>
        <Icon iconStyle={{}} size={12} name="arrow-forward-ios" />
      </TouchableOpacity>
    </View>
  );
};
