import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    logo: {
        marginTop: 20,
        width: 112,
        height: 107,
    },
    form: {
        marginTop: 20,
        width: '100%',
        gap: 36,
    },
    btn: {
        backgroundColor: 'rgba(56, 111, 252, 1)',
        borderRadius: 10,
        height: 48,
        justifyContent: 'center',
        alignItems: 'center',
    },
    btnText: {
        color: '#fff',
        fontSize: 18,
        textTransform: 'uppercase',
    },
    accounts: {
        marginTop: 24,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    text: {
        fontSize: 18,
        lineHeight: 21,
    },
    loginMethods: {
        marginTop: 34,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        gap: 4,
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: '#0E18F5',
    },
    loginText: {
        fontSize: 18,
    },
    actions: {
        width: '100%',
        marginTop: 29,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    addBtn: {
        backgroundColor: 'rgba(58, 180, 255, 1)',
    },
    fbBtn: {
        backgroundColor: 'rgba(58, 87, 156, 1)',
    },
    wifiBtn: {
        backgroundColor: 'rgba(244, 170, 71, 1)',
    },
    fbIconBtn: {
        width: 32,
        height: 45,
    },
    wifiIconBtn: {
        width: 56,
        height: 47,
    },
    addIconBtn: {
        width: 74,
        height: 74,
    },
});

export default styles;
