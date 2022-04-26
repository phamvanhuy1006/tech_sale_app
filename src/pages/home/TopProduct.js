import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, StyleSheet, Image, Button} from 'react-native';
import ListProduct from '../product/ListProduct';
import { Route, Link, NativeRouter } from 'react-router-native';

const ProSale = (props) => {
  return(
    <View style={styles.product}>
      <Image source={require('../../assets/dien-thoai.jpg')} style={styles.imgPro} resizeMode='contain' />
      <Text style={styles.namePro}>{props.name}</Text>
      <Text style={styles.salePrice}>Giá Sale: {props.salePrice}</Text>
      <Text style={styles.rest}>Còn: {props.rest}</Text>
      <Text style={styles.addPro}>Icon Add</Text>
      <Text style={styles.iconHeart}>Heart</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator()

export default function TopProduct({ navigation }) {
  const products = [
    {
      id:"1", name: "ten 1", number: "20"
    },
    {
    name: "ten 2", number: "20",  id:"2"
    },
    {
      name: "ten 3", number: "20",  id:"3"
    },
    {
      name: "ten 4", number: "20",  id:"4"
    },
    {
      name: "ten 3", number: "20",  id:"5"
    },
    {
      name: "ten 4", number: "20",  id:"6"
    }, {
      name: "ten 3", number: "20", id:"7"
    },
    {
      name: "ten 4", number: "20", id:"8" 
    },
  ]
  return(
    <View style={styles.box}>
      <Text style={styles.title}>Top Product</Text>

      <View style={styles.button}>
        <Button
          title="View All"
          color="#ff6600"
          onPress={() => {
            // điều hướng ra màn list product
          }}
        />
      </View>
      <View style={styles.flex}>
        {products.map(product =>([
          <ProSale key={product.id} name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
        ]))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%'
  },

  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '3%'
  },

  flex: {
    flexDirection: 'row',
    marginTop: '6%',
    flexWrap: 'wrap'
  },

  product: {
    width: '48%',
    backgroundColor: '#fff',
    border: 'solid #cccccc 1px',
    borderRadius: '10px',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginTop: '5%'
  },

  imgPro: {
    flex: 1,
    marginTop: '5%',
    width: '70%',
    height: '100px'
  },

  namePro: {
    fontSize: '14px',
    fontWeight: '500',
  },

  salePrice: {
    fontSize: '12px',
    color: 'red',
    fontWeight: '500'
  },

  rest: {
    fontSize: '12px',
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
  },

  button: {
    width: '100px',
    position: 'absolute',
    right: '5%',
    top: '1%'
  }
})