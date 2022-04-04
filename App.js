import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import UserProfile from './pages/User/Profile';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor='black'/>
            <UserProfile name="Tungdq" username="tung123" />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
