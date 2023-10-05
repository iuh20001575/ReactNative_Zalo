import React from 'react';
import { KeyboardAvoidingView, Platform, ScrollView, View } from 'react-native';
import Button from '../../components/button';
import Input from '../../components/input';
import RadioList from '../../components/radioList';
import TextCustomize from '../../components/text/TextCustomize';
import styles from './styles';

const SixthScreen = () => {
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={styles.container}
        >
            <ScrollView showsVerticalScrollIndicator={false}>
                <TextCustomize style={styles.title}>REGISTER</TextCustomize>
                <View style={styles.form}>
                    <Input placeholder='Name' />
                    <Input placeholder='Phone' />
                    <Input placeholder='Email' />
                    <Input
                        placeholder='Password'
                        icon={require('../../../assets/eye.png')}
                        secureTextEntry
                    />
                    <Input placeholder='Birthday' />
                    <RadioList style={[styles.radioList]} />
                    <Button
                        style={[styles.btn]}
                        rounded={2}
                        size='large'
                        type='secondary'
                    >
                        REGISTER
                    </Button>
                    <TextCustomize style={styles.description}>
                        When you agree to terms and conditions
                    </TextCustomize>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
};

export default SixthScreen;
