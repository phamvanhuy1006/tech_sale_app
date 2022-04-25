import { Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import { Icon } from "@rneui/themed";

const Product = (props) => {
  return(
    <View style={styles.product}>
      <Image source={require('../../assets/dien-thoai.jpg')} style={styles.imgPro} resizeMode='contain' />
      <View>
        <Text style={styles.namePro}>{props.name}</Text>
        <Text style={styles.salePrice}>Giá Sale: {props.salePrice}</Text>
        <Text style={styles.rest}>Còn: {props.rest}</Text>
      </View>
      <TouchableOpacity style={styles.addPro}><Icon name="add-to-list" color="green" type="entypo" /></TouchableOpacity>
      <TouchableOpacity style={styles.iconHeart}><Icon name="heart-o" type="font-awesome" /></TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  product: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
    },
  
  imgPro: {
    flex: 1,
    marginTop: '5%',
    width: '70%',
    height: 100
  },
  
  namePro: {
    fontSize: 14,
    fontWeight: '500',
  },

  salePrice: {
    fontSize: 12,
    color: 'red',
    fontWeight: '500'
  },

  rest: {
    fontSize: 12,
    color: 'red',
    fontWeight: '500',
    marginBottom: '5%',
    paddingBottom: '5%'
  },

  addPro: {
    position: 'absolute',
    bottom: '5%',
    right: '5%',
  },

  iconHeart: {
    position: 'absolute',
    top: '5%',
    right: '5%'
  }
})
export default Product
