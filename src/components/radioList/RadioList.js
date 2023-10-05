import React, { useState } from 'react';
import { View } from 'react-native';
import RadioItem from './RadioItem';
import styles from './styles';

const RadioList = ({ style = [], items }) => {
    const [checked, setChecked] = useState('');

    return (
        <View style={[styles.container, ...style]}>
            <RadioItem checked={checked} setChecked={setChecked} title='Male' />
            <RadioItem
                checked={checked}
                setChecked={setChecked}
                title='Female'
            />
        </View>
    );
};

export default RadioList;
