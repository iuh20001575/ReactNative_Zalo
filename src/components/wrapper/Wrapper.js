import { useHeaderHeight } from '@react-navigation/elements';
import React from 'react';
import {
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    ScrollView,
    StatusBar,
} from 'react-native';
import styles from './styles';

const Wrapper = ({
    styleSafeAreaView = {},
    styleKeyboardAvoidingView = {},
    styleScrollView = {},
    children,
    ...props
}) => {
    const headerHeight = useHeaderHeight();
    const statusBarHeight = StatusBar.currentHeight || 0;

    return (
        <SafeAreaView style={[styles.container, styleSafeAreaView]}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                keyboardVerticalOffset={headerHeight + statusBarHeight}
            >
                <ScrollView style={styleScrollView} {...props}>
                    {children}
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default Wrapper;
