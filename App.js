import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import FirstScreen from './screens/firstScreen';
import HomeScreen from './screens/homeScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='HomeScreen'>
                    <Stack.Screen
                        name='Home'
                        component={HomeScreen}
                        options={{ title: 'Home' }}
                    />
                    <Stack.Screen
                        name='First Screen'
                        options={{ title: 'First Screen' }}
                        component={FirstScreen}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 0 : StatusBar.currentHeight,
        flex: 1,
    },
});
