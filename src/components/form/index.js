import React, { useState } from "react"
import { View, Text, TextInput, TouchableOpacity, Vibration, } from "react-native"
import ResultImc from "./resultImc";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [name, setName] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o peso e a altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [errorMessage, setErrorMessage] = useState(null)


    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        return setImc((weight / (heightFormat * heightFormat)).toFixed(2))
    }

    function verificationImc() {
        if (imc == null) {
            setErrorMessage("Campo obrigatório*")
            Vibration.vibrate();
        }
    }

    function validationImc() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setName(null)
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
                <Text style={styles.formLabel}>Seu Nome</Text>
                <Text style={styles.errorMessage}>{errorMessage}</Text>
                <TextInput
                    style={styles.formInput}
                    value={name}
                    onChangeText={setName}
                    placeholder="Ex. Fulano da Silva"
                    keyboardType="default"
                />
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
                        nameImc={setName}
                    />
                    <TouchableOpacity
                        style={styles.formButtonCalculator}
                        onPress={() => validationImc()}
                    >
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
        </View>
    );
}