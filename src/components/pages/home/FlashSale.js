import { Text, View, StyleSheet, Image, Button} from 'react-native';
import { Product } from './Product';

function FlashSale() {
  return(
    <View style={styles.box}>
      <Text style={styles.title}>Flash Sale</Text>

      <View style={styles.flex}>
        <Product name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: '5%',
    marginRight: '5%',
    flex: 1,
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: '3%'
  },

  flex: {
    flexDirection: 'row',
    marginTop: '3%',
    overflow: "scroll"
  }
})

export { FlashSale }