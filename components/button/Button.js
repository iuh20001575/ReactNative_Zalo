import PropTypes from 'prop-types';
import React from 'react';
import { Pressable } from 'react-native';
import TextCustomize from '../text/TextCustomize';

import styles from './styles';

const Button = ({
    children,
    type = 'primary',
    size = 'medium',
    rounded = 0,
}) => {
    return (
        <Pressable
            style={[
                styles.container,
                styles[type],
                {
                    borderRadius: rounded,
                },
            ]}
        >
            <TextCustomize style={[styles.text, styles[size]]}>
                {children}
            </TextCustomize>
        </Pressable>
    );
};

Button.propTypes = {
    children: PropTypes.string,
    type: 'primary' | 'secondary',
    size: 'small' | 'large' | 'medium',
};

export default Button;
