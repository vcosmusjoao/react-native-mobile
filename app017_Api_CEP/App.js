import React, { Component } from 'react';
import { View,Image, StyleSheet, FlatList, ActivityIndicator, TextInput, Pressable, Text } from 'react-native';
import { Input } from 'react-native-elements';
import * as Axios from 'axios';

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cep: '',
            item: [],
        };
    }
    buscarCep = () => {
        Axios.get(`https://viacep.com.br/ws/${this.state.cep}/json/`)
            .then(response => {
                this.setState({ item: response.data })
                console.log(response.data)
            })
            .catch(error => {
                return console.log(error);
            })
    }

    render() {
        return (
            <View style={styles.container}>
              
                <Text>Digite Seu Usuario</Text>
                <View style={styles.horizontal}>
                    <Input
                        placeholder=' CEP' onChangeText={(cep) => this.setState({ cep })}
                        leftIcon={{ type: 'font-awesome', name: 'map-marker' }}
                        value={this.state.cep} id="cep" name="cep" />
                    <View>
                        <Pressable style={styles.button} onPress={this.buscarCep}>
                            <Text>OK</Text>
                        </Pressable>
                    </View>
                </View>

                <Text style={styles.titulo}>Cep: {this.state.item.cep}</Text>
                <Text style={styles.descricao}>Logradouro: {this.state.item.logradouro}</Text>
                <Text style={styles.descricao}>Bairro: {this.state.item.bairro}</Text>
                <Text style={styles.descricao}>Cidade: {this.state.item.localidade}</Text>
                <Text style={styles.descricao}>Estado: {this.state.item.uf}</Text>

            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    horizontal: {
        flexDirection: 'row',
        width: 320
    },
    button: {
        backgroundColor: '#f2f',
        padding: 10
    },



});

export default App;

