import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TextInput, View } from 'react-native';
import Button from '../../components/button';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const FourthScreen = () => {
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
        <TextCustomize style={styles.title}>CODE</TextCustomize>
        <TextCustomize style={styles.description}>VERIFICATION</TextCustomize>
        <TextCustomize style={styles.text}>Enter ontime password sent on ++849092605798</TextCustomize>
        <View style={styles.otps}>
            {new Array(6).fill(null).map((item, index) => <TextInput style={styles.input} key={index} maxLength={1} keyboardType="numeric" /> )}
         </View>
         <View style={{paddingHorizontal: 10, width: '100%', marginTop: 34}}>
            <Button full>VERIFY CODE</Button>
         </View>
        </LinearGradient>
    );
};

export default FourthScreen;
