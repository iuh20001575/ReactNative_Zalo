import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 30,
    },
    item: {
        flexDirection: 'row',
        gap: 14,
    },
    circle: {
        width: 23,
        height: 23,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#000',
        borderRadius: 999,
        justifyContent: 'center',
        alignItems: 'center',
    },
    selected: {
        width: 13,
        height: 13,
        borderRadius: 999,
        backgroundColor: '#000',
    },
    title: {
        fontSize: 18,
        lineHeight: 21,
    },
});

export default styles;
