import React from 'react';
import {
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    View,
} from 'react-native';
import Button from '../../components/button/Button';
import Input from '../../components/input/Input';
import TextCustomize from '../../components/text/TextCustomize';
import ActionBtn from './components/actionBtn';
import { styles } from './styles';

const FifthScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextCustomize style={styles.title}>LOGIN</TextCustomize>
                <View style={styles.form}>
                    <Input placeholder='Email' />
                    <Input
                        placeholder='Password'
                        icon={require('../../../assets/eye.png')}
                        secureTextEntry={true}
                    />
                    <Button
                        type='secondary'
                        size='large'
                        style={[styles.loginBtn]}
                    >
                        Login
                    </Button>
                </View>
                <TextCustomize style={styles.term}>
                    When you agree to terms and conditions
                </TextCustomize>
                <TextCustomize style={styles.forgotPassword}>
                    For got your password?
                </TextCustomize>
                <TextCustomize style={styles.login}>
                    Or login with
                </TextCustomize>
                <View style={styles.loginActions}>
                    <ActionBtn
                        borderColor='rgba(37, 71, 155, 1)'
                        backgroundColor='rgba(37, 71, 155, 1)'
                    >
                        <Image
                            style={styles.facebookAction}
                            source={require('../../../assets/facebookIcon.png')}
                        />
                    </ActionBtn>
                    <ActionBtn
                        borderColor='rgba(15, 142, 224, 1)'
                        backgroundColor='rgba(15, 142, 224, 1)'
                    >
                        <Image
                            style={styles.zaloAction}
                            source={require('../../../assets/zaloIcon.png')}
                        />
                    </ActionBtn>
                    <ActionBtn borderColor='rgba(6, 128, 241, 1)'>
                        <Image
                            style={styles.googleAction}
                            source={require('../../../assets/googleIcon.png')}
                        />
                    </ActionBtn>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default FifthScreen;
