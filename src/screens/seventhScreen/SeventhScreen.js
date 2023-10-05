import { View, Text, Platform, ScrollView } from 'react-native';
import React from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import styles from './styles';
import TextCustomize from '../../components/text';
import Input from './components/input';
import Button from '../../components/button';
import { KeyboardAvoidingView } from 'react-native';

const SeventhScreen = () => {
    return (
        <LinearGradient
            colors={['#FBCB00', '#BF9A00']}
            style={styles.container}
        >
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <ScrollView>
                    <TextCustomize style={styles.title}>Login</TextCustomize>
                    <View style={styles.form}>
                        <Input
                            placeholder='Name'
                            leftIcon={require('../../../assets/avatar_user.png')}
                        />
                        <Input
                            placeholder='Password'
                            leftIcon={require('../../../assets/lock_32x32.png')}
                            rightIcon={require('../../../assets/eye_32x32.png')}
                            secureTextEntry
                        />
                    </View>
                    <Button type='dark' size='large' style={[styles.btn]}>
                        Login
                    </Button>
                    <TextCustomize style={styles.signUp}>
                        CREATE ACCOUNT
                    </TextCustomize>
                </ScrollView>
            </KeyboardAvoidingView>
        </LinearGradient>
    );
};

export default SeventhScreen;
