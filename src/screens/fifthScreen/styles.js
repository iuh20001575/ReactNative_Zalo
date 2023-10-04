import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(49, 170, 82, 0.19)',
        padding: 15,
    },
    title: {
        marginTop: 40,
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29,
        textAlign: 'center',
    },
    form: {
        marginTop: 42,
        gap: 30,
    },
    loginBtn: {
        marginTop: 40,
    },
    term: {
        marginTop: 18,
        fontSize: 14,
        textAlign: 'center',
    },
    forgotPassword: {
        marginTop: 13,
        color: '#5D25FA',
        fontSize: 14,
        textAlign: 'center',
    },
    login: {
        marginTop: 14,
        fontSize: 14,
        textAlign: 'center',
    },
    loginActions: {
        marginTop: 40,
        flexDirection: 'row',
    },
    facebookAction: {
        width: 30,
        height: 30,
    },
    zaloAction: {
        width: 20,
        height: 25,
    },
    googleAction: {
        width: 35,
        height: 35,
    },
});
