import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Cart } from "./Cart";
import { SafeAreaView, Text, TouchableOpacity } from "react-native";
import { ShowProduct } from "~/screen/product";
import { Checkout, ListAddress, RegisterAddress } from "./checkout";
import { useNavigation } from "@react-navigation/native";
import { ToPay, ToProcess, OrderNavigation } from "./order";
import SearchProduct from "../../SearchProduct";
import { Icon } from "@rneui/themed";

const Stack = createNativeStackNavigator();

const HeaderCart = ({ title }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flexDirection: "row", justifyContent: "center" }}>
      <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
        style={{ marginRight: 3 }}
      >
        <Icon name="arrowleft" type="ant-design" />
      </TouchableOpacity>
      <Text>{title}</Text>
    </SafeAreaView>
  );
};

const CartNavigation = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="cart" component={Cart} />
      <Stack.Screen
        name="Checkout"
        component={Checkout}
        options={{
          title: "Thanh toán"
          // headerTitle: () => <HeaderCart title="Thanh toán" />,
        }}
      />
      <Stack.Screen
        name="ListAddress"
        component={ListAddress}
        options={{
          title: "Danh sách địa chỉ"
          // headerTitle: () => <HeaderCart title="Danh sách địa chỉ" />,
        }}
      />
      <Stack.Screen
        name="RegisterAddress"
        component={RegisterAddress}
        options={{
          title: "Đăng kí địa chỉ"
          // headerTitle: () => <HeaderCart title="Đăng kí đia chỉ" />,
        }}
      />
      <Stack.Screen
        name="ShowProduct"
        component={ShowProduct}
        options={{
          tabBarLabel: "Stack1",
          unmountOnBlur: true,
          // headerTitle: () => <HeaderCart title="Prod" />,
        }}
      />
      <Stack.Screen
        name="Search"
        component={SearchProduct}
        options={{
          headerTitle: () => <HeaderCart title="Search" />,
        }}
      />
      <Stack.Screen
        name="OrderNavigation"
        options={{
          title: "Đơn mua"
          // headerTitle: () => <HeaderCart title="Đơn mua" />,
        }}
        component={OrderNavigation}
      />
    </Stack.Navigator>
  );
};

export { CartNavigation };
