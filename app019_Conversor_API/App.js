import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, Pressable, useState } from 'react-native';
import api from './src/services/api';
import { Picker } from '@react-native-picker/picker';
import * as Axios from 'axios';


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            ask: 0,
            valor: 0,
            loading: true,
            convertedValue: 0,
            moedas: 0,
        };
    }

    converMoeda = () => {
        if (this.state.moedas == 1) {
            Axios.get(`https://economia.awesomeapi.com.br/json/last/USD-BRL`)
                .then(response => {
                    this.setState({ ask: response.data["USDBRL"]["ask"], })
                    console.log(response.data)
                })
        }else if (this.state.moedas == 2){
            Axios.get(`https://economia.awesomeapi.com.br/json/last/EUR-BRL`)
            .then(response => {
                this.setState({ ask: response.data["EURBRL"]["ask"], })
                console.log(response.data)
            })
        }else if(this.state.moedas == 3){
            Axios.get(`https://economia.awesomeapi.com.br/json/last/BTC-BRL`)
            .then(response => {
                this.setState({ ask: response.data["BTCBRL"]["ask"], })
                console.log(response.data)
            })
        }else{
            this.setState({moedas : 1})
        }
        
        let result = this.state.valor * parseFloat(this.state.ask);
        this.setState({ convertedValue: result.toFixed(2) });
    }

    render() {


        return (
            <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>

                <View style>
                    <Text>Escolha a moeda</Text>
                    <Picker
                        selectedValue={this.state.moedas}
                        onValueChange={(itemValue, itemIndex) => this.setState({ moedas: itemValue })}
                    >
                        <Picker.Item key={1} value={1} label="USD" />
                        <Picker.Item key={2} value={2} label="EUR" />
                        <Picker.Item key={3} value={3} label="BTC" />
                    </Picker>

                </View>

                <Text>Moeda escolhida: {this.state.moedas}</Text>

                <TextInput
                    style={styles.input}
                    placeholder="Digite o valor a ser convertido"
                    onChangeText={(valor) => this.setState({ valor })}
                />
                <Pressable style={styles.button} onPress={this.converMoeda}>
                    <Text>Converter </Text>
                </Pressable>
                <Text>{this.state.convertedValue}</Text>



            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f3f'
    },
    input:{
        padding:10,
        fontSize:20,
        width: 320,
        fontWeight:'bold',
        borderColor:'black',
        borderWidth: StyleSheet.create(1)
        }
});

export default App;

