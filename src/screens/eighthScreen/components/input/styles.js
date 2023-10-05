import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        borderBottomWidth: 1,
        borderColor: 'rgba(196, 196, 196, 1)',
        borderStyle: 'solid',
        paddingHorizontal: 9,
        paddingVertical: 11,
        flexDirection: 'row',
        alignItems: 'flex-end',
    },
    icon: { width: 32, height: 32, marginRight: 15 },
    input: {
        fontSize: 18,
        flex: 1,
    },
    rightIcon: {
        marginRight: 24,
    },
});

export default styles;
