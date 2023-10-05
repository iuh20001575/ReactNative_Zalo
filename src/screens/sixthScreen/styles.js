import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        paddingHorizontal: 15,
        paddingVertical: 40,
    },
    title: {
        fontWeight: 700,
        fontSize: 25,
        textAlign: 'center',
    },
    form: {
        marginTop: 28,
        gap: 16,
    },
    radioList: {
        paddingHorizontal: 20,
    },
    btn: {
        marginTop: 9,
    },
    description: {
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'center',
    },
});

export default styles;
