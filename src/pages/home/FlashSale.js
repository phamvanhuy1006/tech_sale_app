import { Text, View, StyleSheet, Image} from 'react-native';

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

export default function FlashSale() {
  return(
    <View style={styles.box}>
      <Text style={styles.title}>Flash Sale</Text>

      <View style={styles.flex}>
        <ProSale name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
        <ProSale name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
        <ProSale name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
        <ProSale name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
        <ProSale name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: '5%',
    marginTop: '5%',
  },

  title: {
    fontSize: '20px',
    fontWeight: '600',
    marginTop: '3%'
  },

  flex: {
    flexDirection: 'row',
    marginTop: '3%',
    overflow: "scroll"
  },

  product: {
    width: '48%',
    backgroundColor: '#fff',
    border: 'solid #cccccc 1px',
    borderRadius: '10px',
    marginRight: '2%',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative'
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
})