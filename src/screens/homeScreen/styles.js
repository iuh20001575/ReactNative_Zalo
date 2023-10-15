import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    scrollView: {
        gap: 30,
        padding: 30,
    },
    safeAreaView: {
        width: '100%',
        justifyContent: 'center',
        flex: 1,
    },
    screenList: {
        gap: 5,
        flexWrap: 'wrap',
        padding: 20,
        width: '100%',
    },
    title: {
        fontSize: 40,
    },
});

export default styles;
