import React, { cloneElement, Component } from 'react';
import { View, Text, StyleSheet, Button, Pressable} from 'react-native';
 
class App extends Component{

  state = {
    counter: 0,
    };

  adicao(){
    this.setState({counter: this.state.counter + 1});

  }
  subtracao(){
    this.setState({counter: this.state.counter -1});      
    }

  
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.titulo}>Contador de Pessoas</Text>
        <Text style={styles.texto}> {this.state.counter} </Text>
      <Pressable style={[styles.botao,styles.corBotaoMais]} onPress={() => this.adicao()}><Text style={styles.textoBotao}>+</Text></Pressable>
      <Pressable style={[styles.botao,styles.corBotaoMenos]} onPress={() => this.subtracao()}><Text style={styles.textoBotao}>-</Text></Pressable>

 
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