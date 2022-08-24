import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      gasolina: '',
      alcool: '',
      result:''
    };
    this.calcular.bind(this);
  }

  calcular  = () => {
    const { gasolina, alcool } = this.state;
    let condicao = gasolina / alcool > 0.7;
    let resposta;
    if(condicao){
      resposta =  'A gasolina é mais vantajosa'
    }else{
      resposta = 'O Alcool é mais vantajoso'
    }
    this.setState({
      result: resposta
    });
  }

  render(){
 
 
    return(
      <View style={styles.container}>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
         Alcool ou Gasolina
        </Text>
 
        <Imagem />
 
        <TextInput
        style={styles.input}
        placeholder="Preço do Alcool"
          value={this.state.alcool}
          onChangeText={(alcool) => this.setState({alcool})}
        />
  
        <TextInput style={styles.input}
        placeholder="Preço da Gasolina"
          value={this.state.gasolina}
          onChangeText={(gasolina) => this.setState({gasolina})}
        />

        <Pressable style={styles.botao} onPress={ this.calcular}>
        <Text style={styles.textoBotao}>Verificar</Text>
        </Pressable>
        <Text style={styles.texto}>{this.state.result}</Text>
 
      </View>
    )
  }
}
 
class Imagem extends Component {
  render(){
    
    let img = 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg';
 
    return(
        <Image
        source={{ uri: img }}
        style={{ width: 300, height: 300}}
      />
    )
  }
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 80,
    alignItems: 'center',
  },
  input:{
    height: 45,
    borderWidth: 1,
    borderColor: '#222',
    margin: 10,
    fontSize: 20,
    padding: 10,
  },
  botao:{
    width: 200,
    height: 50,
    marginTop : 10,
    backgroundColor: '#999'
  },
  textoBotao:{
    textAlign: 'center',
    textAlignVertical: 'center',
    height: 45,
    fontSize: 40,
    color: '#FFF'
  },
})
 
export default App;
