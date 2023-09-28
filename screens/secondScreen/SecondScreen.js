import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { View } from 'react-native';
import Button from '../../components/button';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const SecondScreen = () => {
    return (
        <LinearGradient
            colors={[
                'rgba(199, 244, 246, 1)',
                'rgba(209, 244, 246, 1)',
                'rgba(229, 244, 245, 1)',
                'rgba(0, 204, 249, 1)',
            ]}
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
                <Button size='small'>LOGIN</Button>
                <Button size='small'>Sign up</Button>
            </View>
            <TextCustomize style={styles.help}>HOW WE WORK?</TextCustomize>
        </LinearGradient>
    );
};

export default SecondScreen;
