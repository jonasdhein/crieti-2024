import { StyleSheet } from "react-native";

export const colors = {
    background: '#CFD8DC',
    blue: '#2196F3',
    orange: '#FF9800',
    white: '#FFFFFF'
};

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.blue,
        padding: 12,
        borderRadius: 12,
        width: '40%'
    },
    textButton: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center'
    },
    marginBottom: {
        marginBottom: 12
    }
});