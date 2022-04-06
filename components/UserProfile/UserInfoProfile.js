import { Icon } from 'react-native-elements';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

const UserInfoProfile = (props) => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                <Icon
                    name={props.name}
                    type={props.type}
                    color='#00aced'
                />
                <Text style={styles.title}>{props.title}</Text>
            </View>
            <View style={{
                flex: 3,
                alignItems: 'flex-end'
            }}>
                <Text style={styles.data}>{props.data}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        paddingLeft: 5,
        paddingRight: 5,
    },
    title: {
        fontSize: 15,
        marginLeft: 5
    },
    data: {
        fontSize: 15,
    }
})

export default UserInfoProfile
