import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import TextCustomize from '../text/TextCustomize';
import styles from './styles';

const RadioItem = ({ checked, title, setChecked }) => {
    const handlePress = () => {
        setChecked(title);
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.item}>
                <View style={styles.circle}>
                    {checked === title && <View style={styles.selected} />}
                </View>
                <TextCustomize style={styles.title}>{title}</TextCustomize>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default RadioItem;
