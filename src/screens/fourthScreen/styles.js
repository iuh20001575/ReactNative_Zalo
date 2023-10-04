import { StyleSheet } from "react-native";

const styles  = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title: {
        fontWeight: 700,
        fontSize: 60,
        lineHeight: 70
    },
    description: {
        marginTop: 62,
        fontWeight: 700,
        fontSize: 20,
        lineHeight: 23
    },
    text: {
        marginTop: 52,
        fontWeight: 700,
        fontSize: 15,
        lineHeight: 18,
        paddingHorizontal: 40,
        textAlign: 'center'
    },
    otps: {
        flexDirection: 'row',
        marginTop: 27
    },
    input: {
        width: 50,
        height: 50,
        borderWidth: 1,
        borderColor: '#000',
        borderStyle: 'solid'
    }
})

export default styles