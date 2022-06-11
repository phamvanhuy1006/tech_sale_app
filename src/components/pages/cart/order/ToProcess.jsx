import {
  Text,
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { OrderComponent } from "./OrderComponent";

const ToProcess = () => {
  const data = {
    isToPayTab: false,
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

export { ToProcess }
