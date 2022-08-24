import React, { Component } from 'react';
import {Image, View, Text, StyleSheet, Button, Pressable,  TextInput, TouchableHighlight} from 'react-native';
 
class App extends Component{

  constructor(props) {
    super(props);
  
    this.state = {
      result:''
    };
    this.calcular.bind(this);
  }

  calcular  = () => {
    let aleatorio = Math.random();
    aleatorio = Math.floor(aleatorio *10);
    this.setState({
      result:aleatorio
    });
  }

  render(){
 
 
    return(
      <View style={styles.container}>
        <Text style={{color: '#FF0000', fontSize: 25, margin: 15}}>
         Jogo n° Aleatório
        </Text>
 
        <Imagem />
        <Text style={styles.texto}>Pense em um nº de 0 a 10 </Text>
        
        
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
    
    let img = 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2019/06/cropped-Riddler-5.png';
 
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