import React from 'react';
import { Pressable } from 'react-native';
import styles from './styles';

const ActionBtn = ({
    children,
    borderColor = 'transparent',
    backgroundColor = 'transparent',
    style = [],
}) => {
    return (
        <Pressable
            style={[
                styles.container,
                {
                    borderColor: borderColor,
                    backgroundColor: backgroundColor,
                },
                ...style,
            ]}
        >
            {children}
        </Pressable>
    );
};

export default ActionBtn;
