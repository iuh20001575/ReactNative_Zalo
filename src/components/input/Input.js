import React, { useMemo } from 'react';
import { Image, TextInput, View } from 'react-native';
import { useRobotoFont } from '../../hooks';
import styles from './styles';
import { Platform } from 'react-native';

const Input = ({ placeholder = '', icon, ...props }) => {
    const font = useRobotoFont();
    const outlineStyle = useMemo(() => {
        if (Platform.OS === 'web')
            return {
                outlineStyle: 'none',
            };

        return {};
    }, []);

    return (
        <View style={styles.container}>
            <TextInput
                style={[styles.input, font, outlineStyle]}
                placeholder={placeholder}
                placeholderTextColor='#000'
                cursorColor='#000'
                {...props}
            />
            {icon && <Image style={styles.icon} source={icon} />}
        </View>
    );
};

export default Input;
