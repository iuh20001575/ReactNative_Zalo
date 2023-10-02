import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import FirstScreen from './screens/firstScreen';
import FourthScreen from './screens/fourthScreen';
import HomeScreen from './screens/homeScreen';
import SecondScreen from './screens/secondScreen';
import ThirdScreen from './screens/thirdScreen/ThirdScreen';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
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
                    <Stack.Screen
                        name='1_a'
                        options={{ title: 'Second Screen' }}
                        component={SecondScreen}
                    />
                    <Stack.Screen
                        name='1_b'
                        options={{ title: 'Thirty Screen' }}
                        component={ThirdScreen}
                    />
                    <Stack.Screen
                        name='1_c'
                        options={{ title: 'Fourth Screen' }}
                        component={FourthScreen}
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
