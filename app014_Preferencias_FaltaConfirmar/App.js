import React, { Component } from 'react'
import { View, Switch, Text, StyleSheet, TextInput, TouchableOpacity, Keyboard } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { styles } from './styles'

export default class App extends Component {

  constructor(props) {
    switchDay = false;
    switchSize = false;
    super(props);
    this.state = {
      corFundo: '#fff',
      tamanhoLetra: 12
    };


    this.changeBackground = this.changeBackground.bind(this);
    this.changeFontSize = this.changeFontSize.bind(this);

  }

  // Quando o componente é montado em tela (quando abrimos o App)
  async componentDidMount() {
    await AsyncStorage.getItem('corFundo').then((value) => {
      this.setState({ corFundo: value });
    })
  }

  // Toda vez que um state é atualizado
  async componentDidUpdate(_, prevState) {
    const corFundo = this.state.corFundo

    if (prevState !== corFundo) {
      await AsyncStorage.setItem('corFundo', corFundo);
    }
  }

  async setCorFundo(state) {
    try {
      this.setState({ corFundo: state })
      const fundo = await AsyncStorage.getItem('corFundo').then(value => value && JSON.parse(value))
      if(!fundo || fundo != state) await AsyncStorage.setItem('corFundo', JSON.stringify(state))
    }catch(error) {
      console.error("Error setCorFundo: ", error)
    }
  }

  async setTamanhoLetra(state) { 
    try {
      this.setState({ tamanhoLetra: state })
      const tamanho = await AsyncStorage.getItem('tamanhoLetra').then(value => value && JSON.parse(value))
      if(!tamanho || tamanho != state) await AsyncStorage.setItem('tamanhoLetra', JSON.stringify(state))
    }catch(error) {
      console.error("Error setTamanhoLetra ", error)
    }
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.title}>
        <Text >Pequeno</Text>
        <Switch
          value={this.state.corFundo}
          onValueChange = {state => this.setCorFundo(state)}
        />
         <Switch
          value={this.state.tamanhoLetra}
          onValueChange = {state => this.setTamanhoLetra(state)}
        />
        </View>

        <View style={[this.state.corFundo ? styles.bgDay : styles.bgNight]}>
          <Text style={[this.state.tamanhoLetra ? styles.textSmall : styles.textBig, this.state.corFundo ? styles.textBlack : styles.textWhite]}>
            "A vingança nunca é plena, mata a alma e a envenena." (Seu Madruga)
          </Text>
        </View>

      </View>
    );
  }
}
