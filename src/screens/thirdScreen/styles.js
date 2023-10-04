import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: 105,
        height: 117,
    },
    title: {
        marginTop: 37,
        fontWeight: 700,
        fontSize: 25,
        lineHeight: 30,
        textAlign: 'center',
    },
    description: {
        marginTop: 32,
        paddingHorizontal: 30,
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 18,
        textAlign: 'center',
    },
    inputGroup: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 43,
        backgroundColor: 'rgba(196, 196, 196, 1)',
    },
    input: {
        flex: 1,
        fontSize: 15,
        lineHeight: 18,
        paddingTop: 13,
        paddingBottom: 14,
        paddingEnd: 13,
        outlineWidth: 0,
    },
});

export default styles;
