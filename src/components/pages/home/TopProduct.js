import { Text, View, StyleSheet, Image, Button} from 'react-native';
import { Product } from './Product';

function TopProduct({ navigation }) {

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
      <View style={styles.buttonView}>
        <Button
          title="View All"
          color="#ff6600"
          onPress={ () => navigation.navigate("Login") }
        />
      </View>

      <View style={styles.row}>
        {products.map(product => ([
          <View  key={product.id} style={styles.card}>
            <Product name="Samsung Galaxy S22 UlTra 5G 128Gb" salePrice={70000} rest={30} />
          </View>
        ]))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  box: {
    marginLeft: '5%',
    marginRight: '5%',
    flex: 1,
    marginTop: '5%',
    marginBottom: '5%'
  },

  title: {
    fontSize: 20,
    fontWeight: '600',
    marginTop: '3%'
  },

  flex: {
    flexDirection: 'row',
    marginTop: '6%',
  },

  row: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: '5%',
  },

  buttonView: {
    width: 100,
    position: 'absolute',
    right: '5%',
    top: '1%'
  },
  card: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderRadius: 4,
    backgroundColor: "oldlace",
    alignSelf: "flex-start",
    marginHorizontal: "1%",
    marginBottom: 6,
    maxWidth: "50%",
    textAlign: "center",
  },
})

export { TopProduct }
