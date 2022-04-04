import {
    SafeAreaView,
    View,
    Text,
    Image,
    StyleSheet,
    Button,
    Alert
} from "react-native";

import UserInfoProfile from '../../components/UserProfile/UserInfoProfile';

const UserProfile = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.top}>
                <View>
                    <Image
                        style={styles.avatar}
                        source={require('../../assets/cr7.jpeg')}
                    />
                </View>
                <View style={{ marginLeft: 10 }}>
                    <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                        <Text style={styles.fullname}>Dinh Quang Tung</Text>
                    </View>
                    <Text style={styles.username}>tung123</Text>
                </View>
            </View>

            <View style={styles.middle}>
                <UserInfoProfile name="user" type="entypo" title="Username" data="aloalo" />
                <UserInfoProfile name="contacts" type="material-community" title="Fullname" data="aloalo" />
                <UserInfoProfile name="phone" type="font-awesome" title="Phone" data="aloalo" />
                <UserInfoProfile name="email" title="Email" data="aloalo" />
                <UserInfoProfile name="address" type="entypo" title="Address" data="aloalo" />
                <UserInfoProfile name="birthday-cake" type="font-awesome" title="Birthday" data="aloalo" />
                <UserInfoProfile name="transgender" type="font-awesome" title="Gender" data="aloalo" />
                <UserInfoProfile name="email" title="fullname" data="aloalo" />
            </View>

            <View style={styles.buttonEdit}>
                <Button
                    title="Edit"
                    color='#ffffff'
                    onPress={() => Alert.alert('Simple Button pressed')}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        paddingLeft: 10,
        paddingRight: 10,
    },
    top: {
        flexDirection: 'row',
        width: '100%',
        height: '30%',
        backgroundColor: 'orange',
        borderTopRightRadius: 10,
        borderTopLeftRadius: 10,
        paddingLeft: 10,
        paddingRight: 10,
        alignItems: 'center',
    },
    avatar: {
        width: 130,
        height: 130,
        borderRadius: 10000,
    },
    fullname: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
        width: '100%',
    },
    username: {
        color: 'white',
    },
    buttonEdit: {
        alignContent: 'center',
        justifyContent: 'center',
        width: '90%',
        height: 50,
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderRadius: 10,
        backgroundColor: '#6b3faf',
    },
});

export default UserProfile;
