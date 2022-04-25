import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';
import { Icon } from "@rneui/themed";

const ProCategori = (props) => {
  return(
    <View style={styles.product}>
      {/* <Image source={require('../../assets/icon.png')} style={styles.imgProduct} /> */}
      {/* them icon cho tung the loai sna pham */}
      <Icon name={props.icon.name} color={props.icon.color} type={props.icon.type} />
      <Text style={styles.namePro}>{props.name}</Text>
    </View>
  );
}

export default function ProductCategori () {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Products Categori</Text>

      <View style={styles.flex}>
        <ProCategori icon={{ name:"mobile-phone", type: "font-awesome", color: "#FF6600" }} name="Phone" />
        <ProCategori icon={{ name:"laptop", type: "font-awesome", color: "#3399FF" }} name="Laptop" />
        <ProCategori icon={{ name:"fridge", type: "material-community", color: "#FF3300" }} name="Refrigeration" />
      </View>
      <View style={styles.flex}>
        <ProCategori icon={{ name:"camera", type: "font-awesome", color: "#33CC33" }} name="Camera" />
        <ProCategori icon={{ name:"tablet", type: "font-awesome", color: "#003333" }} name="Ipad" />
        <ProCategori icon={{ name:"gamepad", type: "font-awesome", color: "#3399FF" }} name="Accessory" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: 15,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: '3%'
  },

  flex: {
    flexDirection: 'row',
    marginTop: '3%'
  },

  product: {
    marginRight: '2%',
    width: '30%',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems:'center'
  },

  namePro: {
    fontSize: 15,
    fontWeight: '500',
    marginBottom: '5%'
  },
  imgProduct: {
    width: 100,
    height:100
  }
});
