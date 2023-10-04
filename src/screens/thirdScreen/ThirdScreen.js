import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    TextInput,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import Button from '../../components/button';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const ThirdScreen = () => {
    return (
        <KeyboardAvoidingView
            style={{ flex: 1 }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <LinearGradient
                    colors={[
                        'rgba(199, 244, 246, 1)',
                        'rgba(209, 244, 246, 1)',
                        'rgba(229, 244, 245, 1)',
                        'rgba(0, 204, 249, 1)',
                    ]}
                    style={styles.container}
                >
                    <Image
                        resizeMode='cover'
                        style={styles.image}
                        source={require('../../../assets/lock.png')}
                    />
                    <TextCustomize style={styles.title}>
                        FORGET{'\n'}PASSWORD
                    </TextCustomize>
                    <TextCustomize style={styles.description}>
                        Provide your account’s email for which you want to reset
                        your password
                    </TextCustomize>
                    <View
                        style={{
                            paddingHorizontal: 30,
                            width: '100%',
                            marginTop: 27,
                        }}
                    >
                        <View style={styles.inputGroup}>
                            <Image
                                style={{ width: 48, height: 45 }}
                                source={require('../../../assets/email.png')}
                            />
                            <TextInput
                                cursorColor='#000'
                                placeholder='Email'
                                placeholderTextColor='#000'
                                style={styles.input}
                            />
                        </View>
                        <Button full>NEXT</Button>
                    </View>
                </LinearGradient>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
};

export default ThirdScreen;
