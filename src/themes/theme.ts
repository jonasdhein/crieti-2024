import { StyleSheet } from "react-native";

export const colors = {
    background: '#CFD8DC',
    backgroundInut: '#FFF3E0',
    blue: '#2196F3',
    orange: '#FF9800',
    white: '#FFFFFF'
};

export const theme = StyleSheet.create({
    container: {
        flex: 1,
        margin: 12
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: colors.blue,
        paddingHorizontal: 12,
        paddingVertical: 8,
        borderRadius: 12,
    },
    textButton: {
        fontSize: 20,
        color: colors.white,
        textAlign: 'center'
    },
    marginBottom: {
        marginBottom: 12
    },
    marginTop: {
        marginTop: 12
    },
    input: {
        backgroundColor: colors.backgroundInut,
        fontSize: 16,
        padding: 12,
        borderWidth: 0.5,
        borderColor: colors.orange,
        borderRadius: 8
    },
    label: {
        fontSize: 20,
        fontWeight: 500,
        marginVertical: 8
    },
    listItem: {
        fontSize: 55,
        marginBottom: 8
    }
});