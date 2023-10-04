import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import React from 'react';
import { Pressable, Text } from 'react-native';

import styles from './styles';

const ScreenItem = ({ navigation, navigateName, children }) => {
    const [fontsLoaded] = useFonts({ Roboto_400Regular });

    if (!fontsLoaded) return null;

    return (
        <Pressable
            style={styles.container}
            onPress={() => navigation.navigate(navigateName)}
        >
            <Text style={[styles.text, { fontFamily: 'Roboto_400Regular' }]}>
                {children}
            </Text>
        </Pressable>
    );
};

export default ScreenItem;
