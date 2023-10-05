import React from 'react';
import { SafeAreaView, View } from 'react-native';
import ScreenItem from '../../components/screenItem';
import TextCustomize from '../../components/text/TextCustomize';

import styles from './styles';

const screens = [
    {
        name: 'First Screen',
        title: 'First Screen',
    },
    {
        name: '1_a',
        title: '1_a Screen',
    },
    {
        name: '1_b',
        title: '1_b Screen',
    },
    {
        name: '1_c',
        title: '1_c Screen',
    },
    {
        name: '1_d',
        title: '1_d Screen',
    },
    {
        name: '1_e',
        title: '1_e Screen',
    },
];

const HomeScreen = ({ navigation }) => {
    return (
        <SafeAreaView style={[styles.container]}>
            <TextCustomize style={[styles.title]}>Lab 03</TextCustomize>
            <View style={[styles.screenList]}>
                {screens.map((screen, index) => (
                    <ScreenItem
                        key={index}
                        navigation={navigation}
                        navigateName={screen.name}
                    >
                        {screen.title}
                    </ScreenItem>
                ))}
            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;
