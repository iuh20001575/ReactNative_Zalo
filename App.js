import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Platform, SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import EighthScreen from './src/screens/eighthScreen';
import FifthScreen from './src/screens/fifthScreen';
import FirstScreen from './src/screens/firstScreen';
import FourthScreen from './src/screens/fourthScreen';
import HomeScreen from './src/screens/homeScreen';
import SecondScreen from './src/screens/secondScreen';
import SeventhScreen from './src/screens/seventhScreen';
import SixthScreen from './src/screens/sixthScreen';
import ThirdScreen from './src/screens/thirdScreen';

const Stack = createNativeStackNavigator();

const screens = [
    {
        name: 'Home',
        title: 'Home',
        component: HomeScreen,
    },
    {
        name: 'First Screen',
        title: 'First Screen',
        component: FirstScreen,
    },
    {
        name: '1_a',
        title: 'Second Screen',
        component: SecondScreen,
    },
    {
        name: '1_b',
        title: 'Thirty Screen',
        component: ThirdScreen,
    },
    {
        name: '1_c',
        title: 'Fourth Screen',
        component: FourthScreen,
    },
    {
        name: '1_d',
        title: 'Fifth Screen',
        component: FifthScreen,
    },
    {
        name: '1_e',
        title: 'Sixth Screen',
        component: SixthScreen,
    },
    {
        name: '2_a',
        title: 'Seventh Screen',
        component: SeventhScreen,
    },
    {
        name: 'XMEye',
        title: 'XMEye Screen',
        component: EighthScreen,
    },
];

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='Home'>
                    {screens.map((screen) => (
                        <Stack.Screen
                            key={screen.name}
                            name={screen.name}
                            component={screen.component}
                            options={{ title: screen.title }}
                        />
                    ))}
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
