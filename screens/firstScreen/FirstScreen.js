import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/button';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const FirstScreen = () => {
    return (
        <LinearGradient
            colors={['rgba(0, 204, 249, 0.359978)', 'rgba(0, 204, 249, 1)']}
            style={styles.container}
        >
            <View style={styles.circle} />
            <TextCustomize style={styles.title}>
                Grow{'\n'}your business
            </TextCustomize>
            <TextCustomize style={styles.description}>
                We will help you to grow your business using{'\n'}online server
            </TextCustomize>
            <View style={styles.actions}>
                <Button rounded={10}>LOGIN</Button>
                <Button rounded={10}>Sign up</Button>
            </View>
        </LinearGradient>
    );
};

export default FirstScreen;
