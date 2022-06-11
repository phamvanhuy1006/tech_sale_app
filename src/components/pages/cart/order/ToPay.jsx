import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { OrderComponent } from "./OrderComponent";

const ToPay = () => {
  const data = {
    isToPayTab: true,
    code: 123,
    totalPrice: 1000000,
    TotalProduct: 5,
    paymentMethod: "payment on delivery",
  }

  return (
    <ScrollView>
      <OrderComponent {...data} />
      <OrderComponent {...data} />
    </ScrollView>
  )
}

const styles = StyleSheet.create({

})

export { ToPay }
