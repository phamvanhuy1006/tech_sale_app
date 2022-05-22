import {
    Text,
    SafeAreaView,
    StyleSheet,
    TouchableOpacity
} from 'react-native'
import { Icon } from 'react-native-elements';
import {AddressLine} from "./AddressLine";

const ListAddress = () => {
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity
                style={styles.btnAddNew}
            >
                <Icon 
                    name='plus'
                    type='antdesign'
                    color='#2529c5'
                />
                <Text style={styles.txtAddNew}>Add new to Shipping Address</Text>
            </TouchableOpacity>
            
            <AddressLine />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        margin: 10,
    },
    btnAddNew: {
        display: 'flex',
        flexDirection: 'row',
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        borderStyle: 'dotted',
        borderColor: '#2529c5',
        width: '100%',
        height: 120,
        borderWidth: 1,
    },
    txtAddNew: {
        color: '#2529c5',
        marginLeft: 5,
        fontSize: 20,
    }
})

export {ListAddress}
