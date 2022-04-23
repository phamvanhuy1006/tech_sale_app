import { Text, View, StyleSheet, Image, ImageBackground } from 'react-native';
import { Link } from 'react-router-native';

const ProCategori = (props) => {
  return(
    <View style={styles.product}>
      {/* <Image source={require('../../assets/icon.png')} style={styles.imgProduct} /> */}
      {/* them icon cho tung the loai sna pham */}
      <Text>{props.icon}</Text>
      <Text style={styles.namePro}>{props.name}</Text>
    </View>
  );
}

export default function ProductCategori () {
  return (
    <View style={styles.box}>
      <Text style={styles.title}>Products Categori</Text>

      <View style={styles.flex}>
        <ProCategori icon="đây là thẻ icon phone" name="Phone" />
        <ProCategori icon="đây là thẻ icon laptop" name="Laptop" />
        <ProCategori icon="đây là thẻ icon refrigeration" name="Refrigeration" />
      </View>
      <View style={styles.flex}>
        <ProCategori icon="dây là icon camera" name="Camera" />
        <ProCategori icon="đây là icon IPAD" name="Ipad" />
        <ProCategori icon="đây là icon Accessory" name="Accessory" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: '5%'
  },

  title: {
    fontSize: '20px',
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
    borderRadius: '10px',
    justifyContent: 'center',
    alignItems:'center'
  },

  namePro: {
    fontSize: '15px',
    fontWeight: '500',
    marginBottom: '5%'
  },
  imgProduct: {
    width: '100px',
    height:'100px'
  }
});