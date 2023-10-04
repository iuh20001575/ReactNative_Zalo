import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundImage:
            'linear-gradient(180deg, rgba(0, 204, 249, 0.359978) 0%, rgba(0, 204, 249, 1) 100%)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    circle: {
        width: 140,
        height: 140,
        borderWidth: 15,
        borderColor: '#000',
        borderRadius: 9999,
        borderStyle: 'solid',
    },
    title: {
        marginTop: 52,
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 29,
        textAlign: 'center',
        textTransform: 'uppercase',
    },
    description: {
        marginTop: 62,
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
    },
    actions: {
        marginTop: 45,
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
});

export default styles;
