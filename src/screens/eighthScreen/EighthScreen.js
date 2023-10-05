import React from 'react';
import { Image, Pressable, View } from 'react-native';
import TextCustomize from '../../components/text';
import ActionButton from './components/actionButton';
import Input from './components/input';
import styles from './styles';

const EighthScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.logo}
                source={require('../../../assets/XMEye.png')}
            />
            <View style={styles.form}>
                <Input
                    placeholder='Please input user name'
                    icon={require('../../../assets/username.png')}
                />
                <Input
                    placeholder='Please input password'
                    icon={require('../../../assets/password.png')}
                    secureTextEntry
                />
                <Pressable style={styles.btn}>
                    <TextCustomize style={styles.btnText}>Login</TextCustomize>
                </Pressable>
            </View>
            <View style={styles.accounts}>
                <TextCustomize style={styles.text}>Register</TextCustomize>
                <TextCustomize style={styles.text}>
                    Forgot Password
                </TextCustomize>
            </View>
            <View style={styles.loginMethods}>
                <View style={styles.line} />
                <TextCustomize style={styles.loginText}>
                    Other Login Methods
                </TextCustomize>
                <View style={styles.line} />
            </View>
            <View style={styles.actions}>
                <ActionButton style={styles.addBtn}>
                    <Image
                        style={styles.addIconBtn}
                        source={require('../../../assets/addIcon.png')}
                    />
                </ActionButton>
                <ActionButton style={styles.wifiBtn}>
                    <Image
                        style={styles.wifiIconBtn}
                        source={require('../../../assets/Wifi.png')}
                    />
                </ActionButton>
                <ActionButton style={styles.fbBtn}>
                    <Image
                        style={styles.fbIconBtn}
                        source={require('../../../assets/brandico_facebook.png')}
                    />
                </ActionButton>
            </View>
        </View>
    );
};

export default EighthScreen;
