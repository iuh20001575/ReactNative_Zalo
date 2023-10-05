import React from 'react';
import { Image, Platform, TextInput, View } from 'react-native';
import styles from './styles';

const Input = ({ placeholder = '', icon, ...props }) => {
    return (
        <View style={styles.container}>
            <Image style={[styles.icon]} source={icon} />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor='rgba(196, 196, 196, 1)'
                style={[
                    styles.input,
                    Platform.OS === 'web'
                        ? {
                              outlineStyle: 'none',
                          }
                        : {},
                ]}
                {...props}
            />
        </View>
    );
};

export default Input;
