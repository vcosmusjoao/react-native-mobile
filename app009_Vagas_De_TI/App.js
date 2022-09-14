import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Pessoa from './src/Pessoa';
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, nome: 'Desenvolvedor Backend', salario: 3200, descricao:" TESTE TESTE TESTE", email: 'joseffe@gmail.com'},
        {id: 2, nome: 'Engneheiro de dados', salario: 1700, descricao:"TESTE TESTE TESTE", email: 'joao@gmail.com'},
        {id: 3, nome: 'Engenheiro de Software', salario: 5800, descricao:"TESTE TESTE TESTE",email: 'maria@gmail.com'},
        {id: 4, nome: 'Product Management', salario: 4200, descricao:"TESTE TESTE TESTE",email: 'joaquim@gmail.com'},
        {id: 5, nome: 'Product Owner', salario: 3600, descricao:"TESTE TESTE TESTE", email: 'paulo@gmail.com'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
           <Text style={styles.titulo}>Vagas</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Pessoa data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1
  },
  titulo:{
    color: '#F0F',
    fontSize: 35,
    marginTop:45,
    textAlign: 'center',
  },
})
 
export default App;
 
 
