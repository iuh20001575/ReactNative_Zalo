import { Roboto_400Regular, useFonts } from '@expo-google-fonts/roboto';
import React, { useMemo } from 'react';
import { Text } from 'react-native';

const TextCustomize = (props) => {
    const [fontsLoaded] = useFonts({ Roboto_400Regular });
    const styles = useMemo(() => {
        const style = props.style;

        if (!style) return [];

        if (Array.isArray(style)) return style;

        return [style];
    });

    if (!fontsLoaded) return null;

    return (
        <Text
            {...props}
            style={[
                ...styles,
                {
                    fontFamily: 'Roboto_400Regular',
                },
            ]}
        />
    );
};

export default TextCustomize;
