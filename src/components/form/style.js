import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    formContext: {
        flex: 1,
        marginTop: 30,
        backgroundColor: "#ffffff",
        //alignItems: "center",
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
    },
    form: {
        width: "100%",
        height: "auto",
        marginTop: 30,
        padding: 10,
    },
    formLabel: {
        color: "#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    formInput: {
        width: "90%",
        borderRadius: 50,
        backgroundColor: "#f6f6f6",
        height: 40,
        margin: 12,
        paddingLeft: 10,
    },
    formButtonCalculator: {
        borderRadius: 50,
        alignItems: "center",
        justifyContent: "center",
        width: "90%",
        backgroundColor: "#FF0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        marginTop: 30,
    },
    textButtonCalculator: {
        fontSize: 20,
        color: "#ffffff",
    },
    errorMessage: {
        fontSize: 12,
        color: "red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exibitionResultImc: {
        width: "100%",
        height: "50%",
    },
    viewFlatList: {
        alignItems: "center"
    },
    listImc: {
        marginTop: 20,
    },
    resultImcItem: {
        fontSize: 24,
        color: "red",
        height: 50,
        width: "100%",
        paddingRight: 20,

    },
    textResultItemList: {
        fontSize: 14,
        color: "grey",
    }
});

export default styles