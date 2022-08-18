import React, { cloneElement, Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      firstValue: '',
      secondValue: '',
      result:0
    };
  }
  
  calcular  = () => {
    const { firstValue, secondValue } = this.state;
  
    this.setState({
      result: Number(firstValue) * Number(secondValue)
    });
  }
  
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.titulo}>Multiplicador de Números</Text>
        <TextInput
        style={styles.input}
        placeholder="Digite o 1º numero"
          value={this.state.firstValue}
          onChangeText={(firstValue) => this.setState({firstValue})}
        />
  
        <TextInput style={styles.input}
        placeholder="Digite o 2º numero"
          value={this.state.secondValue}
          onChangeText={(secondValue) => this.setState({secondValue})}
        />

        <Pressable style={styles.botao} onPress={ this.calcular}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </Pressable>
        <Text style={styles.texto}>{this.state.result}</Text>
      </View>
    );
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  texto:{
    textAlign: 'center',
    fontSize: 50,
  },
  titulo:{
    color:'#FFA500',
    marginTop:70,
    textAlign: 'center',
    fontSize:30
  },
  botao:{
    width: 200,
    height: 50,
    marginTop : 10,
    marginLeft:110,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 40,
    color: '#FFF'
  },
  corBotaoMais:{
    backgroundColor: '#008000'
  },
  corBotaoMenos:{
    backgroundColor: '#FF0000'
  }
})
 
export default App;