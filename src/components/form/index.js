import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, FlatList } from "react-native"
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)
    const [imcList, setImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2)
        setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }])
        setImc(totalImc)
    }

    function verificationImc() {
        if (imc == null) {
            setErrorMessage("Campo obrigatório*")
            Vibration.vibrate();
        }
    }

    function validationImc() {
        console.log()
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular novamente")
            setErrorMessage(null)
        } else {
            setImc(null)
            setTextButton("Calcular")
            setMessageImc("Preencha o peso e a altura")
            verificationImc()
        }
    }

    return (
        <View style={styles.formContext}>
            {imc == null ? <View style={styles.form}>
                <Text style={styles.formLabel}>Altura</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setHeight}
                    value={height}
                    placeholder="Ex. 1.75"
                    keyboardType="numeric"
                />
                <Text style={styles.formLabel}>Peso</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    onChangeText={setWeight}
                    value={weight}
                    placeholder="Ex. 75.10"
                    keyboardType="numeric"
                />
                <TouchableOpacity
                    style={styles.formButtonCalculator}
                    onPress={() => validationImc()}
                >
                    <Text style={styles.textButtonCalculator}>{textButton}</Text>
                </TouchableOpacity>
            </View>
                :
                <View style={styles.exibitionResultImc}>
                    <ResultImc
                        messageResultImc={messageImc}
                        resultImc={imc}
                    />
                    <TouchableOpacity
                        style={styles.formButtonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <View style={styles.viewFlatList}>
                <FlatList
                    style={styles.listImc}
                    data={imcList.reverse()}
                    renderItem={({ item }) => {
                        return (
                            <Text style={styles.resultImcItem}>
                                <Text style={styles.textResultItemList}>Resultado IMC = </Text>
                                {item.imc}
                            </Text>
                        )
                    }}
                    keyExtractor={(item) => { item.id }}
                >
                </FlatList>
            </View>
        </View>
    );
}